//It.1) Defining Object Rover with direction(N,E,S,W) property
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

console.log(`**MarsRover1** \nOriginal position: X/${rover.x} Y/${rover.y} \n\
Original direction: ${rover.direction}. 
It's tracking record is the following: ${rover.travelLog}.
Obstacles:
Times of reaching boundries:xxxxxxxxx
MarsRover2 location:xxxxxxxx.
MarsRover3 location:xxxxxxxx
`);

let grid = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'O', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];
console.log(grid.join('\n') + '\n');

/** ====================== CODE =========================--*/

//It.2) Turning

//turnLeft
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:
  }
  console.log("Function turnLeft was called");
}

//turnRight
function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:
  }
  console.log("Function turnRight was called");
}

//It.3) Moving
//To change: Add properties x and y to object rover
//moveForward function (function of the rover's CURRENT direction)
function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      if ((rover.y - 1) < 0) {
        alert("Grid limit");
        break;
      }
      if (grid[rover.y - 1][rover.x] === "Obs") {
        alert("Obstacle");
        console.log(`Obstacle location: ${rover.y -1}, ${rover.x}`);
        break;
      }
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });
      rover.y -= 1;
      break;

    case "E":
      if ((rover.x + 1) > 9) {
        alert("Grid limit");
        break;
      }
      if (grid[rover.y][rover.x + 1] === "Obs") {
        alert("Obstacle ahead");
        console.log(`Obstacle location: ${rover.y}, ${rover.x +1}`);
        break;
      }
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });
      rover.x += 1;
      break;

    case "S":
      if (rover.y > 9) {
        alert("Grid limit");
        break;
      }
      if (grid[rover.y + 1][rover.x] === "Obs") {
        alert("Obstacle ahead");
        console.log(`Obstacle location: ${rover.y +1}, ${rover.x}`);
        break;
      }
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });
      rover.y += 1;
      break;

    case "W":
      if (rover.x < 0) {
        alert("Grid limit");
        break;
      }
      if (grid[rover.y][rover.x - 1] === "Obs") {
        alert("Obstacle ahead");
        console.log(`Obstacle location: ${rover.y}, ${rover.x -1}`);
        break;
      }
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });
      rover.x -= 1;
      break;

    default:
  }
console.log(`Function moveForward called. Current position: y:${rover.y} x:${rover.x}`);
}

//It.4) Commands
//Its.5) Tracking
//Bonus 1: Enforce boundaries (to test)
//To Change: add if condition to both move functions
// moveBackwards function (Bonus 2) --->
function moveBackwards(rover) {
  switch (rover.direction) {
    case "N":
      if ((rover.y + 1) > 9) {
        alert("Grid limit");
        break;
      }
      if (grid[rover.y + 1][rover.x] === "Obs") {
        alert("Obstacle");
        console.log(`Obstacle location: ${rover.y +1}, ${rover.x}`);
        break;
      }
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });
      rover.y += 1;
      break;

    case "E":
      if ((rover.x - 1) < 0) {
        alert("Grid limit");
        break;
      }
      if (grid[rover.y][rover.x + 1] === "Obs") {
        alert("Obstacle ahead");
        console.log(`Obstacle location: ${rover.y}, ${rover.x -1}`);
        break;
      }
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });
      rover.x -= 1;
      break;

    case "S":
      if ((rover.y - 1) < 0) {
        alert("Grid limit");
        break;
      }
      if (grid[rover.y - 1][rover.x] === "Obs") {
        alert("Obstacle ahead");
        console.log(`Obstacle location: ${rover.y -1}, ${rover.x}`);
        break;
      }
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });
      rover.y -= 1;
      break;

    case "W":
      if ((rover.x + 1) > 9) {
        alert("Grid limit");
        break;
      }
      if (grid[rover.y][rover.x + 1] === "Obs") {
        alert("Obstacle ahead");
        console.log(`Obstacle location: ${rover.y}, ${rover.x +1}`);
        break;
      }
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });
      rover.x += 1;
      break;

    default:
  }
  console.log(`Function moveBackwards called. Current position: y:${rover.y} x:${rover.x}`);
}

function commands(someArray) {
  for (let i = 0; i <= someArray.length - 1; i++) {
    switch (someArray[i]) {
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackwards(rover);
        break;
      default:
        alert("unexpected command")
    }
  }
  console.log("Function commands was called");
}

debugger
commands('frff');
console.log(`New position: [x:${rover.x}, y:${rover.y}] 
- Direction: ${rover.direction}`);