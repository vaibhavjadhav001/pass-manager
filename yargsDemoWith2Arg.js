console.log('starting yargs demo');
 
var argv = require('yargs').argv;

var command = argv._[0];

//console.log(argv);
//console.log("**********************************");

if(command === 'hello' && typeof argv.firstname !=='undefined' && typeof argv.lastname ==='undefined'){
	console.log('Hello ' + argv.firstname);
}
else if(command === 'hello' && typeof argv.firstname !=='undefined' && typeof argv.lastname !=='undefined'){
	console.log('Hello ' + argv.firstname +' '+ argv.lastname);
}
else if(command == 'hello'){
	console.log('Hello World!');
}