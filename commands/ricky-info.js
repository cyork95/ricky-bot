const Discord = require('discord.js');

module.exports = {
	name: 'ricky-info',
	description: 'Bot Info',
	guildOnly: true,
	execute(message) {
		const serverInfoEmbed = new Discord.MessageEmbed()
			.setTitle('RickyBot')
			.setDescription('Joke Trailer Park Boys bot created for CoYo\'s Discord Servers!')
			.setFooter('Created by CoYoFroYo (2021)');
		message.channel.send(serverInfoEmbed);
	},
};