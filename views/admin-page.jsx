var React = require("react");
var Header = require('./header');

class Login extends React.Component {
  render() {

    let orders = this.props.ccb.map (order => {
        return <div>
                <p> Order Num: {order.order_no} </p>
                <p> Ref Num: {order.ref_no} </p>
                <p> Order Details: {order.order_detail}</p>
                <p> Qty : {order.qty}</p>
                <p> Pickup Time: {order.pickup_time}</p>
                <p> Payment: {order.payment} </p>
                <p> Fulfilment: {order.fulfilment}</p>
                <p> Contact: {order.contact}</p>


    <tr>
      <th scope="row">qwedqwed</th>
      <td>wdqwdqwdqw</td>
      <td>Otto</td>
      <td>@mdsdfo</td>
      <td>@msdsvddo</td>
      <td>@mdo</td>
      <td>@mdx z zo</td>
      <td>@zerwdmdo</td>
    </tr>

                <br/>
        </div>
    });

let orderNumber = this.props.ccb[0].order_no;
let refNum = this.props.ccb[0].ref_no;

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
      <th scope="col">Pickup Time</th>
      <th scope="col">Payment</th>
      <th scope="col">Fulfilment</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{orderNumber}</th>
      <td>{refNum}</td>
      <td>Otto</td>
      <td>@mdsdfo</td>
      <td>@msdsvddo</td>
      <td>@mdo</td>
      <td>@mdx z zo</td>
      <td>@zerwdmdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>








          {orders}
        </body>
      </html>
    );
  }
}

module.exports = Login;