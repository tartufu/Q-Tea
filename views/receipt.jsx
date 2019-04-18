var React = require("react");
var Header = require('./header');
var Navbar = require('./navbar');


class Receipt extends React.Component {
  render() {

    // let contact = this.props.ccb[0].contact;
    // let refNum = this.props.ccb[0].ref_no;
    // let tweets = this.props.ccb.map(tweet => {
    //                           return <div>
    //                           <h3>User Id {tweet.user_id}</h3>
    //                           <p>{tweet.username}</p>
    //                           <p>{tweet.tweets}</p>
    //                           </div>
    //                         });

    return (
      <html>
        <Header/>
        <body>
          <Navbar />
          <div class="homepage">
              <h1 class="text-center">Order Confirmation</h1>

              <hr/>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Receipt;