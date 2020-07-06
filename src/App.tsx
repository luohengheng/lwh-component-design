import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/index.less'
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div style={{margin: 10}}>
              <Button
                  size='small'
                  onClick={e => {console.log('1111')}}
                  disabled={false}>
                  button
              </Button>
              <Button btnType='link' href='http://www.baidu.com' target='_blank'>link</Button>
          </div>
      </header>
    </div>
  );
}

export default App;
