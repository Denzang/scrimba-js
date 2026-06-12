// Rock, Paper, Scissors

let hands = ["Rock", "Paper", "Scissors"];

function itemReturn() {
  let hand = Math.floor(Math.random() * 3);
  console.log(hands[hand]);
}

itemReturn();
