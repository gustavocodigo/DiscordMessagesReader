
class DiscordMessagesReader {
    constructor(token) {
        this.headers = {
            "Authorization": token
        }
    }

    async read_from_channel(channel_id, before = 0) {
        
        try {
            let data = await fetch(`https://discord.com/api/v9/channels/${channel_id}/messages?before${before}`, {
                headers: this.headers
            })
            let body = await data.json()
            return body
        } catch (e) {
            throw (e)
        }
    }

    async delete_message(channel_id, message_id) {
        try {

            let data = await fetch(`https://discord.com/api/v9/channels/${channel_id}/messages/${message_id}`, {
                method: "DELETE",
                headers: this.headers
            })
        } catch (e) {
            throw (e)
        }
    }
}



const deleter = new DiscordMessagesReader(TOKEN, 0)

let messages = deleter.read_from_channel("973128434303782912", 0).then((messages) => {
    console.log(messages)
}).catch( e => {
    console.log(e)
})
