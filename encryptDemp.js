console.log('starting crypto demo');
 
var crypto = require('crypto-js');

var secreMessage = {
	name : 'Vaibhav',
	secretName:'007'
};

var secretKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secreMessage),secretKey);
console.log('encrypted Message is : ' + encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('decrypted Message is : ' + decryptedMessage.name);
console.log('decrypted Message is : ' + decryptedMessage.secretName);
