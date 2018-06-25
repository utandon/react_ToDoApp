var React = require('react');
var createReactClass = require('create-react-class');
//CSS required
require('./css/addItem.css');

//creating AddItem component which is child component to facilitate the add functionality
var AddItem = createReactClass({
  render: function(){
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" ref="newItem" />
        <input type="submit" value="Add me" />
      </form>
    );
  },

  //custom functions of nested component AddItem
  handleSubmit: function(e) {
    e.preventDefault();
    // console.log(this.refs.newItem.value);
    this.props.onAdd(this.refs.newItem.value);//we use input refs to grab the value of input type=text
  }
});
module.exports = AddItem;
