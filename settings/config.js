const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain
global.anticall = true
global.anti_delete = false

// setting
global.ownername ="Rena"
global.ownernumber = "6289529514668"
global.botname = "ChuBot"
global.thumbnail = fs.readFileSync("./settings/Haruka.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg"
global.lolkey = '64b74289b4af6ee8ec727611' //register lolhuman.xyz klo mau apikey
global.zenzkey = 'daa48458be' //register zenzapi.xyz klo mau apikey
global.limit = {
		free:20,
		premium:99999999
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
