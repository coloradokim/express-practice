var express = require('express');
var app = express();

function checkPalindrome(word) {
  let forward = word.toLowerCase();
  let reverse = word.toLowerCase().split('').reverse().join('');
  if (forward === reverse) {
      return true
  } else {
      return false
  }
}

app.get('/', function(req, res){
  res.json({
    "status": "error",
    "response": "Please provide a word."
  });
})

app.get('/:word', function(req, res){
  if (checkPalindrome(req.params.word) === true){
    res.json({
      "status": "success",
      "response": "The word is a palindrome"
    });
  } else {
    res.json({
      "status": "success",
      "response": "The word is a NOT palindrome"
    });
  }
});

app.listen(1985, function(){
  console.log('App is listening on localhost:1985');
});
