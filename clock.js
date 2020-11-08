/* const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

//console.log(greetGabdol);

calculator.plus(5, 5);

const plus = calculator.plus(5, 5);
console.log(plus);
*/

/* const title = document.querySelector("#title");

function handleclick() {
  title.style.color = "blue";
}

window.addEventListener("click", handleclick);
*/

/*if (10 > 5 && "Gab" === "Gab") {
  console.log("hi");
} else {
  console.log("ho");
}

if (10 === 5) {
  console.log("hi");
} else {
  console.log("ho");
}

const age = prompt("How old are you");

if (age > 19) {
  console.log("Do it");
} else {
  console.log("Do not it");
}
*/

/*const title = document.querySelector("#title");

const CLICKED_CLASS="clicked"

function handleClick(){
 title.classList.toggle(CLICKED_CLASS);
 const hasClass =title.classList.contains(CLICKED_CLASS);
if(!hasClass){
  title.classList.add(CLICKED_CLASS);
} else {
  title.classList.remove(CLICKED_CLASS);
}

}

function init(){
  title.addEventListener("click",handleClick);
}

init();

*/


const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText=`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
 getTime();
 setInterval(getTime, 1000);
}

init();
