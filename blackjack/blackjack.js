{
  let mainDecks = [],
      playerDeck = [],
      aiDeck = [];


  // function definitions:
  {
    // create card deck
    const cardTypes = ['club', 'heart', 'diamond', 'spade'];
    const cardUnique = ['ace', 'jack', 'queen', 'king'];
    function create1Deck() {
      for (let i = 0; i < cardTypes.length; i++) {
        mainDecks.push(cardUnique[0] + ' ' + cardTypes[i]);

        for (let j = 2; j <= 10; j++) {
          mainDecks.push(j + ' ' + cardTypes[i]);
        }

        for (let j = 1; j < cardUnique.length; j++) {
          mainDecks.push(10 + ' ' + cardUnique[j] + ' ' + cardTypes[i]);
        }
      }
    }

    // pull card from main deck
    function pullCard() {
      let cardPull = Math.round(Math.random()*(mainDecks.length - 1));
      return mainDecks.splice(cardPull, 1);
    }

    function giveCardTo(deck = playerDeck) {
      for (let i = 0; i < 2; i++) {
        deck.push(pullCard());
      }
    }

    function countCard(deck = playerDeck) {
      let cardCount = 0;
      for (let i = 0; i < deck.length; i++) {
        cardCount += parseInt(deck[i]);
      }
      return cardCount;
    }

    function hasAce(deck = playerDeck) {
      if (isNaN(countCard(deck))) {
        return true;
      } else {
        return false;
      }
    }

    function howManyAce(deck = playerDeck) {
      let aceCount = 0;
      for (let i = 0; i < deck.length; i++) {
        if (isNaN(parseInt(deck[i]))) {
          aceCount++;
        }
      }
      return aceCount;
    }

    function countCardWithAce(deck = playerDeck) {
      let tempDeck = deck.concat([]);
      if (hasAce(tempDeck)) {
        let aceCount = howManyAce(tempDeck);
        for (let i = 0; i < tempDeck.length; i++) {
          if (isNaN(parseInt(tempDeck[i]))) {
              tempDeck.splice(i, 1);
          }
        }
        let countWithoutAce = countCard(tempDeck);
        let countOnlyAce = 11 + (aceCount - 1);
        if (countWithoutAce == 0) {
          return countOnlyAce;
        } else if (countWithoutAce <= (21 - countOnlyAce)) {
          return countWithoutAce + countOnlyAce;
        } else {
          return countWithoutAce + aceCount;
        }
      } else {
        return countCard(tempDeck);
      }
    }

    function checkWinStatus() {
      let playerCount, aiCount;
      playerCount = countCardWithAce();
      aiCount = countCardWithAce(aiDeck);
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

    function clearPlayersDeck() {
      playerDeck = [];
      aiDeck = [];
    }

    function isStillCanPlay(cardMin = 7) {
      return mainDecks.length > cardMin;
    }

  }

  // play
  {

    create1Deck();
    function playBlackJack() {
      if (isStillCanPlay()) {
        clearPlayersDeck();
        giveCardTo();
        giveCardTo(aiDeck);
        console.log(playerDeck);
        console.log(aiDeck);
        console.log(mainDecks);
        console.log('player card count is ' + countCardWithAce());
        console.log('ai card count is ' + countCardWithAce(aiDeck));
        console.log(checkWinStatus());
      } else {
        console.log('can\'t play anymore');
      }
    }
    playBlackJack();

  }
}
