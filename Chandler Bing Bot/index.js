const { Client, IntentsBitField } = require('discord.js');
const token = require('./config.json');
const chandler = new Client({ 
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

chandler.login(String(token))

// openssl s_client -connect wss://gateway.discord.gg/?v=10&encoding=json -servername wss://gateway.discord.gg/?v=10&encoding=json | tee server_certificate