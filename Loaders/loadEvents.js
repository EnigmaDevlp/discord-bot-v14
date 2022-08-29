const fs = require("fs")

module.exports = async enigma => {
    
    fs.readdirSync("./Events").filter(f => f.endsWith(".js")).forEach(async file => {

        let event = require(`../Events/${file}`)
        enigma.on(file.split(".js").join(""), event.bind(null, enigma))
        console.log(`🧻 | Evènement ${file} chargé avec succès !`)
    })
}