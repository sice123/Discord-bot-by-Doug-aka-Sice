module.exports = {
    name: 'ban',
    description: "bans a player",
        execute(message, args){
            if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send('Invalid Perms!');
                if (message.content.startsWith('$ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this server!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
            
                    
    }
}