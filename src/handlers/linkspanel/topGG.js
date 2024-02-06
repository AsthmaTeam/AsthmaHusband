const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "top.gg-linkspanel") {
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
                            .setLabel("Replit Page")
                            .setURL("https://replit.com/@AsthmaTeam")
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                client.embed({
                    title: `🫁・Replit page`,
                    desc: `Click the button below to go to the Replit website`,
                    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Freplit.com%2Fcommunity%2Flearn&psig=AOvVaw3AqFc_zeIhpaiQXJ5bYMrB&ust=1703538461498000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjUnbz9qIMDFQAAAAAdAAAAABAL",
                    url: client.config.discord.serverInvite,
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    })
}

