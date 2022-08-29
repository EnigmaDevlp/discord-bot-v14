const Discord = require("discord.js")

module.exports = async (enigma, message) => {
    
    let prefix = "em/";

    let messageArray = message.content.split(" ")
    let commandName = messageArray[0].slice(prefix.length)
    let args = messageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    if(!command) return message.reply("Pas de commande connue sous se nom !")
}