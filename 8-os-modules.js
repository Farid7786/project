const os = require('os');
console.log(os.userInfo())
console.log(`the user uptime is : ${os.uptime()}`);
const currentos= {
    name : os.type(),
    release:os.release(),
    totalmem :  os.totalmem(),
    freemem:os.freemem()
}
/*console.log(currentos)
require('./7-mind-grenade')
const names = require('./names')
const sayhi = require('./utils')
 sayhi('Susan')
 sayhi(names.jhon)
 sayhi(names.peter)*/