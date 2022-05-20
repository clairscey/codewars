/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades' */


//My Solution
function defineSuit(card) {
    let results = {
      9827: 'clubs',
      9830: 'diamonds',
      9829: 'hearts',
      9824: 'spades'
    }
      
    return results[card.charCodeAt(card.length - 1)]
  }

//Similar Solution
function defineSuit(card) {
    const s = {
      "♣": "clubs", //Obj keys can be strings
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
  }