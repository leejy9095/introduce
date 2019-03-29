import React, { Component } from 'react';  //react와 react 내부의 component를 불러온다  JSX를 사용하려면 react를 꼭 import해줘야 한다
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

//이렇게 import 하는것은 webpack을 사용하기에 가능한 작업이다 -> 나중에 프로젝트를 빌드하게 됬을때 webpack에서 파일확장자에 따라 다른작업을 한다(ex: css끼리 한번에 모아서 파일로 결합)

class App extends Component { //component를 만드는 방법중에 하나(클래스로 만드는 방법) 
 
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개1', checked: false },
      { id: 1, text: ' 리액트 소개2', checked: true },
      { id: 2, text: ' 리액트 소개3', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({ //concat을 사용해서 배열에 값을 넣어준다
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {    //render() 함수가 꼭 있어야 한다 내부에서 JSX를 return 해줘야한다
    
    const { input, todos  } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;   //이렇게 각각 할당해 놓으면 this.handleChange, this.handleCreate등 매번 this를 써주는 일이 줄어든다

    return (
      <div>
        <TodoListTemplate 
          form={
            <Form
              value={input}
              onKeyPress={handleKeyPress} //부모를 이용해서 값을 전달해야되기때문에 각각 함수랑 매칭시킨다
              onChange={handleChange}
              onCreate={handleCreate}
            />
          } 
        >
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
             {/* 이부분에 들어가는게 TodoListTemplate 컴포넌트 의 children 값 이다 */} 
        </TodoListTemplate>
      </div>
    );
  }
}

export default App; //만든 component를 다른 곳에서 불러와서 사용 할 수 있돌혹 내보낸다
