var React = require("react");
var Header = require('./header');
var Navbar = require('./navbar');


class Login extends React.Component {
  render() {

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
        <Navbar/>
        <body>
          <br/> <br/>
          <h3>User Login</h3>
            <form method="post" action="/userlogin">
            <label for="id">Username</label>
            <input type="text" name="username"/>

            <label for="id">Password</label>
            <input type="password" name="password"/>

            <input type="submit" value="Submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;