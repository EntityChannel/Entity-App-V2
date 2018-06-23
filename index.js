const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
const prefix = "!";

client.on("ready", () => {
  // This event will run if the bot st arts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});


client.on('message', message => { // when message is sent
  if (message.content === "!Entity"){ // when message is !bot
      message.author.sendMessage("Hey how is it going, Welcome to the channel! We hope your stay is going as expected. :smile:"); // send running message in DM to sender
  }
});



client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
  }

if(message.content === prefix + "pubg/map") {
        message.reply("under const..");
      } else if(userData.level < 10) {
      message.reply("You do not have access to the map extension package.")
}

  if (message.content === prefix + "pubg") {
    if(userData.level === 10) {
      message.reply(`Your access level is ${userData.level}.`);
      
    } 

    if(userData.level === 9) {
      message.reply(`Your access level is ${userData.level}.`);

    }

    

  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });

});


client.login("NDUyNTgzMTk3NjYyOTA0MzQx.DfcNuA.2jT9qHOVSraiznJubLj6IqvpSZg");