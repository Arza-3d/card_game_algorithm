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
          mainDecks.push(j + ' ' + cardTypes[i]);
        }
      }
    }

    // pull card from main deck
    function pullCard() {
      let cardPull = Math.round(Math.random()*mainDecks.length);
      return mainDecks.splice(cardPull, 1);
    }

    function giveCardTo(deck = playerDeck) {
      for (let i = 0; i < 2; i++) {
        deck.push(pullCard());
      }
    }

    function isStillCanPlay(cardMin = 7) {
      return mainDecks.length() > cardMin;
    }

    function countCard(deck = playerDeck) {
      let cardCount = 0;
      for (let i = 0; i < deck.length; i++) {
        cardCount += parseInt(deck[i]);
      }
      return cardCount;
    }

    function checkWinStatus() {
      let playerCount, aiCount;
      playerCount = countCard();
      aiCount = countCard(aiDeck);
      if (playerCount > 21) {
        if (aiCount > 21) {
          return 'draw';
        } else {
          return 'lose';
        }
      } else {
        if (aiCount > 21) {
          return 'win';
        } else if (playerCount > aiCount) {
          return 'win';
        } else if (playerCount < aiCount) {
          return 'lose';
        } else {
          return 'draw';
        }
      }
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
    console.log('player card count is ' + countCard());
    console.log('ai card count is ' + countCard(aiDeck));
    console.log(checkWinStatus());
  }

}
