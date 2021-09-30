var image = document.getElementById('creature');
var imageUrl = new Array();

        imageUrl[0] = './flowertwo.png';

        imageUrl[1] = './flowerone.png';

        imageUrl[2] = './flowerthree.png';

        imageUrl[3] = './boluo.png';

        imageUrl[4] = './insectone.png';

        imageUrl[5] = './insecttwo.png';
        imageUrl[6] = './insectthree.png';
        imageUrl[7] = './insectfour.png';
        imageUrl[8] = './butterfly.png';
        imageUrl[9] = './insectfive.png';
        imageUrl[10] = './insectsix.png';
        imageUrl[11] = './snake.png';
        imageUrl[12] = './bird.png';
        imageUrl[13] = './birdtwo.png';
        imageUrl[14] = './birdthree.png';
        imageUrl[15] = './birdfour.png';
        imageUrl[16] = './birdfive.png';
        imageUrl[17] = './cat.png';
        imageUrl[18] = './dragon.png';

$(document).on('input change', '.vranger', function() {//listen to slider changes
            var v=$(this).val();//getting slider val
            // console.log(v)
        function scale (number, inMin, inMax, outMin, outMax) {
                return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
            }
var mapv=parseInt(scale(v, 0, 100, 0, 19))
            console.log(scale(v, 0, 100, 0, 19));

          $("#creature").prop("src", imageUrl[mapv]);

        });

$(document).on('input change', '.vrangerthree', function() {//listen to slider changes
            var v=$(this).val();//getting slider val
            
            
            for(var i=0; i< 20;i++){
                document.getElementById('creature').style.width = 20*v+'px'
            }

            // $("#creature").style.width = 200*(v/ 20)+'px';
  

        });

$(document).on('input change', '.vrangersix', function() {//listen to slider changes
           
var v=$(this).val();//getting slider val
            
            
for(var i=0; i< 20;i++){
    document.getElementById('creature').style.top = 200*(v/ 20)+'px';
}
  
        //   $("#creature").prop("src", imageUrl[mapv]);

        });

$(document).on('input change', '.vrangerseven', function() {//listen to slider changes
           
            var v=$(this).val();//getting slider val
                        
                        
            for(var i=0; i< 20;i++){
                document.getElementById('creature').style.left = 20*v+'px';
            }
              
                    //   $("#creature").prop("src", imageUrl[mapv]);
            
                    });

                    $(document).on('input change', '.vrangerfifteen', function() {//listen to slider changes
           
                        var v=$(this).val();//getting slider val
                                    
                                    
                        for(var i=0; i< 20;i++){
                            document.getElementById('creature').style.top = 200*(v/ 20)+'px';
                        }
                          
                                //   $("#creature").prop("src", imageUrl[mapv]);
                        
                                });
$(document).on('input change', '.vrangersixteen', function() {//listen to slider changes
           
                                    var v=$(this).val();//getting slider val
                                                
                                                
                                    for(var i=0; i< 20;i++){
                                        document.getElementById('creature').style.left = 200*(v/ 20)+'px';
                                    }
                                      
                                            //   $("#creature").prop("src", imageUrl[mapv]);
                                    
                                            });


                                            var imagetwo = document.getElementById('eye-one');
                                            var imageUrltwo = new Array();
                                            
                                                    imageUrltwo[0] = './good.png';
                                                    imageUrltwo[1] = './eyeone.png';

                                                    $(document).on('input change', '.vrangertwo', function() {//listen to slider changes
                                                        var v=$(this).val();//getting slider val
                                                        // console.log(v)
                                                    function scale (number, inMin, inMax, outMin, outMax) {
                                                            return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
                                                        }
                                            var mapv=parseInt(scale(v, 0, 100, 0, 1))
                                                        console.log(scale(v, 0, 100, 0, 1));
                                            
                                                      $("#eye-one").prop("src", imageUrltwo[mapv]);
                                            
                                                    });
                                                    $(document).on('input change', '.vrangerfour', function() {//listen to slider changes
           
                                                        var v=$(this).val();//getting slider val
                                                                    
                                                                    
                                                        for(var i=0; i< 20;i++){
                                                            document.getElementById('eye-one').style.width = 20*v+'px';
                                                        }
                                                          
                                                                //   $("#creature").prop("src", imageUrl[mapv]);
                                                        
                                                                });


                                                                $(document).on('input change', '.vrangereightteen', function() {//listen to slider changes
           
                                                                    var v=$(this).val();//getting slider val
                                                                                
                                                                                
                                                                    for(var i=0; i< 20;i++){
                                                                        document.getElementById('eye-one').style.top = 200*(v/ 20)+'px';
                                                                    }
                                                                      
                                                                            //   $("#creature").prop("src", imageUrl[mapv]);
                                                                    
                                                                            });
                                                                    
                                                                    $(document).on('input change', '.vrangernineteen', function() {//listen to slider changes
                                                                               
                                                                                var v=$(this).val();//getting slider val
                                                                                            
                                                                                            
                                                                                for(var i=0; i< 20;i++){
                                                                                    document.getElementById('eye-one').style.left = 20*v+'px';
                                                                                }
                                                                                  
                                                                                        //   $("#creature").prop("src", imageUrl[mapv]);
                                                                                
                                                                                        });

                                                                                        $(document).on('input change', '.vrangertwenty', function() {//listen to slider changes
                                                                               
                                                                                            var v=$(this).val();//getting slider val
                                                                                                        
                                                                                              
                                                                                        $('#eye-one').css('transform','rotate(' + v*4 + 'deg)');          
                                                                                            // for(var i=0; i< 20;i++){
                                                                                            //     document.getElementById('eye-one').style.left = 20*v+'px';
                                                                                            // }
                                                                                              
                                                                                                    //   $("#creature").prop("src", imageUrl[mapv]);
                                                                                            
                                                                                                    });

                                                                                        $(document).on('input change', '.vranger24', function() {//listen to slider changes
                                                                               
                                                                                                        var v=$(this).val();//getting slider val
                                                                                                                    
                                                                                                          
                                                                                        $('#creature').css('transform','rotate(' + v*4 + 'deg)');          
                                                                                                        // for(var i=0; i< 20;i++){
                                                                                                        //     document.getElementById('eye-one').style.left = 20*v+'px';
                                                                                                        // }
                                                                                                          
                                                                                                                //   $("#creature").prop("src", imageUrl[mapv]);
                                                                                                        
                                                                                                                });



                                                                                                                var imageUrlthree = document.getElementById('eye-two');
                                            var imageUrlthree = new Array();
                                            
                                                    imageUrlthree[0] = './good.png';
                                                    imageUrlthree[1] = './eyetwo.png';

                                                    $(document).on('input change', '.vranger32', function() {//listen to slider changes
                                                        var v=$(this).val();//getting slider val
                                                        // console.log(v)
                                                    function scale (number, inMin, inMax, outMin, outMax) {
                                                            return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
                                                        }
                                            var mapv=parseInt(scale(v, 0, 100, 0, 1))
                                                        console.log(scale(v, 0, 100, 0, 1));
                                            
                                                      $("#eye-two").prop("src", imageUrlthree[mapv]);
                                            
                                                    });
                                                    $(document).on('input change', '.vranger33', function() {//listen to slider changes
           
                                                        var v=$(this).val();//getting slider val
                                                                    
                                                                    
                                                        for(var i=0; i< 20;i++){
                                                            document.getElementById('eye-two').style.width = 20*v+'px';
                                                        }
                                                          
                                                                //   $("#creature").prop("src", imageUrl[mapv]);
                                                        
                                                                });


                                                                $(document).on('input change', '.vranger34', function() {//listen to slider changes
           
                                                                    var v=$(this).val();//getting slider val
                                                                                
                                                                                
                                                                    for(var i=0; i< 20;i++){
                                                                        document.getElementById('eye-two').style.top = 200*(v/ 20)+'px';
                                                                    }
                                                                      
                                                                            //   $("#creature").prop("src", imageUrl[mapv]);
                                                                    
                                                                            });
                                                                    
                                                                    $(document).on('input change', '.vranger35', function() {//listen to slider changes
                                                                               
                                                                                var v=$(this).val();//getting slider val
                                                                                            
                                                                                            
                                                                                for(var i=0; i< 20;i++){
                                                                                    document.getElementById('eye-two').style.left = 20*v+'px';
                                                                                }
                                                                                  
                                                                                        //   $("#creature").prop("src", imageUrl[mapv]);
                                                                                
                                                                                        });

                                                                                        $(document).on('input change', '.vranger36', function() {//listen to slider changes
                                                                               
                                                                                            var v=$(this).val();//getting slider val
                                                                                                        
                                                                                              
                                                                                        $('#eye-two').css('transform','rotate(' + v*4 + 'deg)');          
                                                                                            // for(var i=0; i< 20;i++){
                                             
                                                                                            });
                                                                                




                                                
                                            
    