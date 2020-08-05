const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'embedalmog',
    description: "on some embed shit",
        execute(message, args){
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0000cc')
                .setTitle('From doug to Almog')
        .setURL('https://i.imgur.com/dya0Xzz.pngg')
        .setAuthor('Doug#4191', 'https://i.imgur.com/dya0Xzz.pngg', 'https://i.imgur.com/dya0Xzz.pngg')
        .setDescription('the pig raper')
        .setThumbnail('https://i.imgur.com/dya0Xzz.pngg')
        .addFields(
            { name: 'almog', value: '6969' },
            { name: '\u200B', value: '\u200B' },
            { name: '3', value: '69420', inline: true },
            { name: '+3', value: '69420', inline: true },
        )
        .addField('= pig mettomtam lo yodea', '69420', true)
        .setImage('https://i.imgur.com/dya0Xzz.pngg')
        .setTimestamp()
        .setFooter('hayot metoomtamot', 'https://i.imgur.com/dya0Xzz.pngg');
        message.channel.send(exampleEmbed);

            


        
    }
}