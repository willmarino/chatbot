

module.exports = function(controller){
  const contactRegex = /contact/gmi;

  controller.hears([new RegExp(contactRegex)], ['message','direct_message'], async function(bot, message) {
    // await bot.reply(message,{ text: 'Here you will find how to contact me.' });
    await bot.reply(message,{ 
      text: 'What do you want to know?.',
      quick_replies: [
          {
              title: 'Email',
              payload: 'email'
          },
          {
              title: 'Phone',
              payload: 'phone'
          },
          {
              title: 'LinkedIn',
              payload: 'linkedin'
          }
      ]
    });
  });

  controller.hears('email', ['message','direct_message'], async function(bot, message) {
    await bot.reply(message, { text: 'my email is w.marino997@gmail.com' });
  });
  controller.hears('phone', ['message','direct_message'], async function(bot, message) {
    await bot.reply(message, { text: 'My phone number is 973-664-4732' });
  });
  controller.hears('linkedin', ['message','direct_message'], async function(bot, message) {
    await bot.reply(message, { text: 'Visit me on LinkedIn here: https://www.linkedin.com/in/william-marino/' });
  });


}