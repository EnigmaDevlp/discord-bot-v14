const fs = require("fs")

module.exports = async enigma => {

    fs.readdirSync("./Commandes").filter(f => f.endsWith(".js")).forEach(async file => {

        let command = require(`../Commandes/${file}`)
        if(!command.name || typeof command.name !== "string") throw new TypeError(`La commande ${file.slice(0, file.length - 3)} n'a pas de nom !`)
        enigma.commands.set(command.name, command)
        console.log(`🌠 | ${file} est bien chargé !`)
    })
}