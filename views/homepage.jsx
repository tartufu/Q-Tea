var React = require("react");
var Header = require('./header');
var Navbar = require('./navbar');
var Footer = require('./footer');
var randomstring = require("randomstring");

class Home extends React.Component {
  render() {

    var testString = randomstring.generate({
      length: 4,
      charset: 'alphabetic'
    });

    var testNumber = randomstring.generate({
      length: 4,
      charset: 'numeric'
    });

    testString = testString.toUpperCase();
    // console.log(testString);
    // console.log(testNumber);

    let refNum = testString + testNumber;
    console.log(refNum);

    let username = this.props.username;
    let loginGreeting = `What would you like to have today?`;

    if (username) {
        loginGreeting = `What would you like to have today ${username}?`;
    };

    return (
      <html>
        <Header/>
        <body>
          <Navbar />
          <div class="homepage">
              <h1 class="text-center">Q-Tea</h1>
              <p> Skip the hassle of 20 min queue times! Just key in your order at the form below and drop by during your pickup timeslot and collect your orders with minimal waiting!</p>

              <hr/>

              <h2 class="text-center"> {loginGreeting}</h2>


              <div class="bd-example">
              <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="images/boba3.png" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Bubble Tea A</h5>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="images/boba1.png" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Bubble Tea B</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="images/boba2.png" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Bubble Tea C</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <br/>
            <h2 class="text-center">Bubble Tea Order Form</h2>
            <form method="POST" action="/formorder">
              <div class="form-group">

                <input type="text" class="form-control" name="ref_no" value={refNum} hidden/>

                <label for="exampleFormControlSelect1">Bubble Tea Type</label>
                <select class="form-control" id="exampleFormControlSelect1" name="order_detail">
                  <option>Bubble Tea A</option>
                  <option>Bubble Tea B</option>
                  <option>Bubble Tea C</option>
                </select> <br/>

                <label for="exampleFormControlSelect1">Bubble Tea Qty</label>
                <select class="form-control" id="exampleFormControlSelect1" name="qty">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>

              <div class="form-row">

              <div class="form-group col-md-6">
                <label for="exampleFormControlInput1">Pick Up Date</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" name="pickup_date" required/>
              </div>
              <div class="form-group col-md-6">
                <label for="exampleFormControlSelect1">Pick Up Time</label>
                <select class="form-control" id="exampleFormControlSelect1" name="pickup_time">
                  <option>8am - 9am</option>
                  <option>12pm - 1pm</option>
                  <option>6pm - 7pm</option>
                </select>
              </div>

              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Contact Number</label>
                    <div class="form-row">
                      <div class="col-1">
                        <input type="text" class="form-control" value="+65" readonly="readonly"/>
                      </div>

                      <div class="col-11">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" name="contact" maxlength='8' minlength='8' required/>
                      </div>
                    </div>
              </div>

                <input type="text" class="form-control" name="payment" value="unpaid" hidden/>
                <input type="text" class="form-control" name="fulfilment" value="pending" hidden/>


              <div>
                <p> For large orders please contact us <a href="/contact" class="contact-button">here</a> or drop us a text at +65 9123 4567!</p>
              </div>

              <button type="submit" class="btn submit-button">Submit</button>

            </form>

          <br/> <br/>




          </div>




        </body>

          <Footer/>

      </html>
    );
  }
}

module.exports = Home;


            // <form method="POST" action="/formorder">
            //   <div class="form-group">
            //     <input type="hidden" class="form-control" id="exampleFormControlInput1" Value="Bubble Tea A" name="Bubble Tea"/>
            //     <label for="exampleFormControlSelect1">Bubble Tea A</label>
            //     <select class="form-control" id="exampleFormControlSelect1" name="A">
            //       <option>0</option>
            //       <option>1</option>
            //       <option>2</option>
            //       <option>3</option>
            //       <option>4</option>
            //       <option>5</option>
            //       <option>6</option>
            //       <option>7</option>
            //       <option>8</option>
            //       <option>9</option>
            //       <option>10</option>
            //     </select>
            //   </div>

            //   <div class="form-group">
            //     <input type="hidden" class="form-control" id="exampleFormControlInput1" Value="Bubble Tea B" name="Bubble Tea B"/>
            //     <label for="exampleFormControlSelect1">Bubble Tea B</label>
            //     <select class="form-control" id="exampleFormControlSelect1" name="B">
            //       <option>0</option>
            //       <option>1</option>
            //       <option>2</option>
            //       <option>3</option>
            //       <option>4</option>
            //       <option>5</option>
            //       <option>6</option>
            //       <option>7</option>
            //       <option>8</option>
            //       <option>9</option>
            //       <option>10</option>
            //     </select>
            //   </div>

            //   <div class="form-group">
            //      <input type="hidden" class="form-control" id="exampleFormControlInput1" Value="Bubble Tea C" name="Bubble Tea C"/>
            //     <label for="exampleFormControlSelect1">Bubble Tea C</label>
            //     <select class="form-control" id="exampleFormControlSelect1" name="C">
            //       <option>0</option>
            //       <option>1</option>
            //       <option>2</option>
            //       <option>3</option>
            //       <option>4</option>
            //       <option>5</option>
            //       <option>6</option>
            //       <option>7</option>
            //       <option>8</option>
            //       <option>9</option>
            //       <option>10</option>
            //     </select>
            //   </div>

            //   <div class="form-row">

            //   <div class="form-group col-md-6">
            //     <label for="exampleFormControlInput1">Pick Up Date</label>
            //     <input type="date" class="form-control" id="exampleFormControlInput1" name="D"/>
            //   </div>
            //   <div class="form-group col-md-6">
            //     <label for="exampleFormControlSelect1">Pick Up Time</label>
            //     <select class="form-control" id="exampleFormControlSelect1" name="E">
            //       <option>8am - 9am</option>
            //       <option>12pm - 1pm</option>
            //       <option>6pm - 7pm</option>
            //     </select>
            //   </div>

            //   </div>

            //   <div class="form-group">
            //     <label for="exampleFormControlInput1">Contact Number</label>
            //     <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" name="six"/>
            //   </div>

            //   <button type="submit" class="btn btn-primary">Submit</button>

            // </form>


            //             <form method="POST" action="/test">
            // <input type="text" name="test1" value="test2" hidden="hidden"/>
            // <input type="image" src="/images/checked.png"/>
            // <p> TEST</p>
            // </form>