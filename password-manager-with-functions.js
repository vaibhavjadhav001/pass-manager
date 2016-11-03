console.log("starting password manager");

var storage = require("node-persist");

storage.initSync();

storage.setItemSync('accounts',	[	{
									username:'Asreet',
									balance:100
									},
									{
									username:'Vaibhav',
									balance:500
									},
									{
									username:'Amit',
									balance:200
									}
								]
					);
					
var myAccounts = storage.getItemSync('accounts');	

myAccounts.push(
					{
					username:'Rahul',
					balance:800	
					}
				);	
				
console.log(myAccounts);