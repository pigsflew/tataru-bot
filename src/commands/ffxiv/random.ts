import { Command, CommandoClient, CommandMessage } from 'discord.js-commando';

module.exports = class AddNumbersCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: 'random-number',
      aliases: ['rng', 'rand'],
      group: 'ffxiv',
      memberName: 'random',
      description: 'Gives a random number between 0 and 1000',
      details: 'Like the /random command in game.',
      args: [],
    });
  }

  async run(msg: CommandMessage) {
    const random = Math.floor(Math.random() * 1000);
    return msg.reply(`:dice: **${random}**`);
  }
};
