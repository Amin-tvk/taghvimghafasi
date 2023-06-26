const { Telegraf } = require('telegraf');
const fs = require('fs');

// توکن ربات تلگرام خود را در اینجا قرار دهید
const token = '5441085680:AAGiFH4_oMoCd0dtBao7HB7r6MN-PvLB1Ww';

// آیدی کانال را در اینجا قرار دهید
const channelId = '@dsffewf';

// تابع برای دانلود فایل
async function downloadFile(ctx) {
  try {
    const messages = await ctx.telegram.getChatHistory(channelId, { limit: 1, fromUser: ctx.botInfo.id });
    const latestMessage = messages[0];
    const fileId = latestMessage.document.file_id;

    const file = await ctx.telegram.getFile(fileId);
    const downloadLink = `https://api.telegram.org/file/bot${token}/${file.file_path}`;

    console.log(`لینک دانلود آخرین پست: ${downloadLink}`);
    
    // دانلود فایل
    const downloadDir = __dirname + '/downloads/';
    const fileName = file.file_path.split('/').pop();
    const filePath = downloadDir + fileName;
    await ctx.telegram.downloadFile(file.file_path, downloadDir);
    console.log('فایل با موفقیت دانلود شد.');
  } catch (error) {
    console.error('خطا در دانلود فایل:', error);
  }
}

const bot = new Telegraf(token);
bot.command('download', downloadFile);

bot.launch();
console.log('ربات شروع به کار کرد.');
