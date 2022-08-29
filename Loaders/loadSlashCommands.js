const Discord = require("discord.js")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord.js") 

module.exports = async enigma => {

    let commands = []; 

    enigma.commands.forEach(async command => {

        let slashcommand = new Discord.SlashCommandBuilder()
        .setName(command.name)
        .setDescription(command.description)
        .setDMPermission(command.dm)
        .setDefaultMemberPermissions(command.permission === "Aucune" ? null : command.permission)

        if(command.options?.length >= 1) {
            for(let i = 0; i < command.options.length; i++) {
                slashcommand[`add${command.options[i].type.slice(0, 1).toUpperCase() + command.options[i].type.slice(1, command.options[i].type.length)}Option`](option => option.setName(command.options[i].name).setDescription(command.options[i].description).setRequired(command.options[i].required))
            }
        }

        await commands.push(slashcommand)
    })

    const rest = new REST({version: "10"}).setToken(enigma.token)

    await rest.put(Routes.applicationCommands(enigma.user.id), {body: commands})
    console.log("📭 | Les slashs commands sont crées avec succès !")
}