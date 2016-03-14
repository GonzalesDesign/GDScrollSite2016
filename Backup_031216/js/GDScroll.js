/**
 * Created by Odee on 2/4/16.
 */
(function () { //IIFE:Immediately-Invoked Function Expression
  'use strict';

  console.log ("-----=====( GDScroll.js )=====-----");

  /*$.getScript("js/GDScrollLayout.js", function(){
    alert("Script loaded but not necessarily executed.");
  });*/

  /**-----| Animation Variables |-----**/
  /*  Variables used for animation using GSAP TweenMax engine
   * */
  var tMx       = TweenMax;
  var easeSine  = Sine.easeOut;
  var easePower = Power3.easeOut;
  var elastic   = Elastic.easeOut;
  var layer     = 10;
  var animTym   = .5;

  var sectionDos          = $ (".sectionDos");
  //sectionDos.style.height = "900px";

  /**-----------=====| fAnimateHeight Function |=====-----------**/
  /** Animates element's height
   ****************************************************************/
  function fAnimateHeight (elem, eHeight) {
    tMx.to (elem, animTym, {css: {height: eHeight}, ease: easePower});
  }

  //fAnimateHeight (sectionDos, 800); //testing only!


  /**-----------=====| fParallax Function |=====-----------**/
  /** Parallax scroller
   ***************************************************************/
  window.scrollTo (0, 0);
  var yWindowOffset; // = window.pageYOffset;
  var scrollReset = 0;
  //var currentScrollPos = 600;//"500px"

  var scrollAmount; // = $ (window).scrollTop ();

  function fParallax () {

    /* Pseudo Code:
     Mouse scrolls, start timer
     if scrollTop == sectionOne top
     window.scrollTo (0, sectionTwo top)
     if scrollTop >= sectionTwo top && scrollTop < sectionThree
     window.scrollTo (0, sectionThree top)
     if timer > 2 seconds remove timer
     * */

    yWindowOffset = window.pageYOffset;
    //console.log ("yWindowOffset: ", yWindowOffset);
    //console.log ("sectionBody: ", sectionBody);

    scrollAmount = $ (window).scrollTop ();

    console.log ("scrollAmount1: ", scrollAmount);

    //--------( Logic for the scrolling symbols and elements )-------//

    //fTimer ();

    if (scrollAmount >= 100 && scrollAmount <= 200) {
      //fTimer ();
      console.log ("------Screen 1: Section Uno");
      console.log ("yWindowOffset: ", yWindowOffset);
      //scrollAmount = 0;
      console.log ("scrollAmount2: ", scrollAmount);
      //window.scrollTo (0, currentScrollPos);
      //fAnimateScrollTop (window, 700);
      //fAnimateTopPosition(sectionDos, 2500);
      //yWindowOffset = 500;
    } else if (scrollAmount >= 800 && scrollAmount <= 900) {
      console.log ("------Screen 2: Section Dos");
      //window.scrollTo (0, 900);
      //fAnimateScrollTop (window, 1340);
      //fAnimateTopPosition(sectionDos, 2500);
      //yWindowOffset = 500;
    }
  };

  window.addEventListener ("scroll", fParallax, false);

} ());
