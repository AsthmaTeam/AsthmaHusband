const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "community-linkspanel") {
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
                            .setLabel("Community Server")
                            .setURL("https://discord.gg/QDh2Vqm4Ab")
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                client.embed({
                    title: `🌍・Community Server`,
                    desc: `Talk and play games in the comunity server!`,
                    image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
                    url: client.config.discord.serverInvite,
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    })
}

 