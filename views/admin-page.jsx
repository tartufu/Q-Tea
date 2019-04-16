var React = require("react");
var Header = require('./header');

class Login extends React.Component {
  render() {

    // let tweets = this.props.ccb.map(tweet => {
    //                           return <div>
    //                           <h3>User Id {tweet.user_id}</h3>
    //                           <p>{tweet.username}</p>
    //                           <p>{tweet.tweets}</p>
    //                           </div>
    //                         });

    let orderNum = this.props.ccb[0].order_no;
    let orderDetails = this.props.ccb[0].order_detail;
    let qty = this.props.ccb[0].qty;
    let pickupTime = this.props.ccb[0].pickup_time;
    let orderStatus = this.props.ccb[0].status;

    return (
      <html>
        <Header/>
        <body>
          <h3>Admin BACKEND AND LIST OF TASKS!</h3>
          <p> Order Num: {orderNum} </p>
          <p> Order Details: {orderDetails} </p>
          <p> Qty: {qty} </p>
          <p> Pickup Time: {pickupTime} </p>
          <p> Order Status: {orderStatus} </p>
        </body>
      </html>
    );
  }
}

module.exports = Login;