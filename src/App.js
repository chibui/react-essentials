import React, { useState, useEffect } from 'react';
import './App.css';

function App() { // object destructuring
  // [currentState, setState]
  const [emotion, setEmotion] = useState('happy');
  const [secondary, setSecondary] = useState('tired');
  
  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}.</h1>
      <button onClick={ () => setEmotion('happy')}>Make happy</button>
      <button onClick={ () => setEmotion('crabby')}>Make crabby</button>
      <button onClick={ () => setEmotion('frustrated')}>Frustrate</button>
      <button onClick={ () => setEmotion('enthusiastic')}>Enthuse</button>
    </>
  )
}

export default App;
