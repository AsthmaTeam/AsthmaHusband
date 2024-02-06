const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1188538951343018066",
    token: "0VZobrFgA84T1GDSkDhLSc0i_uA5pYKwLRrcvMpgVuSZ2rzOsIMd2NkrAWUvXpUtxFkW",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 