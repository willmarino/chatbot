module.exports = function(controller){
  const languagesRegex = /language/gmi;
  const skillsRegex = /skill/gmi;
  const techRegex = /tech/gmi;
  const stackRegex = /stack/gmi;

  controller.hears([new RegExp(languagesRegex)], ['message','direct_message'], async function(bot, message) {
    await bot.reply(message,{ text: 'I have experience building projects with JavaScript, SQL, Ruby, Python, CSS, and HTML.' });
  });
  controller.hears([new RegExp(skillsRegex), new RegExp(techRegex), new RegExp(stackRegex)], ['message','direct_message'], async function(bot, message) {
    await bot.reply(message,{ text: 'I can create databases using MongoDB, PostgreSQL, and AWS S3, and I can build up backend servers using Node, Rails, and Flask. I know how to construct and efficiently manage frontend UI and state using React and Redux, and I know how to style the frontend with both CSS and SCSS. Additionally, I am able to spin up AWS EC2 instances for uses hosting servers and frontends remotely.' });
  });
  // controller.hears([new RegExp(techRegex)], ['message','direct_message'], async function(bot, message) {
  //   await bot.reply(message,{ text: 'I earned a B.S. in Psychology at the University of Massachusetts Amherst.' });
  // });
  // controller.hears([new RegExp(stackRegex)], ['message','direct_message'], async function(bot, message) {
  //   await bot.reply(message,{ text: 'I earned a B.S. in Psychology at the University of Massachusetts Amherst.' });
  // });

}