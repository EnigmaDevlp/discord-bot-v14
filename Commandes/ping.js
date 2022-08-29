const Discord = require("discord.js")

module.exports = {

    name: "ping",
    description: "Permet de voir le ping du bot",
    permission: "Aucune",
    dm: true,

    async run(enigma, message) {

        await message.reply(`Ping: \`${enigma.ws.ping}\``)
    }
}