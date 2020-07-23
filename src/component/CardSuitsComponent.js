import * as React from "react";

class CardSuitsComponent extends React.Component {
  //card names based on their shape

  cardSuits = [
    { value: 1, name: "spades", color: "black" },
    { value: 2, name: "spades", color: "black" },
    { value: 3, name: "spades", color: "black" },
    { value: 4, name: "spades", color: "black" },
    { value: 5, name: "spades", color: "black" },
    { value: 6, name: "spades", color: "black" },
    { value: 7, name: "spades", color: "black" },
    { value: 8, name: "spades", color: "black" },
    { value: 9, name: "spades", color: "black" },
    { value: 10, name: "spades", color: "black" },
    { value: 1, name: "diamonds", color: "red" },
    { value: 2, name: "diamonds", color: "red" },
    { value: 3, name: "diamonds", color: "red" },
    { value: 4, name: "diamonds", color: "red" },
    { value: 5, name: "diamonds", color: "red" },
    { value: 6, name: "diamonds", color: "red" },
    { value: 7, name: "diamonds", color: "red" },
    { value: 8, name: "diamonds", color: "red" },
    { value: 9, name: "diamonds", color: "red" },
    { value: 10, name: "diamonds", color: "red" },
    { value: 1, name: "hearts", color: "red" },
    { value: 2, name: "hearts", color: "red" },
    { value: 3, name: "hearts", color: "red" },
    { value: 4, name: "hearts", color: "red" },
    { value: 5, name: "hearts", color: "red" },
    { value: 6, name: "hearts", color: "red" },
    { value: 7, name: "hearts", color: "red" },
    { value: 8, name: "hearts", color: "red" },
    { value: 9, name: "hearts", color: "red" },
    { value: 10, name: "hearts", color: "red" },
    { value: 1, name: "clubs", color: "black" },
    { value: 2, name: "clubs", color: "black" },
    { value: 3, name: "clubs", color: "black" },
    { value: 4, name: "clubs", color: "black" },
    { value: 5, name: "clubs", color: "black" },
    { value: 6, name: "clubs", color: "black" },
    { value: 7, name: "clubs", color: "black" },
    { value: 8, name: "clubs", color: "black" },
    { value: 9, name: "clubs", color: "black" },
    { value: 10, name: "clubs", color: "black" },
  ];

  cardSuits = this.cardSuits.map((card) => {
    const cards = ['"' + card.name + '"', card.value, '"' + card.color + '"'];
    return "[" + cards + "]";
  });

  combinedCards = [...this.cardSuits];

  randomizeCards() {
    var ctr = this.combinedCards.length,
      temp,
      index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = this.combinedCards[ctr];
      this.combinedCards[ctr] = this.combinedCards[index];
      this.combinedCards[index] = temp;
    }
    return this.combinedCards;
  }

  render() {
    return "[" + this.randomizeCards() + "]";
  }
}

export default CardSuitsComponent;
