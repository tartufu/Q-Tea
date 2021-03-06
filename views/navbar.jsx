var React = require("react");


class Navbar extends React.Component {
  render() {

    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a class="navbar-brand" href="/">Q-Tea</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="/about">About</a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="/contact">Contact</a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="/userlogin">Login</a>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0" method="POST" action="/search">
      <input class="form-control mr-sm-2" type="search" placeholder="Order Search" aria-label="Search" name="ref_no"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    );
  }
}

module.exports = Navbar;