import React, { Component } from "react";
import { PlayerContext } from "../context/PlayerContext";

class PlayerComponent extends Component {
  render() {
    return (
      <PlayerContext.Consumer>
        {({ player, cards, getCards, spliceCards, pLayerClicked }) => {
          const listItems = cards.map((card) => (
            <li key={card.toString()} onClick={pLayerClicked}>
              {card}
            </li>
          ));
          return (
            <div>
              <div className="deck">
                <h1>Table of Cards</h1>
                <ul className="cards">{listItems}</ul>
              </div>
              <ul className="cards">
                <h1>{player[0]}</h1>
                {spliceCards(listItems)}
              </ul>
              <ul className="cards">
                <h1>{player[1]} </h1>
                {spliceCards(listItems)}
              </ul>
              <ul className="cards">
                <h1>{player[2]}</h1> {spliceCards(listItems)}
              </ul>
              <ul className="cards">
                <h1>{player[3]} </h1>
                {spliceCards(listItems)}
              </ul>
              <button onClick={getCards}>PLAY GAME</button>
            </div>
          );
        }}
      </PlayerContext.Consumer>
    );
  }
}

export default PlayerComponent;
