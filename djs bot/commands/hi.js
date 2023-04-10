const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('hi')
        .setDescription('replies with hi {user}'),
    async execute(interaction) {
        await interaction.reply('Hi there! @${interaction.user.username}.');
    },
};