const Discord = require('discord.js');

const client = new Discord.Client();
module.exports = {
    name: 'ping',
    description: ".",
        execute(message, args){
                message.channel.send('Pong')

           
            

        
    }
}