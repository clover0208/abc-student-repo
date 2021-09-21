var height;
var available;
var percentage_of_page;
var half_screen;

function write_status() {
    available = $(document).height();
    percentage_of_page = 0.5;
    // half_screen = available * percentage_of_page;
    $('#scroll-val').html( height + '/' + available);
}

$(window).scroll(function (e) {
    height = $(window).scrollTop();
    write_status();
    let sh = screen.height;
    let sw = screen.width;
    let x = 0;
    let ranY = Math.random()*sh - 200;
    if (height < 80 ) {
      let win=window.open("one", "_blank", "width=250, height=130, left="+x+", top="+ranY)
    
    win.addEventListener("load", ()=>{

        let interval = setInterval(()=>{
    
          // increasing the value of x in every interval
          x+=40;
          ranY+=10;
    
          if(x > sw-300){
            // if the star has moved all the way to the right,
            // we stop this interval (important!)
            clearInterval(interval);
            // and close the star window
            win.close();
          }else{
            // if the window has not yet reached the right side
            // we use the window.moveTo() method to move it to its
            // new x locations, but keep the y location the same (ranY)
            // reference: https://www.w3schools.com/jsref/met_win_moveto.asp
            win.moveTo(x, ranY);
          }
          // the second argument in the setInterval function is the amount
          // of milliseconds before the next time the code runs
        }, 60)
      })


    

   
    }
    let x2 = screen.width/2;

    if (height > 200&&height < 700) {
     
     
  
    win2=window.open("two", "_", "width=600, height=600, left="+x2+", top=50")
    win2.blur()
}else{
    win2.close();
  }

if (height > 800&&height < 1400) {
   win3=window.open("three", "_", "width=600, height=600, left=200, top=90")
   win3.blur()
  }else{
  win3.close();
}

  
});

$('#remove').click(function(){
    mywindow.close(); 
});
