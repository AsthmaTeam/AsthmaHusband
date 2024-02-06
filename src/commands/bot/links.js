const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.StringSelectMenuBuilder()
                .setCustomId('Bot-linkspanel')
                .setPlaceholder('❌┆Not selected')
                .addOptions([
                    {
                        label: `Support server`,
                        description: `Join the suppport server`,
                        emoji: "❓",
                        value: "support-linkspanel",
                    },
                    {
                        label: `Add me!`,
                        description: `Add the bot.`,
                        emoji: "📨",
                        value: "invite-linkspanel",
                    },
                    {
                        label: `Community server`,
                        description: `AD`,
                        emoji: "🌍",
                        value: "community-linkspanel",
                    },
                    {
                        label: `Replit`,
                        description: `Our replit page.`,
                        emoji: "🫁",
                        value: "top.gg-linkspanel",
                    },
                ]),
        );

    client.embed({
        title: `🔗・Links`,
        desc: `Get access to all bot links! Select the link you need from the menu below.`,
        image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 