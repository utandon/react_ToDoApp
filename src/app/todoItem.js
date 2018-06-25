var React = require('react');
var createReactClass = require('create-react-class');
//CSS required
require('./css/todoItem.css');

//creating TodoItem component which renders the list items to our page
var TodoItem = createReactClass({
  render: function(){
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}>X</span>
        </div>
      </li>
    );
  },
  //custom functions of nested component TodoItem
  handleDelete: function() {
    this.props.onDelete(this.props.item);
  }
});

module.exports = TodoItem;
