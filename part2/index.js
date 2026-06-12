// EmojiFighter

let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  let choiceOne = Math.floor(Math.random() * fighters.length);
  let choiceTwo = Math.floor(Math.random() * fighters.length);

  let fighterOne = fighters[choiceOne];
  let fighterTwo = fighters[choiceTwo];

  stageEl.textContent = `${fighterOne} VS ${fighterTwo}`;
  console.log(`Fighters Generated.`);
});
