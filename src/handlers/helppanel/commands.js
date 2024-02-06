const Discord = require('discord.js');

module.exports = async (client) => {
    const fields = [
        {
            name: `📺┆Aktywności`,
            value: `\`/activities\``,
            inline: true
        },
        {
            name: `🚫┆AFK`,
            value: `\`/afk help\``,
            inline: true
        },
        {
            name: `📣┆Ogłoszenie`,
            value: `\`/announcement help\``,
            inline: true
        },
        {
            name: `👮‍♂️┆Auto mod`,
            value: `\`/automod help\``,
            inline: true
        },
        {
            name: `⚙️┆Konfiguracja (Auto)`,
            value: `\`/autosetup help\``,
            inline: true
        },
        {
            name: `🎂┆Urodziny`,
            value: `\`/birthdays help\``,
            inline: true
        },
        {
            name: `🤖┆Bot`,
            value: `\`/bot help\``,
            inline: true
        },
        {
            name: `🎰┆Kasyno/Ekonomia`,
            value: `\`/casino help\``,
            inline: true
        },
        {
            name: `⚙┆Konfiguracja (Bot)`,
            value: `\`/config help\``,
            inline: true
        },
        {
            name: `💻┆Własne Komendy`,
            value: `\`/custom-commands help\``,
            inline: true
        },
        {
            name: `💳┆Dcredits`,
            value: `\`/dcredits help\``,
            inline: true
        },
        {
            name: `💰┆Ekonomia`,
            value: `\`/economy help\``,
            inline: true
        },
        {
            name: `👪┆Rodzina`,
            value: `\`/family help\``,
            inline: true
        },
        {
            name: `😂┆Zabawa`,
            value: `\`/fun help\``,
            inline: true
        },
        {
            name: `🎮┆Gry`,
            value: `\`/games help\``,
            inline: true
        },
        {
            name: `🥳┆Giveaway`,
            value: `\`/giveaway help\``,
            inline: true
        },
        {
            name: `⚙️┆Konfiguracja Serwera`,
            value: `\`/guild help\``,
            inline: true
        },
        {
            name: `🖼┆Zdjęcia`,
            value: `\`/images help\``,
            inline: true
        },
        {
            name: `📨┆Zaproszenie`,
            value: `\`/invites help\``,
            inline: true
        },
        {
            name: `🆙┆Poziomy`,
            value: `\`/levels help\``,
            inline: true
        },
        {
            name: `💬┆Wiadomości`,
            value: `\`/messages help\``,
            inline: true
        },
        {
            name: `👔┆Moderacja`,
            value: `\`/moderation help\``,
            inline: true
        },
        {
            name: `🎶┆Muzyka`,
            value: `\`/music help\``,
            inline: true
        },
        {
            name: `📓┆Notatnik`,
            value: `\`/notepad help\``,
            inline: true
        },
        {
            name: `👤┆Profil`,
            value: `\`/profile help\``,
            inline: true
        },
        {
            name: `📻┆Radio`,
            value: `\`/radio help\``,
            inline: true
        },
        {
            name: `😛┆Role Reakcyjne`,
            value: `\`/reactionroles help\``,
            inline: true
        },
        {
            name: `🔍┆Szukaj`,
            value: `\`/search help\``,
            inline: true
        },
        {
            name: `📊┆Statystyki`,
            value: `\`/serverstats help\``,
            inline: true
        },
        {
            name: `⚙️┆Konfiguracja (set up)`,
            value: `\`/setup help\``,
            inline: true
        },
        {
            name: `🎛┆Soundboard`,
            value: `\`/soundboard help\``,
            inline: true
        },
        {
            name: `🗨️┆Sticky messages`,
            value: `\`/stickymessages help\``,
            inline: true
        },
        {
            name: `💡┆Sugestie`,
            value: `\`/sugestions help\``,
            inline: true
        },
        {
            name: `🤝┆Dziekowania`,
            value: `\`/thanks help\``,
            inline: true
        },
        {
            name: `🎫┆Tickety`,
            value: `\`/tickets help\``,
            inline: true
        },
        {
            name: `⚒️┆Narzędzia`,
            value: `\`/tools help\``,
            inline: true
        },
        {
            name: `🔊┆Głos`,
            value: `\`/voice help\``,
            inline: true
        },
    ];

    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "commands-Bothelp") {
                interaction.deferUpdate();
                let page = 1;

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('helpPrev')
                            .setEmoji('⬅️')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setCustomId('helpNext')
                            .setEmoji('➡️')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setLabel("Invite")
                            .setURL(client.config.discord.botInvite)
                            .setStyle(Discord.ButtonStyle.Link),

                        new Discord.ButtonBuilder()
                            .setLabel("Support server")
                            .setURL(client.config.discord.serverInvite)
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-helppanel')
                            .setPlaceholder('❌┆ Nic nie zostało wybrane.')
                            .addOptions([
                                {
                                    label: `Komendy`,
                                    description: `Pokaż komendy bota.`,
                                    emoji: "💻",
                                    value: "commands-Bothelp",
                                },
                                {
                                    label: `Zaproś`,
                                    description: `Zaproś bota do swojego serwera!`,
                                    emoji: "📨",
                                    value: "invite-Bothelp",
                                },
                                {
                                    label: `DontOpenMe`,
                                    description: `Ta kategoria jest nieprzygotowana.`,
                                    emoji: "❌",
                                    value: "support-Bothelp",
                                },
                                {
                                    label: `Zmiany`,
                                    description: `Pokazuje Zmiany Bota`,
                                    emoji: "📃",
                                    value: "changelogs-Bothelp",
                                },
                            ]),
                    );

                client.embed({
                    title: `❓・Help panel`,
                    desc: `View all command categories in the bot here! \n\n[AsthmaTeam](https://replit.com/team/AsthmaTeam) | [Invite](https://discord.com/api/oauth2/authorize?client_id=1081595102809571458&permissions=8&scope=bot)`,
                    image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
                    fields: fields.slice(0, 24),
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message).then(msg => {
                    const filter = i => i.user.id === interaction.user.id;

                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 100000 });

                    collector.on('collect', async i => {
                        if (i.customId == "helpNext") {
                            if (page == 1) {
                                client.embed({
                                    title: `❓・Help panel`,
                                    desc: `View all command categories in the bot here! \n\n[AsthmaTeam](https://replit.com/team/AsthmaTeam) | [Invite](https://discord.com/api/oauth2/authorize?client_id=1081595102809571458&permissions=8&scope=bot)`,
                                    fields: fields.slice(25, 49),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page += 1;
                            }
                        }

                        else if (i.customId == "helpPrev") {
                            if (page == 2) {
                                client.embed({
                                    title: `❓・Help panel`,
                                    desc: `View all command categories in the bot here! \n\n[AsthmaTeam](https://replit.com/team/AsthmaTeam) | [Invite](https://discord.com/api/oauth2/authorize?client_id=1081595102809571458&permissions=8&scope=bot)`,
                                    fields: fields.slice(0, 24),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page -= 1;
                            }
                        }
                    });
                })
            }
        }
    }).setMaxListeners(0);
}

 