// let imgTag = document.getElementsByTagName('img');
// Tags.push(imgTag)
// let videoTag = document.getElementsByTagName('video');
// Tags.push(videoTag)
var stringorigin = 'Writing out giant letters with javascript is a bad idea! ';
   var current_letter_count = 0;



let Tags = [];
let pTagOne = [];
let aTagOne = [];
let h3TagOne = [];
let h2TagOne = [];
let h1TagOne = [];
let liTagOne = [];
let pTag = document.getElementsByTagName('p');
let aTag = document.getElementsByTagName('a');
let h3Tag = document.getElementsByTagName('h3');
let h2Tag = document.getElementsByTagName('h2');
let h1Tag = document.getElementsByTagName('h1');
let liTag = document.getElementsByTagName('li');

Tags.push(pTag)
Tags.push(aTag)
Tags.push(h3Tag)
Tags.push(h2Tag)
Tags.push(h1Tag)
Tags.push(liTag)

// function gotMessage(request, sender, sendResponse) {
    // console.log(request.toggle);

for (let i = 0; i < pTag.length; i++) {
            var pos = 0;
            pos++;
            let thispTag = pTag[i];
            // console.log(thispTag)
            pTagOne[i] = thispTag.innerHTML;
            let letters=thispTag.innerHTML.split("");

let containers=letters.map((l)=>{
  return "<span>"+l+"</span>";
});


let x=letters.map((l)=>{
  return Math.floor(Math.random()*20)+15;
});


let angles=letters.map((l)=>{
  return Math.random()*50;
})


let yPositions=letters.map((l)=>{
  return Math.floor(Math.random()*150);
})


thispTag.innerHTML=containers.join(" ");
let split_words=thispTag.getElementsByTagName("span");




function changeColor(word,angle,x,y){
    thispTag.addEventListener("mouseover",()=>{
  
    if(Math.random()<0.5){
      angle=-2*angle;
    }
  
    // if(Math.random()<0.5){
    //   y=-y*3/1.5;
    //   x=-x*3/1.5;
    // }
    else{
      y=y/2.5;
      x=x/2.5;
      angle=2*angle;
    }
  
  
  
    thispTag.style.transform="rotate("+Number(angle)+"deg) translate(0,"+Number(y)*2+"px)";
    
    });
  }


  
  for(let i=0;i<split_words.length;i+=1){
    changeColor(split_words[i],angles[i],x[i],yPositions[i]);
  }
 
  aTag[i].style.color="#ff0000";
  pTag[i].style.color="blue";
  //h3Tag[i].style.color="#ff0000";
  console.log(pTag[i])





                   
}

for (let m = 0; m < aTag.length; m++) {
    let thisaTag = aTag[m];
    // console.log(thispTag)
   
    aTagOne[m] = thisaTag.innerHTML;
   let letterstwo=thisaTag.innerHTML.split("");
   let containerstwo=letterstwo.map((l)=>{
    return "<span>"+l+"</span>";
  });
  let xtwo=letterstwo.map((l)=>{
    return Math.floor(Math.random()*20)+15;
  });

  let anglestwo=letterstwo.map((l)=>{
    return Math.random()*50;
  })
  let yPositionstwo=letterstwo.map((l)=>{
    return Math.floor(Math.random()*150);
  })

  thisaTag.innerHTML=containerstwo.join(" ");
let split_wordstwo=thisaTag.getElementsByTagName("span");

function changeColortwo(word,anglestwo,xtwo,ytwo){
    thisaTag.addEventListener("mouseover",()=>{
  
    if(Math.random()<0.5){
      anglestwo=-2*anglestwo;
    }
  else{
      ytwo=ytwo/2.5;
      xtwo=xtwo/2.5;
      anglestwo=2*anglestwo;
    }
  
thisaTag.style.transform="rotate("+Number(anglestwo)+"deg) translate(0,"+Number(ytwo)*2+"px)";
    
    });
  }
  for(let m=0;m<split_wordstwo.length;m+=1){
    changeColortwo(split_wordstwo[m],anglestwo[m],xtwo[m],yPositionstwo[m]);
  }
}
    
    

// }
// chrome.runtime.onMessage.addListener(gotMessage);








//             var id = null;
//             var pos = 0;
//            clearInterval(id);
//   id = setInterval(frame, 200);
//   function frame() {

//       pos++; 
//       pTagOne[i].style.left += pos+ 'px';
//             aTag[i].style.bottom = pos+ 'px';
//             h3Tag[i].style.bottom = pos+ 'px';
    
//   }
            
           
            // pTag[i].style.left += 100*randomNums[i]+ 'px';
            // aTag[i].style.bottom = 100*randomNums[i]+ 'px';
            // h3Tag[i].style.bottom = 100*randomNums[i]+ 'px';
            // var string=pTagOne[i]
        //     letter_e.forEach(function(count) {
 
        //         document.addEventListener('DOMContentLoaded', function() {
        //             var div = document.createElement('div');
        //             div.id = 'container';
        //             div.innerHTML = 'Hi there!';
        //             div.className = 'border pad';
                 
        //             document.body.appendChild(div);
        //             // console.log("fuck")   
        //         for (m = 0; m < count; m++) {
                    
        //             div.innerHTML = div.innerHTML + string[current_letter_count];
            
        //             current_letter_count++;
        //             if (current_letter_count >= string.length) {
        //                 current_letter_count = 0;
        //             }
        //         }
        //         div.innerHTML = div.innerHTML + '</br>';
                
        //     }, false);
            
        // });
            
            
           
            
        //     }
        // }


        // var letter_e = [
        //     25,
        //     25,
        //     25,
        //     25,
        //     25,
        //     10,
        //     10,
        //     10,
        //     10,
        //     10,
        //     25,
        //     25,
        //     25,
        //     25,
        //     10,
        //     10,
        //     10,
        //     10,
        //     10,
        //     25,
        //     25,
        //     25,
        //     25,
        //     25
        // ];
    