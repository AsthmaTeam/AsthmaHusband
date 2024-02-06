const fetch = require("node-fetch");
const generator = require('generate-password');

module.exports = async (client, interaction, args) => {

  const password = generator.generate({
    length: 10,
    symbols: true,
    numbers: true
  });

  const user = interaction.options.getUser('user');

  if (!user) return client.errUsage({ usage: "hack [mention user]", type: 'editreply' }, interaction)

  function wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  client.embed({
    title: '❌・Error',
    desc: `**Error**:The hack on ${user} Failed.
    Never gonna give you up! 
    **[Jebanie twojego taty](https://dsc.gg/uranusplanet).**`,
    type: 'editreply'
  }, interaction).then(msg => {

    
                  }, interaction.user)

                }
              
            
          
        
      
    
  
