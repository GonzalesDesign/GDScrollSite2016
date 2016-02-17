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
  var animTym   = 1.5;

  /**-***********************************************************************************-**/
  /**-----------=====| ANIMATION FUNCTIONS |=====-----------**/

  /**-----------=====| fAnimateHeight Function |=====-----------**/
  /** Animates element's height
   ****************************************************************/
  function fAnimateHeight (elem, eHeight) {
    tMx.to (elem, animTym, {css: {height: eHeight}, ease: easePower});
  }

  /**-----------=====| fAnimateWidth Function |=====-----------**/
  /** Animates element's width
   ****************************************************************/
  function fAnimateWidth (elem, eWidth) {
    tMx.to (elem, animTym, {css: {width: eWidth}, ease: easePower});
  }

  /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
  /** Animates element's height and width
   ****************************************************************/
  function fAnimateHeightWidth (elem, eHeight, eWidth) {
    tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: easePower});
    //tMx.css ({"backgroundSize": "cover"});
    //, backgroundSize : "cover", border : "1px solid teal"
    //tMx.css ({"border": 1px solid cyan});
  }

  /**-----------=====| fAnimateSlider Function |=====-----------**/
  /** Animates element's left and right positions
   ****************************************************************/
  function fAnimateSlider (elem, eTop, eLeft) {
    //var posLeft = position.left();
    //tMx.to (elem, animTym, {css: {y: eTop, offsetLeft: eLeft}, ease: easePower});
    tMx.to (elem, animTym, {y: eTop, x: eLeft, ease: easePower});
    //tMx.to (elem, animTym, {backgroundSize: "+=25% +=25%", ease: easePower}); //Testing
  }

  function fSlider (elem, horizPos) {
    fAnimateSlider (elem, 0, horizPos);
  }

  /**-----------=====| fAnimateImageTitleTop Function |=====-----------**/
  /** Animates element's top positions
   ****************************************************************/
  function fAnimateImageTitleTop (elem, eTopPos) {
    tMx.to (elem, animTym, {css: {top: eTopPos}, ease: easePower});
  }

  function fSettingCSSStyle (elem, cssStyle, eValue) {
    elem.css ({cssStyle: eValue});
  }

  /**-----------=====| End Animation Functions |=====-----------**/

  /**-***********************************************************************************-**/

  /**-----------=====| Screen Dimensions Variables |=====-----------**/
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
  var xtraLargeHeight = 668; //625;
  var largeHeight = 560; //520;
  var mediumHeight = 443; //440;
  var smallHeight = 380; //370; //768;

  /**-----------=====| Right Column Images Width |=====-----------**/
  var rowImgRightColmn = $ (".rowImgRightColmn"); //col-xs-8
  var rowImgRightColmnWidth = rowImgRightColmn.width (); //col-xs-8 width
  console.log ("rowImgRightColmnWidth x: ", rowImgRightColmnWidth);

  /**-----------=====| CSS Variables |=====-----------**/
      //var rowImageHeight = "625px"; //Height of div that holds the background image
  var r1PosterArea = $ (".r1PosterArea");
  //r1PosterArea.css ({"height": winHeight}); //Fills the whole viewport on load.

  var rowImg1   = $ (".rowImg1");
  var ulRowImg1 = $ (".ulRowImg1");
  var liR1ImgId = $ ("#liR1ImgId");
  var liR2ImgId = $ ("#liR2ImgId");
  var liR3ImgId = $ ("#liR3ImgId");
  //console.log("liR1ImgId: ",liR1ImgId);
  var aR2Images = [liR1ImgId, liR2ImgId, liR3ImgId];

  var aImgTitles = ["HBCBS Website Re-Design", "HBCBS Digital Annual Report", "HBCBS Website Media Controllers"];

  var imgTitle       = $ (".imgTitle");
  var h3             = $ ("h3");
  var rowHeaderTitle = $ (".rowHeaderTitle");

  /**-----===( Get image real dimensions )===-----**/
  function realImgDimension (img) {
    var i = new Image ();
    i.src = img.src;
    return {
      naturalWidth : i.width,
      naturalHeight: i.height
    };
  }

  var myImage = document.getElementById ("liR1ImgId");
  myImage.addEventListener ("load", function () {
    var realSize = realImgDimension (this);
    console.log ('My width is: ', realSize.naturalWidth);
    console.log ('My height is: ', realSize.naturalHeight);
  });
  /**-----===( End image real dimensions )===-----**/
  //h3.css ({"lineHeight": "80%"});
  //fSettingCSSStyle(h3, "lineHeight", "80%");
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

  var j = 0;

  /**-----===( Next Previous Click Functions )===-----**/
  var leftArrow  = $ ("#leftArrow");
  var rightArrow = $ ("#rightArrow");

  var rImgTitle = $ (".rImgTitle"); //rowTitleRightColmn rImgTitle

  //var rImgTitleX = document.getElementById ("rImgTitle");
  var titolo       = document.createElement ('div');
  //infoDescription.appendTo(rImgTitle);
  $ (titolo).appendTo (".rImgTitle");
  titolo.className = "titolo";
  //rImgTitleX.appendChild (infoDescription);
  titolo.textContent = aImgTitles[0];

  /**-----===( Create r2ImgTitleBar & r2ImgTitle divs and assign a classname )===-----**/
  var r2ImgTitleBar       = document.createElement ('div');
  r2ImgTitleBar.className = "r2ImgTitleBar";
  var r2ImgTitle          = document.createElement ('div');
  r2ImgTitle.className    = "r2ImgTitle";

  /** The following styles are in the css file **/
    //r2ImgTitle.style.height = "40px";
    //r2ImgTitle.style.marginLeft = "-10px";
    //r2ImgTitle.style.paddingLeft = "15px";
    //r2ImgTitle.style.border       = "1px solid cyan";

    //r2ImgTitleBar.style.top = "200px";
    //fAnimateImageTitleTop(r2ImgTitleBar, "200px");

  $ (r2ImgTitleBar).appendTo (".rowImg2");
  $ (r2ImgTitle).appendTo (r2ImgTitleBar);
  r2ImgTitle.textContent  = aImgTitles[j]; //innerHTML textContent

  var imgTitleTop;

  rowImgRightColmnWidth      = rowImgRightColmn.width ();
  var rowImgRightColmnHeight = rowImgRightColmn.height ();
  imgTitleTop                = rowImgRightColmnHeight;// -40;
  fAnimateImageTitleTop (r2ImgTitleBar, imgTitleTop);

  /*
   var xtraLargeHeight  = 625;
   var largeHeight = 520;
   var mediumHeight = 400;
   var smallHeight  = 370;
   */

  var rowImgHeight;// = smallHeight;

  //rowImgRightColmn.css ({"height": largeHeight});

  /**----------( TO DO: Create a shared Class for both Left and Right Columns )----------**/
  /**-----------=====| All the left columns |=====-----------**/
  var rowHeaderLeftColmn = $ (".rowHeaderLeftColmn");
  var rowImgLeftColmn    = $ (".rowImgLeftColmn");
  var rowTitleLeftColmn  = $ (".rowTitleLeftColmn");
  var rowParagLeftColmn  = $ (".rowParagLeftColmn");

  var aLeftColumns = [rowHeaderLeftColmn, rowImgLeftColmn, rowTitleLeftColmn, rowParagLeftColmn];

  /**-----------=====| All the right columns |=====-----------**/
  var rowHeaderRightColmn = $ (".rowHeaderRightColmn");
  var rowImgRightColmn    = $ (".rowImgRightColmn");
  var rowTitleRightColmn  = $ (".rowTitleRightColmn");
  var rowParagRightColmn  = $ (".rowParagRightColmn");
  var paragBodyx          = $ (".paragBodyx");

  var aRightColumns = [rowHeaderRightColmn, rowImgRightColmn, rowTitleRightColmn, rowParagRightColmn, rowParagRightColmn, paragBodyx];

  /**On load resize image**/
  //rowImgRightColmnWidth = $ (rowImgRightColmn).width ();
  /**----( aR2Images: HBCBS images array collection )----**/
  /*for (var i = 0; i < aR2Images.length; i++) {
   console.log("aR2Images");
   fAnimateHeightWidth (aR2Images, mediumHeight, 500);//rowImgRightColmnWidth);
   }*/

  /**-----------=====| Dynamic Image Container Width |=====-----------**/
  /** Based on the current image right column width, multiply
   * by the image array length.
   * Add
   **************************************************************************/
  var ulRowImg1Width = (rowImgRightColmnWidth * aR2Images.length) + 100;
  ulRowImg1.css ({"width": ulRowImg1Width});
  console.log ("rowImgRightColmnWidth: ", rowImgRightColmnWidth);
  console.log ("ulRowImg1Width: ", ulRowImg1Width);
  /**-**********************************************************************-**/

  /**-----------=====| Media Queries |=====-----------**/
  function fMediaQueries () {
    winWidth = $ (window).width ();
    console.log ("winWidth: " + winWidth);
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
    /*imgTitle vertical position. Put at the bottom*/
    imgTitleTop = rowImgHeight - 40;

    fAnimateWidth (imgTitle, rowImgRightColmnWidth);


    /*var xtraLargeHeight = 668; //625;
     var largeHeight = 560; //520;
     var mediumHeight = 440; //400;
     var smallHeight = 410; //370; //768;

     var largeDevices  = 1200;
     var mediumDevices = 992;
     var smallDevices  = 640;
     */
    /**-------------===========( Cellphones Viewport )===========-------------**/
    if (winWidth <= 512) {
      console.log ("tinyDevices:-------");

      var tinyLeftCol  = winWidth / 9;
      console.log ("tinyLeftCol: ", tinyLeftCol);
      var tinyRightCol = winWidth - tinyLeftCol;
      console.log ("tinyRightCol: ", tinyRightCol);
      /**----( aR2Images: Setting array value's heights and widths )----**/
      for (var i = 0; i < aR2Images.length; i++) {
        fAnimateHeightWidth (aR2Images, smallHeight, tinyRightCol); //rowImgRightColmnWidth);
      }

    /**-------------===========( Smartphones Viewport )===========-------------**/
    } else if (winWidth <= smallDevices && winWidth > 512) {
      console.log ("smallDevices:----- " + smallDevices);
      fAnimateHeight (rowImgRightColmn, smallHeight);
      fAnimateImageTitleTop (imgTitle, smallHeight - 40);
      //rowImgHeight = smallHeight;
      //fAnimateImageTitleTop(imgTitle, imgTitleTop);
      //rowImgRightColmn.css ({"height": smallHeight});
      //rowImgHeight = smallHeight;
      rowHeaderTitle.css ({"lineHeight": "90%", "fontSize": "1.2em"});
      h3.css ({"lineHeight": "100%", "fontSize": "1.4em"});

      /**----( aR2Images: HBCBS images array collection )----**/
      for (var i = 0; i < aR2Images.length; i++) {
        fAnimateHeightWidth (aR2Images, smallHeight, rowImgRightColmnWidth); //rowImgRightColmnWidth);
      }
      /*/!**----( Compress the left columns )----**!/
       for (var i = 0; i < aLeftColumns.length; i++) {
       aLeftColumns[i].css ({"width": "20%"}); //33.33333333%;
       }
       /!**----( Adjust the right columns )----**!/
       for (var i = 0; i < aRightColumns.length; i++) {
       aRightColumns[i].css ({"width": "80%"}); //33.33333333%;
       }*/
      /**----( Default left columns width )----**/
      for (var i = 0; i < aLeftColumns.length; i++) {
        aLeftColumns[i].css ({"width": "33.33333333%"}); //33.33333333%;
      }
      /**----( Adjust the right columns )----**/
      for (var i = 0; i < aRightColumns.length; i++) {
        aRightColumns[i].css ({"width": "66.6666666%"}); //66.6666666%;
      }
      //rowParagRightColmn.css ({"paddingLeft": "15px"});
      console.log ("rowImgRightColmnWidth: " + rowImgRightColmnWidth);
      /*rowImgRightColmn.css ({"height": "300px"});*/

      /**-------------===========( Between Tablets and Smartphones Viewport )===========-------------**/
    } else if (winWidth <= mediumDevices && winWidth > smallDevices) {
      console.log ("mediumDevices:----- " + mediumDevices);
      //rowImgRightColmn.css ({"height": "500px"});
      fAnimateHeight (rowImgRightColmn, mediumHeight);
      fAnimateImageTitleTop (imgTitle, mediumHeight - 40);
      //rowImgHeight = mediumHeight;
      //fAnimateImageTitleTop(imgTitle, imgTitleTop);
      //rowImgRightColmn.css ({"height": mediumHeight});
      //rowImgHeight = mediumHeight;
      //fAnimateHeightWidth (liR1Img, mediumHeight, rowImgRightColmnWidth);
      rowHeaderTitle.css ({"lineHeight": "100%", "fontSize": "1.5em"});
      h3.css ({"lineHeight": "80%", "fontSize": "1.5em"});

      /**----( aR2Images: HBCBS images array collection )----**/
      for (var i = 0; i < aR2Images.length; i++) {
        fAnimateHeightWidth (aR2Images, mediumHeight, rowImgRightColmnWidth);//rowImgRightColmnWidth);
      }
      /*/!**----( Default left columns width )----**!/
       for (var i = 0; i < aLeftColumns.length; i++) {
       aLeftColumns[i].css ({"width": "20%"}); //33.33333333%;
       }
       /!**----( Adjust the right columns )----**!/
       for (var i = 0; i < aRightColumns.length; i++) {
       aRightColumns[i].css ({"width": "80%"}); //66.6666666%;
       }*/
      /**----( Default left columns width )----**/
      for (var i = 0; i < aLeftColumns.length; i++) {
        aLeftColumns[i].css ({"width": "33.33333333%"}); //33.33333333%;
      }
      /**----( Adjust the right columns width )----**/
      for (var i = 0; i < aRightColumns.length; i++) {
        aRightColumns[i].css ({"width": "66.6666666%"}); //66.6666666%;
      }
      //rowParagRightColmn.css ({"paddingLeft": "0px"});
      console.log ("rowImgRightColmnWidth: " + rowImgRightColmnWidth);
      //rowImgRightColmnWidth = $ (rowImgRightColmn).width ();

      /**-------------===========( Between Desktop and Tablets Viewport )===========-------------**/
    } else if (winWidth <= largeDevices && winWidth > mediumDevices) {
      console.log ("largeDevices: " + largeDevices);
      //rowImgRightColmn.css ({"height": "largeHeightpx", "backgroundColor": "#323232"});
      fAnimateHeight (rowImgRightColmn, largeHeight);
      //rowImgHeight = largeHeight;
      fAnimateImageTitleTop (imgTitle, largeHeight - 40);
      //fAnimateWidth (imgTitle, rowImgRightColmnWidth);
      //fAnimateImageTitleTop(imgTitle, largeHeight);
      //rowImgRightColmn.css ({"height": largeHeight});
      //rowImgHeight = largeHeight;
      //rowImgRightColmn.css ({"height": "300px"});
      //fAnimateHeightWidth (liR1Img, largeHeight, rowImgRightColmnWidth);
      rowHeaderTitle.css ({"lineHeight": "100%", "fontSize": "1.6em"});
      h3.css ({"lineHeight": "80%", "fontSize": "1.5em"});

      for (var i = 0; i < aR2Images.length; i++) {
        fAnimateHeightWidth (aR2Images, largeHeight, rowImgRightColmnWidth);
      }
      /**----( Default left columns width )----**/
      for (var i = 0; i < aLeftColumns.length; i++) {
        aLeftColumns[i].css ({"width": "33.33333333%"}); //33.33333333%;
      }
      /**----( Adjust the right columns )----**/
      for (var i = 0; i < aRightColumns.length; i++) {
        aRightColumns[i].css ({"width": "66.6666666%"}); //66.6666666%;
      }
      //rowImgRightColmnWidth = $ (rowImgRightColmn).width ();

      /**-------------===========( Large Desktop Viewport )===========-------------**/
    } else {
      console.log ("extra large devices: " + largeDevices);
      //rowImgRightColmn.css ({"height": "625px", "backgroundColor": "#323232"});
      fAnimateHeight (rowImgRightColmn, xtraLargeHeight);
      fAnimateImageTitleTop (imgTitle, xtraLargeHeight - 40);
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
      /**----( Default left columns width )----**/
      for (var i = 0; i < aLeftColumns.length; i++) {
        aLeftColumns[i].css ({"width": "33.33333333%"}); //33.33333333%;
      }
      /**----( Adjust the right columns )----**/
      for (var i = 0; i < aRightColumns.length; i++) {
        aRightColumns[i].css ({"width": "66.6666666%"}); //66.6666666%;
      }
      //console.log ("else liR2Img: " + liR2Img);
    }

  };

  /** On load hide the left arrow **/
  leftArrow.hide ();
  var nextPos;
  var prevPos;

  var currentImage;
  var currentImageXpos;
  /**----- Using .bind() or .click() -----**/
  /*leftArrow.click (function () {*/

  /** Test position **/
  var elemPosition = ulRowImg1.position ();
  console.log ("elemPosition: ", elemPosition.left);

  /**-------------===========( Next Click Functions )===========-------------**/
  rightArrow.click (function () {
    console.log ("rightArrow:--------------");
    leftArrow.show ();
    j++;
    nextPos            = rowImgRightColmnWidth * j;
    titolo.textContent = aImgTitles[j];
    if (nextPos <= 0) {
      nextPos = 0;
    }
    if (j >= (aR2Images.length - 1)) {
      j = aR2Images.length - 1; //imgsCount - 1; //
      rightArrow.hide ();
      console.log ("j2b: ", j);
    }
    fSlider (ulRowImg1, -nextPos);

    /** Test position **/
    elemPosition = ulRowImg1.position ();
    console.log ("elemPosition: ", elemPosition.left);
  });

  /**-------------===========( Previous Click Functions )===========-------------**/
  leftArrow.bind ("click", function () {
    console.log ("leftArrow:--------------");
    rightArrow.show ();
    j--;
    console.log ("j1: ", j);
    prevPos            = rowImgRightColmnWidth * j;
    console.log ("prevPos: ", prevPos);
    console.log ("rowImgRightColmnWidth: ", rowImgRightColmnWidth);
    console.log ("aR2Images.length: ", aR2Images.length);
    titolo.textContent = aImgTitles[j];
    if (prevPos <= 0) {
      prevPos = 0;
    }
    if (j <= 0) {
      console.log ("j1b: ", j);
      j = 0;
      leftArrow.hide ();
    }
    fSlider (ulRowImg1, -prevPos);
  });

  /**-----===( End Next Previous Click Functions )===-----**/

  /**-----===( Initial load media queries )===-----**/
  fMediaQueries ();
  /**-----===( Viewport resize load media queries )===-----**/
  window.addEventListener ('resize', fMediaQueries);

} ());
