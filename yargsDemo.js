console.log('starting yargs demo');
 
var argv = require('yargs').argv;

var command = argv._[0];

//console.log(argv);
//console.log("**********************************");

if(command === 'hello' && typeof argv.name !=='undefined'){
	console.log('Hello ' + argv.name);
}
else if(command == 'hello'){
	console.log('Hello World!');
}