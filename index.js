const {
	ShardingManager
} = require('discord.js');
const config = require('./settings/config.json')

const manager = new ShardingManager('./bot.js', {
	token: config.TOKEN
});

console.log(`
╭───────────────────────────────────────────────────────────────────────────────────────────────────────╮
│                                                                                                       │
│  ██████╗░████████╗███████╗██████╗░░█████╗░░█████╗░░█████╗░███╗░░██╗████████╗██████╗░░█████╗░██╗░░░░░  │
│  ██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗████╗░██║╚══██╔══╝██╔══██╗██╔══██╗██║░░░░░  │
│  ██████╔╝░░░██║░░░█████╗░░██████╔╝██║░░██║██║░░╚═╝██║░░██║██╔██╗██║░░░██║░░░██████╔╝██║░░██║██║░░░░░  │
│  ██╔═══╝░░░░██║░░░██╔══╝░░██╔══██╗██║░░██║██║░░██╗██║░░██║██║╚████║░░░██║░░░██╔══██╗██║░░██║██║░░░░░  │
│  ██║░░░░░░░░██║░░░███████╗██║░░██║╚█████╔╝╚█████╔╝╚█████╔╝██║░╚███║░░░██║░░░██║░░██║╚█████╔╝███████╗  │
│  ╚═╝░░░░░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝░╚════╝░░╚════╝░░╚════╝░╚═╝░░╚══╝░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚══════╝  │
│                                                                                                       │
│                                                                                                       │
│        Support Server - https://discord.gg/AMCTzrmRPY                                                 │
│        Website - https://pterocontrol.scarcehost.uk/                                                  │
│                                                                                                       │
╰───────────────────────────────────────────────────────────────────────────────────────────────────────╯
`)
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();