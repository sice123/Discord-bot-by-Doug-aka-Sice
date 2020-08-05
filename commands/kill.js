const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'kill',
    description: "kill",
        execute(message){
            let channel = message.guild.channels.cache.find(channel => channel.name === "chat");
            args = message.content.split(" ");
            if (args[0]) {
                channel.send({embed: { description: `${args[1]} was killed!` }}).then(m => m.delete({timeout: 5000}));
            } else{
                message.channel.send({embed: { description: "Please enter a proper user id!"}});
            }
        }}
