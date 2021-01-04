import React from 'react';
import './App.css';

function Header(props) {
  console.log('props', props);
  
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
    </section>
  )
}

function Footer(props) {
  return (
    <section>
      <p>Copyright {props.year}</p>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Horacio" />
      <Main adjective="amazing" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
