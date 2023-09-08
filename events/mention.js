const { Events } = require('discord.js');
const { sendUserPrompt } = require('../utils/send-user-prompt')

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        
        console.log(`message: ${message.content} | author: ${message.author.displayName}`);
        
        if (message.mentions.has('1148592702758338630')) {
            console.log('mentioned')
            let prompt = message.content.replace( /(<@.+>)/gm , '')
            await message.channel.sendTyping()
            response = await sendUserPrompt(prompt.trim(), message.author.displayName)

            if (response.lenght !== 0) {
                message.channel.send(response)
            } 
           
        }
    }
}