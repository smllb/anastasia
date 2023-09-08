const basePromptStructure = require('../settings/default-prompt-settings.json');

let sendUserPrompt = async (userPrompt, username) => {

    let payload = basePromptStructure;
    payload.prompt = `${payload.prompt}\n### Instruction:\n${username}: ${userPrompt}\n### Response:\nAnastasia:`;
    payload.name1 = username;

    const url = 'http://127.0.0.1:5000/api/v1/generate'
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify(payload)
        });
   

        const data = await response.json()
        return data.results[0].text;

    } catch (error) {
        console.error(error);
    }

}

module.exports = {
    sendUserPrompt

}