var logger = require('events'),
    fs = require('fs'),
    date = require('./date');
var myEmitter = new logger.EventEmitter();



var dateStartLogin = "========= " + getDate + "." + getMonth + "." + getYear +  " ========\n\n";
var login = getHours + ":" + getMinutes + ":" + getSeconds + " - " + "Entered to the site =>";
    login += "\n";
var action = "Action - checked news and talk with a friend =>";
    action += "\n";
var logout = getHours + ":" + (+getMinutes + 5) + ":" + (+getSeconds + 5) + " - " + "Came out from the site .";
    logout += "\n\n================================================\n\n";



function callbackNewDay() {
   console.log(dateStartLogin);
   fs.appendFileSync('login.txt', dateStartLogin, function () {});
}
function callbackIn() {
   console.log(login);
   fs.appendFileSync('login.txt', login, function () {});
}
function callbackOut() {
   console.log(logout);
   fs.appendFileSync('login.txt', logout, function () {});
}
function callbackAction() {
   console.log(action);
   fs.appendFileSync('login.txt', action, function () {});
}



myEmitter.once('submit', callbackNewDay);
myEmitter.on("submit", callbackIn);
myEmitter.on("submit", callbackAction);
myEmitter.on("submit", callbackOut);



myEmitter.emit('submit');
myEmitter.emit('submit');
myEmitter.emit('submit');
myEmitter.emit('submit');