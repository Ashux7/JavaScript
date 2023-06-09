const { Client, Events, GatewayIntentBits  } = require('discord.js');
const {token} = require('./config.json');

const client = new Client({intents:[GatewayIntentBits.Guilds]});

client.once(Events.ClientReady, bot => {
    console.log(`${bot.user.tag} is ready!`);
});

client.login(token)