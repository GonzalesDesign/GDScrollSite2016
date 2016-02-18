/**
 * Created by Odee on 2/7/16.
 */

(function () { //IIFE:Immediately-Invoked Function Expression
  'use strict';

  /**-----| Animation Variables |-----**/
  /*  Variables used for animation using GSAP TweenMax engine
   * */
  var tMx       = TweenMax;
  var easeSine  = Sine.easeOut;
  var easePower = Power3.easeOut;
  var elastic   = Elastic.easeOut;
  var layer     = 10;
  var animTym   = 1.5;

  /***************************************************************************************/
  /**-----------=====| Animation Functions |=====-----------**/

  /**-----------=====| fAnimateSlider Function |=====-----------**/
  /** Animates element's left and right positions
   ****************************************************************/
  function fAnimateSlider (elem, eTop, eLeft) {
    tMx.to (elem, animTym, {css: {y: eTop, x: eLeft}, ease: easePower});
    tMx.to (elem, animTym, {backgroundSize: "+=25% +=25%", ease: easePower});
  };
  /**-----------=====| End Animation Functions |=====-----------**/

  /**-----------=====| CSS Variables |=====-----------**/
  var leftArrow = $ ("#leftArrow");
  var rightArrow = $ ("#rightArrow");

  var rowImgRightColmn = $ (".rowImgRightColmn"); //col-xs-8
  var rowImgRightColmnWidth = $ (rowImgRightColmn).width (); //col-xs-8 width


  var rowImg1 = $ (".rowImg1");

  var ulRowImg1 = $ (".ulRowImg1");
  var liR1Img   = $ (".liR1Img");
  var liR2Img   = $ (".liR2Img");
  var liR3Img   = $ (".liR3Img");

  //ulRowImg1.style.left = "-50px";
  //ulRowImg1.css ({"left": 700});
  //var rowImgRightColmn = $ (".rowImgRightColmn"); //col-xs-8
  /*var ulRowImg1Width = $ (ulRowImg1).offsetLeft;
  console.log("ulRowImg1Width: ", ulRowImg1Width);*/

  var elemPosition; // = ulRowImg1.position();
  //console.log("position: ", position.left);


  function fSlider(elem, leftPos){
    fAnimateSlider (elem, 0, leftPos);
  }

  var nextPos;// = rowImgRightColmnWidth;
  var prevPos;// = rowImgRightColmnWidth;

  var j = 0;

  leftArrow.click(function() {
    j--;
    console.log("j1: ", j);
    prevPos = rowImgRightColmnWidth * j;
    console.log("prevPos: ", prevPos);
    fSlider (ulRowImg1, prevPos);
    //prevPos -= prevPos;
  });

  rightArrow.click(function() {
    //nextPos++;
    console.log("rightArrow.click");
    j++;
    console.log("j2: ", j);
    nextPos = rowImgRightColmnWidth * j;
    console.log("nextPos: ", nextPos);
    fSlider (ulRowImg1, -nextPos);


    //nextPos = 0; //+= nextPos;
    /*elemPosition = ulRowImg1.position();
    console.log("elemPosition: ", elemPosition.left);*/
  });

  //rightArrow.addEventListener ('click', fSlider, false);


} ());
