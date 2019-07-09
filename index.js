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
    
//thank you, todd, lord and savior
function sky(usernamee){
                
}


    //borrowed script to get username of poster, used for the mini RP
    /*user = message.member;
    user = user.toString();
    if (user.includes("!")) {
        user = user.split("!")[1].split(">")[0];
    } else {
        user = user.split("@")[1].split(">")[0];
    }
    username = client.users.get(user).username

    world_dict[username];*/

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
          /*  if(message.content.startsWith(`${prefix}rp`)){
                //ha. e rp.. unintentional dirty joke.
                if(world_dict[username]==null || world_dict[username]==0){
                    world_dict[username] = 1;
                    message.channel.send("You wake up in a cabin in the woods, and look around you. It's snowing lightly out. You realize there's no food in the cabin, and that you need to go find some food, so you put on your jacket and step outside. To your left is an open field, in front of you is a path to a river, which you can here rushing along, and to your right is a thick forrest. what direction do you decide to go?");
                    
                }else if(world_dict[username]==1){
                    world_dict[username] = 2;
                    message.channel.send("You look to your left briefly, then to your right. You realize that with the snow, there won't be any real prey anywhere, and decide to go to the river to try to catch some fish.");
                    message.channel.send("You soon reach the river, and look in. you see some fish swimming around. Do you want to jump in here and try to catch them by hand, or look around to try to make a fishing pole?");
                    
                }else if(world_dict[username]==2){
                    world_dict[username] = 3;
                    message.channel.send("You start to look around, but soon after your hunger gets the best of you, and you jump right in to try to catch the fish, most of them swimming a bit away, but a few staying. Do you want to dive to catch one, or wait for them to come back?");
                    
                }else if(world_dict[username]==3){
                    world_dict[username] = 4;
                    message.channel.send("you pause for a moment, and think, but just a moment before your hunger gets the best of you again, and you dive down to try and catch some fish, but you end up catching a rock with your foot and start to drown. do you want to try to swim ashore, or acccept your fate?");
                    
                }else if(world_dict[username] ==4){
                    world_dict[username] = 0;
                    message.channel.send("You try to swim back to shore, before starting to lose hope. you do, however, manage to make it, laying there for a bit. Your vision slowly fades out to back, and before you know it, you start to come back to\n..\n..\n..\n..\n..");
                    message.channel.send("you look around you; You are sitting in a cart, bound. The person across from you starts to talk. He says \"Hey, you. You're finally awake. You were trying to cross the border, right? Walked right into that Imperial ambush, same as us, and that thief over there.\"")
                    
                }
            
                }
            }*/
            if(message.content.statsWith(`${prefix}number`)){message.channel.send(Math.floor(Math.random()*10))}
            //if(message.content.startsWith(`@EeveeBot`)){message.channel.send("Thanks for the mention!");}   
    
)

client.login(token);


/*
credit goes out to my friend taylon for helping me out with some of this code, I'm totally new at this, and needed his help. also, to the forum posts of people asking for help on some of their code.
*/