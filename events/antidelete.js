const fs = require('fs');
const path = require('path');

const SETTINGS_DIR = './database';
const ANTIDELETE_FILE = path.join(SETTINGS_DIR, 'antidelete.json');

// Ensure database folder exists
if (!fs.existsSync(SETTINGS_DIR)) {
    fs.mkdirSync(SETTINGS_DIR, { recursive: true });
}

// Check if anti-delete is enabled for this chat
function isAntiDeleteEnabled(chatId) {
    try {
        if (fs.existsSync(ANTIDELETE_FILE)) {
            const settings = JSON.parse(fs.readFileSync(ANTIDELETE_FILE, 'utf8'));
            return settings[chatId] === true;
        }
    } catch (e) {}
    return false;
}

// Store deleted messages temporarily
const deletedMessages = new Map();

// Get message type
function getMessageType(msg) {
    if (msg.conversation) return 'text';
    if (msg.extendedTextMessage) return 'text';
    if (msg.imageMessage) return 'image';
    if (msg.videoMessage) return 'video';
    if (msg.audioMessage) return 'audio';
    if (msg.documentMessage) return 'document';
    if (msg.stickerMessage) return 'sticker';
    return 'unknown';
}

// Main function - stores messages when they arrive
async function antiDeleteHandler(conn, message) {
    try {
        const from = message.key.remoteJid;
        
        // Check if anti-delete is enabled for this chat
        if (!isAntiDeleteEnabled(from)) return;
        
        // Store message (only if not from bot)
        if (message.message && !message.key.fromMe) {
            const msgId = message.key.id;
            
            // Don't store if already exists
            if (deletedMessages.has(msgId)) return;
            
            const msgData = {
                id: msgId,
                from: from,
                sender: message.key.participant || message.key.remoteJid,
                message: message.message,
                timestamp: Date.now(),
                type: getMessageType(message.message)
            };
            
            deletedMessages.set(msgId, msgData);
            
            // Auto-clean after 5 minutes (if not deleted)
            setTimeout(() => {
                if (deletedMessages.has(msgId)) {
                    deletedMessages.delete(msgId);
                }
            }, 5 * 60 * 1000);
        }
    } catch (err) {
        console.error("AntiDelete store error:", err);
    }
}

// Get stored message by ID
function getDeletedMessage(msgId) {
    return deletedMessages.get(msgId);
}

// Export functions
module.exports = {
    antiDeleteHandler,
    getDeletedMessage,
    isAntiDeleteEnabled
};