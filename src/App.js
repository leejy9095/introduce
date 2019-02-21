import React, { Component } from 'react';  //react와 react 내부의 component를 불러온다  JSX를 사용하려면 react를 꼭 import해줘야 한다
import logo from './logo.svg';
import './App.css';
//이렇게 import 하는것은 webpack을 사용하기에 가능한 작업이다 -> 나중에 프로젝트를 빌드하게 됬을때 webpack에서 파일확장자에 따라 다른작업을 한다(ex: css끼리 한번에 모아서 파일로 결합)

class App extends Component { //component를 만드는 방법중에 하나(클래스로 만드는 방법) 
  render() {    //render() 함수가 꼭 있어야 한다 내부에서 JSX를 return 해줘야한다
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App; //만든 component를 다른 곳에서 불러와서 사용 할 수 있돌혹 내보낸다
