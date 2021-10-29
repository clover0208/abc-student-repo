let words=document.getElementById("content");
// let symbol=document.getElementById("image");

let w=words.innerHTML;

console.log(w)
console.log(typeof w);


let letters=w.split("");
let containers=letters.map((l)=>{
  return "<span>"+l+"</span>";
});


let yPositions=letters.map((l)=>{
  return Math.floor(Math.random()*150);
})

words.innerHTML=containers.join(" ");
let split_words=words.getElementsByTagName("span");

console.log(split_words)
console.log(typeof split_words);
var elems = document.getElementsByTagName('span');
for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'inline-block'
  elems[i].style.transition = "0.5s"
}
// document.getElementsByTagName('span').style.transition = "0.5s"

// let images=[];
// for(let j=0;j<5;j+=1){
//   images[j]="<img>"+symbol+"</img>";
// }

// symbol.addEventListener("mouseover",()=>{
//   symbol.style.transform="rotate(360deg)";
// });

// symbol.addEventListener("mouseout",()=>{
//   symbol.style.transform="rotate(0deg)";
// });


function changeColor(word,y){
  word.addEventListener("mouseover",()=>{



  if(Math.random()<0.5){
    y=-y*3/2;
  }
  else{
    y=y/2;
  }



    word.style.transform="translate(0,"+Number(y)*2+"px)";
  
  });
}

for(let i=0;i<split_words.length;i+=1){
  changeColor(split_words[i],yPositions[i]);
}