var React = require("react");
var Header = require('./header');

class Login extends React.Component {
  render() {

    let orders = this.props.ccb.map (order => {
        return <div>
        <tr>
      <th scope="row">{order.id} </th>
      <td>{order.ref_no}</td>
      <td>{order.order_detail}</td>
      <td>{order.qty}</td>
      <td>{order.pickup_date.toDateString()}</td>
      <td>{order.pickup_time}</td>
      <td>{order.payment}</td>
      <td>{order.fulfilment}</td>
      <td>{order.contact}</td>
    </tr>

    </div>
    });

    //  let testOrders = this.props.ccb.map (order => {

    //     if (order.payment === 'unpaid') {
    //         return <div>
    //             <p> {order.order_no} </p>
    //         </div>
    //     }
    // });

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
        <div class="admin-backend">
          <h3>Admin BACKEND AND LIST OF TASKS!</h3>

          <form method="POST" action="/admin/update">
            <label for="Order">Order No</label>
            <input type="text" name="order_no"/>
                  <br/>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="payment"value="paid"/>
                  <label class="form-check-label" for="exampleRadios1">Payment Made </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="fulfilment" value="fulfilled"/>
                  <label class="form-check-label" for="exampleRadios2"> Order Fulfilled </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="fulfilment" value="void" />
                  <label class="form-check-label" for="exampleRadios3"> Order Cancel </label>
                </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

          <br/>

            <table class="table table-striped">
              <thead class="thead-dark ">
                <tr>
                  <th scope="col">Order</th>
                  <th scope="col">Ref No</th>
                  <th scope="col">Order Detail</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Pickup Date</th>
                  <th scope="col">Pickup Time</th>
                  <th scope="col">Payment</th>
                  <th scope="col">Fulfilment</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                      {orders}
              </tbody>
            </table>

        </div>
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