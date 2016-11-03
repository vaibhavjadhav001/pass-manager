console.log('starting password manager');
 
var storage = require('node-persist');
storage.initSync();
 
// account.name Facebook
// account.username User12!
// account.password Password123!
 
function createAccount (account) {
    var accounts = storage.getItemSync('accountsApp');
 
    if (typeof accounts === 'undefined') {
        accounts = [];
    }
 
    accounts.push(account);
    storage.setItemSync('accountsApp', accounts);
 
    return account;
}
 
function getAccount (accountName) {
    var accounts = storage.getItemSync('accountsApp');
    var matchedAccount;
 
    accounts.forEach(function (account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    });
 
    return matchedAccount;
}
 
 createAccount(
 
 {
    name: 'facebook',
    username: 'someemail@facebook.com',
    password: 'Password1234!',
	city: 'Pune',
	state: 'MH'
 },
 
{
    name: 'gmail',
    username: 'someemail@gmail.com',
    password: 'Password1234!',
	city: 'Nagpur',
	state: 'MH'
 },
 
 {
    name: 'twitter',
    username: 'someemail@facebook.com',
    password: 'Password1234!',
	city: 'Mumbai',
	state: 'MH'
 }
  
 );
 
var twitterAccount = getAccount('facebook');
console.log(twitterAccount);