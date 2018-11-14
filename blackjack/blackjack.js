{
  let mainDecks = [],
      playerDeck = [],
      aiDeck = [];
  const cardTypes = ['club', 'heart', 'diamond', 'spade'];

  // function definitions:
  {
    // create card deck
    function create1Deck() {
      for (let i = 0; i < cardTypes.length; i++) {
        for (let j = 1; j <= 13; j++) {
          mainDecks.push(cardTypes[i] + '_' + j);
        }
      }
    }

    // random number function based on mainDecks
    function pullCard() {
      let cardPull = Math.round(Math.random()*mainDecks.length);
      return mainDecks.splice(cardPull, 1);
    }

    // give card to player and ai
    function giveCardTo(deck = playerDeck) {
      for (let i = 0; i < 2; i++) {
        deck.push(pullCard());
      }
    }

    // check if still can play (minimum)
    function isStillCanPlay(cardMin = 7) {
      return mainDecks.length() > cardMin;
    }

    // count card
    function countCard() {
      
    }

  }

  // play
  {
    create1Deck();
    giveCardTo();
    giveCardTo(aiDeck);
    console.log(playerDeck);
    console.log(aiDeck);
    console.log(mainDecks);
  }

}
