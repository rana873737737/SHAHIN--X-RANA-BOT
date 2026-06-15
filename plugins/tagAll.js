module.exports = {

    config: {

        name: 'tagall',

        aliases: ['all', 'mentionall'],

        permission: 3,

        prefix: true,

        description: 'Mentions all members of a group with stylish greetings.',

        categories: 'group',

        usages: [`${global.config.PREFIX}tagall [optional message]`],

        credit: 'Developed by Mohammad Nayan'

    },

    start: async ({ event, api, args }) => {

        const { threadId, message } = event;

        const groupMetadata = await api.groupMetadata(threadId);

        const participants = groupMetadata.participants || [];

        if (participants.length === 0) {

            return await api.sendMessage(threadId, {

                text: '⚠️ No participants found in this group.'

            });

        }

        const greetings = [

            "🚨 𝐀ᴛᴛᴇɴᴛɪᴏɴ 𝐄ᴠᴇʀʏᴏɴᴇ 🚨",

            "🌷 𝐇ɪ 𝐀ʟʟ 𝐅ʀɪᴇɴᴅs 🌷",

            "🔔 𝐆ʀᴏᴜᴘ 𝐌ᴇᴍʙᴇʀs 𝐏ʟᴇᴀsᴇ 𝐂ʜᴇᴄᴋ 🔔",

            "✨ 𝐇ᴇʟʟᴏ 𝐁ᴇᴀᴜᴛɪғᴜʟ 𝐏ᴇᴏᴘʟᴇ ✨",

            "✨ 𝐄ᴠᴇʀʏᴏɴᴇ 𝐂ᴏᴍᴇ 𝐇ᴇʀᴇ ✨",

            "𝐈ᴍᴘᴏʀᴛᴀɴᴛ 𝐍ᴏᴛɪᴄᴇ 📌",

            "👑 𝐇ᴇʏ 𝐋ᴇɢᴇɴᴅs 👑",

            "🔥 𝐆ʀᴏᴜᴘ 𝐀ʟᴇʀᴛ 🔥",

            "🌙 𝐇ᴇʟʟᴏ 𝐒ᴛᴀʀs 🌙",

            "⚡ 𝐅ᴜɴ 𝐌ᴏᴅᴇ 𝐀ᴄᴛɪᴠᴀᴛᴇᴅ ⚡"

        ];

        let customMsg = args.join(' ');

        if (!customMsg) {

            customMsg = greetings[Math.floor(Math.random() * greetings.length)];

        }

        const emojis = [

            "❤‍🩹", "🎲", "🪄", "🎋", "🪇", "🍦", "🌟", "🍿",

            "🏳️‍🌈", "🚩", "🪸", "🍧", "⚡", "🎖️", "🍇", "🎀",

            "🪻", "♥️", "💀", "🔥", "🩵", "🎾", "🔪", "🪼"

        ];

        let mentionText = '';

        mentionText += `*▢ 𝐆ʀᴏᴜᴘ ✨ : ${groupMetadata.subject}*\n`;

        mentionText += `*▢ 𝐌ᴇᴍʙᴇʀs ✨ : ${participants.length}*\n`;

        mentionText += `*▢ 𝐌ᴇssᴀɢᴇ ✨ : ${customMsg}*\n\n`;

        mentionText += `╭┈─「 ɦเ αℓℓ ƒɾเεɳ∂ร 🥰 」┈❍\n`;

        let mentions = [];

        participants.forEach((participant) => {

            const emoji = emojis[Math.floor(Math.random() * emojis.length)];

            mentionText += `│${emoji} ᩧ𝆺ྀི𝅥 @${participant.id.split('@')[0]}\n`;

            mentions.push(participant.id);

        });

        mentionText += `╰────────────❍`;

        await api.sendMessage(

            threadId,

            {

                text: mentionText,

                mentions: mentions

            },

            { quoted: message }

        );

    }

};

