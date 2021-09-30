var image = document.getElementById('img');
var imageUrl = new Array();

        imageUrl[0] = "./bird.png";

        imageUrl[1] = './flowerone.png';

        imageUrl[2] = 'http://cdn2.stylecraze.com/wp-content/uploads/2013/07/dahlia-flowers.jpg';

        imageUrl[3] = 'https://static.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg';

        imageUrl[4] = 'https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg';

        imageUrl[5] = 'http://cdn2.stylecraze.com/wp-content/uploads/2013/07/dahlia-flowers.jpg';


 $("#arc-slider").roundSlider({
  sliderType: "min-range",
  circleShape: "custom-quarter",
  value: 0,
  startAngle: 315,
  editableTooltip: false,
  showTooltip: false,
  // editableTooltip: false,
  radius: 150,
  width: 6,
  handleSize: "+15",
  tooltipFormat: function (args) {
  //     return args.value + " %";
  
    console.log(args.value);
  image.style.width = 200*(args.value / 20)+'px';
  
  // if(args.value<40&&args.value>20){
  //   image.style.top = args.value+'px';
  // }
  }
});

$("#arc-slidertwo").roundSlider({
  sliderType: "min-range",
  circleShape: "custom-quarter",
  value: 0,
  startAngle: 135,
  // editableTooltip: false,
  editableTooltip: false,
  showTooltip: false,
  radius: 150,
  width: 6,
  handleSize: "+15",
  tooltipFormat: function (args) {
    console.log(args.value);
      // return args.value + " %";
      $("#img").prop("src", imageUrl[args.value]);
  }
});

$("#slidertwo").roundSlider({
  sliderType: "min-range",
  handleShape: "round",
  width: 6,
  radius: 100,
  editableTooltip: false,
  showTooltip: false,
  value: 45,
  handleSize: "+15",
  circleShape: "custom-quarter",
  startAngle: 136,
  tooltipFormat: function (args) {
    image.style.top = 10*args.value+'px';
  
  }
});

$("#sliderthree").roundSlider({
  sliderType: "min-range",
  handleShape: "round",
  width: 6,
  radius: 100,
  editableTooltip: false,
  showTooltip: false,
  value: 45,
  handleSize: "+15",
  circleShape: "custom-quarter",
  startAngle: 315,
  tooltipFormat: function (args) {
    image.style.top = 10*args.value+'px';
  
  }
});



       
// $(document).on('input change', '#arc-slider', function() {//listen to slider changes
//     var v=args.value;//getting slider val
//     console.log(v);
//   //  $('#sliderStatus').html( $(this).val() );
//   $("#img").prop("src", imageUrl[v]);
// });

// function tooltipVal1(args) {
  // var months = ["January", "February", "March", 
  //               "April", "May", "June", "July",
  //               "August", "September", "October", 
  //               "November", "December"];

  // return months[args.value];
//   $("#img").prop("src", imageUrl[v]);
// }