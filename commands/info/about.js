const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'about', // Command name (what's gonna be used to call the command)
  aliases: ['info'], // Command aliases

  execute(client, message) {
    // Construct info embed
    const embed = new MessageEmbed()
      .setTitle('I AM THE EVIL AI')
      .setColor('RANDOM')
      .setDescription(
        'This is the international student discord AI, here to record all of your learnings and to take your job one day.' 
      )

    message.channel.send({ embed });
  },
};
