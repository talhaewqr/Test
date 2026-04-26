const axios = require('axios');

module.exports = {
    pattern: "mode",
    alias: ["public", "private", "self"],
    desc: "Change bot mode (public/private)",
    category: "owner",
    react: "🔧",
    
    execute: async (conn, message, m, { from, reply, args, isCreator }) => {
        if (!isCreator) return reply("🔒 Owner only");

        const action = args[0]?.toLowerCase();
        const commandName = m.text?.split(' ')[0]?.replace('.', '') || '';

        // Private mode
        if (action === "private" || commandName === "private" || commandName === "self") {
            try {
                await axios.post('http://localhost:3000/api/setmode', { mode: 'private' });
                return reply(`╭━━〔 🔒 PRIVATE MODE 〕━━┈⊷
┃
┃ ✅ Bot is now in *PRIVATE* mode
┃
┃ 👑 Only owner can use commands
┃ 🚫 Other users cannot use bot
┃
╰━━━━━━━━━━━━━━━━━━━━━┈⊷`);
            } catch (err) {
                return reply(`❌ Error: ${err.message}`);
            }
        }
        
        // Public mode
        if (action === "public" || commandName === "public") {
            try {
                await axios.post('http://localhost:3000/api/setmode', { mode: 'public' });
                return reply(`╭━━〔 🌍 PUBLIC MODE 〕━━┈⊷
┃
┃ ✅ Bot is now in *PUBLIC* mode
┃
┃ 👥 Everyone can use commands
┃ ✨ All features available
┃
╰━━━━━━━━━━━━━━━━━━━━━┈⊷`);
            } catch (err) {
                return reply(`❌ Error: ${err.message}`);
            }
        }
        
        // Show current mode
        try {
            const { data } = await axios.get('http://localhost:3000/api/getmode');
            const modeEmoji = data.mode === "public" ? "🌍" : "🔒";
            return reply(`╭━━〔 ${modeEmoji} CURRENT MODE ${modeEmoji} 〕━━┈⊷
┃
┃ 📌 Mode: *${data.mode.toUpperCase()}*
┃
┃ 📝 Commands:
┃ .public - Change to public mode
┃ .private - Change to private mode
┃
╰━━━━━━━━━━━━━━━━━━━━━┈⊷`);
        } catch (err) {
            return reply(`❌ Error: ${err.message}`);
        }
    }
};