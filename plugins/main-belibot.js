let handler = async (m, { conn }) => {
const ftroli = {
    key : {
    remoteJid: '6285828764046-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'LiST PRICE JOIN GROUP', 
    orderTitle: `iniwm`,
    thumbnail: 'https://telegra.ph/file/6b4b8ae2ba7f244626a6d.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	conn.reply(m.chat, price1, ftroli)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)?$/i

module.exports = handler
