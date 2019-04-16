var React = require("react");
var Header = require('./header');

class Login extends React.Component {
  render() {

    let orders = this.props.ccb.map (order => {
        return <div>
                <p> Order Num: {order.order_no} </p>
                <p> Order Details: {order.order_detail}</p>
                <p> Qty : {order.qty}</p>
                <p> Pickup Time: {order.pickup_time}</p>
                <p> Order Status: {order.status}</p>
                <br/>
        </div>

    });

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
          {orders}
        </body>
      </html>
    );
  }
}

module.exports = Login;