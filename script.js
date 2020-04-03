    TweenMax.from(".copyright", 3, {
            delay: 2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from("footer", 3, {
            delay: 3,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".header", 3, {
        delay: 1,
        opacity:0,
        y: 80,
        ease: Expo.easeInOut
      });

      TweenMax.from("header", 3, {
        delay: 2,
        opacity:0,
        y: 20,
        ease: Expo.easeInOut
      });

      TweenMax.from("#btn", 3, {
        delay: 2,
        opacity:0,
        y: 5,
        ease: Expo.easeInOut
      });

      TweenMax.from("#shareLink", 3, {
        delay: 2,
        opacity:0,
        y: 5,
        ease: Expo.easeInOut
      });

      TweenMax.from(".container", 3, {
        delay: 2,
        opacity:0,
        y: 20,
        ease: Expo.easeInOut
      });
      

      var t1 = new TimelineMax();

      t1.to(".covid19", 2, {
            delay: 0,
            opacity: 0.2,
          //  x: 300,
            ease: Expo.easeInOut
      });
