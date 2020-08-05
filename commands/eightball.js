const Discord = require('discord.js');

const client = new Discord.Client();
module.exports = {
    name: 'eightball',
    description: ".",
        execute(message){
            let args = message.content.split(" ");
             if (args[2]) {
            return message.channel.send('Please ask a full questions.')
        }
        let number = Math.floor(Math.random() * 6);
        if (number === 0) {
            return message.channel.send('Yes, definitely so.')
        }
        if (number === 1) {
            return message.channel.send('No, definitely not.')
        }
        if (number === 2) {
            return message.channel.send('Ask again later.')
        }
        if (number === 3) {
            return message.channel.send('It is uncertain.')
        }
        if (number === 4) {
            return message.channel.send('Odds are not in your favor.')
        }
        if (number === 5) {
            return message.channel.send('Odds are in your favor.')
        }  
    }
                

           
            

        
    }
