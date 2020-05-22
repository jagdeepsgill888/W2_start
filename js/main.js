// this is an IIFE
// ALSO called the Modulw pattern
//


(()=> {
  console.log('fired!');

// this is where you select elements here
 let theBagdes = document.querySelectorAll(".badge"),
    svgBadge=document.querySelector("svg");
    mainHeading= document.querySelector("#mainHeading")
 // debugger;   pause ur code execution here //

  function logID() {
    console.log("clicked on a graphic - this one: ", this.id);
    this.classList.add("selected");
  }

  theBagdes.forEach(badge => badge.addEventListener("click", logID));
  svgBadge.addEventListener("click", logID);




}) ();
