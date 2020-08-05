const Discord = require('discord.js'); 

module.exports = {
    name: 'embedron',
    description: "ron's embed",
        execute(message, args){
            
                const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#4B0082')
        .setTitle('From Doug to Krocy With Ahava<3')
        .setURL('https://i.imgur.com/FnHnpSc.png')
        .setAuthor('Doug#4191', 'https://i.imgur.com/FnHnpSc.png', 'https://i.imgur.com/FnHnpSc.pngg')
        .setDescription('Krocy MY love<3333')
        .setThumbnail('https://i.imgur.com/pGoR1mp.png')
        .addFields(
            { name: 'my love<3', value: '6969' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Ron', value: '69420', inline: true },
            { name: '+ Alon', value: '69420', inline: true },
        )
        .addField('= Aron<333', '69420', true)
        .setImage('https://i.imgur.com/q5galPN.pngg')
        .setTimestamp()
        .setFooter('Krocy<3uwuwuwuwu', 'https://i.imgur.com/WXvJojT.pngg');
        message.channel.send(exampleEmbed);


    }
}
