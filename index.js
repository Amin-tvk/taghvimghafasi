const { Bot , InputFile} = require('grammy');
const path = require('path');
const { FileFlavor, hydrateFiles } = require ("@grammyjs/files");
const fs = require('fs');
const moment = require('moment-timezone');

const bot = new Bot('5992329338:AAFeMzENjcxAATji5mpDcgLNZg7VjfFfv9U');
bot.api.config.use(hydrateFiles(bot.token));
const timezone = 'Asia/Tehran';
moment.tz.setDefault(timezone);
 const channel_id = 'taghvimghafasibot'
 

bot.on([":video", ":animation" ], async (ctx) => {
  console.log(ctx.chat.username)
  
  const tehranTime = moment().format('HH:mm');
  if ( ctx.chat.username == channel_id && tehranTime == '00:00' || tehranTime == '00:01' ) {
    const file = await ctx.getFile();
  // Download the file to a temporary location.
  const path = await file.download("./src/test.mp4");
  // Print the file path.
  console.log("File saved at ", path);
  
  }else{
    console.log(" در این کانال کار نمیکند!!")
  }
    
});
bot.on('message', async (ctx) => {
  const chatType = ctx.chat.type;
  let currentEpoch1 = Math.floor(new Date().getTime()/1000.0)
  console.log(chatType)
  if (chatType === 'private') {
    await ctx.reply('این ربات تنها در گروه‌ها فعال است.');
  } else if (chatType === 'group' || chatType === 'supergroup'  ) {
    dailymessage =  currentEpoch1 - ctx.message.date
    console.log(dailymessage) 
    console.log(ctx.message.date)
    console.log(currentEpoch1)
    if ( dailymessage <= '30' ) {
      const message = ctx.message;
    const text = message.text || '';
    const member = message.from;
    console.log(message.date) 
    if (text.includes('امروز چندمه') || text.includes('امروز چه روزیه') ) {
      const memberName = member.first_name || member.username;
      const chatId = '@dsffewf';
      const logo = "https://ibb.co/hfnLP3w";
      const photoName = 'photo-2022-12-27-01-27-50.jpg';
      const animationPath = './giphy.gif';
      const photoPath = './src/test.mp4';
      const inputFile = new InputFile(photoPath);

      await ctx.replyWithAnimation(inputFile , {
        force_reply: true,
        reply_to_message_id: ctx.msg.message_id,
      } );
      console.log("send gif" , ctx.msg.message_id)
    }
    }
    
  } 
  else if(chatType === 'CHANNEL'){
    
    console.log("test")
  }
  
});
const currentEpoch = new Date().getTime();
bot.start();

console.log(Math.floor(new Date().getTime()/1000.0) )

