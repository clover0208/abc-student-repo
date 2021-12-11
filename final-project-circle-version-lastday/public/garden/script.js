console.log("garden yaya")

console.log(window.location.search)

// let lookButton = document.getElementById("look");
// let giftInput = document.getElementById("gift");
// let sendGift = document.getElementById("sendGift");
let garden = document.getElementById("garden");

// sendGift.addEventListener("click", ()=>{
//   console.log("click gift")
//   let gift = giftInput.value;
//
//   fetch("/gift?gift="+gift);
//
//   giftInput.value = "";
// })

function placeGift(gift){
  let p = document.createElement("p");
  p.innerHTML = gift;
  p.style.position = "absolute";
  p.style.left = "0px"
  p.style.top = Math.random() * window.innerHeight + "px";
  p.style.animationName = "move"
  p.style.animationDuration = Math.random() + 6 + 's'
  p.style.animationTimingFunction = 'linear'
  garden.appendChild(p);
  console.log("hello")

}

function placeGifts(gifts){
  garden.innerHTML = "";
  gifts.forEach(placeGift);
}


function codeAddress() {
  console.log("getting gifts");
  fetch("/getGifts")
    .then(data => data.json())
    .then(data => {
      console.log("decoded:", data);
      let gifts = data.content;
      placeGifts(gifts);



    });

}

window.onload = codeAddress;

// lookButton.addEventListener("click", ()=>{
//   console.log("getting gifts");
//   fetch("/getGifts")
//     .then(data => data.json())
//     .then(data => {
//       console.log("decoded:", data);
//       let gifts = data.content;
//       placeGifts(gifts);
//
//
//
//     });
//
//
// })