var date = new Date();

global.getDate    = date.getDate();
global.getMonth   = date.getMonth();
global.getHours   = date.getHours();
global.getMinutes = date.getMinutes();
global.getSeconds = date.getSeconds();
global.getYear    = date.getFullYear();

(getDate    < 10) ? getDate    = "0" + getDate    : getDate;
(getMonth   < 10) ? getMonth   = "0" + getMonth   : getMonth;
(getHours   < 10) ? getHours   = "0" + getHours   : getHours;
(getSeconds < 10) ? getSeconds = "0" + getSeconds : getSeconds;
(getMinutes < 10) ? getMinutes = "0" + getMinutes : getMinutes;