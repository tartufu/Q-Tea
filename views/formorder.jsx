var React = require("react");
var Header = require('./header');
var Navbar = require('./navbar');

class Home extends React.Component {
  render() {


    let data = this.props.C;
    let data2 = this.props.six;
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

            <h2 class="text-center">Bubble Tea Confirmation Reciept</h2>
            <p> {data}</p>
            <p> {data2}</p>






          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;


              // <div class="homepage-buttons">
              //     <button type="button" class="btn btn-primary btn-lg mr-2"> <a href="/login">Login as User </a></button>
              //     <button type="button" class="btn btn-secondary btn-lg"><a href="/register">Create New Account</a></button>
              // </div>


              //               <div class="form-group">
              //   <label for="exampleFormControlInput1">Email address</label>
              //   <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              // </div>