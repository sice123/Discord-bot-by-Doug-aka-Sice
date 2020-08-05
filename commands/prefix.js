module.exports = {
    name: 'prefix',
    description: "change the prefix",
        execute(message, args){


        const guild = new Discord.Guild(clientdata);

            guildConf[message.guild.id].prefix = args[0];
	if (!guildConf[message.guild.id].prefix) {
		guildConf[message.guild.id].prefix = config.prefix; 
	}
     fs.writeFile('./storages/guildConf.json', JSON.stringify(guildConf, null, 2), (err) => {
     	if (err) console.log(err)
	})
  }
}
