module.exports = function(controller) {

  controller.hears([new RegExp(/shortcut/gmi)], ['message'], async(bot, message) => {
    // do somethign using bot and message like...
    // await bot.reply(message,'You have returned!');
    await bot.reply(message,{
      text: 'What do you want to know about me?',
      quick_replies: [
        {
          title: 'Academia',
          payload: 'Academia',
        },
        {
          title: 'Work Experience',
          payload: 'Work Experience',
        },
        {
          title: 'Skills',
          payload: 'Skills'
        },
        {
          title: 'Contact',
          payload: 'Contact'
        }
      ]
    });
  });

  // controller.hears('academia', 'message', async(bot, message) => {
  //   await bot.reply(message, 'Here you find info about academic history.');
  // });

  // controller.hears('skills', 'message', async(bot, message) => {
  //   await bot.reply(message, 'Here you find info about the languages I am proficient in.');
  // });

  // controller.hears('work experience', 'message', async(bot, message) => {
  //   await bot.reply(message, 'Here you will find my job history.');
  // });

  // controller.hears('contact', 'message', async(bot, message) => {
  //   await bot.reply(message, 'Here you will find how to contact me.')
  // });

}