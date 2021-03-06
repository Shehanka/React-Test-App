import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = (e) => {

    } 

  render() {
      const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <h3>
        <input 
        type="checkbox" 
        onChange={this.props.markComplete.bind(this, id)}
        /> {' '}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </h3>
      </div>
    )
  }
}

TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired
}
 
const btnStyle = {
    background: '#ff1100',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
