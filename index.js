const generateMainBoard = function () {
  const board = document.querySelector(".main-board");
  for (let i = 0; i < 76; i++) {
    board.innerHTML += `<div class='cell'>${i + 1}</div>`;
  }
};

const fillArray = function () {
  const arr = [];
  for (let i = 0; i < 76; i++) {
    arr.push(i + 1);
  }
  return arr;
};
const getRandomNum = function (range) {
  const randIndex = Math.floor(Math.random() * range.length);
  const random = range.splice(randIndex, 1)[0];
  return random;
};
