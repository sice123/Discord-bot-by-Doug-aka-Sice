  const Discord = require('discord.js');

   const client = new Discord.Client();

module.exports = {
    name: 'corona',
    description: ".",
        execute(message, args){
            let channel = message.guild.channels.cache.find(channel => channel.name === "corona");
            const embed = new Discord.MessageEmbed();
            let countries = args[0] 
            .fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
              let confirmed = data.confirmed.value.toLocaleString() 
              let recovered = data.recovered.value.toLocaleString() 
              let deaths = data.deaths.value.toLocaleString() 
              .setColor(0x7289DA) 
              .addField(`Country: ${countries}`, `Confirmed: **${confirmed}** \nRecovered: **${recovered}** \nDeaths: **${deaths}**`)
              .setTimestamp()
              
              message.channel.send(embed);
            })
        }}
