module.exports = {
    name: 'github',
    description: "1",
        execute(message, args){

            message.reply('check dm\'s!').then(m => m.delete({timeout: 5000}));
            message.member.send('https://github.com/sice123');
            


        
    }
}
