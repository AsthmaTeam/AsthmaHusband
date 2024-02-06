const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = async (client, interaction, args) => {

    fetch(
        `https://discord.com/api/bottoken?id=${interaction.user.id}`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {

            client.embed({
                title: `🤖・Bot token`,
                desc: ``,
                type: 'editreply',
            }, interaction);
        }).catch({})

}

 