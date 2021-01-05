import React, { useReducer } from 'react';
import './App.css';

function App() {
  const initState = false;
  
  let [checked, toggle] = useReducer(
    reducer,
    initState
  );

  function reducer(state, action) {
    return !state;
  }

  return (
    <>
      <input 
        type="checkbox" 
        value={checked} 
        onChange={toggle} 
      />
      <p>{ checked ? 'checked' : 'not checked'}</p>
    </>
  )
}

export default App;
