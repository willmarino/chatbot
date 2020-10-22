/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    // // use a function to match a condition in the message
    // controller.hears(async (message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
    //     await bot.reply(message, 'I heard "foo" via a function test');
    // });

    // // use a regular expression to match the text of the message
    // controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
    //     await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
    // });

    // // match any one of set of mixed patterns like a string, a regular expression
    // controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
    //     await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    // });

    const academicRegex = /academ/gmi;
    const educationRegex = /educat/gmi;

    const languagesRegex = /language/gmi;
    const skillsRegex = /skill/gmi;
    const techRegex = /tech/gmi;
    const stackRegex = /stack/gmi;

    const contactRegex = /contact/gmi;

    const jobRegex = /job/gmi;
    const workRegex = /work/gmi;

    const projectsRegex = /projects/gmi;
    const projectRegex = /project/gmi;


    controller.hears([new RegExp(academicRegex)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'Here you will find info about academic history.' });
    });
    controller.hears([new RegExp(educationRegex)], ['message','direct_message'], async function(bot, message) {
        // await bot.reply(message,{ text: 'Here you find info about academic history.' });
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

    controller.hears([new RegExp(languagesRegex)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'Here you will find info about the languages I am proficient in.' });
    });
    controller.hears([new RegExp(techRegex)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'Here you will find info about the languages I am proficient in.' });
    });
    controller.hears([new RegExp(stackRegex)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'Here you will find info about the languages I am proficient in.' });
    });
    controller.hears([new RegExp(skillsRegex)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'Here you will find info about the languages I am proficient in.' });
    });

    controller.hears([new RegExp(contactRegex)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'Here you will find how to contact me.' });
    });

    controller.hears([new RegExp(jobRegex)], ['message','direct_message'], async function(bot, message) {
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
    });
    controller.hears([new RegExp(workRegex)], ['message','direct_message'], async function(bot, message) {
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
    });

    controller.hears(['Previous Gigs'], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message, { text: 'Here you will find a list of my previous gigs and responsibilities there.'});
    });
    controller.hears(['Interests'], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message, { text: 'Here you can find info about my dream job: where I would like to work and what I would prefer to do.'});
    });

    controller.hears([new RegExp(projectsRegex)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{
            text: 'Here are some of my projects.',
            quick_replies: [
                {
                    title: 'Project A',
                    payload: 'Project A'
                },
                {
                    title: 'Project B',
                    payload: 'Project B'
                },
                {
                    title: 'Project C',
                    payload: 'Project C'
                }
            ]
        });
    });

    controller.hears([new RegExp(projectRegex)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{
            text: 'Here is some inforamtion about this project.',
        });
    });

}