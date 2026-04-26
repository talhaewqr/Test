const fs = require('fs');
const path = require('path');

const SETTINGS_DIR = './database';
const ANTIDELETE_FILE = path.join(SETTINGS_DIR, 'antidelete.json');

if (!fs.existsSync(SETTINGS_DIR)) {
    fs.mkdirSync(SETTINGS_DIR, { recursive: true });
}

function loadSettings() {
    try {
        if (fs.existsSync(ANTIDELETE_FILE)) {
            return JSON.parse(fs.readFileSync(ANTIDELETE_FILE, 'utf8'));
        }
    } catch (e) {}
    return {};
}

function saveSettings(settings) {
    try {
        fs.writeFileSync(ANTIDELETE_FILE, JSON.stringify(settings, null, 2));
    } catch (e) {}
}

function isAntiDeleteEnabled(chatId) {
    const settings = loadSettings();
    return settings[chatId] === true;
}

function setAntiDeleteEnabled(chatId, status) {
    const settings = loadSettings();
    settings[chatId] = status;
    saveSettings(settings);
}

module.exports = {
    pattern: "antidelete",
    alias: ["ad", "antidel"],
    desc: "Toggle anti-delete for this chat (DM or Group)",
    category: "owner",
    react: "🛡️",
    use: ".antidelete on/off",
    filename: __filename,

    execute: async (conn, message, m, { q, reply, from, sender, isCreator }) => {
        try {
            if (!isCreator) return reply("🔒 Owner only command!");

            const currentStatus = isAntiDeleteEnabled(from);

            if (!q) {
                return reply(
                    `╭━━〔 🛡️ ANTI-DELETE STATUS 〕━━┈⊷
┃
┃ 📌 Chat: ${from.split('@')[0]}
┃ 📡 Status: ${currentStatus ? '✅ ON' : '❌ OFF'}
┃
┃ 📝 Usage:
┃ .antidelete on  - Enable anti-delete for THIS chat
┃ .antidelete off - Disable anti-delete for THIS chat
┃
┃ 💡 Deleted messages will be forwarded to owner
┃
╰━━━━━━━━━━━━━━━━━━━━━┈⊷`
                );
            }

            if (q.toLowerCase() === "on") {
                setAntiDeleteEnabled(from, true);
                await conn.sendMessage(from, { react: { text: "✅", key: message.key } });
                return reply(`🛡️ Anti-delete ENABLED for this chat!\n\n_Deleted messages will be captured._`);
            }
            
            if (q.toLowerCase() === "off") {
                setAntiDeleteEnabled(from, false);
                await conn.sendMessage(from, { react: { text: "❌", key: message.key } });
                return reply(`🛡️ Anti-delete DISABLED for this chat!\n\n_Deleted messages will NOT be captured._`);
            }
            
            return reply(`⚙️ Usage: .antidelete on or .antidelete off`);

        } catch (e) {
            console.error("AntiDelete command error:", e);
            reply("⚠️ Failed to toggle anti-delete.");
        }
    }
};