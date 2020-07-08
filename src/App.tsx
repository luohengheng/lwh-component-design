import React from 'react';
import './App.css';
import './styles/index.less'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from "./components/Button/Button";
import Icon from './components/Icon/Icon'


library.add(fas)

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
              <Button shape='circle'><Icon theme='warning' icon='search'/></Button>
              <Button btnType='link' href='http://www.baidu.com' target='_blank'>link</Button>
          </div>
      </header>
    </div>
  );
}

export default App;
