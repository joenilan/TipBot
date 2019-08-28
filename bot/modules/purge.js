let config = require('config');
let pm2Name = config.get('moderation').pm2Name;
var roles = config.get('moderation').perms;
exports.commands = ['purge'];

exports.purge = {
  usage: '',
  description: 'Ban a user',
  process: async(client, message, args) => {

    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));    
  
  }
};
