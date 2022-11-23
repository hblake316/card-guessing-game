import { useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState("Octocat.png");

  async function drawCard() {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=1`
    );
    const data = await response.json();
    const img = data.cards.map((card) => card.image);
    setCards(img[0]);
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>Card Guessing Game</code>
        </p>
        <img
          src={cards}
          className="card"
          alt="card"
          onClick={() => {
            drawCard();
          }}
        />
        <p>
          <code>Click the card to draw another</code>
        </p>
      </header>
    </div>
  );
}

export default App;
