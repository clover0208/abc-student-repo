var tag = document.getElementById('demo');
var sound1 = new Audio('P.wav');
function leftArrowPressed() {
    var element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) - 20 + 'px';
    }

    function rightArrowPressed() {
    var element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) + 20 + 'px';

    }

    function upArrowPressed() {
    var element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) - 20 + 'px';
    console.log(element.style.top);
      
    if( parseInt(element.style.top)<240){
        
        tag.classList.toggle('demo');
        sound1.play();
    
      }
}

    function downArrowPressed() {
    var element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) + 20 + 'px';
   

}


    function moveSelection(evt) {
        switch (evt.keyCode) {
            case 37:
            leftArrowPressed();
            break;
            case 39:
            rightArrowPressed();
            break;
            case 38:
            upArrowPressed();
            break;
            case 40:
            downArrowPressed();
            break;
            }
        };

function docReady()
{
  
  window.addEventListener('keydown', moveSelection);
}

//   if(y<200){
        
//     tag.classList.toggle('demo');

//   }

