/*****************************IMPORTING ALL REQUIRED FILES****************************/
var React = require('react');
var createReactClass = require('create-react-class');
import {Link} from 'react-router-dom';
//CSS required
require('./css/about.css')

/*****************************CREATING AboutMe COMPONENT****************************/
var AboutMe = createReactClass({
  render: function() {
    return(
      <div>
        <h1>About Me</h1>
        <form action="https://codepen.io/utandon/full/vjLPLj/">
          <input type="submit" value="Checkout My Portfolio" />
        </form>
        <p>Go back to <Link to={'/'}>Home Page</Link></p>
      </div>
    );
  }
});
module.exports = AboutMe;
