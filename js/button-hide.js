function toggleVisibility(pictureId, buttonId) {
  const picture = document.getElementById(pictureId);
  const button = document.getElementById(buttonId);

  //toggle visibility of image and button
  if (picture.style.visibility === "visible") {
    picture.style.visibility = "hidden";
    button.style.visibility = "hidden";
  } else {
    picture.style.visibility = "hidden";
    button.style.visibility = "hidden";
  }
}

function makeVisible(pictureId, buttonId) {
  const picture = document.getElementById(pictureId);
  const button = document.getElementById(buttonId);

  //make image and button visible
  picture.style.visibility = "visible";
  button.style.visibility = "visible";
}

function avis() {
  document.getElementById("a-picture").style.visibility = "visible";
}

function bvis() {
  document.getElementById("b-picture").style.visibility = "visible";
}

function cvis() {
  document.getElementById("c-picture").style.visibility = "visible";
}

function ainvis() {
  document.getElementById("a-picture").style.visibility = "hidden";
}

function binvis() {
  document.getElementById("b-picture").style.visibility = "hidden";
}

function cinvis() {
  document.getElementById("c-picture").style.visibility = "hidden";
}
