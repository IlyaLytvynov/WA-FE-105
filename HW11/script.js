function MyFunction() {
  let colorID = 0;
  const colors = document.querySelectorAll(".traffic-light__cell-circle");

  function showColors() {
    let i;
   
    for (i = 0; i < colors.length; i++) {
      colors[i].style.display = "none";
    }
    colorID++;

    if (colorID > colors.length) {
      colorID = 1;
    }

    colors[colorID - 1].style.display = "block";
    setTimeout(showColors, 1500);
  }

  showColors();
}

MyFunction();