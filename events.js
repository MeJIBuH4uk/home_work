var event = require('events');

var emitter = new event.EventEmitter();

emitter.on('request', function() {
   console.log('Hello, World!');
});

emitter.emit('request');