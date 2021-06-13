const discord = require('discord.js');
const client = new discord.Client();

client.login('ODUzMTcyNjA2NjE4Njk3NzQ4.YMRg6A.qE524AMW76a3q8UAXeqOoWDcsu0');
client.on('message', message => {
	const prefixes = ['C'];
  	const prefix = prefixes.find(p => message.content.startsWith(p));
    	if (!prefix) return;
      })
      client.on('message', message => {
        if (message.content === 'Cping') {
          message.channel.send('Loading data').then (async (msg) =>{
              msg.delete()
                  message.channel.send(`🏓Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
                    })
                      }
                      });
                      client.on('message', message => {
                        if (message.content === "Cinvite") {
                            message.channel.send("https://discord.com/oauth2/authorize?client_id=853172606618697748&scope=bot&permissions=8")
                              }
                              }) 
                               client.on('message', message => {
                                   if (message.content == ('Csay')
                                       .startsWithchannel.sen(exampleEmbed)) {
                                               if (message.author.bot) return;
                                                       const SayMessage = message.content.slice(6).trim();
                                                               message.channel.send(SayMessage)
                                                                       message.channel.send("" + ` `)
                                                                           }
                                                                            }) 

                                                                            