let num = 2;

// function myFunction() {
//     var h = document.getElementById("boxes");
//     h.innerHTML= "";
//     var x = document.getElementById("inputNumber").value;
//     var myImages1 = new Array();
//         myImages1[0] = "./cat3.jpeg";
//         myImages1[1] = "./cat4.jpeg";
//         myImages1[2] = "./cat5.jpeg";
//         myImages1[3] = "./cat6.jpeg";
//         myImages1[4] = "./cat7.jpeg";
//         myImages1[5] = "./cat8.jpeg";
//         myImages1[6] = "./cat9.jpeg";

    
//         var rnd = Math.floor(Math.random() * myImages1.length);
    
//         var img = new Image();
//         img.src = myImages1[rnd];
//         myImages1[rnd].height = '10px';
    
//         for (var i = 0; i < x; i++){

//     // h.insertAdjacentHTML("beforeend", "<div class='material-icons'>cloud</div>");
//     h.insertAdjacentHTML("beforeend", "<img src='" + myImages1[rnd] + "' alt='image' width='84' style='padding-left: 10px; padding-bottom: 20px; padding-top: 20px;'/>");
//   }}


function myFunction() {
  if (num % 2 == 0){
    // document.getElementById('tr').setAttribute('style','right: 3em');
    // document.getElementById('tl').setAttribute('style','left: 0');
    document.getElementById('cat').setAttribute('style','left: 50%;color: yellow;');
    document.getElementById('box_button').setAttribute('style','background-color:black');
    var h = document.getElementById("boxes");
    h.innerHTML= "";
    var x = document.getElementById("inputNumber").value;
    var myImages1 = new Array();
        myImages1[0] = "./cat3.jpeg";
        myImages1[1] = "./cat4.jpeg";
        myImages1[2] = "./cat5.jpeg";
        myImages1[3] = "./cat6.jpeg";
        myImages1[4] = "./cat7.jpeg";
        myImages1[5] = "./cat8.jpeg";
        myImages1[6] = "./cat9.jpeg";

    
        var rnd = Math.floor(Math.random() * myImages1.length);
    
        var img = new Image();
        img.src = myImages1[rnd];
        myImages1[rnd].height = '10px';
    
        for (var i = 0; i < x; i++){

    // h.insertAdjacentHTML("beforeend", "<div class='material-icons'>cloud</div>");
    h.insertAdjacentHTML("beforeend", "<img src='" + myImages1[rnd] + "' alt='image' width='84' style='padding-left: 10px; padding-bottom: 20px; padding-top: 20px;'/>");
  } 
}
  else{
    // document.getElementById('tr').setAttribute('style','');
    // document.getElementById('tl').setAttribute('style','');
    document.getElementById('cat').setAttribute('style','');
    document.getElementById('box_button').setAttribute('style','');
    var h = document.getElementById("boxes");
    h.innerHTML= "";
    var x = document.getElementById("inputNumber").value;
    var myImages1 = new Array();
        myImages1[0] = "./cat3.jpeg";
        myImages1[1] = "./cat4.jpeg";
        myImages1[2] = "./cat5.jpeg";
        myImages1[3] = "./cat6.jpeg";
        myImages1[4] = "./cat7.jpeg";
        myImages1[5] = "./cat8.jpeg";
        myImages1[6] = "./cat9.jpeg";

    
        var rnd = Math.floor(Math.random() * myImages1.length);
    
        var img = new Image();
        img.src = myImages1[rnd];
        myImages1[rnd].height = '10px';
    
        for (var i = 0; i < x; i++){

    // h.insertAdjacentHTML("beforeend", "<div class='material-icons'>cloud</div>");
    h.insertAdjacentHTML("beforeend", "<img src='" + myImages1[rnd] + "' alt='image' width='84' style='padding-left: 10px; padding-bottom: 20px; padding-top: 20px;'/>");
  } 
  }
  ++num;
}