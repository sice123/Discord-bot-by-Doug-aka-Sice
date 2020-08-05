module.exports = {
    name: 'kick',
    description: "kick command",
        execute(message, args){
            if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send('Invalid Perms!');
                if (message.content.startsWith('$kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`bye ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this server!");
      }
    } else {
      message.reply("$kick + @{user.tag}");
    }
  }



            


        
    }
}