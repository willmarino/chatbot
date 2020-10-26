module.exports = function(controller) {
  const projectRegex = /proj/gmi;

  controller.hears([new RegExp(projectRegex)], ['message','direct_message'], async function(bot, message) {
    await bot.reply(message, {
      text: 'Which one of my projects would you like to learn about?',
      quick_replies: [
          {
              title: 'Flea',
              payload: 'flea',
          },
          {
              title: 'Astro',
              payload: 'astro',
          },
          {
              title: 'Stock Data Analysis',
              payload: 'sda',
          },
          {
              title: 'Outfit of the Day',
              payload: 'ootd',
          }
      ]
    });
  });

  controller.hears('Flea', ['message','direct_message'], async function(bot, message) {
    await bot.reply(message,{ text: 'Flea is a simpler imitation of the e-commerce website "Etsy." Like the actual Etsy site, Flea displays "products", which are stored in a database, and you have the ability to interact with these products in several ways.' });
  });
  controller.hears('Astro', ['message','direct_message'], async function(bot, message) {
    await bot.reply(message,{ text: 'Astro is a project I made out of fondness for the 2d side-scrolling action games of my youth.' });
  });
  controller.hears('sda', ['message','direct_message'], async function(bot, message) {
    await bot.reply(message,{ text: 'Stock Data Analysis is an unnamed project which is currently under construction, which is my attempt to start working with real-time data via websockets. I take in market data, clean it, run it through a regression, and by doing so slowly build a function which can predict the price of a stock in 10 seconds with an error of a few dollars. My future plans are to make this analysis far more comprehensive.' });
  });
  controller.hears('ootd', ['message','direct_message'], async function(bot, message) {
    await bot.reply(message,{ text: 'Outfit of the day is an application I built along with three other teammates, where a user can build up an inventory of items, and select an outfit based on certain conditions such as weather/temperature and occasion.' });
  });
}