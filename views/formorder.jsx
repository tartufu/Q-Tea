var React = require("react");
var Header = require('./header');
var Navbar = require('./navbar');

class Home extends React.Component {
  render() {

    let refNum = this.props.ref_no;
    let orderDetails = this.props.order_detail;
    let qty = this.props.qty;
    let pickupDate = this.props.pickup_date;
    let pickupTime = this.props.pickup_time;
    let contact = this.props.contact;
    let payment = this.props.payment;
    let fulfilment = this.props.fulfilment;

// { ref_no: 'HKUI9112',
//   order_detail: 'Bubble Tea A',
//   qty: '7',
//   pickup_date: '2019-04-17',
//   pickup_time: '6pm - 7pm',
//   contact: '2312e3123',
//   payment: 'unpaid',
//   fulfilment: 'pending' }

    return (
      <html>
        <Header/>
        <body>
          <Navbar />
          <br/> <br/>
          <div class="order-cart">


            <h2 class="text-center">Bubble Tea Order Cart</h2>
            <p> Order: {orderDetails}</p>
            <p> Qty: {qty}</p>
            <p> Pickup Date: {pickupDate}</p>
            <p> Pickup Time: {pickupTime}</p>



            <form method="POST" action="/formorder/receipt">
                <input type="text" class="form-control" name="ref_no" value={refNum} hidden/>
                <input type="text" class="form-control" name="order_detail" value={orderDetails} hidden/>
                <input type="text" class="form-control" name="qty" value={qty} hidden/>
                <input type="text" class="form-control" name="pickup_date" value={pickupDate} hidden/>
                <input type="text" class="form-control" name="pickup_time" value={pickupTime} hidden/>
                <input type="text" class="form-control" name="contact" value={contact} hidden/>
                <input type="text" class="form-control" name="payment" value={payment} hidden/>
                <input type="text" class="form-control" name="fulfilment" value={fulfilment} hidden/>
            <button type="submit" class="btn btn-primary">Confirm Order</button>
            </form>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;