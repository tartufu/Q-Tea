var React = require("react");
var Header = require('./header');
var Navbar = require('./navbar');
var Footer = require('./footer');


var randomstring = require("randomstring");
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


class Home extends React.Component {
  render() {

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
                <p> For large orders please contact us <a href="/contact">here</a> or drop us a text at +65 9123 4567!</p>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>

            </form> <br/> <br/> <br/>


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