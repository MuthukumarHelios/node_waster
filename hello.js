console.log('hello sublime');

const events = require('events');
const emitter = new events.EventEmitter();

emitter.once('knock',function(){
	console.log('call back emitter once');
   //.oncekey word denotes the key word it indicates that the function is called when the event emitted 
});


emitter.on('knock', function(){
	console.log("callBack emitter");
});

emitter.on('knock', function(){
	console.log("calla back emitter on 2nd");
});
emitter.emit('knock');
emitter.emit('knock');