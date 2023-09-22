const btn = document.getElementById("btn");
let randomNum = () => {
  return Math.floor(Math.random() * 256);
};

function changeColor () {

    //var first  = Math.round(Math.random()*255);
    //var second  = Math.round(Math.random()*255);
    //var third  = Math.round(Math.random()*255);
    //var color  =  "rgb(" + first + "," + second + ","+third + ")";

    document.body.style.backgroundColor =  "rgb(" + Math.round(Math.random()*256) + "," + Math.round(Math.random()*256) + ","+ Math.round(Math.random()*256) + ")";
}
/*const btn = document.getElementById("btn");
let randomNum = () => {
  return Math.floor(Math.random() * 256);
};
let changeColor = () => {
  let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
  document.body.style.backgroundColor = randomColor;
};*/
btn.addEventListener("click", changeColor);
window.addEventListener("load", changeColor);

