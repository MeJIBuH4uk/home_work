"use strict";

const event = require('events');
var emitter = new event.EventEmitter();



// METHOD: .emit();
// METHOD: .removeListener(nameEvent, listener)
function listener() {
   console.log('method: on');
}

function listener2() {
   console.log('method: kek');
}

emitter.on("click", listener);
emitter.on("click", listener);
emitter.addListener("dblclick", listener2);
emitter.addListener("dblclick", listener2);
emitter.addListener("dblclick", listener2);

emitter.emit("click");
emitter.emit("dblclick");

// METHOD: listenerCount()
console.log( event.listenerCount(emitter, 'click') ); // 2

// METHOD: eventNames()
console.log("eventNames in console: " + emitter.eventNames());
var evNames = emitter.eventNames();
console.log("eventNames in variable  evNames[1]: " + evNames[1]);

// METHOD: getMaxListeners()
console.log("max listeners: " + emitter.getMaxListeners()); // 10

// METHOD: listenerCount(eventName)
console.log("listeners on event 'click' = " + emitter.listenerCount("click") + " listeners");

// METHOD: .prependOnceListener(eventName, listener)
emitter.prependOnceListener('click', function () {
   console.log('oh, we have our first user!');
});

// METHOD: .prependListener(eventName, listener)
emitter.prependListener('click', function() {
   console.log('someone connected!');
});

emitter.emit('click');

// METHOD: removeAllListeners([eventName])
emitter.removeAllListeners("click");

emitter.emit('click');

// METHOD: removeListener(eventName, listener)
function callbackA() {
   console.log('A');
   emitter.removeListener('event', callbackB);
}

function callbackB() {
   console.log('B');
}

emitter.on('event', callbackA);
emitter.on('event', callbackB);

emitter.emit('event'); // A, B
emitter.emit('event'); // A
emitter.emit('event'); // A
emitter.emit('event'); // A

// METHOD: setMaxListeners(n);
emitter.setMaxListeners(15);