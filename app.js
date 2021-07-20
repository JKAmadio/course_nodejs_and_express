const os = require('os');

// info about current user
const user = os.userInfo();
console.log('user infos');
console.log('--------------------');
console.log(user);

// method returns the system uptime in seconds
console.log('\nsystem uptime');
console.log('--------------------');
console.log(`${os.uptime()} seconds`);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
}

console.log('\nsystem infos');
console.log('--------------------');
console.log(currentOS);
