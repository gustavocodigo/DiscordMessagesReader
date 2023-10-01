# DiscordMessagesReader
read messages and id from a especific channel in a givem channel id and message count.
# EXAMPLE


```

const reader = new DiscordMessagesReader(TOKEN)

let messages = reader.read_from_channel("1158181887802605621", 50).then((messages) => {
    console.log(messages) //outputs a json
}).catch( e => {
    console.log(e)
})

```

it returns an array of objects containing the messages.

![image](https://github.com/gustavocodigo/DiscordMessagesReader/assets/108258194/15831ef9-42e6-476c-99f3-a6e332d2da4a)

