const express = require('express')
const cors = require('cors')
const app = express()

var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
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

const deck = getDeck();

app.use(cors())

app.get('/', function (req, res) {
  res.send(deck)
})
 
app.listen(3000)