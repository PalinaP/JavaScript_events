//************************
// Fonctionnalité 1 :
//************************
// => Voir Fonctionnalité 1-bis


//************************
// Fonctionnalité 1-bis :
//************************

let footerEl = document.getElementsByTagName("footer")[0];
let count = 0;

footerEl.addEventListener("click",function(){
  count ++;
  console.log("clique numéro " + count);}
);

//************************
// Fonctionnalité 2:
//************************
let hamEl = document.getElementsByClassName("navbar-toggler")[0];

hamEl.addEventListener("click", function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");}
);


//************************
// Fonctionnalité 3:
//************************

let cardText1 = document.getElementsByClassName("card-text")[0];
let editButton1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

editButton1.addEventListener("click", function(){
  cardText1.style.color = "red" ;}
);


//************************
// Fonctionnalité 4 :
//************************

let cardText2 = document.getElementsByClassName("card-text")[1];
let editButton2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

editButton2.addEventListener("click", function(){
  if (cardText2.style.color === "green"){
    cardText2.style.color = "black" ;
  } else {
    cardText2.style.color = "green" ;
  }
}
);


//************************
// Fonctionnalité 5:
//************************

let navbarEl = document.getElementsByTagName("header")[0];
let cdnEl = document.getElementsByTagName("link")[0];
let bodyEl = document.getElementsByTagName("body")[0];

// doublie-click on navbar ==> no more CSS
navbarEl.addEventListener("dblclick",function(){
  cdnEl.disabled = true;}
);

// click anywhere ==> CSS is Back
bodyEl.addEventListener("click",function(){
  cdnEl.disabled = false;}
);


//************************
// Fonctionnalité 6 :
//************************
