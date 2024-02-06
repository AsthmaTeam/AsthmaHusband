// Importuj dotenv i załaduj zmienne środowiskowe z pliku .env
require('dotenv').config();

const Discord = require('discord.js');
const axios = require('axios');
const chalk = require('chalk');
const express = require('express');
const path = require('path');

const app = express();

// Generowanie tekstu online z losowym jasnoniebieskim kolorem dla każdej litery
const letters = "Online".split('').map((letter, index) => {
  const color = MaintenanceColor(); // kolor
  return `<span class="letter" style="color: ${color}">${letter}</span>`;
}).join('');

// Funkcja zwracająca losowy JASNONIEBIESKI kolor
function MaintenanceColor() {
  const colors = ['#ff69b4', '#98fb98', '#87ceeb', '#ff8c00', '#dda0dd', '#00ced1']; // Dostosuj kolory według potrzeb
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}




// Poniżej funkcja generująca tekst online - tak jak wymagałaś
function generateOnlineText() {
  return letters;
}

app.get('/', (req, res) => {
  const onlineText = generateOnlineText();
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AsthmaAPI Status</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
            background-color: #000; /* Tło czarne */
          }

          #consoleContent {
            flex: 1;
            overflow-y: auto;
            padding: 10px;
            position: relative;
          }

          #consoleHeader {
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: #2c3e50;
            color: #ecf0f1;
            padding: 10px;
          }

          #status {
            font-size: 6rem;
            font-weight: bold;
            color: #ff69b4;
            display: flex;
          }

          .letter {
            margin-right: 20px;
          }

          #smallText {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 2rem;
            font-weight: bold;
            color: #fff;
          }

          #iframeContainer {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 50%; /* Szerokość na połowę ekranu */
            height: 50vh; /* Wysokość na połowę ekranu */
          }

          #iframeContainer iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
        </style>
      </head>
      <body>
        <div id="consoleContent">
          <p id="smallText">[MONITOR] AsthmaAPI - Online.</p>
          <p id="status">${onlineText}</p>
        </div>
        <div id="iframeContainer">
          <!-- Tutaj umieść treść ze strony https://panel.sillydev.co.uk/server/930d6e3d/console -->
          <iframe src="https://asthmateam.betteruptime.com"></iframe>
        </div>
        <div id="consoleHeader">
          Status page
        </div>
      </body>
    </html>
  `;
  res.send(html);
});

const PORT = process.env.PORT || 6673;
app.listen(PORT, () => {
  console.log(chalk.blue(chalk.bold(`WWW`)), (chalk.white(`>>`)), chalk.green(`Server started on`), (chalk.red(`PORT 6785`)))
});

console.log(chalk.black.bgWhite(`AsthmaAPI CONNECTED!`));


// Usuń ponowną deklarację axios, jeśli już masz ten import gdzieś indziej
const { version } = require('.././package.json');
axios.get('https://api.github.com/repos/CorwinDev/Discord-Bot/releases/latest').then(res => {
  if (res.data.tag_name !== version) {
    console.log(chalk.black.bgWhite(`AsthmaAPI Error: Your bot is not up to date! Please update to the latest version!`, version + ' -> ' + res.data.tag_name));
  }
}).catch(err => {
  console.log(chalk.black.bgWhite(`AsthmaAPI Error: Failed to check version.`));
});

// Reszta kodu Discord Bota...
// Reszta kodu bez zmian...
const webhook = require("./config/webhooks.json");
const config = require("./config/bot.js");
const webHooksArray = ['startLogs', 'shardLogs', 'errorLogs', 'dmLogs', 'voiceLogs', 'serverLogs', 'serverLogs2', 'commandLogs', 'consoleLogs', 'warnLogs', 'voiceErrorLogs', 'creditLogs', 'evalLogs', 'interactionLogs'];

if (process.env.WEBHOOK_ID && process.env.WEBHOOK_TOKEN) {
  for (const webhookName of webHooksArray) {
    webhook[webhookName].id = process.env.WEBHOOK_ID;
    webhook[webhookName].token = process.env.WEBHOOK_TOKEN;
  }
}

const startLogs = new Discord.WebhookClient({
  id: webhook.startLogs.id,
  token: webhook.startLogs.token,
});

const shardLogs = new Discord.WebhookClient({
  id: webhook.shardLogs.id,
  token: webhook.shardLogs.token,
});

const manager = new Discord.ShardingManager('./src/bot.js', {
  totalShards: '',
  token: process.env.DISCORD_TOKEN,
  respawn: true
});

if (process.env.TOPGG_TOKEN) {
  const { AutoPoster } = require('topgg-autoposter');
  AutoPoster(process.env.TOPGG_TOKEN, manager);
}

console.clear();
console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), (chalk.green(`Starting up`)), (chalk.white(`...`)))
console.log(`\u001b[0m`)
console.log(chalk.red(`© Asthma Team | 2018 - ${new Date().getFullYear()}`))
console.log(chalk.red(`All rights reserved`))
console.log(`\u001b[0m`)
console.log(`\u001b[0m`)
console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.red(`Version ${require(`${process.cwd()}/package.json`).version}`), (chalk.green(`loaded`)))
console.log(`\u001b[0m`);

manager.on('shardCreate', shard => {
  let embed = new Discord.EmbedBuilder()
    .setTitle(`🆙・Launching shard`)
    .setDescription(`A shard has just been launched`)
    .setFields([
      {
        name: "🆔┆ID",
        value: `${shard.id + 1}/${manager.totalShards}`,
        inline: true
      },
      {
        name: `📃┆State`,
        value: `Starting up...`,
        inline: true
      }
    ])
    .setColor(config.colors.normal)
  startLogs.send({
    username: 'Bot Logs',
    embeds: [embed],
  });

  console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), (chalk.green(`Starting`)), chalk.red(`Shard #${shard.id + 1}`), (chalk.white(`...`)))
  console.log(`\u001b[0m`);
  console.log(chalk.black.bgWhite(`AsthmaAPI CONNECTED!`));
  
  shard.on("death", (process) => {
    const embed = new Discord.EmbedBuilder()
      .setTitle(`🚨・Closing shard ${shard.id + 1}/${manager.totalShards} unexpectedly`)
      .setFields([
        {
          name: "🆔┆ID",
          value: `${shard.id + 1}/${manager.totalShards}`,
        },
      ])
      .setColor(config.colors.normal)
    shardLogs.send({
      username: 'Bot Logs',
      embeds: [embed]
    });

    if (process.exitCode === null) {
      const embed = new Discord.EmbedBuilder()
        .setTitle(`🚨・Shard ${shard.id + 1}/${manager.totalShards} exited with NULL error code!`)
        .setFields([
          {
            name: "PID",
            value: `\`${process.pid}\``,
          },
          {
            name: "Exit code",
            value: `\`${process.exitCode}\``,
          }
        ])
        .setColor(config.colors.normal)
      shardLogs.send({
        username: 'Bot Logs',
        embeds: [embed]
      });
    }
  });

  shard.on("shardDisconnect", (event) => {
    const embed = new Discord.EmbedBuilder()
      .setTitle(`🚨・Shard ${shard.id + 1}/${manager.totalShards} disconnected`)
      .setDescription("Dumping socket close event...")
      .setColor(config.colors.normal)
    shardLogs.send({
      username: 'Bot Logs',
      embeds: [embed],
    });
  });

  shard.on("shardReconnecting", () => {
    const embed = new Discord.EmbedBuilder()
      .setTitle(`🚨・Reconnecting shard ${shard.id + 1}/${manager.totalShards}`)
      .setColor(config.colors.normal)
    shardLogs.send({
      username: 'Bot Logs',
      embeds: [embed],
    });
  });
});

manager.spawn();

const consoleLogs = new Discord.WebhookClient({
  id: webhook.consoleLogs.id,
  token: webhook.consoleLogs.token,
});

const warnLogs = new Discord.WebhookClient({
  id: webhook.warnLogs.id,
  token: webhook.warnLogs.token,
});

process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
  if (error) if (error.length > 950) error = error.slice(0, 950) + '... view console for details';
  if (error.stack) if (error.stack.length > 950) error.stack = error.stack.slice(0, 950) + '... view console for details';
  if (!error.stack) return
  const embed = new Discord.EmbedBuilder()
    .setTitle(`🚨・Unhandled promise rejection`)
    .addFields([
      {
        name: "Error",
        value: error ? Discord.codeBlock(error) : "No error",
      },
      {
        name: "Stack error",
        value: error.stack ? Discord.codeBlock(error.stack) : "No stack error",
      }
    ])
  consoleLogs.send({
    username: 'Bot Logs',
    embeds: [embed],
  }).catch(() => {
    console.log('Error sending unhandled promise rejection to webhook')
    console.log(error)
  })
});

process.on('warning', warn => {
  console.warn("Warning:", warn);
  const embed = new Discord.EmbedBuilder()
    .setTitle(`🚨・New warning found`)
    .addFields([
      {
        name: `Warn`,
        value: `\`\`\`${warn}\`\`\``,
      },
    ])
  warnLogs.send({
    username: 'Bot Logs',
    embeds: [embed],
  }).catch(() => {
    console.log('Error sending warning to webhook')
    console.log(warn)
  })
});

// Strona logowania
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Obsługa logowania
app.post('/login', (req, res) => {
  const { password } = req.body;
  // Sprawdzenie hasła
  if (password === 'AsthmaAdmin') {
    res.send('Success');
  } else {
    res.send('Failure');
  }
});

// Strona czatu
app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

function isBotOnline() {
  // Tutaj możesz dodać logikę sprawdzającą, czy bot jest online
  // Na przykład, używając Discord.js, możesz sprawdzić, czy jakikolwiek shard jest online
  // return manager && manager.shards.size > 0 && manager.shards.some((shard) => shard && shard.status === 'online');
  return true; // Zwróć true dla celów testowych
}
