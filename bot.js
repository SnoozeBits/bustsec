const TelegramBot = require('node-telegram-bot-api');
const token = '7783555118:AAEYt__MRb8x-QP6N0F9z6TMNovy0knBrqM'; // replace with your actual bot token
const bot = new TelegramBot(token, { polling: true });

// When the bot receives /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const url = 'https://bustsec.netlify.app'; // replace with your Netlify URL
  
  // Send a button that links to your game
  bot.sendMessage(chatId, "Ready to bust the SEC? Click below to start!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Play Bust the SEC!", url: url }]
      ]
    }
  });
});
