var count = 0;
var print = function() {
    count++;
    console.log('Click - ', count);
};

var event = require('events');
var emitter = new event.EventEmitter();

emitter.on('click', print);
emitter.addListener('click', print);
emitter.once('click', print);

emitter.emit('click'); // 1, 2, 3
emitter.emit('click'); // 1, 2, 3, 4, 5 .. 