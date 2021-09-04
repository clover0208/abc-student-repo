console.log()
let range=document.getElementById("myRange");
let valueDisplay= document.getElementById("valueDisplay");
let text=document.getElementById("text").innerHTML;
console.log("text",text);

let letters=text.split("");
console.log(letters)

let spanLetters=[];
let randomMultipliers=[];

for(let i=0;i<letters.length;i++){
    let currentLetter=letters[i];
    console.log("<span>"+currentLetter+"</span>")
    spanLetters.push("<span>"+currentLetter+"</span>")

    let randomMultiplier=0.2+Math.random()*3;
    randomMultipliers.push(randomMultiplier)
}

console.log(spanLetters)
console.log(spanLetters.join(""));
document.getElementById("text").innerHTML=spanLetters.join("");


let constructString=spanLetters.join("");
text.innerHTML=constructString;

let spanTags=document.getElementsByTagName("span");

function inputHappened(){
    let value=range.value;

    for(let i=0;i<spanTags.length;i++){
        let Multiplier = randomMultipliers[i];
        let currentSpan=spanTags[i];
        currentSpan.style.top=value*Multiplier+"px";
    }
}

range.addEventListener("input",inputHappened);

