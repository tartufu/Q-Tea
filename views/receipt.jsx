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
              <p> pickupDate: {pickupDate} </p>
              <p> Pickup Time: {pickupTime} </p>
              <br/>

              <p> Please make payment via PayLah to +65 9123 4567 for the staff to start preparing your order!</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Receipt;