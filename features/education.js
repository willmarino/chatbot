module.exports = function(controller) {
  const educationRegex = /educat/gmi;
  const academicRegex = /academ/gmi;
  
  controller.hears([new RegExp(educationRegex)], ['message','direct_message'], async function(bot, message) {
    await bot.reply(message, {
      text: 'Which part of my academic history would you like to learn about?',
      quick_replies: [
          {
              title: 'Bootcamp',
              payload: 'bootcamp',
          },
          {
              title: 'University',
              payload: 'university',
          }
      ]
    });
  });

  controller.hears('university', ['message','direct_message'], async function(bot, message) {
    await bot.reply(message,{ text: 'I earned a B.S. in Psychology at the University of Massachusetts Amherst.' });
  });
  controller.hears('bootcamp', ['message','direct_message'], async function(bot, message) {
    await bot.reply(message,{ text: 'I attended the App Academy programming bootcamp from September of 2019 to January of 2020. While there I learned the fundamentals of fullstack web app development, and gained experience using tools such as Ruby on Rails, React, PostgreSQL, and AWS S3.' });
  });
  controller.hears([new RegExp(academicRegex)], ['message','direct_message'], async function(bot, message) {
    await bot.reply(message,{ text: 'Here you will find info about academic history.' });
});
  
}