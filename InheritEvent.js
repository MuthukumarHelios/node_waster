//console.log("inherit even");
var util = require('util');
var events = require("events").EventEmitter;
//var emitter = new events.EventEmitter();
var Job = function Job(){

this.process = function(){
	job.emit('done',{completedOn: new Date()})
}}

util.inherits(Job, events);
module.exports = Job
console.log(Job);