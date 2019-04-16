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

    let orderNum = this.props.order_no;
    let orderDetails = this.props.order_detail;
    let qty = this.props.qty;
    let pickupTime = this.props.pickup_time;
    let orderStatus = this.props.status;

    let errorMsg = this.props.error;

    let orderSearch = function (){
            return <div>
          <p> Order Num: {orderNum} </p>
          <p> Order Details: {orderDetails} </p>
          <p> Qty: {qty} </p>
          <p> Pickup Time: {pickupTime} </p>
          <p> Order Status: {orderStatus} </p>
        </div>
    }


    return (
      <html>
        <Header/>
        <body>
          <h3>Order Search</h3>
            <form method="post" action="/search">
            <label for="id">Order No</label>
            <input type="text" name="order_no"/>
            <input type="submit" value="Submit"/>
          </form>
          <hr/>

          <p> {errorMsg} </p>
          {orderSearch()}

        </body>
      </html>
    );
  }
}

module.exports = Login;