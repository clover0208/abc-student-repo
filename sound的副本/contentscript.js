let audioA = document.createElement("AUDIO");
audioA.src = chrome.extension.getURL("try/A.wav");

let audioB = document.createElement("AUDIO");
audioB.src = chrome.extension.getURL("try/B.wav");

let audioC = document.createElement("AUDIO");
audioC.src = chrome.extension.getURL("try/C.wav");

let audioD = document.createElement("AUDIO");
audioD.src = chrome.extension.getURL("try/D.wav");

let audioE = document.createElement("AUDIO");
audioE.src = chrome.extension.getURL("try/E.wav");

let audioF = document.createElement("AUDIO");
audioB.src = chrome.extension.getURL("try/F.wav");

let audioG = document.createElement("AUDIO");
audioB.src = chrome.extension.getURL("try/G.wav");

let audioH = document.createElement("AUDIO");
audioH.src = chrome.extension.getURL("try/H.wav");
   

let audioI = document.createElement("AUDIO");
audioI.src = chrome.extension.getURL("try/I.wav");

let audioJ = document.createElement("AUDIO");
audioJ.src = chrome.extension.getURL("try/J.wav");

let audioK = document.createElement("AUDIO");
audioK.src = chrome.extension.getURL("try/K.wav");

let audioL = document.createElement("AUDIO");
audioL.src = chrome.extension.getURL("try/L.wav");

let audioM = document.createElement("AUDIO");
audioM.src = chrome.extension.getURL("try/M.wav");

let audioN = document.createElement("AUDIO");
audioN.src = chrome.extension.getURL("try/N.wav");

let audioO = document.createElement("AUDIO");
audioO.src = chrome.extension.getURL("try/O.wav");

let audioP = document.createElement("AUDIO");
audioP.src = chrome.extension.getURL("try/P.wav");

let audioQ = document.createElement("AUDIO");
audioQ.src = chrome.extension.getURL("try/Q.wav");

let audioR = document.createElement("AUDIO");
audioR.src = chrome.extension.getURL("try/R.wav");

let audioS = document.createElement("AUDIO");
audioS.src = chrome.extension.getURL("try/S.wav");

let audioT = document.createElement("AUDIO");
audioT.src = chrome.extension.getURL("try/T.wav");

let audioU = document.createElement("AUDIO");
audioU.src = chrome.extension.getURL("try/U.wav");

let audioV = document.createElement("AUDIO");
audioV.src = chrome.extension.getURL("try/V.wav");

let audioW = document.createElement("AUDIO");
audioW.src = chrome.extension.getURL("try/W.wav");

let audioX = document.createElement("AUDIO");
audioX.src = chrome.extension.getURL("try/X.wav");

let audioY = document.createElement("AUDIO");
audioY.src = chrome.extension.getURL("try/Y.wav");

let audioZ = document.createElement("AUDIO");
audioZ.src = chrome.extension.getURL("try/Z.wav");




//where text bounce start

let ptags = document.body.querySelectorAll("p");
let ignoreTags = ["SCRIPT", undefined, "PICTURE"];
function superFunctionForTags(tag){
  // console.log("tag", tag);
  // console.log("tagname", tag.tagName);
  if(ignoreTags.includes(tag.tagName) || tag.innerHTML == ""){
    return tag.outerHTML; 
  }
  let emptyTag = tag.cloneNode();
  emptyTag.innerHTML = "";
  // console.log("empty", emptyTag.outerHTML)
  let outterTags = emptyTag.outerHTML.split("><");
  outterTags[0]+=">";
  outterTags[1]="<"+outterTags[1];

//   console.log("child", tag);
//   console.log("childtext", tag.innerText);
  let spanifiedString = "";
  for(let j = 0; j < tag.childNodes.length; j++){
    let cn = tag.childNodes[j];
//     console.log(cn)
    if(cn.nodeName == "#text"){
        let words = cn.textContent.trim().split(" ");
        let spans = words.map(word=>{return "<span class='leonleon'>"+word+"</span>"})
        let spanString = spans.join(" ")
//         console.log("spanstring:", spanString);

        spanifiedString+=spanString + " "
    }else{
        let spanString = superFunctionForTags(cn);
//         console.log("nested spanstring:", spanString);

        spanifiedString+=spanString + " "
    }
  }
  return outterTags[0] + spanifiedString.substring(0,spanifiedString.length-1)  + outterTags[1]

}

document.body.innerHTML = superFunctionForTags(document.body)

let leonleons = document.getElementsByClassName("leonleon")
for(let i = 0; i < leonleons.length; i++){
    // leonleons[i].style.color = "coral"

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
 
  // color.innerHTML = "#" + randomColor;

  console.log(leonleons[i].innerHTML.toUpperCase)

 

    var n1;
    var n2;

    leonleons[i].addEventListener("mousedown", e => {
      mouseDTag = leonleons[i];
      n1 = i;
    });
    
    leonleons[i].addEventListener("mouseup", ee => {
      mouseUTag = leonleons[i];
      n2 = i;
      // size+=1;
      // console.log(mouseUTag);
      // console.log(i);
      
      let selection = window.getSelection();
      let s = selection.toString();
      
      for (let j = n1; j<(n2+1); j++){
        leonleons[j].style.color = "#" + randomColor;
        leonleons[j].style.display = 'inline-block'
        leonleons[j].style.animation="bounce 1s 2";
    
      }
    });
  }
    
    document.addEventListener('mouseup', checkForSelection);
    
    function checkForSelection(event) {
    const selection = window.getSelection();
    const selectedText = selection.toString();
   
 
    const word = selectedText.toUpperCase();
    const char = 'J';
    console.log(word[0])
 
    for(i=0;i<word.length;i++){

      if(word[0] === "L" && word[1] ==="O" && word[2] === "V" && word[3] === "E"){
        audioL.play();  
        console.log("hello")
      }
 
      if(word[0] === "M" && word[1] ==="U" && word[2] === "S" && word[3] === "I" && word[4] === "C"){
        audioU.play();  
        console.log("hello")
      }
      else{
      //A,B are frequently appear
      if(word[i] === "A"){
           // console.log("hello")
           audioA.play();  
      }
      if(word[i] === "B"){
           // console.log("hello")
           audioB.play();  
      }
      
      if(word[i] === "C"){
           // console.log("hello")
           audioC.play();  
      }
      
      if(word[i] === "D"){
           // console.log("hello")
           audioD.play();  
      }
 
      //E are frequently appear
      if(word[i] === "E"){
           // console.log("hello")
           audioE.play();  
      }
 
      if(word[i] === "F"){
           // console.log("hello")
           audioF.play();  
      }
      
      if(word[i] === "G"){
           // console.log("hello")
           audioG.play();  
      }
      
      if(word[i] === "H"){
           // console.log("hello")
           audioH.play();  
      }
 
      //I are frequently appear
      if(word[i] === "I"){
           // console.log("hello")
           audioI.play();  
      }
 
      if(word[i] === "J"){
           // console.log("hello")
           audioJ.play();  
      }
      if(word[i] === "K"){
           // console.log("hi")
           audioK.play();  
      }
 
      //L are frequently appear
      if(word[i] === "L"){
           // console.log("hi")
           audioL.play();  
      }
 
      if(word[i] === "M"){
           // console.log("hi")
           audioM.play();  
      }
      
      //N are frequently appear
      if(word[i] === "N"){
           // console.log("hi")
           audioN.play();  
      }
      //O are frequently appear
      if(word[i] === "O"){
           // console.log("O is playing")
           audioO.play();  
      }
      if(word[i] === "P"){
           // console.log("hi")
           audioP.play();  
      }
    
 
    if(word[i]="Q"){
      // console.log("hello")
      audioQ.play();
    }
 
    //R S T are frequently appear
    if(word[i]=="R"){
      // console.log("hello")
      audioR.play();
    }
 
    if(word[i]=="S"){
      // console.log("hello")
      audioS.play();
    }
    
    if(word[i]=="T"){
      // console.log("T is playing")
      audioT.play();
    }
 
    if(word[i]=="U"){
      // console.log("hello")
      audioU.play();
    }
    if(word[i]=="V"){
      // console.log("hello")
      audioV.play();
    }
    if(word[i]=="W"){
      // console.log("hello")
      audioW.play();
    }
    if(word[i]=="X"){
      // console.log("hello")
      audioX.play();
    }
    if(word[i]=="Y"){
      // console.log("hello")
      audioY.play();
    }
    if(word[i]=="Z"){
      // console.log("hello")
      audioZ.play();
    }
  }
   }
 }






    // setTimeout(() => {leonleons[i].style.top -= 10 + 'px'}, 5000)

    // $('span').on('focus', function(e){
    //   $( 'span' ).mousedown(function() {
    //           alert( "leonleons[i]" );
    //       });
    //     });


  //   $(document).ready(function(){
    
  //     var counter = i,
  //         $chars  = $(".leonleon");

  //         console.log("hello")
  
  //     setInterval(function () {
  //         $chars.eq(counter).effect( "bounce", {times:1}, 500 );
  //         counter++;
  //         if (counter >= $chars.length) {
  //             counter = 0;
  //         }
  //     }, 250);
      
  // });
  
    

// }


      


















// var span_Text = leonleons[i].innerHTML;
// let letters=span_Text.split("");
//      let containers=letters.map((l)=>{
//        return "<span>"+l+"</span>";
//      });
    //  let randomness=letters.map((l)=>{
    //   return Math.random();
    // });

    // console.log(containers)
    // let angles=letters.map((l)=>{
    //   return Math.random()*50;
    // })
    // document.addEventListener('mouseover', setInitialMousePos, false);

  //  function setInitialMousePos( event ) {
  //      console.log( event.clientX, event.clientY);
  //      document.removeEventListener('mouseover', setInitialMousePos, false);
   
    //  let yPositions=letters.map((l)=>{
    //    return Math.floor(10);
    //  })
    //  let xPositions=letters.map((l)=>{
    //   return Math.floor(Math.random()*event.clientX);
    // })

// leonleons[i].innerHTML=containers.join(" ");
    // let split_words=leonleons[i].getElementsByTagName("span");
    // console.log(split_words)
    //         for (var m=0;m<split_words.length;m+=1){
    //       split_words[m].style.display = 'inline-block'
    //       split_words[m].style.transition = "0.5s"
    //     }

        // function changeColor(word,x,y){
          // word.addEventListener("mouseover",()=>{
        
          // y=Math.floor(10)

          // if(y=Math.floor(10)){
          //   y=y-Math.floor(10)
          // }

  // if(Math.random()<0.5){
  //   angle=-angle;

  // }
  // if(yPositions)
          // if(Math.random()<0.5){
            // y=-y*3/2;
          //   x=-x*3/2;
          // }
          // else{
          //   y=y/2;
          //   x=x/2;
          // }
          // word.style.transform="translate(0,"+Number(y)*2+"px)";
  
  // });
// }

// for(let i=0;i<split_words.length;i+=1){
//   changeColor(split_words[i],yPositions[i]);
// }

// for(let i=0;i<split_words.length;i+=1){
//   changeColor(split_words[i],xPositions[i],yPositions[i]);
// }
  // let split_words=leonleons[i].getElementsByTagName("span");
  // console.log(split_words)
  // console.log(typeof split_words);

// }











// let ptags = document.body.querySelectorAll("p");
// let ignoreTags = ["SCRIPT", undefined, "PICTURE"];
// function superFunctionForTags(tag){
// //   console.log("tag", tag);
// //   console.log("tagname", tag.tagName);
//   if(ignoreTags.includes(tag.tagName) || tag.innerHTML == ""){
//     return tag.outerHTML; 
//   }
//   let emptyTag = tag.cloneNode();
//   emptyTag.innerHTML = "";
// //   console.log("empty", emptyTag.outerHTML)
//   let outterTags = emptyTag.outerHTML.split("><");
//   outterTags[0]+=">";
//   outterTags[1]="<"+outterTags[1];

// //   console.log("child", tag);
// //   console.log("childtext", tag.innerText);
//   let spanifiedString = "";
//   for(let j = 0; j < tag.childNodes.length; j++){
//     let cn = tag.childNodes[j];
// //     console.log(cn)
//     if(cn.nodeName == "#text"){
//         let words = cn.textContent.trim().split(" ");
//         let spans = words.map(word=>{return "<span class='leonleon'>"+word+"</span>"})
//         let spanString = spans.join(" ")
// //         console.log("spanstring:", spanString);

//         spanifiedString+=spanString + " "
//     }else{
//         let spanString = superFunctionForTags(cn);
// //         console.log("nested spanstring:", spanString);

//         spanifiedString+=spanString + " "
//     }
//   }
//   return outterTags[0] + spanifiedString.substring(0,spanifiedString.length-1)  + outterTags[1]

// }

// // for(let i = 0; i < ptags.length; i++){
// //   let p = ptags[i];
// //   let pstring = superFunctionForTags(p);
// //   p.innerHTML = pstring;
// // }
// document.body.innerHTML = superFunctionForTags(document.body)

// let leonleons = document.getElementsByClassName("leonleon")
// for(let i = 0; i < leonleons.length; i++){

//      var span_Text = leonleons[i].innerHTML;
//      let letters=span_Text.split("");
//           let containers=letters.map((l)=>{
//             return "<span>"+l+"</span>";
//           });
         
//           let yPositions=letters.map((l)=>{
//             return Math.floor(Math.random()*150);
//           })
//      //    console.log(span_Text)
//      //    console.log(typeof leonleons[i].innerHTML);
       

//      // leonleons[i].addEventListener("mouseover", function(){
          
//           leonleons[i].innerHTML=containers.join(" ");
//           let split_words=leonleons[i].getElementsByTagName("span");
//           // leonleons[i].style.color = "coral"
//           // leonleons[i].style.left = 100 * i + 'px'
          
//      //    var elems = document.getElementsByTagName('span');
//         for (var m=0;m<split_words.length;m+=1){
//           split_words[m].style.display = 'inline-block'
//           split_words[m].style.transition = "0.5s"
//         }

//         function changeColor(word,y){
//           word.addEventListener("mouseover",()=>{
        
//           if(Math.random()<0.5){
//             y=-y*3/2;
//           }
//           else{
//             y=y/2;
//           }
//           word.style.transform="translate(0,"+Number(y)*2+"px)";
  
//   });
// }

// for(let i=0;i<split_words.length;i+=1){
//   changeColor(split_words[i],yPositions[i]);
// }

     // });





 
//  }


















//bounce text end



// let ptags = document.body.querySelectorAll("p");
// let ignoreTags = ["SCRIPT", undefined, "PICTURE"];
// function superFunctionForTags(tag){
//   console.log("tag", tag);
//   console.log("tagname", tag.tagName);
//   if(ignoreTags.includes(tag.tagName) || tag.innerHTML == ""){
//     return tag.outerHTML; 
//   }
//   let emptyTag = tag.cloneNode();
//   emptyTag.innerHTML = "";
//   console.log("empty", emptyTag.outerHTML)
//   let outterTags = emptyTag.outerHTML.split("><");
//   outterTags[0]+=">";
//   outterTags[1]="<"+outterTags[1];

// //   console.log("child", tag);
// //   console.log("childtext", tag.innerText);
//   let spanifiedString = "";
//   for(let j = 0; j < tag.childNodes.length; j++){
//     let cn = tag.childNodes[j];
// //     console.log(cn)
//     if(cn.nodeName == "#text"){
//         let words = cn.textContent.trim().split(" ");
//         let spans = words.map(word=>{return "<span class='leonleon'>"+word+"</span>"})
//         let spanString = spans.join(" ")
// //         console.log("spanstring:", spanString);

//         spanifiedString+=spanString + " "
//     }else{
//         let spanString = superFunctionForTags(cn);
// //         console.log("nested spanstring:", spanString);

//         spanifiedString+=spanString + " "
//     }
//   }
//   return outterTags[0] + spanifiedString.substring(0,spanifiedString.length-1)  + outterTags[1]

// }

// for(let i = 0; i < ptags.length; i++){
//   let p = ptags[i];
//   let pstring = superFunctionForTags(p);
//   p.innerHTML = pstring;
// }

//    let yPositions=letters.map((l)=>{
//      return Math.floor(Math.random()*150);
//    })
   
//    leonleons[i].innerHTML=containers.join(" ");
// let split_words=leonleons[i].getElementsByTagName("span");

// function changeColor(word,y){
//      word.addEventListener("mouseover",()=>{
 
   
//      if(Math.random()<0.5){
//        y=-y*3/2;
//      }
//      else{
//        y=y/2;
//      }
   
   
   
//        word.style.transform="translate(0,"+Number(y)*2+"px)";
     
//      });
//    }
   
//    for(let i=0;i<split_words.length;i+=1){
//      changeColor(split_words[i],yPositions[i]);
//    }


   
 
// });

// }


  

//    for(i=0;i<selectedText.length;i++){

//      //A,B are frequently appear
//      if(word[i] === "A"){
//           console.log("hello")
//           audioA.play();  
//      }

   
// }
//    }














   
