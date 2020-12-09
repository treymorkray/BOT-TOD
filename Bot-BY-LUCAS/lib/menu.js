const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
PROSESING`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Sebelum make, bot nya siapa tau kakak pengen donasi.
Bisa lewat
DANA : *081546086159*
GOPAY : *081546086159*

Ahiya Lur.Sebelum Transaksi Harap Gunakan #listripper. Agar Tidak Tertipu Lur:)

PERATURAN BOT.
DILARANG KERAS TELFON/VC ATAU KAKAK DIBLOKIR, KARNA BOT NYA UDAH DI PROGRAM OTOMATIS.

┏ ☾*LUCAS.SHOP BOT*☽!✨

Creator:
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*

Islam:
-❥ *${prefix}infosurah*
-❥ *${prefix}surah*
-❥ *${prefix}tafsir*
-❥ *${prefix}ALaudio*
-❥ *${prefix}jsolat*

JB Fitur:
-❥ *${prefix}sistemberber*
-❥ *${prefix}listripper*

Fun Menu (Group):
-❥ *${prefix}simisimi*
-❥ *${prefix}katakasar*
		┷-❥ *${prefix}klasmen*

Download:
-❥ *${prefix}tiktok*
-❥ *${prefix}insta*
-❥ *${prefix}ytmus*
-❥ *${prefix}ytvid*

Primbon:
-❥ *${prefix}artinama*
-❥ *${prefix}cekjodoh*

Search Any:
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}play*
-❥ *${prefix}whatanime*

Random Teks:
-❥ *${prefix}fakta*
-❥ *${prefix}pantun*
-❥ *${prefix}katabijak*
-❥ *${prefix}quote*

Random Images:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

Lain-lain:
-❥ *${prefix}tts*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}ceklokasi*
-❥ *${prefix}shortlink*
-❥ *${prefix}bapakfont*

Tentang Bot:
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
-❥ *${prefix}ban* - banned
-❥ *${prefix}bc* - promosi
-❥ *${prefix}leaveall* - keluar semua grup
-❥ *${prefix}clearall* - hapus semua chat

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}tagall*
-❥ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
-❥ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

//texs ripper
exports.textRipper = () => {
    return `
⚠ [ *List No Ripper* ] ⚠ 
Berikut adalah List No ripper Yang Sudah Meresahkan Grub JB!

-❥ @+62 882-3353-9301
-❥ 

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *NOTE* ] ⚠
*FITUR INI UNTUK MENGHINDARI TERJADINYA PENIPUAN LUR. ADA RIPPER?,KIRIM BUKTI KE KONTAK OWNER LUR(BUKTI KUAT BESERTA SS).
GAPUNYA KONTAK OWNER? KETIK #creator.
NANTI AKAN SAYA LISTKAN NOMERNYA DISINI*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

DANA : *081546086159*
GOPAY : *081546086159*

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -Lucas.Shop`
}
