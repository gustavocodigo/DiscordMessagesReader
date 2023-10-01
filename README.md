# DiscordMessagesReader
read messages and id from a especific channel in a givem channel id and message count.


## It consume the discord api with HTTP so it dont need additional dependencies.

it uses the fetch to make the request.

# EXAMPLE




the code gets 50 by 50 messages.
```

const reader = new DiscordMessagesReader(TOKEN)

let messages = reader.read_from_channel("1158181887802605621", 0).then((messages) => {
    console.log(messages) //outputs a json
}).catch( e => {
    console.log(e)
})

```

it returns an array of objects containing the messages.

![image](https://github.com/gustavocodigo/DiscordMessagesReader/assets/108258194/15831ef9-42e6-476c-99f3-a6e332d2da4a)



```

const reader = new DiscordMessagesReader(TOKEN)



let messages = reader.read_from_channel("1158181887802605621", 0).then((messages) => {
    console.log(messages.lentgth) //outputs the length of last
}).catch( e => {
    console.log(e)
})

```


To get previous messages last you can pass the offset param in the `before`

 reader.read_from_channel("1158181887802605621", 0) // last 50 messages
 
 reader.read_from_channel("1158181887802605621", 50) // more 50 previous messages
 
 reader.read_from_channel("1158181887802605621", 100) // more 50 previous messages
 
Now you have 150 messages.







## Running

you can run the example wth node:
```
node index.js
```

# Warning !!
It will be interesting if you use a sleep between each request to avoid ban or block ip by request ip:
if you add an request of about 1000ms delay it will be safe.


# SelfBots goes against discord TOS so use it at your own risk.
