const { Bot , InputFile} = require('grammy');
const path = require('path');
const { FileFlavor, hydrateFiles } = require ("@grammyjs/files");
const fs = require('fs');
const moment = require('moment-timezone');

const bot = new Bot('5441085680:AAGiFH4_oMoCd0dtBao7HB7r6MN-PvLB1Ww');
bot.api.config.use(hydrateFiles(bot.token));
const timezone = 'Asia/Tehran';
moment.tz.setDefault(timezone);


bot.on([":video", ":animation" ], async (ctx) => {
  console.log(ctx.chat.username)
  const tehranTime = moment().format('HH:mm');
  if ( ctx.chat.username == 'dsffewf' && tehranTime == '00:00') {
    const file = await ctx.getFile();
  // Download the file to a temporary location.
  const path = await file.download("./src/test.mp4");
  // Print the file path.
  console.log("File saved at ", path);
  await ctx.reply('این ربات تنها در گروه‌ها فعال است.' );
  }else{
    console.log(" در این کانال کار نمیکند!!")
  }
    
});
bot.on('message', async (ctx) => {
  const chatType = ctx.chat.type;
  console.log(chatType)
  if (chatType === 'private') {
    await ctx.reply('این ربات تنها در گروه‌ها فعال است.');
  } else if (chatType === 'group' || chatType === 'supergroup') {
    const message = ctx.message;
    const text = message.text || '';
    const member = message.from;
    

    
// حالا می‌توانید فایل را دانلود کنید با استفاده از کتابخانه‌های مناسب در نود جی اس

    
    if (text.includes('امروز چندمه')) {
      const memberName = member.first_name || member.username;
      
      const chatId = '@dsffewf';
      /*
      const messages = await ctx.telegram.getChatMessages(chatId);
      
      let latestGifMessage;
for (const message of messages) {
  if (message.animation && message.animation.mime_type === 'image/gif') {
    latestGifMessage = message;
    break;
  }
}
*/
      const logo = "https://ibb.co/hfnLP3w";
      const photoName = 'photo-2022-12-27-01-27-50.jpg';
      //  const photoPath = path.join(__dirname, photoName);
      //await ctx.replyWithPhoto(photoPath, { caption: 'متن توضیحات عکس' });
      const animationPath = './giphy.gif';
      //await ctx.replyWithAnimation(animationPath, { caption: 'متن توضیحات گیف' });
      const photoPath = './src/test.mp4';
      const inputFile = new InputFile(photoPath);

      await ctx.replyWithAnimation(inputFile , {
        force_reply: true,
        reply_to_message_id: ctx.msg.message_id,
      } );
      /*await ctx.reply(` ${memberName}!` ,
      
      
      {
        force_reply: true,
        reply_to_message_id: ctx.msg.message_id,
      },
      );*/
      console.log("send gif" , ctx.msg.message_id)
    }
  } 
  else if(chatType === 'CHANNEL'){
    
    console.log("test")
  }
  
});

bot.start();

