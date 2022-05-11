const { Client, Intents } = require('discord.js')
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
})
const triggerWords = ['ui']
const w_word = ["dan ba" , "woman" , "women"]
const mySecret = process.env['TOKEN']
var uibeamlist = ["UiBeamu#1683", "UiBeamu#0999", "UiBeamu#7090", "UiBeamu#2400", "UiBeamu#3680", "UiBeamu#9348", "UiBeamu#2692", "Minh#2000"]

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', (message) => {
  if (message.author.bot) return false;

  triggerWords.some((ui) => {
  if (message.content.toLowerCase().includes(ui)) {
    if (message.author.bot) return
     message.reply("beamu")
  }})
  
  if (message.content.toLowerCase().includes("day di ong chau")) {
    message.reply("qua dau tomi xiaomi cua chau dau chu")
  }
  if (message.content.toLowerCase().includes("tet ve")) {
    message.reply("nho on boac H")
  }
  if (message.content.toLowerCase().includes("md")) {
    message.reply("<@307146807765630977>")
  }
  if (message.content.toLowerCase().includes("hd")) {
    message.reply("<@972697678985187328>")
  }
  if (message.content.toLowerCase().includes("hcm")) {
    message.reply("umk")
  }
  if (message.content.toLowerCase().includes("ai da am sat h")) {
    message.reply("<@279268972644401152>")
  }
  if (message.content.toLowerCase().includes("tnm")) {
    message.reply("<https://dnuni.fpt.edu.vn/sv-dai-hoc-fpt-lam-web-cung-cap-va-tu-van-dich-vu-lap-ke-hoach-cho-dam-cuoi/>")
  }
  if (["fonk" , "fonke" , "fonkkien", "fonkcan"].includes(message.content.toLowerCase())) {
    message.reply({ content: ":flushed:", files: ['https://i.imgur.com/ZziKxBx.jpeg'] })
  }
  if (message.content.toLowerCase().includes("top 10 ho")) {
    message.reply({ content: ":sob:", files: ['https://cdn.discordapp.com/attachments/540516200086765572/964551703686950942/unknown.png'] })
  }
  if (message.content.toLowerCase().includes("toa do")) {
    message.reply("21.036909803184756, 105.83466133372835")
  }
  if (message.content.toLowerCase().includes("tvnt")) {
    message.reply({ content: ":sob:", files: ['https://cdn.discordapp.com/attachments/540516200086765572/926767386768572457/2cb.png'] })
  }
  if (["dan ba" , "woman" , "women"].includes(message.content.toLowerCase())) {
    message.reply({ files: ['https://cdn.discordapp.com/attachments/540516200086765572/925270392900317214/unknown.jpg'] })
  }
  if (message.content.toLowerCase().includes("lugowo")) {
    message.reply({ files: ['https://cdn.discordapp.com/attachments/501744668636086273/973824059701854248/x.png'] })
  }
  if (message.content.toLowerCase().includes("boac hu")) {
    message.reply({ content: "tao", files: ['https://cdn.discordapp.com/attachments/824521030932365332/973829003465089044/unknown.png'] })
  }
  if (message.content.toLowerCase().includes("danh sach ui bim")) {
    message.reply(uibeamlist.map((i) => `UB${uibeamlist.indexOf(i)+1.0}. ${i}`).join("\n"))
  }
  if (message.author.id === '270509905461379072') {
     message.react('🐒')
  }
  if (message.author.id === '325186877130932227') {
     message.react('😭')
  }
})

const userID = "252065892974723073"

client.on('messageCreate', function(message) {
  if (message.author.id === userID) {
  if (message.content.toLowerCase().includes("vk")) 
        message.reply('ck <:sob:973864805528109056>')
    }
  if (message.author.id === '321913556712947713') {
  if (message.content.toLowerCase().includes("toi")) 
        message.reply("giau` nhat da nang sir")
  }
})

client.login(process.env.TOKEN)