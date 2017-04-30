'use strict';

class Rank {
  constructor (rank) {
    this.value = rank;
  }

  greaterThan(that) {
    const thisValue = this.options.indexOf(this.value);
    const thatValue = this.options.indexOf(that.value);

    if (thisValue === thatValue) {
      return 0;
    } else if (thisValue > thatValue) {
      return 1;
    } else {
      return -1;
    }
  }

  get options () {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Jack', 'Queen', 'King', 'Ace'];
  }
}

class Suit {
  constructor (suit) {
    this.value = suit;
  }

  greaterThan(that) {
    const thisValue = this.options.indexOf(this.value);
    const thatValue = this.options.indexOf(that.value);
    return thisValue > thatValue;
  }

  get options () {
    return ['Club', 'Diamond', 'Heart', 'Spade'];
  }
}


class Card {
  constructor (suit, rank) {
    this.suit = new Suit (suit);
    this.rank = new Rank (rank);
  }

  greaterThan (that) {
    if (this.rank.greaterThan(that.rank) === 1) {
      return true;
    } else if (this.rank.greaterThan(that.rank) === -1) {
      return false;
    } else {
      return this.suit.greaterThan(that.suit);
    }
  }
}

class Deck {

  constructor () {
    this._deck = [];
    this._dealt = [];

    const deck = this._deck;
    const suits = (new Suit()).options;
    const ranks = (new Rank()).options;

    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        deck.push(new Card(suit, rank));
      });
    });
  }

  shuffle() {
    for (let i = this._deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this._deck[i];
      this._deck[i] = this._deck[j];
      this._deck[j] = temp;
    }
  }


  draw () {
    let card = this._deck.pop();
    this._dealt.push(card);
    return card;
  }
}


let deck = (new Deck());
deck.shuffle();
let card1 = deck.draw();
let card2 = deck.draw();


console.log(card1);
console.log(card2);
console.log(card1.greaterThan(card2));
