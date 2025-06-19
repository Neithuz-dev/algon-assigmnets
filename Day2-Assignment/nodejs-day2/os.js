const os=require('os');

var totalmemory=os.totalmem();
var freememory=os.freemem();

console.log(totalmemory);
console.log(freememory);

//template string
console.log(`Total Memory: ${totalmemory}`);
console.log(`Free Memory: ${freememory}`);