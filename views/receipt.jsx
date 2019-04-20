var React = require("react");
var Header = require('./header');
var Navbar = require('./navbar');

class Receipt extends React.Component {
  render() {

        // let data = {
        //     refNum: request.body.ref_no,
        //     orderDetail: request.body.order_detail,
        //     qty: request.body.qty,
        //     pickupDate: request.body.pickup_date,
        //     pickupTime: request.body.pickup_time,
        //     contact: request.body.contact,
        //     payment: request.body.payment,
        //     fulfilment: request.body.fulfilment,
        //     contact: request.body.contact
        // }


    let refNum = this.props.refNum;
    let orderDetail = this.props.orderDetail;
    let qty = this.props.qty;
    let pickupDate = this.props.pickupDate;
    let pickupTime = this.props.pickupTime;
    let contact = this.props.contact;


// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
// THIS WILL SEND A CONFIRMATION SMS
const accountSid = 'AC9b78e6c54fe72ab38fa0a4ca9b3909f6';
const authToken = '6b8aeefce416f245fb37de0a05adc061';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Q-TEA: Your reference number is ' + refNum,
     from: '+19727026042',
     to: '+65' + contact
   })
  .then(message => console.log(message.sid));


    return (
      <html>
        <Header/>
        <body>
          <Navbar />
          <div class="homepage">
              <h1 class="text-center">Order Confirmation</h1>

              <hr/>

              <h2> Ref No: {refNum} </h2>
              <p> Order Details: {orderDetail} </p>
              <p> Qty: {qty}</p>
              <p> pickup Date: {pickupDate} </p>
              <p> Pickup Time: {pickupTime} </p>
              <br/>

              <p> Please make payment via PayLah to +65 9123 4567 for the staff to start preparing your order!</p>
              <p> Important: Please contact us if you have not recieved a confirmation SMS with your Reference Number within 15 mins!</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Receipt;