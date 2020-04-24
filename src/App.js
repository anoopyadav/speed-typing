import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const GAME_DURATION = 5;

  const [timeRemaining, setTimeRemaining] = useState(GAME_DURATION);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (timeRemaining > 0 && gameHasStarted)
        setTimeRemaining(prevTime => prevTime - 1);
      if (timeRemaining === 0)
        endGame();
    }, 1000);
    // eslint-disable-next-line
  }, [timeRemaining, gameHasStarted]);

  function startGame() {
    setText("");
    setTimeRemaining(GAME_DURATION);
    setGameHasStarted(true);
  }

  function endGame() {
    setGameHasStarted(false);
    setWordCount(countWords(text));
  }

  function countWords(text) {
    if (text.trim() === "")
      return 0

    return text.trim().split(" ").length;
  }

  return (
    <div className="App">
      <header>
        <h1>Speed Typing Game</h1>
      </header>
      <main>
        <textarea
          disabled={!gameHasStarted}
          onChange={(event) => setText(event.target.value)}
          value={text}
        >
        </textarea>
        <button
          onClick={() => startGame()}
          disabled={gameHasStarted}
        >
          Start
        </button>
        <h4>Time Remaining: {timeRemaining}</h4>
        <h4>Word Count: {wordCount}</h4>
      </main>
    </div>
  );
}

export default App;
