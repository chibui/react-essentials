import React from 'react';
import './App.css';
import restaurant from './michael-browning-MtqG1lWcUw0-unsplash.jpg';

function Header(props) {
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
      <img 
        alt="restaurant kitchen" 
        height={200} 
        src={restaurant} />
      <ul style={{ textAlign: "Left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
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


const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu and Vegetables",
  "Minestrone"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

function App() {
  return (
    // shorthand for react.fragment. Using fragment will lose ability to use classes such as styling from app class.
    <>
      <Header name="Horacio" />
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
