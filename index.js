class DiscordMessagesReader {
    constructor(token) {
        this.headers = {
            "Authorization": token
        }
    }

    async read_from_channel(channel_id, count) {
        let params = ""
        try {
            let data = await fetch(`https://discord.com/api/v9/channels/${channel_id}/messages${params}`, {
                headers: this.headers
            })
            let body = await data.json()
            return body
        } catch (e) {
            throw (e)
        }
    }
}


const reader = new DiscordMessagesReader(TOKEN)

let messages = reader.read_from_channel("884446033558503466", 50).then((messages) => {
    console.log(messages) //outputs a json
}).catch( e => {
    console.log(e)
})
