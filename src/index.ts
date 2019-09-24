const config = require('config');
import { CommandoClient, SQLiteProvider } from 'discord.js-commando';

import * as sqlite from 'sqlite3';

import * as path from 'path';

const client = new CommandoClient({
  owner: config.bot.owner,
  commandPrefix: config.bot.prefix,
});

// TODO: persistence layer
client
  .setProvider(
    new SQLiteProvider(
      new sqlite.Database(path.join(__dirname, 'database.sqlite3'))
    )
  )
  .catch(console.error);

client.registry
  .registerGroups([['ffxiv', 'Commands related to Final Fantasy XIV']])
  .registerDefaults()
  .registerTypesIn(path.join(__dirname, 'types'))
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
  console.log('Logged in!');
  client.user.setActivity('boop!');
});

client.login(config.discord.secret);
