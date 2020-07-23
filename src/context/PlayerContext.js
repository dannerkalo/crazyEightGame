import React, { createContext, Component } from "react";
import { CardSuitsContext } from "../context/CardSuitsContext";

export const PlayerContext = createContext();

class PlayerContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.card,
      player: [
        "Eric Cartman",
        "kenny McCormick",
        "Stan Marsh",
        "Kyle Broflovski",
      ],
    };
  }

  //getcards
  getCards = () => {
    this.setState({ cards: this.card });
  };
  spliceCards = (cardItems) => {
    return cardItems.splice(0, 7);
  };
  pLayerClicked = () => {
    console.log("Player Clicked!");
  };
  card = [];
  render() {
    return (
      <div>
        <PlayerContext.Provider
          value={{
            ...this.state,
            getCards: this.getCards,
            spliceCards: this.spliceCards,
            pLayerClicked: this.pLayerClicked,
          }}
        >
          {this.props.children}
        </PlayerContext.Provider>
        <CardSuitsContext.Consumer>
          {({ cards }) => {
            {
              this.card = cards;
            }
          }}
        </CardSuitsContext.Consumer>
      </div>
    );
  }
}

export default PlayerContextProvider;
