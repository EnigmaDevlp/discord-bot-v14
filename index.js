const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const enigma = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")
const config = require("./config.js")


enigma.commands = new Discord.Collection()

enigma.login(config.token)
loadCommands(enigma)
loadEvents(enigma)