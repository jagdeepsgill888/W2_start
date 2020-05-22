// this is an IIFE
// ALSO called the Modulw pattern
//


(()=> {
  console.log('fired!');

// this is where you select elements here
 let theBagde = document.querySelector(".badge"),
    svgBadge=document.querySelector("svg");
 // debugger;   pause ur code execution here //

  function logID() {
    console.log(this.id);
  }

  theBagde.addEventListener("click", logID);
    svgBadge.addEventListener("click", logID);

}) ();
