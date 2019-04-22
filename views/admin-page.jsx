var React = require("react");
var AdminHeader = require('./adminheader');

// <input type="button"/>

class Login extends React.Component {
  render() {

    let orders = this.props.ccb.map (order => {
        return <div>
        <tr>
      <th scope="row">{order.id} </th>
      <td>{order.ref_no} </td>
      <td>{order.order_detail}</td>
      <td>{order.qty}</td>
      <td>{order.pickup_date.toDateString()}</td>
      <td>{order.pickup_time}</td>


      <td>{order.payment}
          <div class="row">
            <div class="col-4">
              <form method="POST" action="/admin/payment">
                <input type="text" name="id" value={order.id} hidden="hidden"/>
                <input type="text" name="payment" value="paid" hidden="hidden"/>
                <input type="image" src="/images/checked.png"/>
              </form>
            </div>

            <div class="col-4">
              <form method="POST" action="/admin/nopayment">
                <input type="text" name="id" value={order.id} hidden="hidden"/>
                <input type="image" src="/images/cancel.png"/>
              </form>
            </div>
          </div>

      </td>


      <td>{order.fulfilment}
        <div class="row">
            <div class="col-4">
            <form method="POST" action="/admin/fulfill">
            <input type="text" name="id" value={order.id} hidden="hidden"/>
            <input type="image" src="/images/checked.png"/>
            </form>
            </div>

            <div class="col-4">
            <form method="POST" action="/admin/cancel">
            <input type="text" name="id" value={order.id} hidden="hidden"/>
            <input type="image" src="/images/cancel.png"/>
            </form>
            </div>
        </div>
      </td>


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
        <AdminHeader/>
        <body>
        <div class="admin-backend">
          <h3>Admin BACKEND AND LIST OF TASKS</h3>
            <a href="/admin/master"><button type="button" class="btn btn-primary">Master List</button></a>
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