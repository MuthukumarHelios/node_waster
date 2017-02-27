/*console.log("spawn ")
const fs = require('fs');
const process = require('child_process');

const p =  process.spawn('node', 'hello.js');

p.stdout.on('data', function(data){
	console.log("stdout:"+data);
});*/
fs = require('fs')
process = require('child_process')
var p = process.fork('node', 'hello.js')
p.stdout.on('data', function(data) {
  console.log('stdout: ' + data)
})