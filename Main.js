// consts vars and everything
const Discord = require('discord.js');

const client = new Discord.Client();
 
const prefix = '$';
 
const fs = require('fs');

const queue = new Map();

const config = require('./config.json');
const search = require('youtube-search');
const opts = {
    maxResults: 25,
    key: config.YOUTUBE_API,
    type: 'video'
};
 
client.commands = new Discord.Collection();

const ytdl = require ('ytdl-core');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log(`${client.user.tag} is online`);
    client.user.setActivity('Playing', { type: '$' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const serverQueue = queue.get(message.guild.id);

//MODS
if(command === 'kick'){
  client.commands.get('kick').execute(message, args);//1
}
if(command === 'ban'){
  client.commands.get('ban').execute(message, args);//2
}
if(command === 'clear'){
  client.commands.get('clear').execute(message, args);//3
}
if(command === 'mute'){
  client.commands.get('mute').execute(message, args);//4
}
//EMBEDS
if(command === 'serverinfo'){
  client.commands.get('serverinfo').execute(message, args);//4
}
if(command === 'avatar'){
  client.commands.get('avatar').execute(message, args);//5
}
if(command === 'embedron'){
  client.commands.get('embedron').execute(message, args);//6
}
if(command === 'embedalmog'){
  client.commands.get('embedalmog').execute(message, args);//7
}
if(command === 'corona'){
  client.commands.get('corona').execute(message, args);//8
}
if(command === 'almog'){
  client.commands.get('almog').execute(message, args);//9
}
//WHO'S THE KILLER
if(command === '1'){
  client.commands.get('1').execute(message, args);//10
}
if(command === '2'){
  client.commands.get('2').execute(message, args);//11
}
if(command === '3'){
  client.commands.get('3').execute(message, args);//12
}
if(command === '4'){
  client.commands.get('4').execute(message, args);//13
}
if(command === '5'){
  client.commands.get('5').execute(message, args);//14
}
if(command === '6'){
  client.commands.get('6').execute(message, args);//15
}
if(command === '7'){
  client.commands.get('7').execute(message, args);//15
}
if(command === '8'){
  client.commands.get('8').execute(message, args);//16
}
if(command === '9'){
  client.commands.get('9').execute(message, args);//17
}
if(command === '10'){
  client.commands.get('10').execute(message, args);//18
}
if(command === '11'){
  client.commands.get('11').execute(message, args);//19
}
if(command === 'kill'){
  client.commands.get('kill').execute(message, args);//20
}
if(command === 'protect'){
  client.commands.get('protect').execute(message, args);//21
}
//MISCELLANEOUS
if(command === 'help'){
  client.commands.get('help').execute(message, args);//21
}
if(command === 'ping'){
  client.commands.get('ping').execute(message, args);//22
}
if(command === 'userinfo'){
  client.commands.get('userinfo').execute(message, args);//23
}
if(command === 'discord'){
  client.commands.get('discord').execute(message, args);//24
}
if(command === 'tkui'){
  client.commands.get('tkui').execute(message, args);//25
}
//MUSIC
if(command === ''){
  client.commands.get('play').execute(message);
}
if(command === ''){
  client.commands.get('play').stop(message);
}
if(command === ''){
  client.commands.get('play').skip(message);
}
if(command === 'search'){
  client.commands.get('search').execute(message, args);
}



 



    
    
            

































































































































//FKNG MUSIC I NEED TO FIX ASAP




  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  }


async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  const Embed = new Discord.MessageEmbed();
  Embed.addField(`**${song.title}**`,[
    `Started Playing ${song.title}`
  ])
  message.channel.send(Embed);
}


 

});

client.login('NzIzMTQ0NjYxMzI5Mzc5MzU5.Xxc9dg.PscHTItU39wsbZCFhpGU_008s2E');