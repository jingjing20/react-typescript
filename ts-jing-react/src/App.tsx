import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HelloWord } from './compoments/HelloWord';
import { LikeButton } from './compoments/LikeButton';
import MouseTracker from './compoments/MouseTracker';
import useMousePosition from './hooks/useMousePosition';

function App() {
  const [show, setShow] = useState(true);
  const position = useMousePosition();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {show ? <MouseTracker></MouseTracker> : ''} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>X: {position.x}, Y : {position.y}</p>
        <HelloWord message="jingjing"></HelloWord>
        <LikeButton></LikeButton>
        <button onClick={() => { setShow(!show) }}>Trigger Button</button>
      </header>
    </div>
  );
}

export default App;
