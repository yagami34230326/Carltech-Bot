const { adams } = require('../Ibrahim/adams');
const traduire = require("../Ibrahim/traduction");
const { default: axios } = require('axios');

adams({ nomCom: "chatgpt", reaction: "😇", categorie: "Gpt4" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    if (!arg || arg.length === 0) {
      return repondre("Please ask a question.");
    }

    const question = arg.join(' ');
    const response = await axios.get(https://bera-tech-api-site-a30dd1de29e4.herokuapp.com/api/ai/gpt4o?q=${encodeURIComponent(question)});
    
    const data = response.data;
    if (data) {
      repondre(data.result || "No result returned.");
    } else {
      repondre("Error during response generation.");
    }
  } catch (error) {
    console.error('Erreur:', error.message || 'Une erreur s\'est produite');
    repondre("Oops, an error occurred while processing your request.");
  }
});
