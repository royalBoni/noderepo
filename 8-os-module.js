// system module
//the os module

const os = require('os')

//getting user info using the os module and userInfo method
const user = os.userInfo()
console.log(user);

// getting the system uptime in seconds using the os module and the utime method

console.log(`the uptime for this system is ${os.uptime()}`)

// using the type,release, totalMem and freeMem method of the os module

const currentOs ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);