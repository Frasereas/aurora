const maintxt = document.getElementById("mainText");
const othertxt = document.getElementById("other");

function updateText(newText,posx,posy,element) {
  if (!element) return;
  if (newText == element.innerHTML) return;

  element.classList.remove("fade-in");

  // Set new text first
  element.innerHTML = newText;

  // Force browser to reflow for animation
  void element.offsetWidth;

  element.style.position = "absolute";
  element.style.left = (posx - element.offsetWidth / 2) + "px";
  element.style.top = (posy - element.offsetHeight / 2) + "px";

  element.classList.add("fade-in");
}

function setup() {
    createCanvas(windowWidth,windowHeight)
}

function preload(){
  url = "catdevious.gif"
  img = loadImage(url)
}

function draw() {
    let seconds=millis()/20/60
    console.log(seconds)
    
    if (seconds>2) {
    updateText("*cough cough*",windowWidth/2,windowHeight/2-100,othertxt)
    }

    if (seconds>5) {
    updateText("sorry... HI!",windowWidth/2,windowHeight/2,maintxt)
    updateText("",windowWidth/2,windowHeight/2-100,othertxt)
    }

    if (seconds>10) {
    updateText("You shouldnt of clicked on this",windowWidth/2,windowHeight/2,maintxt)
    image(img, windowWidth/2, windowHeight/2);
    }
}
