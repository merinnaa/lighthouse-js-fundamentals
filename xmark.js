function finalPosition(moves) {
  let position = [0, 0]; // initial position of the parade
  for (let move of moves) {
    if (move === "north") {
      position[1]++; // move one space to the north
    } else if (move === "south") {
      position[1]--; // move one space to the south
    } else if (move === "east") {
      position[0]++; // move one space to the east
    } else if (move === "west") {
      position[0]--; // move one space to the west
    }
  }
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
console.log(finalPosition(moves)); 