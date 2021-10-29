(() => {
  document.addEventListener('mouseup', checkForSelection);

  let textBeingDragged;
  let originalNode

  function checkForSelection(event) {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    // console.log(selectedText)
    // let jump = document.getElementsByClassName('jump');
    // jump.innerHTML += selectedText;
    
    if (selectedText) {


      var 
    myText = document.getElementById("bounceTxt").innerHTML,
    wrapText = "";
    console.log(myText)

for (var i=0; i<myText.length; i++) {
     wrapText += "<em>" + myText.charAt(i) + "</em>";
}

document.getElementById("bounceTxt").innerHTML = wrapText;

var 
    myLetters = document.getElementsByTagName("em"),
    j = 0;

function applyBounce() {
     setTimeout(function() {
          myLetters[j].className = "bounce-me";
          j++;
          
          if (j < myLetters.length) {
               applyBounce();
          }
     }, 250);
}

applyBounce();

    
        // var div = document.createElement('div');
        // div.id = 'container';
        // div.innerHTML = 'hi';
        // div.className = 'jump';
     
        // document.body.appendChild(div);

        
          // var letters = $('.jump').text().split('');
          // var spans = '<span>' + letters.join('</span><span>') + '</span>';
          // $('.jump').html(spans);
    
          // console.log(letters)
    
          // var currentSpan = $('.jump span:first');
    
          // setInterval(function() {
    
          //   // check if we grabbed the wrong one
          //   if(currentSpan.length === 0) {
          //     currentSpan = $('.jump span:first');
          //   }
    
          //   currentSpan.addClass('up').on('transitionend',function(){
          //     $(this).removeClass('up');
          //   });
    
          //   currentSpan = currentSpan.next();
    
          // }, 50);
    
      
   



    
    
    
    
    
    
    
    


    }
  }

  // $(function() {
  //   var letters = $('.jump').text().split('');
  //   var spans = '<span>' + letters.join('</span><span>') + '</span>';
  //   $('.jump').html(spans);

  //   var currentSpan = $('.jump span:first');

  //   setInterval(function() {

  //     // check if we grabbed the wrong one
  //     if(currentSpan.length === 0) {
  //       currentSpan = $('.jump span:first');
  //     }

  //     currentSpan.addClass('up').on('transitionend',function(){
  //       $(this).removeClass('up');
  //     });

  //     currentSpan = currentSpan.next();

  //   }, 50);

  // });
  
  // function handleDragEnd(event) {
  //   const charRange = getCharPosition(event);
  //   const elemDrugOver = charRange.endContainer;
  //   if (elemDrugOver.nodeType === 3) {
  //     const offset = charRange.startOffset;
  //     const startText = elemDrugOver.wholeText.slice(0, offset);
  //     const endText = elemDrugOver.wholeText.slice(offset);
  //     elemDrugOver.textContent = `${startText}${textBeingDragged}${endText}`;
      
      
  //     const origText = originalNode.textContent;
  //     const indexOfSelection = origText.indexOf(textBeingDragged);
  //     const origStartText = origText.slice(0, indexOfSelection);
  //     const origEndText = origText.slice(offset + textBeingDragged.length);
  //     originalNode.textContent = `${origStartText}${origEndText}`;

  //     textBeingDragged = undefined;
  //     originalNode = undefined;
  //   }
  //   document.removeEventListener('dragend', handleDragEnd);
  // }
  
  // function getCharPosition(event) {
  //   if (document.caretPositionFromPoint) {
  //     return document.caretPositionFromPoint(event.clientX, event.clientY);
  //   } else if (document.caretRangeFromPoint) {
  //     return document.caretRangeFromPoint(event.clientX, event.clientY);
  //   }
  //   return false;
  // }
})();