const net = require('net');
const server = net.createServer(function listener (socket){
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
//Add 0 for 1 to 9
if (month<10) month = "0"+month;
if (day<10) day = "0"+day;
if (hours<10) hours = "0"+hours;
if (minutes<10) minutes = "0"+minutes;
var formattedDate = year+"-"+month+"-"+day+" "+hours+":"+minutes;
socket.write(formattedDate+"\n");
socket.end();

})
server.listen(process.argv[2]);