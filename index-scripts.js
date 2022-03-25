let year = new Date();
document.getElementById("date").innerHTML = year;

colorPickers.addEventListener("change", updateColor, false);
colorPickers.addEventListener("input", updateColor, true);

function updateColor(){
  let color1 = document.getElementById("colorInput1").value;
  let color2 = document.getElementById("colorInput2").value;
  document.getElementById("color-container").style.background = averageColor(color1, color2);
};

function averageColor(color1, color2){
  let colorsArr = [0,0,0];
  let avgColor = "#";
  let col1 = String(color1);
  let col2 = String(color2);
  for (let i = 0; i < 3; i++){
    colorsArr[i] += parseInt(col1.substring(2*i+1,2*i+3), 16);
    colorsArr[i] += parseInt(col2.substring(2*i+1,2*i+3), 16);
    colorsArr[i] = Math.round(colorsArr[i]/2);
    colorsArr[i] = colorsArr[i].toString(16);
    avgColor += colorsArr[i];
  }
  console.log(avgColor);
  return avgColor;
};

function copyToClipboard() {
    var copyColor = document.getElementById("color-container").style.background;
    navigator.clipboard.writeText(copyColor);
    alert("Copied To Clipboard!")
};