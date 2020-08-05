
module.exports = {
    name: 'clear',
    description: "deleting msgs",
        execute(message){
            const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Invalid Perms!');
    
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    async function deleteasync(){await message.channel.send(`**Successfully** Deleted ***${deleteAmount}*** Messages.`).then(m => m.delete({timeout: 5000}))};
    
} 
        }
    