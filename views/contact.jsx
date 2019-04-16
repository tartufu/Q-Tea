var React = require("react");
var Header = require('./header');
var Navbar = require('./navbar');

class Contact extends React.Component {
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
        <body>
          <Navbar />
          <div class="homepage">
              <h1 class="text-center">Contact Us</h1>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <hr/>

                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Contact;


              // <div class="homepage-buttons">
              //     <button type="button" class="btn btn-primary btn-lg mr-2"> <a href="/login">Login as User </a></button>
              //     <button type="button" class="btn btn-secondary btn-lg"><a href="/register">Create New Account</a></button>
              // </div>