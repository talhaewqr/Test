const fs = require('fs');
const path = require('path');

const SETTINGS_DIR = './database';
const GOODBYE_FILE = path.join(SETTINGS_DIR, 'goodbye.json');

if (!fs.existsSync(SETTINGS_DIR)) {
    fs.mkdirSync(SETTINGS_DIR, { recursive: true });
}

function loadSettings() {
    try {
        if (fs.existsSync(GOODBYE_FILE)) {
            return JSON.parse(fs.readFileSync(GOODBYE_FILE, 'utf8'));
        }
    } catch (e) {}
    return {};
}

function saveSettings(settings) {
    try {
        fs.writeFileSync(GOODBYE_FILE, JSON.stringify(settings, null, 2));
    } catch (e) {}
}

function isGoodbyeEnabled(groupId) {
    const settings = loadSettings();
    return settings[groupId] === true;
}

function setGoodbyeEnabled(groupId, status) {
    const settings = loadSettings();
    settings[groupId] = status;
    saveSettings(settings);
}

module.exports = {
    pattern: "goodbye",
    desc: "Toggle goodbye messages for this group",
    category: "group",
    react: "👋",
    use: ".goodbye on/off",
    filename: __filename,

    execute: async (conn, message, m, { q, reply, from, isGroup, sender }) => {
        try {
            if (!isGroup) return reply("❌ This command only works in groups!");

            const jidToBase = (jid) => String(jid).split("@")[0].split(":")[0];
            const senderBase = jidToBase(sender);
            const botBase = jidToBase(conn?.user?.id || "");

            let owners = [];
            if (process.env.OWNER_NUMBER) {
                owners = process.env.OWNER_NUMBER.split(",").map(num => num.trim());
            }
            const isOwner = botBase === senderBase || owners.includes(senderBase);

            let isAdmin = false;
            try {
                const metadata = await conn.groupMetadata(from);
                const participant = metadata.participants.find(p => jidToBase(p.id) === senderBase);
                isAdmin = participant?.admin === "admin" || participant?.admin === "superadmin";
            } catch {
                return reply("❌ Failed to get group information.");
            }

            if (!isOwner && !isAdmin) {
                return reply("❌ Only group admins or owner can toggle goodbye messages!");
            }

            const currentStatus = isGoodbyeEnabled(from);

            if (!q) {
                return reply(
                    `╭━━〔 👋 GOODBYE STATUS 〕━━┈⊷
┃
┃ 📌 Group: ${from.split('@')[0]}
┃ 📡 Status: ${currentStatus ? '✅ ON' : '❌ OFF'}
┃
┃ 📝 Usage:
┃ .goodbye on  - Enable goodbye for THIS group
┃ .goodbye off - Disable goodbye for THIS group
┃
╰━━━━━━━━━━━━━━━━━━━━━┈⊷`
                );
            }

            if (q.toLowerCase() === "on") {
                setGoodbyeEnabled(from, true);
                await conn.sendMessage(from, { react: { text: "✅", key: message.key } });
                return reply(`✅ Goodbye messages ENABLED for this group!\n\n_Other groups are not affected._`);
            }
            
            if (q.toLowerCase() === "off") {
                setGoodbyeEnabled(from, false);
                await conn.sendMessage(from, { react: { text: "❌", key: message.key } });
                return reply(`❌ Goodbye messages DISABLED for this group!\n\n_Other groups are not affected._`);
            }
            
            return reply(`⚙️ Usage: .goodbye on or .goodbye off`);

        } catch (e) {
            console.error("Goodbye command error:", e);
            reply("⚠️ Failed to toggle goodbye messages.");
        }
    }
};