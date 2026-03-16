const maintxt = document.getElementById("mainText");
const othertxt = document.getElementById("other");
imageYN=false;
hack=0;

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

    if (seconds > 31 && seconds < 36) {
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
    }


    if (seconds > 36 && seconds < 44) {
      maintxt.style.color = "#d1529c";
      updateText("lets get serious.", windowWidth/2, windowHeight/2, maintxt);
    }

    if (seconds > 44) {
      const img = document.createElement("img");
      img.src = "hehe.png";
      img.style.position = "absolute";
      img.style.left = "50%";
      img.style.top = "50%";
      img.style.transform = "translate(-50%, -50%)";
      img.style.maxWidth = "80%";
      img.style.maxHeight = "80%";
      img.style.zIndex = "999";

      document.body.appendChild(img);
    }
  }