const express = require('express');
const router = express.Router();
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

let word;
let example= "Tori"
let underS= "_______";

let guess;
let numberOfTurn;
let wordArray;
let underScore= [];
let wrongGuess= [];

function random() {
  return words[ Math.floor(Math.random()* words.length)];
}
router.get('/', function(req, res){
  word= random();
  wordArray= word.split('');
  console.log('wordArray', wordArray);
  underScore=[];
  for (var i =0; i < word.length; i ++){
    underScore.push('_');
  }
  console.log('word', word);
  res.render('hangman', {word: underScore})

})
router.post('/hangman', function(req, res, next){
  let guess= req.body.guess;
  let guessIndex= word.index0f(guess);

  console.log('guessIndex: ', guessIndex);
  console.log('wordarray', wordArray, underScore, wrongGuess);

  wordArray.forEach(function(char, index){
    if (char == guess){
      underScore[index]=guess;
      req.session.guesses=8;
      console.log('REQ', req.session);

    }
  })
  if(guessIndex == -1){
    wrongGuess.push(guess);
  } if (wrongGuess.length >8){
    res.redirect('/')
      }
      res.render('hangman', {word: underScore, wrong:wrongGuess token:  req.session.guesses,})

})
module.exports= router;
