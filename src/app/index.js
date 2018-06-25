/*****************************IMPORTING ALL REQUIRED FILES****************************/

var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
import {BrowserRouter as Router, Route, browserHistory, Link} from 'react-router-dom';
//Modules required
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var AboutMe = require('./about');
//CSS required
require('./css/index.css');

/********************************SETTING UP ROUTING********************************/

var App = createReactClass({
  render: function() {
    return(
      <Router history={browserHistory}>
        <div>
          <Route exact path={'/'} component={TodoComponent}></Route>
          <Route path={'/about'} component={AboutMe}></Route>
        </div>
      </Router>
    );
  }
});
/*****************************CREATING PARENT COMPONENT****************************/

var TodoComponent = createReactClass({

  getInitialState: function(){
    return {
      todos: ['Wake up','Feed Java and Mocha', 'Take Java to walk', 'Play with Mocha','Eat', 'Add other fun todos']
    }
  },

  render: function(){
    var todoItems = this.state.todos.map(function(item, index){
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete} />
      );
    }.bind(this));
    return (
      <div id="todo-list">
        <h1>To-Do List</h1>
        <p>List of items I need to do today:</p>
        <ul>{todoItems}</ul>
        <AddItem onAdd={this.onAdd} />
        <p>Checkout the <Link to={'/about'}>About Me</Link> page for more information :)</p>
      </div>
    );
  },

  //Custom methods for attaching delete and add functionality to our TO-DO list app
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  }
});

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
