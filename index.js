const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log("Bot is Ready!");
});

client.on('message', msg => {
    const command = msg.content.split(" ")[0];
    const argument = parseInt(msg.content.split(" ")[1]);
    const username = msg.author.username;
    if(command==="!roll"){
        const result = Math.floor((Math.random() * argument)+  1);	
	msg.channel.send(username + " just rolled " + result + "!");
    }
});

client.login('MzcyMTI2Nzc4NDg0OTgxNzcx.DM_qWA.6-sVY0xAcypF_hpCeuP5Uijervk');
