var React = require("react");
var Header = require('./header');
var Navbar = require('./navbar');
var Footer = require('./footer');

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
              <p> Ordering for large corporate events or just have suggestions on how we can improve? Just fill up the form below and our staff will get in touch with you within 2 working days!</p>

            <form action="https://formspree.io/edmundteochanghao@gmail.com" method="POST">
            <div class="form-group">
                <label for="contact-name">Contact Name</label>
                <input type='text' class="form-control" name="name" placeholder="Claudia Chin" required/>

                <label for="email">Email Address</label>
                <input type='text' class="form-control" name="email" placeholder="smalltowngirl@email.com" required/>

                <label for="phone">Phone Number</label>
                <input type='number' class="form-control" name="phone" placeholder="62410241"/>

                <label for="subject">Subject Title</label>
                <input type='text' class="form-control" name="subject" placeholder="Party Order"/>

                <label for="subject">Message</label>
                <textarea class="form-control" rows="5" name="message" required></textarea>

            </div>
            <button type="submit" class="btn submit-button">Submit Enquiry</button>

            </form>
            <br/><br/>

          </div>
        </body>
        <Footer/>
      </html>
    );
  }
}

module.exports = Contact;


              // <div class="homepage-buttons">
              //     <button type="button" class="btn btn-primary btn-lg mr-2"> <a href="/login">Login as User </a></button>
              //     <button type="button" class="btn btn-secondary btn-lg"><a href="/register">Create New Account</a></button>
              // </div>