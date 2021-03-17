let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog : [0, 0] 
  //TODO: hacer manualmente q esta variable guarde la primera
  //orientación del rover
};

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
  //console.log(rover);
}


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
  //console.log(rover);
}


function moveForward(rover) {
  //rover.travelLog.push(`${rover.x}, ${rover.y}`); 
  //esto es un array de strings, y debe ser un array de objetos
  rover.travelLog.push({
    x: rover.x,
    y: rover.y
  });
  
  switch (rover.direction) {
    case "N":
      if (rover.y === 0) {
        alert("Grid limit");
        break;
      }
      rover.y -= 1;
      break;
    case "E":
      if (rover.x === 10) {
        alert("Grid limit");
        break;
      }
      rover.x += 1;
      break;
    case "S":
      if (rover.y === 10) {
        alert("Grid limit");
        break;
      }
      rover.y += 1;
      break;
    case "W":
      if (rover.x === 0) {
        alert("Grid limit");
        break;
      }
      rover.x -= 1;
      break;
    default:
  }
  //console.log(rover);
}

//====== Bonus 2======//

function moveBackward(rover) {
  rover.travelLog.push({
    x: rover.x,
    y: rover.y
  });
  
  switch (rover.direction) {
    case "N":
      if (rover.y === 10) {
        alert("Grid limit");
        break;
      }
      rover.y += 1;
      break;
    case "E":
      if (rover.x === 0) {
        alert("Grid limit");
        break;
      }
      rover.x -= 1;
      break;
    case "S":
      if (rover.y === 0) {
        alert("Grid limit");
        break;
      }
      rover.y -= 1;
      break;
    case "W":
      if (rover.x === 10) {
        alert("Grid limit");
        break;
      }
      rover.x += 1;
      break;
    default:
  }
  //console.log(rover);
}

moveBackward(rover);

function commands(someArray) {
  for (let i=0 ;i<=someArray.length-1 ;i++) {
    switch (someArray[i]) {
      case "l" :
        turnLeft(rover);
        break;
      case "r" :
        turnRight(rover);
        break;
      case "f" :
        moveForward(rover);
        break;
      case "b" :
        moveBackward(rover);
        break;
        default :  
        alert("unexpected command")
    }
  }
  console.log(rover)
}
debugger
let commandString = 'rf3b';
commands(commandString);




//todo linea90: debería lograr que este comando se lograr cada vez que invoco la 
//función commands
/*
turnLeft(rover);

/* 
//jueguito: de 22N a 34E
  console.log(`Initial rover location is ${rover.x} and ${rover.y} with direction ${rover.direction}`);

turnRight(rover);
moveForward(rover);
turnRight(rover);
moveForward(rover);
moveForward(rover);
turnLeft(rover);

  console.log(`Final rover location is ${rover.x} and ${rover.y} with direction ${rover.direction}`);
  */