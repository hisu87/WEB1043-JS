let player = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function play(button) {
  if (board[button.id] === "") {
    button.innerText = player;
    button.style.backgroundColor = player === "X" ? "aqua" : "yellow";
    board[button.id] = player;
    if (checkWin()) {
      alert(player + " wins!");
      reset();
      return;
    }
    if (checkDraw()) {
      alert("Draw!");
      reset();
      return;
    }
    player = player === "X" ? "O" : "X";
  }
}

function checkWin() {
  const winStates = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for (let i = 0; i < winStates.length; i++) {
    const [a,b,c] = winStates[i];
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }
}

function checkDraw() {
  return !board.includes("");
}

function reset() {
  for (let i = 0; i < board.length; i++) {
    board[i] = "";
    document.getElementById(i).innerText = "";
    document.getElementById(i).style.backgroundColor = "";
  }
}