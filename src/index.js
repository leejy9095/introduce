import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';    //app.js에서 만든 컴포넌트를 import해준다
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));  
//브라우저 상에 react component를 보여주기 위해서 ReactDOM.render() 함수를 사용
//id가 root인 DOM을 찾아서 그린다(id가 root 인 DOM은 public/index.html 에 있다)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
