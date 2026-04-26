// events/viewonce.js
async function handleViewOnce(conn, message) {
    try {
        const from = message.key.remoteJid;
        
        // Check for view once message
        let viewOnceMsg = null;
        let mediaType = null;
        let caption = '';
        
        if (message.message?.viewOnceMessage) {
            viewOnceMsg = message.message.viewOnceMessage.message;
        } else if (message.message?.viewOnceMessageV2) {
            viewOnceMsg = message.message.viewOnceMessageV2.message;
        } else if (message.message?.viewOnceMessageV2Extension) {
            viewOnceMsg = message.message.viewOnceMessageV2Extension.message;
        }
        
        if (!viewOnceMsg) return;
        
        // Get media type
        if (viewOnceMsg.imageMessage) {
            mediaType = 'image';
            caption = viewOnceMsg.imageMessage.caption || '';
        } else if (viewOnceMsg.videoMessage) {
            mediaType = 'video';
            caption = viewOnceMsg.videoMessage.caption || '';
        } else if (viewOnceMsg.audioMessage) {
            mediaType = 'audio';
            caption = '';
        } else {
            return;
        }
        
        // Download media
        let mediaBuffer;
        try {
            const stream = await conn.downloadMediaMessage(message);
            mediaBuffer = stream;
        } catch (err) {
            console.error("ViewOnce download error:", err);
            return;
        }
        
        if (!mediaBuffer) return;
        
        const sender = message.key.participant || message.key.remoteJid;
        const senderName = message.pushName || sender.split('@')[0];
        const chatId = from.split('@')[0];
        
        // Get owner number
        let owners = [];
        if (process.env.OWNER_NUMBER) {
            owners = process.env.OWNER_NUMBER.split(",").map(num => num.trim());
        }
        const ownerJid = owners[0] + '@s.whatsapp.net';
        
        if (!ownerJid) return;
        
        // Send notification to owner
        const report = `
╭━━〔 👁️ VIEW ONCE SAVED 〕━━┈⊷
┃
┃ 📌 From Chat: ${chatId}
┃ 👤 Sender: ${senderName}
┃ 📎 Type: ${mediaType.toUpperCase()}
┃ 🕒 Time: ${new Date().toLocaleString()}
┃
╰━━━━━━━━━━━━━━━━━━━━━┈⊷`;
        
        await conn.sendMessage(ownerJid, { text: report });
        
        // Send media to owner
        if (mediaType === 'image') {
            await conn.sendMessage(ownerJid, {
                image: mediaBuffer,
                caption: caption || `View Once Image from ${senderName}`
            });
        } else if (mediaType === 'video') {
            await conn.sendMessage(ownerJid, {
                video: mediaBuffer,
                caption: caption || `View Once Video from ${senderName}`
            });
        } else if (mediaType === 'audio') {
            await conn.sendMessage(ownerJid, {
                audio: mediaBuffer,
                mimetype: 'audio/mpeg',
                ptt: false
            });
        }
        
        console.log(`👁️ ViewOnce: Saved ${mediaType} from ${senderName} in ${chatId}`);
        
    } catch (err) {
        console.error("ViewOnce error:", err);
    }
}

module.exports = { handleViewOnce };