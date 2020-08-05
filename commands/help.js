const Discord = require('discord.js');
const serverInfo = require('./serverInfo');

module.exports = {
    name: 'help',
    description: "showing the commands",
        execute(message, args){
             const embed = new Discord.MessageEmbed();
             embed.setTitle('list of commands');
             embed.setColor('WHITE')
             
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
                '**`$Userinfo`**-Shows user information'
            ])                 
             embed.addField('# Embeds',[
                 '**`$Embedron`**-<3'
             ])
             embed.addField('# Who is the killer',[
                 '**`$Kill`**-Choose who you want to kill',

             ])



             message.channel.send(embed);
        }   
    }