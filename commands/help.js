const Discord = require('discord.js');
const serverInfo = require('./serverInfo');

module.exports = {
    name: 'help',
    description: "showing the commands",
        execute(message, args){
             const embed = new Discord.MessageEmbed();
             embed.setTitle('list of commands');
             embed.setColor('BLACK')
             
             embed.addField('# Modaration' ,[
                 '**`$kick`**-Kick a member.',
                 '**`$Ban`**-Ban a member.',
                 '**`$Mute`**-Mute a member.',
                 '**`$Clear`**-Clears from 2-99 messages.'
             ])
            embed.addField('# Miscellaneous',[
                '**`$Help`**-Show a list of commands',
                '**`$Ping`**-Pong!',
                '**`$ServerInfo`**-Shows server information',
                '**`$Userinfo`**-Shows user information',
                '**`$Discord`**-Discord server invite',
            ])                 
             embed.addField('# Embeds',[
                 '**`$Embedron`**-<3',
                 '**`$Embedalmog`**-:-)',
             ])
             embed.addField('# Who is the killer',[
                 '**`$Kill`**-Choose who you want to kill',
                 '**`$Protect`**-Choose who to protect',
                 '**`$1-11`**-Secret',

             ])
             embed.addField('# Music',[
                 '**`$Play`**-Play / Queue a song use a valid youtube url!',
                 '**`$Stop`**-The bot will disconnect from the channel',
                 '**`$Skip`**-Skip the current song'
             ])



             message.channel.send(embed);
        }   
    }
