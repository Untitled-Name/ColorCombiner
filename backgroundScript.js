function randomBackground(){
    let max = 255;
    let min = 190;
    let backgroundArr = [0,0,0];
    let backgroundColor = "#";
    let diff = 0;
    for (let j = 0; j < 3; j++){
        backgroundArr[j] = Math.round(Math.random() * (max - min) + min);
        if (j > 0){
            diff = Math.abs(backgroundArr[j-1] - backgroundArr[j]);
            while (diff <= 0){
                backgroundArr[j] = Math.round(Math.random() * (max - min) + min);
                diff = Math.abs(backgroundArr[j-1] - backgroundArr[j]);
            }
        }
        backgroundColor += backgroundArr[j].toString(16);
    }
    //console.log(backgroundColor);
    //alert(backgroundColor);
    document.body.style.backgroundColor = backgroundColor;
};
window.addEventListener("load",randomBackground);