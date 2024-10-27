const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN; // Fetch the token from Render environment variables
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const url = process.env.GAME_URL; // Fetch the game URL from Render environment variables
  
  bot.sendMessage(chatId, "Ready to bust the SEC? Click below to start!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Play Bust the SEC!", url: url }]
      ]
    }
  });
});
