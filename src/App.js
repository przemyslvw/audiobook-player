import React, { useState } from 'react';
import './style/App.css';
import './style/track.css';
import Player from './components/Player'
import Menu from './components/Menu'
import okladka from './images/okladka.jpg'
import { Summary } from './pages/Summary';
import { Author } from './pages/Author';
import { Publishing } from './pages/Publishing';
import { Board } from './pages/Board'

function App() {  

  const [ currentPlay, setCurretnPlay ] = useState(0);
  const [ activeCart, setActiveCart ] = useState("board");

  function handleClick(i) {
    setCurretnPlay(parseInt(i))
  }

  function onEnd() {
    setCurretnPlay(currentPlay+1)
  }

  function changeActiveCart(i) {
    setActiveCart(i)
  }

  return (
    <div className="App">
      <div className="flex-container">
          <div className="side left-side">
            <div className="cover-box">
              <img className="cover" src={ okladka } alt="cover" />
            </div>
            <div className="player-box">
              <Player currentPlay={ currentPlay } onEnd = { onEnd }/>
            </div>
          </div>

          <div className="side right-side">
            <Menu activeCart={ activeCart } changeActiveCart={ changeActiveCart } />
            <div className="pages-box">
              <Board activeCart={ activeCart } currentPlay={ currentPlay } handleClick={ handleClick } />
              <Summary activeCart={ activeCart } />
              <Author activeCart={ activeCart } />
              <Publishing activeCart={ activeCart } />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
