import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {        //파라미터로 받는건 props
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;