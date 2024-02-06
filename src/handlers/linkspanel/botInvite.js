const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "invite-linkspanel") {
                interaction.deferUpdate();

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-linkspanel')
                            .setPlaceholder('❌┆Nothing selected')
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

                let row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setLabel("Add me!")
                            .setURL("https://discord.com/api/oauth2/authorize?client_id=1180563331027832872&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2FkXFkwphDfw&scope=bot+identify")
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                client.embed({
                    title: `📨・Bot Invite`,
                    desc: `Make your server even better with Bot!`,
                    image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
                    url: client.config.discord.serverInvite,
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    })
}

 