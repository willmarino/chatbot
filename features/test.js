module.exports = function(controller) {

  controller.hears('people','message,direct_message', async(bot, message) => {
      await bot.reply(message, 'reply is working.');
  });
  controller.hears('me','message,direct_message', async(bot, message) => {
      await bot.reply(message, 'me reply is working.');
  });

  controller.on('welcome_back,hello', async(bot, message) => {
    // do somethign using bot and message like...
    await bot.reply(message, "howdy, partner")
    await bot.reply(message, {
      text: 'Here are some quick replies',
      quick_replies: [
          {
              title: 'Job History',
              payload: 'job history',
          },
          {
              title: 'Github',
              payload: 'github',
          },
          {
            title: 'LinkedIn',
            payload: 'linkedin',
        }
      ]
    });;
  });

}