var React = require("react");
var Header = require('./header');

class Login extends React.Component {
  render() {

    let orders = this.props.ccb.map (order => {
        return <div>
        <tr>
      <th scope="row">{order.order_no} </th>
      <td>{order.ref_no}</td>
      <td>{order.order_detail}</td>
      <td>{order.qty}</td>
      <td>{order.pickup_time}</td>
      <td>{order.payment}</td>
      <td>{order.fulfilment}</td>
      <td>{order.contact}</td>
    </tr>

    </div>
    });

// let orderNumber = this.props.ccb[0].order_no;
// let refNum = this.props.ccb[0].ref_no;

    // let orderNum = this.props.ccb[0].order_no;
    // let orderDetails = this.props.ccb[0].order_detail;
    // let qty = this.props.ccb[0].qty;
    // let pickupTime = this.props.ccb[0].pickup_time;
    // let orderStatus = this.props.ccb[0].status;

    return (
      <html>
        <Header/>
        <body>
          <h3>Admin BACKEND AND LIST OF TASKS!</h3>

<table class="table table-striped">
  <thead class="thead-dark ">
    <tr>
      <th scope="col">Order</th>
      <th scope="col">Ref No</th>
      <th scope="col">Order Detail</th>
      <th scope="col">Qty</th>
      <th scope="col">Pickup</th>
      <th scope="col">Payment</th>
      <th scope="col">Fulfilment</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
          {orders}
  </tbody>
</table>








        </body>
      </html>
    );
  }
}

module.exports = Login;


    // <tr>
    //   <td> </td>
    //   <td> </td>
    //   <td> </td>
    //   <td> </td>
    //   <td> </td>
    //   <td> PAID </td>
    //   <td> FULFILLED </td>
    //   <td> VOID</td>
    // </tr>