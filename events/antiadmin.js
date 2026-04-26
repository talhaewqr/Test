// events/antiadmin.js
const fs = require('fs');
const path = require('path');

const SETTINGS_DIR = './database';
const ANTIADMIN_FILE = path.join(SETTINGS_DIR, 'antiadmin.json');

if (!fs.existsSync(SETTINGS_DIR)) {
    fs.mkdirSync(SETTINGS_DIR, { recursive: true });
}

function isAntiAdminEnabled(groupId) {
    try {
        if (fs.existsSync(ANTIADMIN_FILE)) {
            const settings = JSON.parse(fs.readFileSync(ANTIADMIN_FILE, 'utf8'));
            return settings[groupId] === true;
        }
    } catch (e) {}
    return false;
}

// Track recent actions to prevent loops
const recentActions = new Map();

async function handlePromoteDemote(conn, update) {
    try {
        const { id, participants, action } = update;
        
        // Check if anti-admin is enabled
        if (!isAntiAdminEnabled(id)) return;
        
        // Check for promote or demote
        if (action !== 'promote' && action !== 'demote') return;
        
        // Get group info
        const metadata = await conn.groupMetadata(id);
        const groupName = metadata.subject;
        const botJid = conn.user.id;
        
        // Check if bot is admin
        const botIsAdmin = metadata.participants.some(p => p.id === botJid && (p.admin === 'admin' || p.admin === 'superadmin'));
        
        if (!botIsAdmin) {
            console.log(`AntiAdmin: Bot not admin in ${groupName}`);
            return;
        }
        
        // Get current admins before change
        const currentAdmins = metadata.participants.filter(p => p.admin).map(p => p.id);
        
        for (const participant of participants) {
            const actionKey = `${id}_${participant}_${action}`;
            
            // Prevent loop
            if (recentActions.has(actionKey)) continue;
            recentActions.set(actionKey, true);
            setTimeout(() => recentActions.delete(actionKey), 3000);
            
            const actionName = action === 'promote' ? 'PROMOTE' : 'DEMOTE';
            const reverseAction = action === 'promote' ? 'demote' : 'promote';
            
            await new Promise(resolve => setTimeout(resolve, 500));
            
            try {
                // Reverse the action
                await conn.groupParticipantsUpdate(id, [participant], reverseAction);
                
                // Send warning
                const warningMsg = `🛡️ *ANTI-ADMIN PROTECTION!*

⚠️ Unauthorized ${actionName} attempt detected!
👤 Target: @${participant.split('@')[0]}
❌ Action has been REVERSED!

_Only group owner can change admin roles._`;
                
                await conn.sendMessage(id, {
                    text: warningMsg,
                    mentions: [participant]
                });
                
                console.log(`AntiAdmin: Reversed ${action} for ${participant} in ${groupName}`);
                
            } catch (err) {
                console.error(`AntiAdmin reverse ${action} error:`, err);
            }
        }
        
    } catch (err) {
        console.error("AntiAdmin handler error:", err);
    }
}

module.exports = { handlePromoteDemote };