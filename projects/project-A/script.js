var imageUrl = new Array();

        imageUrl[0] = 'https://static.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg';

        imageUrl[1] = 'https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg';

        imageUrl[2] = 'http://cdn2.stylecraze.com/wp-content/uploads/2013/07/dahlia-flowers.jpg';

        imageUrl[3] = 'https://static.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg';

        imageUrl[4] = 'https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg';

        imageUrl[5] = 'http://cdn2.stylecraze.com/wp-content/uploads/2013/07/dahlia-flowers.jpg';


 $("#arc-slider").roundSlider({
  sliderType: "min-range",
  circleShape: "custom-quarter",
  value: 0,
  startAngle: 45,
  editableTooltip: false,
  showTooltip: false,
  // editableTooltip: false,
  radius: 150,
  width: 6,
  handleSize: "+15",
  // tooltipFormat: function (args) {
  //     return args.value + " %";
  // }
});

$("#arc-slidertwo").roundSlider({
  sliderType: "min-range",
  circleShape: "custom-quarter",
  value: 0,
  startAngle: 219,
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