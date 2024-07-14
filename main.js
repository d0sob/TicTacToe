const tiles = document.querySelectorAll(".tile");
const msg = document.getElementById("msg");
let tileState = true;
let playing = true;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkForWin() {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (
      tiles[a].textContent !== "" &&
      tiles[a].textContent === tiles[b].textContent &&
      tiles[a].textContent === tiles[c].textContent
    ) {
      return tiles[a].textContent;
    }
  }
  return null;
}

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (!playing) return;

    if (tile.textContent === "") {
      tile.textContent = tileState ? "X" : "O";
      tileState = !tileState;

      const winner = checkForWin();
      if (winner) {
        msg.textContent = `Player ${winner} wins!`;
        playing = false;
      }
    } else {
      msg.textContent = "You can't play that!";
      setTimeout(() => {
        msg.textContent = "";
      }, 2000);
    }
  });
});
