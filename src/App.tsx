import React from 'react';
import './App.css';
import './styles/index.less'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from "./components/Button/Button";



library.add(fas)

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div style={{margin: 10}}>
              <Button
                  icon='search-dollar'
                  size='small'
                  onClick={e => {console.log('1111')}}
                  disabled={false}>
                  button
              </Button>
              <Button shape='circle' icon='hand-point-up'/>
              <Button btnType='link' href='http://www.baidu.com' target='_blank'>link</Button>
          </div>
      </header>
    </div>
  );
}

export default App;
