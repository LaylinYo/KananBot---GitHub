const Discord = require("discord.js");
const config = require("../config.json");
           module.exports.run = async(bot, message, args) =>{
               message.channel.send("Testing command working good!")
           }
module.exports.help = {
    name: "test"
}