var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "! نقدم لك خدمات بجودة عالية وأسعار تنافسية",
assets : {
large_image : "sosell",
large_text : "𝑺𝒐𝑺𝒆𝒍𝒍" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "𝑺𝒐𝑺𝒆𝒍𝒍. 0.3k" , url : "https://discord.gg/sosell"}]
}
})
})
client.login({ clientId : "1090662364178829373" }).catch(console.error);