// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC9b78e6c54fe72ab38fa0a4ca9b3909f6';
const authToken = '6b8aeefce416f245fb37de0a05adc061';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19727026042',
     to: '+6594883298'
   })
  .then(message => console.log(message.sid));