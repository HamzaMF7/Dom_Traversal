let par = document.querySelector(".box");
var i = 0;
var color = [
  "red",
  "blue",
  "brown",
  "yellow",
  "gray",
  "green",
  "orange",
  "pink",
  "purple",
];
function change() {
  var choise = Math.floor(Math.random() * 9);
  let e = Array.from(par.children);
  if (i > e.length - 1) {
    i = 0;
    e.forEach((element) => {
      element.style = "background-color : blueviolet";
    });
    return;
  }
  e[i].style = `background-color : ${color[choise]}` ;
  i++;
}
