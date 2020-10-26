module.exports = function(controller) {
  const jobRegex = /job/gmi;
  const workRegex = /work/gmi;
  controller.hears([new RegExp(jobRegex), new RegExp(workRegex)], ['message','direct_message'], async function(bot, message) {
    await bot.reply(message,{ 
        text: 'Here you will find my job history.',
        quick_replies: [
            {
                title: 'Previous Gigs',
                payload: 'Previous Gigs'
            },
            {
                title: 'Interests',
                payload: 'Interests'
            }
        ]
    });
    controller.hears(['Previous Gigs'], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message, { text: 'Here you will find a list of my previous gigs and responsibilities there.'});
    });
    controller.hears(['Interests'], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message, { text: 'Here you can find info about my dream job: where I would like to work and what I would prefer to do.'});
    });
});
}