/**
 * Created by Odee on 2/6/16.
 */
(function () { //IIFE:Immediately-Invoked Function Expression
  'use strict';

  console.log ("-----=====( GDScrollLayout.js )=====-----");

  /**-----| Animation Variables |-----**/
  /*  Variables used for animation using GSAP TweenMax engine
   * */
  var tMx       = TweenMax;
  var easeSine  = Sine.easeOut;
  var easePower = Power3.easeOut;
  var elastic   = Elastic.easeOut;
  var layer     = 10;
  var animTym   = .5;

  /***************************************************************************************/
  /**-----------=====| ANIMATION FUNCTIONS |=====-----------**/

  /**-----------=====| fAnimateHeight Function |=====-----------**/
  /** Animates element's height
   ****************************************************************/
  function fAnimateHeight (elem, eHeight) {
    tMx.to (elem, animTym, {css: {height: eHeight}, ease: easePower});
  };

  /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
  /** Animates element's height and width
   ****************************************************************/
  function fAnimateHeightWidth (elem, eHeight, eWidth) {
    tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: easePower});
    //tMx.css ({"backgroundSize": "cover"});
    //, backgroundSize : "cover", border : "1px solid teal"
    //tMx.css ({"border": 1px solid cyan});
  };

  /**-----------=====| fAnimateSlider Function |=====-----------**/
  /** Animates element's left and right positions
   ****************************************************************/
  function fAnimateSlider (elem, eTop, eLeft) {
    //var posLeft = position.left();
    //tMx.to (elem, animTym, {css: {y: eTop, offsetLeft: eLeft}, ease: easePower});
    tMx.to (elem, animTym, {y: eTop, x: eLeft, ease: easePower});
    //tMx.to (elem, animTym, {backgroundSize: "+=25% +=25%", ease: easePower}); //Testing
  };

  function fSlider (elem, horizPos) {
    fAnimateSlider (elem, 0, horizPos);
  };

  function fSettingCSSStyle(elem, cssStyle, eValue){
    elem.css ({cssStyle: eValue});
  }

  /**-----------=====| End Animation Functions |=====-----------**/

  /***************************************************************************************/

  /**-----------=====| Screen Widths Variables |=====-----------**/
  var winWidth; //Window width
  var winHeight     = $ (window).height ();
  //winHeight = winHeight-32;
  //console.log ("winWidth: " + winWidth);
  console.log ("winHeight: " + winHeight);
  /**-----------=====| Viewports Size |=====-----------**/
  var largeDevices  = 1200;
  var mediumDevices = 992;
  var smallDevices  = 640; //768;

  /**-----------=====| Right Column Images Height |=====-----------**/
  var xtraLargeHeight  = 668; //625;
  var largeHeight = 560; //520;
  var mediumHeight = 440; //400;
  var smallHeight  = 410; //370; //768;

  /**-----------=====| CSS Variables |=====-----------**/
      //var rowImageHeight = "625px"; //Height of div that holds the background image
  var r1PosterArea = $ (".r1PosterArea");
  //r1PosterArea.css ({"height": winHeight}); //Fills the whole viewport on load.

  //fAnimateHeight (r1PosterArea, smallHeight);

  var rowImgRightColmn = $ (".rowImgRightColmn"); //col-xs-8
  //rowImgRightColmn.style.height = "40%";
  //rowImgRightColmn.css ({"height": "400px"});

  var rowImgRightColmnWidth = rowImgRightColmn.width (); //col-xs-8 width
  console.log("rowImgRightColmnWidth x: ",rowImgRightColmnWidth)

  //var rowImgRightColmnHeight;// = rowImgRightColmn.height ();
  //console.log("rowImgRightColmnHeight a: ", rowImgRightColmnHeight);

  /*rowImgRightColmnHeight = $ (rowImgRightColmn).height ();
  console.log("rowImgRightColmnHeight b: ", rowImgRightColmnHeight);*/

  var rowImg1 = $ (".rowImg1");

  var ulRowImg1 = $ (".ulRowImg1");
  var liR1Img   = $ (".liR1Img");
  var liR2Img   = $ (".liR2Img");
  var liR3Img   = $ (".liR3Img");

  var aR2Images = [liR1Img, liR2Img, liR3Img];
  var aImgTitles = ["HBCBS Website Re-Design", "HBCBS Digital Annual Report", "HBCBS Website Media Controllers"];


  var imgTitle = $ (".imgTitle");

  var h3 = $("h3");
  var rowHeaderTitle = $(".rowHeaderTitle");
  //h3.css ({"lineHeight": "80%"});
  //fSettingCSSStyle(h3, "lineHeight", "80%");


  function fAnimateImageTitleTop(elem, eTopPos){
    tMx.to (elem, animTym, {css: {top: eTopPos}, ease: easePower});
  };

  //fAnimateImageTitleTop(imgTitle, 40);

  //imgTitle.style.top = "60px";
  //var imgTitleTop = rowImgRightColmnHeight -180;
  //imgTitle.css ({"top": imgTitleTop});
  //console.log("imgTitleTop: ", imgTitleTop);
  //fAnimateSlider (imgTitle, imgTitleTop, 0);

  /*ulRowImg1.css ({"height": rowImgRightColmnHeight});
  liR1Img.css ({"height": xtraLargeHeight, "width": rowImgRightColmnWidth}); //, "border": "4px solid black"
  liR2Img.css ({"height": mediumHeight, "width": rowImgRightColmnWidth});
  liR3Img.css ({"height": mediumHeight, "width": rowImgRightColmnWidth});*/

  /**-----===( Next Previous Click Functions )===-----**/
  var leftArrow  = $ ("#leftArrow");
  var rightArrow = $ ("#rightArrow");

  var rImgTitle = $ (".rowTitleRightColmn"); //rowTitleRightColmn rImgTitle

  var nextPos;
  var prevPos;
  var j          = 0;


  /**-----===( Create r2ImgTitleBar & r2ImgTitle divs and assign a classname )===-----**/
  var r2ImgTitleBar = document.createElement ('div');
  r2ImgTitleBar.className = "r2ImgTitleBar";
  var r2ImgTitle = document.createElement ('div');
  r2ImgTitle.className = "r2ImgTitle";
  /** The following styles are in the css file **/
  //r2ImgTitle.style.height = "40px";
  //r2ImgTitle.style.marginLeft = "-10px";
  //r2ImgTitle.style.paddingLeft = "15px";
  //r2ImgTitle.style.border       = "1px solid cyan";

  //r2ImgTitleBar.style.top = "200px";
  //fAnimateImageTitleTop(r2ImgTitleBar, "200px");

  $ (r2ImgTitleBar).appendTo (".rowImg2");
  $ (r2ImgTitle).appendTo (r2ImgTitleBar);
  r2ImgTitle.textContent = aImgTitles[j]; //innerHTML textContent

  var imgTitleTop;

  rowImgRightColmnWidth = rowImgRightColmn.width ();
  var rowImgRightColmnHeight = rowImgRightColmn.height ();
  imgTitleTop = rowImgRightColmnHeight;// -40;
  fAnimateImageTitleTop(r2ImgTitleBar, imgTitleTop);

  /*
  var xtraLargeHeight  = 625;
   var largeHeight = 520;
   var mediumHeight = 400;
   var smallHeight  = 370;
   */

  var rowImgHeight;// = smallHeight;

  //rowImgRightColmn.css ({"height": largeHeight});


  /**-----------=====| All the left columns |=====-----------**/
  var rowHeaderLeftColmn = $(".rowHeaderLeftColmn");
  var rowImgLeftColmn = $(".rowImgLeftColmn");
  var rowTitleLeftColmn = $(".rowTitleLeftColmn");
  var rowParagLeftColmn = $(".rowParagLeftColmn");

  var aLeftColumns = [rowHeaderLeftColmn, rowImgLeftColmn, rowTitleLeftColmn, rowParagLeftColmn];

  /**-----------=====| All the right columns |=====-----------**/
  var rowHeaderRightColmn = $(".rowHeaderRightColmn");
  var rowImgRightColmn = $(".rowImgRightColmn");
  var rowTitleRightColmn = $(".rowTitleRightColmn");
  var rowParagRightColmn = $(".rowParagRightColmn");

  var aRightColumns = [rowImgRightColmn, rowTitleRightColmn, rowParagRightColmn, rowParagLeftColmn];



  /**-----------=====| Media Queries |=====-----------**/
  function fMediaQueries () {
    winWidth = $ (window).width ();
    //console.log ("winWidth: " + winWidth);


    /*rowImgRightColmn.css ({"height": rowImgHeight});
    console.log ("rowImgHeight: " + rowImgHeight);*/
    rowImgRightColmnWidth = $ (rowImgRightColmn).width ();
    //console.log ("rowImgRightColmnWidth: " + rowImgRightColmnWidth);

    /*rowImgRightColmnHeight = rowImgRightColmn.height ();
    imgTitleTop = rowImgRightColmnHeight -40;
    console.log("imgTitleTop: ", imgTitleTop);
    console.log("rowImgRightColmnHeight mq: ", rowImgRightColmnHeight);
    fAnimateImageTitleTop(imgTitle, imgTitleTop);*/

    /*Image title top position*/
    //rowImgRightColmnHeight = $ (rowImgRightColmn).height ();
    //imgTitleTop = rowImgRightColmnHeight -40;
    //console.log("rowImgRightColmnHeight: ", rowImgRightColmnHeight);
    //imgTitle.css ({"top": imgTitleTop});
    //fAnimateSlider (imgTitle, imgTitleTop, 0)

    imgTitleTop = rowImgHeight -40;

    /**-------------===========( Smartphones Viewport )===========-------------**/
    if (winWidth <= smallDevices) {
      fAnimateHeight (rowImgRightColmn, smallHeight);
      fAnimateImageTitleTop(imgTitle, smallHeight-40);
      //rowImgHeight = smallHeight;
      //fAnimateImageTitleTop(imgTitle, imgTitleTop);
      //rowImgRightColmn.css ({"height": smallHeight});
      //rowImgHeight = smallHeight;

      rowHeaderTitle.css ({"lineHeight": "90%", "fontSize":"1.2em"});
      h3.css ({"lineHeight": "100%", "fontSize":"1.4em"});

      for (var i = 0; i < aR2Images.length; i++) {
        fAnimateHeightWidth (aR2Images[i], smallHeight, 500); //rowImgRightColmnWidth);
      }
      /**----( Compress the left columns )----**/
      for(var i = 0; i < aLeftColumns.length; i++){
        aLeftColumns[i].css ({"width": "10%"}); //33.33333333%;
      }
      /**----( Adjust the right columns )----**/
      /*for(var i = 0; i < aRightColumns.length; i++){
        aRightColumns[i].css ({"width": "80%"}); //33.33333333%;
      }*/

      //rowParagRightColmn.css ({"paddingLeft": "15px"});

      console.log ("rowImgRightColmnWidth: " + rowImgRightColmnWidth);

      /*rowImgRightColmn.css ({"height": "300px"});*/
      console.log ("smallDevices: " + smallDevices);

      /**-------------===========( Between Tablets and Smartphones Viewport )===========-------------**/
    } else if (winWidth <= mediumDevices && winWidth > smallDevices) {
      //rowImgRightColmn.css ({"height": "500px"});
      fAnimateHeight (rowImgRightColmn, mediumHeight);
      fAnimateImageTitleTop(imgTitle, mediumHeight-40);
      //rowImgHeight = mediumHeight;
      //fAnimateImageTitleTop(imgTitle, imgTitleTop);
      //rowImgRightColmn.css ({"height": mediumHeight});
      //rowImgHeight = mediumHeight;
      //fAnimateHeightWidth (liR1Img, mediumHeight, rowImgRightColmnWidth);

      rowHeaderTitle.css ({"lineHeight": "100%", "fontSize":"1.5em"});
      h3.css ({"lineHeight": "80%", "fontSize":"1.5em"});

      /**----( aR2Images: HBCBS images array collection )----**/
      for (var i = 0; i < aR2Images.length; i++) {
        fAnimateHeightWidth (aR2Images[i], mediumHeight, 500);//rowImgRightColmnWidth);
      }

      /**----( Default left columns width )----**/
      for(var i = 0; i < aLeftColumns.length; i++){
        aLeftColumns[i].css ({"width": "20%"}); //33.33333333%;
      }
      /**----( Adjust the right columns )----**/
      for(var i = 0; i < aRightColumns.length; i++){
        aRightColumns[i].css ({"width": "80%"}); //66.6666666%;
      }

      //rowParagRightColmn.css ({"paddingLeft": "0px"});

      console.log ("rowImgRightColmnWidth: " + rowImgRightColmnWidth);

      //rowImgRightColmnWidth = $ (rowImgRightColmn).width ();
      console.log ("mediumDevices: " + mediumDevices);

      /**-------------===========( Between Desktop and Tablets Viewport )===========-------------**/
    } else if (winWidth <= largeDevices && winWidth > mediumDevices) {
      //rowImgRightColmn.css ({"height": "largeHeightpx", "backgroundColor": "#323232"});
      fAnimateHeight (rowImgRightColmn, largeHeight);
      //rowImgHeight = largeHeight;
      fAnimateImageTitleTop(imgTitle, largeHeight-40);
      //fAnimateImageTitleTop(imgTitle, largeHeight);
      //rowImgRightColmn.css ({"height": largeHeight});
      //rowImgHeight = largeHeight;
      //rowImgRightColmn.css ({"height": "300px"});
      //fAnimateHeightWidth (liR1Img, largeHeight, rowImgRightColmnWidth);

      rowHeaderTitle.css ({"lineHeight": "100%", "fontSize":"1.8em"});
      h3.css ({"lineHeight": "80%", "fontSize":"1.5em"});

      for (var i = 0; i < aR2Images.length; i++) {
        fAnimateHeightWidth (aR2Images, largeHeight, rowImgRightColmnWidth);
      }

      /**----( Default left columns width )----**/
      for(var i = 0; i < aLeftColumns.length; i++){
        aLeftColumns[i].css ({"width": "33.33333333%"}); //33.33333333%;
      }
      //rowImgRightColmnWidth = $ (rowImgRightColmn).width ();
      console.log ("largeDevices: " + largeDevices);

      /**-------------===========( Large Desktop Viewport )===========-------------**/
    } else {
      //rowImgRightColmn.css ({"height": "625px", "backgroundColor": "#323232"});
      fAnimateHeight (rowImgRightColmn, xtraLargeHeight);
      fAnimateImageTitleTop(imgTitle, xtraLargeHeight-40);
      //rowImgHeight = xtraLargeHeight;
      //fAnimateImageTitleTop(imgTitle, imgTitleTop);
      //fAnimateImageTitleTop(imgTitle, xtraLargeHeight);
      //rowImgRightColmn.css ({"height": xtraLargeHeight});
      //rowImgHeight = xtraLargeHeight;
      //rowImgRightColmn.css ({"height": xtraLargeHeight});
      //fAnimateHeightWidth (liR1Img, xtraLargeHeight, rowImgRightColmnWidth);
      //fAnimateHeightWidth (liR2Img, xtraLargeHeight, rowImgRightColmnWidth);
      for (var i = 0; i < aR2Images.length; i++) {
        fAnimateHeightWidth (aR2Images, xtraLargeHeight, rowImgRightColmnWidth);
      }
      console.log ("extra large devices: " + largeDevices);
      //console.log ("else liR2Img: " + liR2Img);
    }

  };


  /** On load hide the left arrow **/
  leftArrow.hide();
  /**----- Using .bind() or .click() -----**/
  /*leftArrow.click (function () {*/
  /**-----===( Next Click Functions )===-----**/
  rightArrow.click (function () {
    console.log ("rightArrow.click");
    leftArrow.show();
    j++;
    console.log ("j2: ", j);
    nextPos = rowImgRightColmnWidth * j;
    console.log ("nextPos: ", nextPos);
    console.log ("aR2Images.length: ", aR2Images.length);

    if (nextPos <= 0) {
      nextPos = 0;
    }
    if (j >= (aR2Images.length - 1)) { //(aR2Images.length - 1)
      //console.log ("aR2Images.length: ", aR2Images.length);
      var imgsCount = aR2Images.length - 1
      console.log ("j2b: ", j);
      j = imgsCount - 1; //aR2Images.length-1;
      rightArrow.hide();
    }

    rImgTitle.textContent = aImgTitles[j];

    fSlider (ulRowImg1, -nextPos);
    /*elemPosition = ulRowImg1.position();
     console.log("elemPosition: ", elemPosition.left);*/
  });
  /**-----===( Previous Click Functions )===-----**/
  leftArrow.bind( "click", function() {
    j--;
    rightArrow.show();
    console.log ("j1: ", j);
    prevPos = rowImgRightColmnWidth * j;
    console.log ("prevPos: ", prevPos);

    if (prevPos <= 0) {
      prevPos = 0;
    }
    if (j <= 0) {
      console.log ("j1b: ", j);
      j = 0;
      leftArrow.hide();
    }

    fSlider (ulRowImg1, prevPos);

  });
  /**-----===( End Next Previous Click Functions )===-----**/

  /**-----===( Initial load media queries )===-----**/
  fMediaQueries ();
  /**-----===( Viewport resize load media queries )===-----**/
  window.addEventListener ('resize', fMediaQueries);


} ());
