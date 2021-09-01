function myFunction() {
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
  }}



// function randomImg1() {
//     var myImages1 = new Array();
//     myImages1[0] = "images/Myimage.png";
//     myImages1[1] = "images/Myimage1.png";

//     var rnd = Math.floor(Math.random() * myImages1.length);

//     var img = new Image();
//     img.src = myImages1[rnd];
//     document.getElementById("image").appendChild(img);
// }