document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", checkVictory);
  const userBoard = document.querySelector(".b0-board");
  const boardSize = 81; // amount of blocks
  const blocks = [];
  var hp = 3;
  var resetId;
  var match;
  var randomMatch;
  var savedToReset = []; // or to destroy -- sirve para destruir tambien
  var savedToDestroy = [];
  var scanResults = [0];
  var orangeQuantity = [0];
  var totalOranges = [0];
  var pinkQuantity = [0];
  var totalPinks = [0];
  var yellowQuantity = [0];
  var totalYellows = [0];
  var blueQuantity = [0];
  var totalBlues = [0];
  var greenQuantity = [0];
  var totalGreens = [0];
  var maroonQuantity = [0];
  var totalMaroons = [0];
  var oceanQuantity = [0];
  var totalOceans = [0];
  var navyQuantity = [0];
  var totalNavies = [0];
  var redQuantity = [0];
  var totalrReds = [0];
  var blockColor;
  const savedColorsToShow = [];
  var colorsBright = [
    // 11 colors *DEFAULT*
    "rgb(255, 133, 27)", // orange
    "rgb(240, 18, 190)", // pink
    "rgb(255, 220, 0)", // yellow
    "rgb(57, 204, 204)", // blue
    "rgb(1, 255, 112)", // green
    "rgb(133, 20, 75)", // MAROON
    "rgb(0, 116, 217)", // oceanBLUE
    "rgb(0, 31, 63)", // navyBLUE
    "rgb(255, 65, 54)", // RED
    "rgb(252, 3, 102)", // punchMagenta
    "rgb(255, 233, 100)", // yellowPastel
    "rgb(160, 255, 51)", // limePastel
    // 'rgb(177, 13, 201)', //purplePastel
    // 'rgb(46, 204, 64)', // darkGreenPastel
  ];
  const timeOfInterval = 300;
  let blockIsSelected; // blockSelection()
  let colorOfSelectedBlock; // blockSelection()
  let outerRim = document.querySelector(".b0-outer-rim"); // blockSelection() deselectionOut()
  let destroyButton = document.querySelector(".b0-destroy-ok"); // completeSelection()
  let refreshButton = document.querySelector(".b0-refresh"); // refreshBoard()
  var colorOfButton = document.querySelector(".b0-color-display"); // show color clicked
  var killColor = document.querySelector(".b0-color-kill");
  var hpSpan = document.querySelector(".b0-life");

  outerRim.addEventListener("click", deselectionOut);
  destroyButton.addEventListener("click", completeSelection); // completeSelection()
  // destroyButton.addEventListener("keypress", randomizeKill); // completeSelection()
  refreshButton.addEventListener("click", refreshBoard); // refreshBoard()

  function refreshBoard() {
    location.reload();
  }

  playSoundOfLoad();

  function createBoard() {
    for (let i = 0; i < boardSize; i++) {
      const block = document.createElement("button");
      block.setAttribute("id", i);
      block.setAttribute("class", "button");
      block.setAttribute("class", "target");
      let colorLoad = Math.floor(Math.random() * colorsBright.length); // Theme
      block.style.backgroundColor = colorsBright[colorLoad]; // Theme
      userBoard.appendChild(block);
      blocks.push(block);
    }
  }

  hpSpan.innerHTML = hp;

  function randomizeKill() {
    var colorLoadKill = Math.floor(Math.random() * colorsBright.length); // Kill
    var passToKill = colorLoadKill;
    var search = colorsBright[passToKill];
    randomMatch = search;
    killColor.style.backgroundColor = colorsBright[passToKill];
    //deletes color to prevent display of an already shown color on call
    colorsBright.indexOf(search) !== -1 &&
      colorsBright.splice(colorsBright.indexOf(search), 1);
  }

  createBoard();
  blocks.forEach((block) => block.addEventListener("click", blockSelection));
  blocks.forEach((block) => block.addEventListener("click", showBlockColor));

  randomizeKill();

  function scanBoard() {
    for (let index = 0; index < boardSize; index++) {
      const element = document.getElementById(index);
      let toChange = element.style.backgroundColor;
      scanResults.push(toChange.toString());
    }
  }
  scanBoard();

  function countBlocksByColor() {
    // function is not being used - could be useful to create scores
    for (let index = 0; index < boardSize; index++) {
      if (scanResults[index] == "rgb(255, 133, 27)") {
        // orange
        orangeQuantity.push(scanResults[index]);
      }
      if (scanResults[index] == "rgb(240, 18, 190)") {
        // pink
        pinkQuantity.push(scanResults[index]);
      }
      if (scanResults[index] == "rgb(255, 220, 0)") {
        // yellow
        yellowQuantity.push(scanResults[index]);
      }
      if (scanResults[index] == "rgb(57, 204, 204)") {
        // blue
        blueQuantity.push(scanResults[index]);
      }
      if (scanResults[index] == "rgb(1, 255, 112)") {
        // green
        greenQuantity.push(scanResults[index]);
      }
      if (scanResults[index] == "rgb(133, 20, 75)") {
        // maroon
        maroonQuantity.push(scanResults[index]);
      }
      if (scanResults[index] == "rgb(0, 116, 217)") {
        // ocean
        oceanQuantity.push(scanResults[index]);
      }
      if (scanResults[index] == "rgb(0, 31, 63)") {
        // navy
        navyQuantity.push(scanResults[index]);
      }
      if (scanResults[index] == "rgb(255, 65, 54)") {
        // red
        redQuantity.push(scanResults[index]);
      }
    }
    totalOranges = orangeQuantity.length - 1;
    totalPinks = pinkQuantity.length - 1;
    totalYellows = yellowQuantity.length - 1;
    totalBlues = blueQuantity.length - 1;
    totalGreens = greenQuantity.length - 1;
    totalMaroons = maroonQuantity.length - 1;
    totalOceans = oceanQuantity.length - 1;
    totalNavies = navyQuantity.length - 1;
    totalReds = redQuantity.length - 1;
  }

  // countBlocksByColor();
  // for testing
  // console.log('total oranges: ', totalOranges) // ESTA OK
  // console.log('total pinks: ', totalPinks) // ESTA OK
  // console.log('total yellows caramelows: ', totalYellows) // ESTA OK
  // console.log('total blues: ', totalBlues) // ESTA OK
  // console.log('total greens: ', totalGreens) // ESTA OK
  // console.log('total maroonFive: ', totalMaroons) // ESTA OK
  // console.log('total oceans: ', totalOceans) // ESTA OK
  // console.log('total navies: ', totalNavies) // ESTA OK
  // console.log('total reds: ', totalReds) // ESTA OK

  console.log('<strong style="color: white;">B R O K E N  1 1</strong>');
  console.log("https://github.com/francis62/broken11");
  console.log("beta");
  console.log("game started //////////////// [OK]");
  console.log("CURRENT HP: ", hp);
  console.log(
    "colors: ",
    colorsBright.length,
    "blocks: ",
    boardSize,
    "[9x9] board"
  );

  function blockSelection() {
    blockIsSelected = parseInt(this.id);
    colorOfSelectedBlock = this.style.backgroundColor;
    // console.log("id:", blockIsSelected, "bc: ", colorOfSelectedBlock); // testing
    this.removeAttribute(
      "class",
      "b0-destroy-queue is-disabled animate__animated animate__pulse"
    );
    this.setAttribute(
      "class",
      "has-background-light button is-loading animate__animated animate__pulse"
    );
    resetId = blockIsSelected;
    blockColor = colorOfSelectedBlock;
    savedToReset.push(resetId);
    savedToDestroy.push(resetId);
    savedColorsToShow.push(blockColor);
  }

  function deselectionOut() {
    // deselect - reset button
    playSoundOfCancel();
    console.info("canceled");
    for (let index = 0; savedToReset.length; index++) {
      const element = savedToReset[index];
      document
        .getElementById(element)
        .removeAttribute("class", "has-background-light button is-loading");
      savedToDestroy.pop();
    }
    savedToReset.pop();
  }

  function completeSelection() {
    // break button
    playSoundOfBreak();
    randomizeKill();
    console.warn("blocks broken!");
    for (let index = 0; savedToDestroy.length; index++) {
      const element = savedToDestroy[index];
      const toBeDestroyed = document.getElementById(element);
      toBeDestroyed.removeAttribute(
        "class",
        "has-background-light button is-loading "
      );
      toBeDestroyed.setAttribute(
        "class",
        "b0-destroy-queue button is-disabled b0-done"
      );
      toBeDestroyed.disabled = true;
      savedToReset.pop();
    }
    savedToDestroy.pop();
  }

  function showBlockColor() {
    // displays block background color inside button [last:]
    // this function also checks if color is matched, hp points
    // calls sound functions and displays console messages
    let bckGrndClr = savedColorsToShow.length - 1;
    colorOfButton.style.backgroundColor = savedColorsToShow[bckGrndClr];
    match = savedColorsToShow[bckGrndClr];
    var rule = Boolean(match == randomMatch);

    if (rule) {
      playSoundOfBlock();
      console.ok("selection: OK, color matched");
    } else {
      playSoundOfMiss();
      hp -= 1;
      console.error("miss!! HP: ", hp, " cancel selection [x]");
      if (hp == 0) {
        playSoundOfGameOver();
        console.log("");
        console.log('<span class="game-over">G A M E  O V E R ! !</span>');
        tellUser = 1;
        setTimeout(() => {
          alert("Game Over");
          location.reload();
        }, timeOfInterval);
      }
    }
    hpSpan.innerHTML = hp;
  }

  var donesQuantity = 0;

  function checkVictory() {
    var dones = document.querySelectorAll(".b0-done");
    donesQuantity = dones.length;
    if (donesQuantity == boardSize && hp != 0) {
      playSoundOfWin();
      console.log("");
      console.log('<span class="victory">V I C T O R Y ! !</span>');
      setTimeout(() => {
        alert("Victory!!!!");
        location.reload();
      }, timeOfInterval);
    }
  }
});
