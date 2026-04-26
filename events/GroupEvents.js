// === groupevents.js ===
const { isJidGroup } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');

// Settings file path
const SETTINGS_DIR = './database';
const WELCOME_FILE = path.join(SETTINGS_DIR, 'welcome.json');
const GOODBYE_FILE = path.join(SETTINGS_DIR, 'goodbye.json');

// Ensure database folder exists
if (!fs.existsSync(SETTINGS_DIR)) {
    fs.mkdirSync(SETTINGS_DIR, { recursive: true });
}

// Load settings from file
function loadSettings(file) {
    try {
        if (fs.existsSync(file)) {
            return JSON.parse(fs.readFileSync(file, 'utf8'));
        }
    } catch (e) {}
    return {};
}

// Check if welcome is enabled for this group
function isWelcomeEnabled(groupId) {
    const settings = loadSettings(WELCOME_FILE);
    return settings[groupId] === true;
}

// Check if goodbye is enabled for this group
function isGoodbyeEnabled(groupId) {
    const settings = loadSettings(GOODBYE_FILE);
    return settings[groupId] === true;
}

const defaultProfilePics = [
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
];

// Newsletter context (for forwarded-style look)
const getContextInfo = (mentionedJids) => ({
    mentionedJid: mentionedJids,
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363418906972955@newsletter',
        newsletterName: "QADEER-XD MINI",
        serverMessageId: 200,
    },
});

module.exports = async (conn, update) => {
    try {
        const { id, participants, action } = update;
        if (!id || !isJidGroup(id) || !participants) return;

        const groupMetadata = await conn.groupMetadata(id);
        const groupName = groupMetadata.subject || "Group";
        const desc = groupMetadata.desc || "No Description available.";
        const groupMembersCount = groupMetadata.participants?.length || 0;
        const timestamp = new Date().toLocaleString();

        for (const participant of participants) {
            const userName = participant.split("@")[0];

            // Try to fetch profile picture
            let userPpUrl;
            try {
                userPpUrl = await conn.profilePictureUrl(participant, "image");
            } catch {
                userPpUrl = defaultProfilePics[Math.floor(Math.random() * defaultProfilePics.length)];
            }

            // === WELCOME - Check if enabled for this group ===
            if (action === "add" && isWelcomeEnabled(id)) {
                const welcomeText = `
╭───❖ 🎒 *WELCOME HOMIE* ❖───
│ 👋 Hey @${userName}!
│ 🏠 Welcome to: *${groupName}*
│ 🔢 Member #: *${groupMembersCount}*
│ 🕒 Joined: *${timestamp}*
│ 
│ 📝 Group Description:
│ ${desc}
│ 
╰❖ *_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ϙᴀᴅᴇᴇʀ-xᴅ - ᴍɪɴɪ_*❖─
                `.trim();

                await conn.sendMessage(id, {
                    image: { url: userPpUrl },
                    caption: welcomeText,
                    mentions: [participant],
                    contextInfo: getContextInfo([participant]),
                });
            }

            // === GOODBYE - Check if enabled for this group ===
            else if (action === "remove" && isGoodbyeEnabled(id)) {
                const goodbyeText = `
╭───❖ 😢 *GOODBYE* ❖───
│ 👋 Farewell @${userName}!
│ 🏠 You left: *${groupName}*
│ 🕒 Time: *${timestamp}*
│ 
╰❖ *_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ϙᴀᴅᴇᴇʀ-xᴅ - ᴍɪɴɪ_* ❖─
                `.trim();

                await conn.sendMessage(id, {
                    image: { url: userPpUrl },
                    caption: goodbyeText,
                    mentions: [participant],
                    contextInfo: getContextInfo([participant]),
                });
            }
        }
    } catch (err) {
        console.error("GroupEvents error:", err);
    }
};