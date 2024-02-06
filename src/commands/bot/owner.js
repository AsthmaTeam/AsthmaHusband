const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Odklejka`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `podklejka#0`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Asthma Team`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[AsthmaTeam](https://replit.com/@AsthmaTeam)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 