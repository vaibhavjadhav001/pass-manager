var argv = require('yargs')
    .command('adduser', 'Greets the user', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your first name goes here',
                type: 'string'
            },
            lastname: {
                demand: true,
                alias: 'l',
                description: 'Your last name goes here',
                type: 'string'
            },
			city: {
                demand: true,
                alias: 'c',
                description: 'Your city name goes here',
                type: 'string'
            },
			state: {
                demand: true,
                alias: 's',
                description: 'Your state name goes here',
                type: 'string'
            }
        }).help('help');
    })
     
    .help('help')
    .argv;
var command = argv._[0];
 
//console.log(argv);
 
if (command === 'adduser') {
	console.log('Hello ' + argv.name + ' ' + argv.lastname +'! Your City : ' + argv.city +' & Your State : ' + argv.state);
} else {
    console.log('You are using a command other than - adduser');
}