// plugins/antiadmin.js
const fs = require('fs');
const path = require('path');

const SETTINGS_DIR = './database';
const ANTIADMIN_FILE = path.join(SETTINGS_DIR, 'antiadmin.json');

if (!fs.existsSync(SETTINGS_DIR)) {
    fs.mkdirSync(SETTINGS_DIR, { recursive: true });
}

function loadSettings() {
    try {
        if (fs.existsSync(ANTIADMIN_FILE)) {
            return JSON.parse(fs.readFileSync(ANTIADMIN_FILE, 'utf8'));
        }
    } catch (e) {}
    return {};
}

function saveSettings(settings) {
    try {
        fs.writeFileSync(ANTIADMIN_FILE, JSON.stringify(settings, null, 2));
    } catch (e) {}
}

function isAntiAdminEnabled(groupId) {
    const settings = loadSettings();
    return settings[groupId] === true;
}

function setAntiAdminEnabled(groupId, status) {
    const settings = loadSettings();
    settings[groupId] = status;
    saveSettings(settings);
}

module.exports = {
    pattern: "antiadmin",
    alias: ["antipromote", "antidemote", "protectadmin"],
    desc: "Prevent unauthorized promote/demote actions",
    category: "group",
    react: "🛡️",
    use: ".antiadmin on/off",
    filename: __filename,

    execute: async (conn, message, m, { q, reply, from, isGroup, isCreator, isAdmins }) => {
        try {
            if (!isGroup) return reply("❌ This command only works in groups!");
            if (!isCreator && !isAdmins) return reply("❌ Only group admins or owner can use this!");

            const action = q?.toLowerCase();

            if (!action || (action !== 'on' && action !== 'off')) {
                const currentStatus = isAntiAdminEnabled(from);
                return reply(
                    `╭━━〔 🛡️ ANTI-ADMIN STATUS 〕━━┈⊷
┃
┃ 📌 Group: ${from.split('@')[0]}
┃ 📡 Status: ${currentStatus ? '✅ ON' : '❌ OFF'}
┃
┃ 📝 Usage:
┃ .antiadmin on  - Protect admins (both promote & demote)
┃ .antiadmin off - Disable protection
┃
┃ 💡 When ON:
┃ • Anyone trying to promote someone will be blocked
┃ • Anyone trying to demote an admin will be blocked
┃ • Owner can still manage admins
┃
╰━━━━━━━━━━━━━━━━━━━━━┈⊷`
                );
            }

            if (action === 'on') {
                setAntiAdminEnabled(from, true);
                await conn.sendMessage(from, { react: { text: "✅", key: message.key } });
                return reply(`🛡️ ANTI-ADMIN ENABLED for this group!

✅ Protect PROMOTE actions
✅ Protect DEMOTE actions
👑 Only group owner can change admin roles.`);
            }

            if (action === 'off') {
                setAntiAdminEnabled(from, false);
                await conn.sendMessage(from, { react: { text: "❌", key: message.key } });
                return reply(`🛡️ ANTI-ADMIN DISABLED for this group!`);
            }

        } catch (e) {
            console.error("AntiAdmin command error:", e);
            reply("⚠️ Failed to toggle anti-admin.");
        }
    }
};