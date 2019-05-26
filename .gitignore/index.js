const Discord = require('discord.js');
 
const client = new Discord.Client();
 
var prefix = "*"

bot.on("ready", function() {
    bot.user.setGame("Oxen Game");
    console.log("le bot a bien était connecter");
    
});

 bot.login("xj3MZgJXnjl9YgxZAwt3xSvTbnoOEx9F")
