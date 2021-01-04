import React, { useState } from 'react';
import './App.css';

function App() { // object destructuring
  // [currentState, setState]
  const [emotion, setEmotion] = useState(1);
  
  return (
    <>
      <h1>Current emotion is {emotion}.</h1>
      <button onClick={ () => setEmotion('happy')}>Happy</button>
      <button onClick={ () => setEmotion('frustrated')}>Frustrate</button>
      <button onClick={ () => setEmotion('enthusiastic')}>Enthuse</button>
    </>
  )
}

export default App;
