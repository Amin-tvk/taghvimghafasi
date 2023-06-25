import os
from telegram import Bot
from telegram.ext import CommandHandler, Updater

# توکن ربات تلگرام خود را در اینجا قرار دهید
TOKEN = '5441085680:AAGiFH4_oMoCd0dtBao7HB7r6MN-PvLB1Ww'

# آیدی کانال را در اینجا قرار دهید
CHANNEL_ID = '@dsffewf'

# تابع برای دانلود فایل
def download_file(bot, update):
    try:
        latest_message = bot.get_chat_history(chat_id=CHANNEL_ID, limit=1, from_user=bot.id)[0]
        file_id = latest_message.document.file_id

        file = bot.get_file(file_id)
        file_path = file.file_path

        download_link = f'https://api.telegram.org/file/bot{TOKEN}/{file_path}'
        print(f'لینک دانلود آخرین پست: {download_link}')
        
        # دانلود فایل
        file.download(custom_path=os.path.basename(file_path))
        print('فایل با موفقیت دانلود شد.')
    except Exception as e:
        print(f'خطا در دانلود فایل: {str(e)}')

def main():
    updater = Updater(token=TOKEN, use_context=True)
    dispatcher = updater.dispatcher

    # ایجاد هندلر برای دستور /download
    download_handler = CommandHandler('download', download_file)
    dispatcher.add_handler(download_handler)

    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
