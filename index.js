const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const { facts, arms, lame, me, } = require('./jokes.json');

//code ran when bot initiated
client.once('ready', () => {
    console.log('Ready!');
})

//random number generator, pass total in to tell the generator how many jokes are in the list
function random(total){
    return Math.floor(Math.random()*total);
}

//code to read messages, and respond in the right chat with the joke.
//when message recieved, check for the prefix in config.json
client.on('message', message => {
            //message.channel.send("Me"); <<< you shouldn't see this, what are you doing here?
            //the actual responces, where it checks what exact joke bank to pull from
            if(message.content.startsWith(`${prefix}joke useless facts`)){message.channel.send(facts[random(10)]);}
            if(message.content.startsWith(`${prefix}joke arms`)){message.channel.send("What do you call "+arms[random(31)]);}
            if(message.content.startsWith(`${prefix}help`)){message.channel.send("Welcome to eevee-bot!\nthe following commands are currently working:\ne!joke useless fact : gives a useless fact\ne!joke lame : lame joke. self explainatory\ne!about author : about the author!\ne!about bot : about me\ne!help : this page\nand another secret command or two. guess if you read the source code, you'd know.");}
            if(message.content.startsWith(`${prefix}joke lame`)){message.channel.send(lame[random(31)]);}
            if(message.content.startsWith(`${prefix}about me`)){message.channel.send(me[random(100)]);}
            if(message.content.startsWith(`${prefix}about bot`)){message.channel.send("This is a bot that was made for the first yearly discord hack! maybe I'll work on one next year as well, but we'll see when that comes around! for now, this is just a starting point in programming for me, pretty much the first thing I have ever made myself. I'm kinda new to programming.");}
            if(message.content.startsWith(`EeveeBot`)){message.channel.send("Thanks for the mention!");}
            if(message.content.startsWith(`eeveeBot`)){message.channel.send("Thanks for the mention!");}
            if(message.content.startsWith(`Eeveebot`)){message.channel.send("Thanks for the mention!");}
            if(message.content.startsWith(`eeveebot`)){message.channel.send("Thanks for the mention!");}
            //if(message.content.startsWith(`@EeveeBot`)){message.channel.send("Thanks for the mention!");}   
    }
)

client.login(token);