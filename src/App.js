import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Eve's Kitchen</h1>
    </header>
  )
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  )
}

function Footer() {
  return (
    <section>
      <h3>It's true.</h3>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
