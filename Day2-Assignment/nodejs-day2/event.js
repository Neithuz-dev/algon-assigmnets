const EventEmitter=require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged',(arg)=>{//e ,arg
    console.log('Listner called',arg);
});

const  log= require('./url');
log('message');