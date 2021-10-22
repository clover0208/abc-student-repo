function show() {
    var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
    var hour = time[1] % 12 || 12;               // The prettyprinted hour.
    var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
    new Notification(hour + time[2] + ' ' + period, {
      icon: 'breakfast.png',
      body: 'Please eat breakfast.'
    });
  }

function showtwo() {
    var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
    var hour = time[1] % 12 || 12;               // The prettyprinted hour.
    var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
    new Notification(hour + time[2] + ' ' + period, {
      icon: 'Dance.jpg',
      body: 'Go to dance class.'
    });
  }

function showthree() {
    var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
    var hour = time[1] % 12 || 12;               // The prettyprinted hour.
    var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
    new Notification(hour + time[2] + ' ' + period, {
      icon: 'lunch.png',
      body: 'Eat lunch please.'
    });
  }

  function showfour() {
    var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
    var hour = time[1] % 12 || 12;               // The prettyprinted hour.
    var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
    new Notification(hour + time[2] + ' ' + period, {
      icon: 'coding.png',
      body: 'Do some coding now.'
    });
  }

  function showfive() {
    var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
    var hour = time[1] % 12 || 12;               // The prettyprinted hour.
    var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
    new Notification(hour + time[2] + ' ' + period, {
      icon: 'dinner.png',
      body: 'Your favourite dinner time.'
    });
  }
  
  // Conditionally initialize the options.
  if (!localStorage.isInitialized) {
    localStorage.isActivated = true;   // The display activation.
    localStorage.frequency = 1; 
    // localStorage.frequency++;       // The display frequency, in minutes.
    localStorage.isInitialized = true; // The option initialization.
   console.log(localStorage.frequency)
}

  // Test for notification support.
  if (window.Notification) {
    // While activated, show notifications at the display frequency.
    if (JSON.parse(localStorage.isActivated)) { 
        show(); }
  
    var interval = 0; // The display interval, in minutes.
  
    setInterval(function() {
      interval++;

      if (
        JSON.parse(localStorage.isActivated) &&
          localStorage.frequency <= interval && interval<2 &&interval>=1
      ) {
        showtwo();
        // interval = 0;
        
      }
      if (
        JSON.parse(localStorage.isActivated) &&
          localStorage.frequency <= interval && interval<3&&interval>=2
      ) {
        showthree(); 
        // interval = 0;
        
      }

      if (
        JSON.parse(localStorage.isActivated) &&
          localStorage.frequency <= interval && interval<4&&interval>=3
      ) {
        showfour();
        // interval = 0;
        
      }
      if (
        JSON.parse(localStorage.isActivated) &&
          localStorage.frequency <= interval && interval<5&&interval>=4
      ) {
        showfive();
        // interval = 0;
        
      }
    }, 12000);
}
  


//   if (window.Notification) {
//     // While activated, show notifications at the display frequency.
//     if (JSON.parse(localStorage.isActivated)) { 
        
//         show(); 
//     }
  
//     var interval = 0; // The display interval, in minutes.
  
//     setInterval(function() {
//         interval = 1;
//       if (
//         JSON.parse(localStorage.isActivated) &&
//           localStorage.frequency == 1
//       ) {
//         showtwo();
//         interval = 1;
        
//       }
//     }, 600);

    // setInterval(function() {
    //     interval = 1;
    //   if (
    //     JSON.parse(localStorage.isActivated) &&
    //       localStorage.frequency <= 1
    //   ) {
    //     showtwo();
    //     // interval = 1;
        
    //   }
    // }, 600);

    // setInterval(function() {
    //     interval+=1;
  
    //     if (
    //       JSON.parse(localStorage.isActivated) &&
    //         localStorage.frequency <= interval
    //     ) {
    //       show();
    //       interval = 2;
          
    //     }
    //   }, 600);
  


  