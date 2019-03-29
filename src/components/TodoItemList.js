import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
        ({id, text, checked}) => (
          <TodoItem
            id={id}
            text={text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}    //배열에는 key 값이 꼭 있어야 한다
          />
        )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;