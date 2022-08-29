const Discord = require("discord.js")

module.exports = async (enigma, interaction) => {

    if(interaction.type === Discord.InteractionType.ApplicationCommand) {

        let command = require(`../Commandes/${interaction.commandName}`)
        command.run(enigma, interaction, interaction.options)
    }
}