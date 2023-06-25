const { Api, TelegramClient } = require('grammy');
const { InputFile } = require('grammy/out/platform');

const bot = new TelegramClient('توکن_ربات', { apiId: 'شناسه_API', apiHash: 'کلید_API' });

bot.on('message', async (ctx) => {
  if (ctx.chat.type === 'channel' && ctx.message.animation) {
    const gifFileId = ctx.message.animation.file_id;
    const gifFile = await ctx.api.getFile(gifFileId);
    const gifUrl = `https://api.telegram.org/file/bot${bot.token}/${gifFile.file_path}`;

    // اقدام به دانلود گیف از URL
    // می‌توانید از هر روش دلخواه برای دانلود گیف استفاده کنید
  }
});

bot.start();
