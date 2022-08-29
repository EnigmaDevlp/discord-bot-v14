const Discord = require("discord.js")
const loadSlashCommands = require("../Loaders/loadSlashCommands")

module.exports = async enigma => {

    await loadSlashCommands(enigma)
    
    console.log(`🌟 | ${enigma.user.username} est actuellement en ligne !`)
}