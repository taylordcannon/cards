const express = require('express')
const cors = require('cors')
const app = express()

let players = []

var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const game = {
	deckPlayer1: [],
	deckPlayer2: []
};

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}
	return deck;
}

function shuffleDeck(deck)
{
	var currentIndex = deck.length,  randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [deck[currentIndex], deck[randomIndex]] = [
		deck[randomIndex], deck[currentIndex]];
	}
  
	return deck;
}

const deck = getDeck();
shuffleDeck(deck)

game.deckPlayer1 = deck.splice(0, 26)
game.deckPlayer2 = deck.splice(0, 26)

console.log(game.deckPlayer1)
console.log(game.deckPlayer2)


app.use(cors())

app.get('/', function (req, res) {
  res.send(game)
})
 
app.listen(3000)