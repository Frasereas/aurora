const maintxt = document.getElementById("mainText");
const othertxt = document.getElementById("other");
imageYN=false;
hack=0;
let bgGifSet = false;

// Line stack animation state (used after 50 seconds)
const stackedLines = [
  "Hi you,",
  "this isnt my greastest work I wont lie",
  "yet, I made this in a week...",
  "Ill do better next time!",
  "you mean the world to me baby",
  "and this is the the only way i could give you these!",
  "*im on about the flowers*",
  "I hope you like them",
  "because I made them just for you",
  "and I love you so much",
  "I hope you have a great day",
  "and who knows? maybe I'll be with you for the next?",
  "I hope this year treats you just as well as you treat me",
  "and if it doesnt, just remember,",
  "you have me, and I will always be here for you",
  "I love you beautiful, and I hope you have a wonderful birthday",
  "-Fredrick winkle bottom",
  "",
  "",
  "P.S. don't worry stressheart and I wont worry street.",
  "",
];
let stackIndex = 0;
let stackLastUpdate = 0;
const stackInterval = 2200; // ms between new lines
const stackMaxLines = 3;
let stackContainer;
let stackElements = []; // currently visible line elements

function updateText(newText,posx,posy,element) {
  if (!element) return;
  if (newText == element.innerHTML) return;

  element.classList.remove("fade-in");

  // Set new text first
  element.innerHTML = newText;

  element.style.position = "absolute";
  element.style.left = (posx - element.offsetWidth / 2) + "px";
  element.style.top = (posy - element.offsetHeight / 2) + "px";

  element.classList.add("fade-in");
}

function setup() {
    createCanvas(windowWidth,windowHeight)
}

function draw() {
    let seconds = millis() / 1000;

    if (seconds > 2 && seconds < 5) {
      updateText("*cough cough*", windowWidth/2, windowHeight/2-100, othertxt);
    }

    if (seconds > 5 && seconds < 8) {
      updateText("sorry... HI!", windowWidth/2, windowHeight/2, maintxt);
      updateText("", windowWidth/2, windowHeight/2-100, othertxt);
    }

    if (seconds > 8 && seconds < 12) {
      maintxt.style.zIndex = "2";
      updateText("You shouldnt of clicked on this", windowWidth/2, windowHeight/2, maintxt);
    }

    if (seconds > 12 && seconds < 18) {
      if (imageYN==false) {
        imageYN = true;
        const img = document.createElement("img");
        img.src = "error.png";
        img.style.position = "fixed";
        img.style.left = "0";
        img.style.top = "0";
        img.style.width = "100vw";
        img.style.height = "100vh";
        img.style.objectFit = "cover"; // fills screen nicely
        document.body.appendChild(img);
      }

      maintxt.style.color = "#bb2e1b";
      updateText("You shouldnt of clicked on this", windowWidth/2, windowHeight/2, maintxt);

      if (hack!=250) {
        let hackImageNo = Math.floor(Math.random() * 5) + 1;
        let hackImage;

        if (hackImageNo == 1) hackImage = "1.jpg";
        if (hackImageNo == 2) hackImage = "2.png";
        if (hackImageNo == 3) hackImage = "3.jpg";
        if (hackImageNo == 4) hackImage = "4.png";
        if (hackImageNo == 5) hackImage = "5.jpg";

        const img = document.createElement("img");
        img.src = hackImage;

        img.style.position = "absolute";
        img.style.width = "250px"; // image size
        img.style.height = "250px";

        // random position on screen
        const maxX = window.innerWidth - 250;
        const maxY = window.innerHeight - 250;

        img.style.left = Math.random() * maxX + "px";
        img.style.top = Math.random() * maxY + "px";

        document.body.appendChild(img);

        hack++;
      }
    }

    if (seconds > 18 && seconds < 20) {
      maintxt.style.color = "#000000";
      maintxt.style.zIndex = "999";
      updateText("okay enough joking!", windowWidth/2, windowHeight/2, maintxt);
      const img = document.createElement("img");
      img.src = "camera.png";
      img.style.position = "fixed";
      img.style.left = "45%";
      img.style.top = "40%";

      document.body.appendChild(img);

      // remove after 3 seconds
      setTimeout(() => {
        img.remove();
      }, 3000);

    }

    if (seconds > 23 && seconds < 29) {
      const img = document.querySelector("img");
      if (img) img.remove();
    }

    if (seconds > 31 && seconds < 35) {
      updateText("this you?", windowWidth/2, windowHeight/2, maintxt);
      const img = document.createElement("img");
      img.src = "cat4k.png";
      img.style.position = "absolute";
      img.style.left = "50%";
      img.style.top = "40%";
      img.style.transform = "translate(-50%, -50%)";
      img.style.maxWidth = "80%";
      img.style.maxHeight = "80%";

      document.body.appendChild(img);

      // remove after 4 seconds
      setTimeout(() => {
        img.remove();
      }, 10);
    }


    if (seconds > 35 && seconds < 44) {
      maintxt.style.color = "#d1529c";
      updateText("lets get serious.", windowWidth/2, windowHeight/2, maintxt);

      const img = document.createElement("img");
      img.src = "hehe.png";
      img.style.position = "absolute";
      img.style.left = "50%";
      img.style.top = "40%";
      img.style.transform = "translate(-50%, -50%)";
      img.style.maxWidth = "30%";
      img.style.maxHeight = "30%";
      img.style.zIndex = "999";

      document.body.appendChild(img);

      setTimeout(() => {
        img.remove();
      }, 10);
    }

    if (seconds > 44 && seconds < 50) {
      updateText("work in progress...", windowWidth/2, windowHeight/2, maintxt);

      const img = document.createElement("img");
      img.src = "hammer.png";
      img.style.position = "absolute";
      img.style.left = "50%";
      img.style.top = "40%";
      img.style.transform = "translate(-50%, -50%)";
      img.style.maxWidth = "80%";
      img.style.maxHeight = "80%";

      document.body.appendChild(img);

      setTimeout(() => {
        img.remove();
      }, 10);
    }

    if (seconds > 50) {
      // stack lines where new lines fade in below the previous,
      // and older lines fade out after a few have appeared.
      if (!stackContainer) {
        stackContainer = document.createElement("div");
        stackContainer.className = "line-container";
        document.body.appendChild(stackContainer);

        // hide the existing single text elements once the stack begins
        maintxt.style.display = "none";
        othertxt.style.display = "none";

        // once we hit 50s, switch the background to a gif
        if (!bgGifSet) {
          bgGifSet = true;
          document.body.style.backgroundImage = "url('background.gif')";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
          document.body.style.backgroundRepeat = "no-repeat";
        }
      }

      const now = millis();
      if (now - stackLastUpdate > stackInterval) {
        stackLastUpdate = now;

        // add a new line element
        const line = document.createElement("p");
        line.textContent = stackedLines[stackIndex];
        line.className = "fade-in";
        stackContainer.appendChild(line);
        stackElements.push(line);

        stackIndex = (stackIndex + 1) % stackedLines.length;

        // keep only the most recent N lines visible; fade & remove oldest
        if (stackElements.length > stackMaxLines) {
          const old = stackElements.shift();
          old.classList.remove("fade-in");
          old.classList.add("fade-out");

          setTimeout(() => {
            old.remove();
          }, 800); // match fade-out duration
        }
      }
    }
  }