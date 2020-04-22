import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const GAME_DURATION = 10;

  const [timeRemaining, setTimeRemaining] = useState(GAME_DURATION);
  const [gameHasStarted, setGameHasStarted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (timeRemaining > 0 && gameHasStarted)
        setTimeRemaining(prevTime => prevTime - 1);
      if (timeRemaining === 0)
        endGame();
    }, 1000);
  }, [timeRemaining, gameHasStarted]);

  function startGame() {
    setGameHasStarted(true);
  }

  function endGame() {
    setGameHasStarted(false);
    setTimeRemaining(GAME_DURATION);
  }

  return (
    <div className="App">
      <header>
        <h1>Speed Typing Game</h1>
      </header>
      <main>
        <textarea disabled={!gameHasStarted}></textarea>
        <button
          onClick={() => startGame()}
          disabled={gameHasStarted}
        >
          Start
        </button>
        <h4>Time Remaining: {timeRemaining}</h4>
        <h4>Word Count: ???</h4>
      </main>
    </div>
  );
}

export default App;
