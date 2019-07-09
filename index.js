//importing stuff, like the start a;ways is
const Discord = require('discord.js');
const { prefix, token , numOfFacts, numOfJokes} = require('./config.json');
const client = new Discord.Client();
const { facts, arms, me } = require('./jokes.json');

var world_dict = {}

//code ran when bot initiated
client.once('ready', () => {
    console.log('Ready!');
})

//random number generator, pass total in to tell the generator how many jokes are in the list, simple but effective!
function random(total){
    return Math.floor(Math.random()*total);
}
//code to read messages, and respond in the right chat with the joke.
//when message recieved, check for the prefix in config.json
client.on('message', message => {
            //message.channel.send("Me"); <<< you shouldn't see this, what are you doing here?
            //the actual responces, where it checks what exact joke bank to pull from
            if(message.content.startsWith(`${prefix}fact`)){message.channel.send(facts[random(numOfFacts)]);}
            if(message.content.startsWith(`${prefix}joke`)){message.channel.send(arms[random(numOfJokes)]);}
            if(message.content.startsWith(`${prefix}help`)){message.channel.send("Welcome to eevee-bot!\nthe following commands are currently working:\ne!fact : gives a useless fact (there are "+numOfFacts+" facts)\ne!joke : lame joke. self explainatory (there are "+numOfJokes+" jokes)\ne!rp : this initiates a small RP that you can use to kill some time; it even restarts once finished for replayability!\ne!about author : about the author!\ne!about bot : about me\ne!help : this page.");}
            if(message.content.startsWith(`${prefix}about me`)){message.channel.send(me[random(100)]);}
            if(message.content.startsWith(`${prefix}about bot`)){message.channel.send("This is a bot that was made for the first yearly discord hack! maybe I'll work on one next year as well, but we'll see when that comes around! for now, this is just a starting point in programming for me, pretty much the first thing I have ever made myself. I'm kinda new to programming.");}
            if(message.content.startsWith(`EeveeBot`)){message.channel.send("Thanks for the mention!");}
            if(message.content.startsWith(`eeveeBot`)){message.channel.send("Thanks for the mention!");}
            if(message.content.startsWith(`Eeveebot`)){message.channel.send("Thanks for the mention!");}
            if(message.content.startsWith(`eeveebot`)){message.channel.send("Thanks for the mention!");}
            if(message.content.statsWith(`${prefix}number`)){message.channel.send(Math.floor(Math.random()*10));}
            }
            //if(message.content.startsWith(`@EeveeBot`)){message.channel.send("Thanks for the mention!");}   
    
)

client.login(token);


/*
credit goes out to my friend taylon for helping me out with some of this code, I'm totally new at this, and needed his help. also, to the forum posts of people asking for help on some of their code.
*/