/**
 * Created by Odee on 2/6/16.
 */

(function () { //IIFE:Immediately-Invoked Function Expression
  'use strict';
  //console.log ("-----=====( GDScrollLayout.js )=====-----");

  /**=====================| VARIABLES |=====================**/

  /**-----------=====| TweenMax Variables |=====-----------**/
  var tMx       = TweenMax;
  var easeSine  = Sine.easeOut;
  var easePower = Power3.easeOut;
  var animTym   = .5;

  /**-----------=====| Miscellaneous Counter |=====-----------**/
  var j  = 0;
  /**--{ ix: TweenMax.ticker Counter }--**/
  var ix = 0;

  /**-----------=====| Browser Inner Width |=====-----------**/
  var windowInnerWidth = window.innerWidth; //Browser window inner width
  //console.log ("windowInnerWidth: init ", windowInnerWidth);

  /**-----------=====| Bootstrap Container Inner Width |=====-----------**/
  var container = $ (".container");
  console.log ("containerWidth: ", container.width () + 30);

  /**-----------=====| Browser Window Dimensions Variables |=====-----------**/
  var winWidth; //Window width
  var winHeight = $ (window).height ();
  //winHeight = winHeight-32;
  ////console.log ("winWidth: " + winWidth);
  //console.log ("winHeight: " + winHeight);

  /**-----------=====| Devices Viewport Width |=====-----------**/
  var largeDevices  = 1200;
  var mediumDevices = 992;
  var smallDevices  = 640; //768;

  /**-----------=====| Poster Area |=====-----------**/
  var r1PosterArea = $ (".r1PosterArea");
  //r1PosterArea.css ({"height": winHeight}); //Fills the whole viewport on load.

  var colRightCrop = $ (".colRightCrop"); //Column right cropper. Hidden overflow
  var colRightCropWidth = colRightCrop.width ();

  /**-----------=====| Horizon Images |=====-----------**/
  var horizonImagesContainerId = $ ("#horizonImagesContainerId");
  var horizonImg1Id            = $ ("#horizonImg1Id");
  var horizonImg2Id            = $ ("#horizonImg2Id");
  var horizonImg3Id            = $ ("#horizonImg3Id");

  var aHorizonImages = [horizonImg1Id, horizonImg2Id, horizonImg3Id];

  /**-----------=====| Stax Images |=====-----------**/
  var staxImagesContainerId = $ ("#staxImagesContainerId");
  var staxImg1Id            = $ ("#staxImg1Id");
  var staxImg2Id            = $ ("#staxImg2Id");
  var staxImg3Id            = $ ("#staxImg3Id");
  var staxImg4Id            = $ ("#staxImg4Id");
  var staxImg5Id            = $ ("#staxImg5Id");

  var aStaxImages = [staxImg1Id, staxImg2Id, staxImg3Id, staxImg4Id, staxImg5Id];

  /**-----------=====| OwnPhones Images |=====-----------**/
  var ownImagesContainerId = $ ("#ownImagesContainerId");
  var ownImg1Id            = $ ("#ownImg1Id");
  var ownImg2Id            = $ ("#ownImg2Id");
  var ownImg3Id            = $ ("#ownImg3Id");
  var ownImg4Id            = $ ("#ownImg4Id");
  var ownImg5Id            = $ ("#ownImg5Id");

  var aOwnImages = [ownImg1Id, ownImg2Id, ownImg3Id, ownImg4Id, ownImg5Id];

  /**-----------=====| All Images Containers |=====-----------**/
  var aImgsContainer = [horizonImagesContainerId, staxImagesContainerId, ownImagesContainerId];

  /**-----===( Next Previous Buttons )===-----**/
  /**---{ Horizon Buttons }---**/
  var leftArrowHorizon  = $ ("#leftArrowHorizon");
  var rightArrowHorizon = $ ("#rightArrowHorizon");

  /**---{ Stax Gallery Buttons }---**/
  var leftArrowStax  = $ ("#leftArrowStax");
  var rightArrowStax = $ ("#rightArrowStax");

  /**---{ OwnPhones Buttons }---**/
  var leftArrowOwn  = $ ("#leftArrowOwn");
  var rightArrowOwn = $ ("#rightArrowOwn");

  /**-----------=====| All the Left Arrows |=====-----------**/
  var aLeftArrows  = [leftArrowHorizon, leftArrowStax, leftArrowOwn];
  /**-----------=====| All the Right Arrows |=====-----------**/
  var aRightArrows = [rightArrowHorizon, rightArrowStax, rightArrowOwn];

  var aImgTitles = ["aImgTitles Uno", "aImgTitles Dos", "HBCBS Website Media Controllers"];

  /**-----------=====| Headers |=====-----------**/
  var h1       = $ ("h1");
  var h2       = $ ("h2");
  var h3       = $ ("h3");
  var imgTitle = $ ("h5");

  var imgTitleHeight = 40;

  var imgTitleTop;

  /** On load hide the left arrow **/
  leftArrowHorizon.hide ();
  leftArrowStax.hide ();
  leftArrowOwn.hide ();
  var nextPos;
  var prevPos;

  var currentImage;
  var currentImageXpos;

  /**-----{ Changing columns width percentage in a Row }-----**/
  //var colRightWidth;
  //var //imgsContainerWidth;

  /**-----------=====| New left columns |=====-----------**/
  var colLeft      = $ (".colLeft");
  var colLeftWidth = colLeft.width ();
  //console.log ("colLeftWidth: init: ", colLeftWidth);

  /**-----------=====| New right columns |=====-----------**/
  var colRight      = $ (".colRight");
  var colRightWidth = colRight.width ();
  //console.log ("colRightWidth: init: ", colRightWidth);

  /**-----------=====| Right Column Images Height |=====-----------**/
  var xtraLargeHeight = 668; //625;
  var largeHeight = 560; //520;
  var mediumHeight = 430; //440;
  var smallHeight = 420; //370; //768;

  /**-----------=====| Right Column Images Width |=====-----------**/
  /*var rowImgRightColmn = $ (".rowImgRightColmn"); //col-xs-8
   var rowImgRightColmnWidth = rowImgRightColmn.width (); //col-xs-8 width
   //console.log ("rowImgRightColmnWidth x: ", rowImgRightColmnWidth);*/

  var rowImgHeight;// = smallHeight;
  var horizonImagesContainerIdWidth;

  /**-----===( Image Title )===-----**/
  var rImgTitle    = $ (".rImgTitle");
  var titolo       = document.createElement ('div');
  $ (titolo).appendTo (".rImgTitle");
  titolo.className = "titolo";
  //rImgTitleX.appendChild (infoDescription);
  titolo.textContent = aImgTitles[0];

  /**-----===( Create r2ImgTitleBar & r2ImgTitle divs and assign a classname )===-----**/
  var r2ImgTitleBar       = document.createElement ('div');
  r2ImgTitleBar.className = "r2ImgTitleBar";
  var r2ImgTitle          = document.createElement ('div');
  r2ImgTitle.className    = "r2ImgTitle";

  $ (r2ImgTitleBar).appendTo (".rowImg2");
  $ (r2ImgTitle).appendTo (r2ImgTitleBar);
  //r2ImgTitle.textContent  = aImgTitles[j]; //innerHTML textContent

  /**-------------------------------------------------------**/

  /**-***********************************************************************************-**/

  /**=====================| FUNCTIONS |=====================**/

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
  }

  /**-----------=====| fAnimateSlider Function |=====-----------**/
  /** Animates element's top and left positions
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

  /**-----------=====| fAnimateTop Function |=====-----------**/
  /** Animates element's top positions
   ****************************************************************/
  function fAnimateTop (elem, eTopPos) {
    tMx.to (elem, animTym, {css: {top: eTopPos}, ease: easePower});
  }

  function fSettingCSSStyle (elem, cssStyle, eValue) {
    elem.css ({cssStyle: eValue});
  }

  /**-----------=====| fTwoColumns Function |=====-----------**/
  /** Function for dividing the container row into two columns
   ****************************************************************/
  function fTwoColumns (rightColumnPercentage) {
    console.log ("fTwoColumns function----------------: ");
    /**-*****************************************************-**/
    /** When using the default bootstrap's div class = "container", use the ff.
     *  Otherwise use window.innerWidth.
     ***********************************************************/
    /**----{ Bootstrap class = "container" }----**/
    /** Default setting:
     * padding-right: 15px
     * padding-left: 15px
     **********************************/
    var padLeftRight   = 30;
    var containerWidth = (container.width ()) + padLeftRight;
    /**-*****************************************************-**/
        //windowInnerWidth = window.innerWidth; //Browser window inner width
        // }
        ////console.log ("fTwoColumns windowInnerWidth: ", windowInnerWidth);
    var columnRight    = containerWidth * (rightColumnPercentage / 100); // (90 / 100) for 90%
    var columnLeft            = containerWidth - columnRight;
    var imageRightColumnWidth = Math.round (columnRight);
    colRightWidth             = imageRightColumnWidth;
    //imgsContainerWidth        = imageRightColumnWidth * 3;
    /**----( Adjust left columns width )----**/
    colLeft.css ({"width": columnLeft});
    //colLeftWidth = columnLeft;
    /**----( Adjust the right columns )----**/
    colRight.css ({"width": columnRight});
    //colRightWidth = columnRight;
    fAnimateWidth (imgTitle, columnRight);
    //console.log ("containerWidth: ", containerWidth);
    //console.log ("rightColumnPercentage: ", rightColumnPercentage);
    //console.log ("columnLeft: ", Math.round (columnLeft));
    //console.log ("columnRight: ", Math.round (columnRight));
    console.log ("imageRightColumnWidth: ", imageRightColumnWidth);
    //console.log ("colRightWidth: ", colRightWidth);
    ////console.log ("imgsContainerWidth: ", imgsContainerWidth);
    //console.log ("End fTwoColumns function----------------: ");
  }

  /**-----------=====| fImagesContainerWidthHeight Function |=====------------------------------**/
  /** Function for adjusting the container's width that holds the images that's in the array
   *  id: element id name
   *  imagesArray: array that contains the specific section's images
   *  totalImgsWidth: each image width multiplied by array length
   *  ht: imgRowHeight
   *  imgTitleHeight: 40px
   ****************************************************************************************/
  function fImagesContainerWidthHeight (id, imagesArray, ht) {
    //console.log ("fImagesContainerWidthHeight:----------•");
    var totalImgsWidth = (colRightWidth * imagesArray.length) + 100;
    id.css ({"width": totalImgsWidth});
    //console.log ("imagesArray.length: ", imagesArray.length);
    //console.log ("totalImgsWidth: ", totalImgsWidth);
    //fAnimateWidth (id, totalImgsWidth);
    fAnimateHeight (id, ht + imgTitleHeight); //imgRowHeight + (imgTitleHeight = 40)
    //console.log ("End fImagesContainerWidthHeight:----------•");
  }

  /**-----------=====| fTitlePlacement Function |=====-----------**/
  /** Function for title image placement underneath each image
   *  elem: title class name
   *  ht: title background bar height
   *  vPos: top position or vertical position
   ****************************************************************/
  function fTitlePlacement (elem, ht, vPos) {
    fAnimateHeight (elem, ht);
    fAnimateTop (elem, vPos);
  }

  /**-----------=====| fImageHeightWidth Function |=====-----------**/
  /** Function for image height and width
   *  imgsArray: images array
   *  ht: image height
   *  wt: image width
   ****************************************************************/
  function fImageHeightWidth (imgsArray, ht, wt) {
    /**----( aHorizonImages: Setting array member's heights and widths )----**/
    for (var i = 0; i < imgsArray.length; i++) {
      fAnimateHeightWidth (imgsArray[i], ht, wt); //rowImgRightColmnWidth);
      ////console.log ("imgsArray[i]: ", imgsArray[i]);
    }
  }

  /**-----------=====| fNextPreviousButtons Function |=====-----------**/
  /** Function for the next and previous buttons on each section
   *  rightArrowId: right arrow element id
   *  leftArrowId: left arrow element id
   *  aImages: images array
   *  aTitles: xxxxxxxxx to do!
   *  sectionImgsContainerId: images container id
   ****************************************************************/
  /*var xx;
   function fTest(num1){
   return num1;
   }*/
  //var ii;
  //var xxx;
  var resizedViewport = false;
  function fNextPreviousButtons (rightArrowId, leftArrowId, aImages, sectionImgsContainerId) {
    console.log ("fNextPreviousButtons:----------•");
    //fResetNum(resetNum);
    /*xx = fResetNum();
     fTest(0);
     var ii = fResetNum();
     console.log ("ii: ", ii);*/
    //fResetContainers ();
    //ii = 0;
    //xxx    = 0;
    var ii = 0; //xxx;
    //console.log ("xxxa: ", xxx);
    //console.log ("iia: ", ii);
    /**-------------===========( Next Click Functions )===========-------------**/
    //rightArrowId.click (function () {
    /*rightArrowId.bind ("click", function () {
      leftArrowId.show ();
      //console.log ("rightArrowId:--------------");
      /!**----- NOT WORKING!!! ------**!/
      /!**-----{ resizedViewport: On initial load or resize }-----**!/
      if (resizedViewport === true) {
        //leftArrowId.show ();
        var iii = 1;
        nextPos = colRightWidth * iii;
        /!**-----{ fSlider: Slides the image container to the left }-----**!/
        fSlider (sectionImgsContainerId, -nextPos);
        console.log ("resizedViewport iii: if ", iii);
        /!** resizedViewport: Excecutes the first slide within then reset to false
         *  and excecutes the code within the else statement.
         ************************************************************************!/
        resizedViewport = false;
      } else {
        //ii = 0;
        console.log ("resizedViewport ii: else ");
        //leftArrowId.show ();
        ii++;
        nextPos = colRightWidth * ii;
        console.log ("nextPos: ", nextPos);
        //titolo.textContent = aTitles[ii];
        /!*if (nextPos <= 0) {
          nextPos = 0;
        }*!/
        var maxWidth = colRightWidth * ii;
        console.log ("maxWidth: ", maxWidth);
        if (nextPos >= maxWidth) {
          nextPos = 0;
        }
        if (ii >= (aImages.length - 1)) { //last image in an array
          ii = aImages.length - 1; //imgsCount - 1; //
          rightArrowId.hide ();
          console.log ("last image: ", ii);
          nextPos = colRightWidth * ii;
          //console.log ("-nextPos: ", -nextPos);
        } /!*else {
          //nextPos = colRightWidth * ii;
        }*!/
        /!**-----{ fSlider: Slides the image container to the left }-----**!/
        fSlider (sectionImgsContainerId, -nextPos);
        //console.log ("sectionImgsContainerId: ", sectionImgsContainerId);
        console.log ("-nextPos: ", -nextPos, " ii: ", ii);

        /!** Test position **!/
        /!*var elemPosition = sectionImgsContainerId.position ();
         console.log ("elemPosition: ", elemPosition.left);*!/
      }

    });*/
    rightArrowId.bind ("click", function () {
      //console.log ("rightArrowId:--------------");
      leftArrowId.show ();
      ii++;
      //console.log ("ij1: ", ii);
      //nextPos = colRightWidth * ii;
      nextPos = colRightWidth * ii;
      console.log ("nextPos1: ", nextPos);
      //console.log ("colRightWidth: ", colRightWidth);
      //console.log ("aImages.length: ", aImages.length);
      //titolo.textContent = aTitles[ii];
      /*var maxWidth = colRightWidth * ii;
      console.log ("maxWidth: ", maxWidth);
      if (nextPos >= maxWidth) {
        console.log ("maxWidth2: ", maxWidth);
        //nextPos = 1200;
        fSlider (sectionImgsContainerId, -maxWidth);
        ii = aImages.length - 1;
        rightArrowId.hide ();
      }*/

      if (ii >= (aImages.length - 1)) { //last image in an array
        ii = aImages.length - 1;
        //console.log ("ij1b: ", ii);
        //ii = 0;
        //j = 0;
        rightArrowId.hide ();
      }
      /**-----{ fSlider: Slides the image container to the right }-----**/
      fSlider (sectionImgsContainerId, -nextPos);
      //console.log ("sectionImgsContainerId: ", sectionImgsContainerId);
      console.log ("-nextPos: ", -nextPos, " ii: ", ii);
    })
    /**-------------===========( Previous Click Functions )===========-------------**/
    leftArrowId.bind ("click", function () {
      //console.log ("leftArrowId:--------------");
      rightArrowId.show ();
      ii--;
      //console.log ("ij1: ", ii);
      prevPos = colRightWidth * ii;
      //console.log ("prevPos: ", prevPos);
      //console.log ("colRightWidth: ", colRightWidth);
      //console.log ("aImages.length: ", aImages.length);
      //titolo.textContent = aTitles[ii];
      if (prevPos <= 0) {
        prevPos = 0;
      }
      if (ii <= 0) {
        //console.log ("ij1b: ", ii);
        ii = 0;
        //j = 0;
        leftArrowId.hide ();
      }
      /**-----{ fSlider: Slides the image container to the right }-----**/
      fSlider (sectionImgsContainerId, -prevPos);
      //console.log ("sectionImgsContainerId: ", sectionImgsContainerId);
      console.log ("-prevPos: ", -prevPos, " ii: ", ii);
    })
  }

  /**-----==========( End Next and Previous Click Functions )==========-----**/

  /**-----------=====| fResetContainers Function |=====-----------**/
  /** Function for resetting the images container to zero whenever
   *  the viewport is resized.
   ****************************************************************/
  function fResetContainers () {
    console.log ("fResetContainers:----------•");
    //ii = 0; //This var is inside fNextPreviousButtons function. Don't have access here.
    /** TO DO: Reset ii to 0 **/
    //fResetNum ();
    //xxx = 0;
    //console.log ("xxx: ", xxx);
    //prevPos =0;
    //nextPos = 0;
    //console.log ("prevPos: ", prevPos);
    //console.log ("nextPos: ", nextPos);
    for (var i = 0; i < aImgsContainer.length; i++) {
      /**-----===( Hides all the left arrows. Show al the right arrows )===-----**/
      aLeftArrows[i].hide ();
      aRightArrows[i].show ();
      /**-----===( fSlider: Reset all image containers to zero horizontally )===-----**/
      fSlider (aImgsContainer[i], 0);
    }
  }

  function fResetNum () {
    return 0;
  }

  /**-----===( Passing var value from one function to another )===-----**/
  function A () {
    var num1 = 1;
    var num2 = 10;
    B (num1, num2);
    console.log ("rand_num: ", num1, " ", num2)
  }

  function B (min, max) {
    getRandomArbitrary (min, max);
  }

  function calcRandNum (num) {
    //return Math.random(num);
  }

  // Returns a random number between min (inclusive) and max (exclusive)
  function getRandomArbitrary (min, max) {
    return Math.random () * (max - min) + min;
  }

  A ();

  /**-----===( fHeightWidthPercentage Function )===-----**/
  var imgRowHeight;
  function fHeightWidthPercentage () {
    /**-----{ Percentage for height and width }-----**/
    var imgOrigWidth = 544; //Image original width
    var imgOrigHeight = 449; //438; //Image original height
    //var imgSizePercentage1 =  imgOrigWidth/rowImgRightColmnWidth;
    var imgResizePercent = colRightWidth / imgOrigWidth; //Current right column image width / image orig width
    imgRowHeight = (imgOrigHeight * imgResizePercent); //Applying the same percentage for the height
    //console.log ("Orig Width & Height:----- ", imgOrigWidth, " ", imgOrigHeight);
    //console.log ("colRightWidth:----- " + colRightWidth);
    ////console.log ("imgSizePercentage1:----- " + imgSizePercentage1);
    //console.log ("imgResizePercent:----- " + imgResizePercent);
    //console.log ("imgRowHeight:----- " + imgRowHeight);
    //console.log ("smallHeight:----- " + smallHeight);
    /**-------------------------------------------------------**/
  }

  /**-----------=====| fInitMediaQueries Function |=====-----------**/
  /** Function to initialize fMediaQueries function on load
   *  TweenMax.ticker is used to add and remove the event listener
   *  ix: counter
   ****************************************************************/
  function fInitMediaQueries () {
    tMx.ticker.addEventListener ("tick", fTimer);
    function fTimer () {
      /**-----===( Load Media Queries )===-----**/
      fMediaQueries ();
      ix++;
      if (ix >= 2) {
        fRemoveEvntListnr (fTimer);
      }
    }
  }

  function fRemoveEvntListnr (myFunct) {
    tMx.ticker.removeEventListener ("tick", myFunct);
  }
  /**-----------=====| End fInitMediaQueries |=====-----------**/

  /**-----------=====| fHeaderFonts Function |=====-----------**/
  /** Function to change font size based on the queried media
   *  fHeaderFonts(2.2, 1.4, 1.5, 1.2); //Large settings
   *  Font are in em sizes ~
   *  An em is equal to the current font-size, for instance,
   *  if the font-size of the document is 12pt, 1em is equal to 12pt.
   *  Ems are scalable in nature, so 2em would equal 24pt,
   *  .5em would equal 6pt, etc.
   ****************************************************************/
  function fHeaderFonts (s1, s2, s3, s5) {
    h1.css ({"fontSize": s1 + "em"});
    h2.css ({"fontSize": s2 + "em"});
    h3.css ({"fontSize": s3 + "em"});
    imgTitle.css ({"fontSize": s5 + "em"});
  }

  /**-----------=====| fCommonFunctionalities Function |=====-----------**/
  /** These are common functions that are being run on fMediaQueries
   *  Makes it easier for additional sections from the html page
   *  to be added.
   ****************************************************************/
  function fCommonFunctionalities () {
    /**-----{ Image title height and top position }-----**/
    fTitlePlacement (imgTitle, imgTitleHeight, imgRowHeight);

    /**----{ fImageHeightWidth: Setting array member's heights and widths }----**/
    fImageHeightWidth (aHorizonImages, imgRowHeight, colRightWidth);
    fImageHeightWidth (aStaxImages, imgRowHeight, colRightWidth);
    fImageHeightWidth (aOwnImages, imgRowHeight, colRightWidth);

    /**----{ fImagesContainerWidthHeight: Setting images container width based on images array }----**/
    fImagesContainerWidthHeight (horizonImagesContainerId, aHorizonImages, imgRowHeight);
    fImagesContainerWidthHeight (staxImagesContainerId, aStaxImages, imgRowHeight);
    fImagesContainerWidthHeight (ownImagesContainerId, aOwnImages, imgRowHeight);

    /**-----{ fHeightWidthPercentage: Find the percentage based on image orig size }-----**/
    fHeightWidthPercentage ();

    /**-----{ fResetContainers: Reset all the images containers to zero }-----**/
    //fResetContainers ();
  }

  /**-----------=====| END FUNCTIONS |=====-----------**/
  /**-***********************************************************************************-**/

  //imgRowHeight = "200px"; /** TO DO!!!!! Initialize imgRowHeight on load **/

  /**-----------=====| Media Queries |=====-----------**/
  function fMediaQueries () {
    console.log ("fMediaQueries --------------------------: ");
    //xxx = 0;
    resizedViewport = true;
    winWidth = $ (window).width (); //Browser window width
    ////console.log ("winWidth: " + winWidth);
    windowInnerWidth = window.innerWidth;
    ////console.log ("windowInnerWidth: " + windowInnerWidth);

    /*fNextPreviousButtons (rightArrowHorizon, leftArrowHorizon, aHorizonImages, horizonImagesContainerId);
     fNextPreviousButtons (rightArrowStax, leftArrowStax, aStaxImages, staxImagesContainerId);
     fNextPreviousButtons (rightArrowOwn, leftArrowOwn, aOwnImages, ownImagesContainerId);*/

    /**-------------===========( Cellphones Viewport )===========-------------**/
    if (windowInnerWidth <= 480) {
      //console.log ("•-------------------- Tiny : <= 480 ---------------------•");
      /**-----{ fTwoColumns: Changing the 2 columns width percentages in a Row }-----**/
      fTwoColumns (90); //Right column @ 90% width. Left column @ 10%.
      fHeaderFonts (1.8, 1.2, 1.2, 1);
      fCommonFunctionalities ();
      //console.log ("•-------------------- End Tiny ---------------------•");

      /**-------------===========( Smartphones Viewport: 480 - 640 )===========-------------**/
    } else if (windowInnerWidth <= smallDevices && windowInnerWidth > 480) {
      //console.log ("•-------------------- Small : 480 - 640 ---------------------•");

      /**-----{ Changing columns width percentage in a Row }-----**/
      fTwoColumns (90);
      fHeaderFonts (2.2, 1.4, 1.4, 1.2);
      fCommonFunctionalities ();
      //console.log ("•-------------------- End Small ---------------------•");

      /**-------------===========( Between Tablets and Smartphones Viewport )===========-------------**/
    } else if (windowInnerWidth <= mediumDevices && windowInnerWidth > smallDevices) {
      //console.log ("•--------------- Medium : 640 - 992 ----------------•");
      //console.log ("mediumDevices: ", mediumDevices, " smallDevices: ", smallDevices);
      //colRightCropWidth = 550
      //var colRightWidthX = 500
      /**-----{ Changing columns width percentage in a Row }-----**/
      fTwoColumns (80);
      fHeaderFonts (2.2, 1.4, 1.4, 1.2);
      fCommonFunctionalities ();
      //console.log ("•-------------------- End Medium ---------------------•");

      /**-------------===========( Between Desktop and Tablets Viewport )===========-------------**/
    } else if (windowInnerWidth <= largeDevices && windowInnerWidth > mediumDevices) {
      //console.log ("•--------------- Large : 992 - 1200 ----------------•");
      //console.log ("largeDevices: ", largeDevices, "mediumDevices: ", mediumDevices);
      /**-----{ Changing columns width percentage in a Row }-----**/
      fTwoColumns (80);
      fHeaderFonts (2.2, 1.4, 1.5, 1.2); //Large settings
      fCommonFunctionalities ();
      //console.log ("•-------------------- End Large ---------------------•");

      /**-------------===========( Extra Large Viewport )===========-------------**/
    } else {
      //console.log ("•-------------------- Extra Large ---------------------•");
      /**-----{ Changing columns width percentage in a Row }-----**/
      fTwoColumns (80);
      fHeaderFonts (2.2, 1.4, 1.5, 1.2); //Large settings
      fCommonFunctionalities ();
      //console.log ("•-------------------- End Extra Large ---------------------•");
    }
  }


  /**-------------===========( Next & Previous Click Functions )===========-------------**/
  fNextPreviousButtons (rightArrowHorizon, leftArrowHorizon, aHorizonImages, horizonImagesContainerId);
  fNextPreviousButtons (rightArrowStax, leftArrowStax, aStaxImages, staxImagesContainerId);
  fNextPreviousButtons (rightArrowOwn, leftArrowOwn, aOwnImages, ownImagesContainerId);


  /**-----===( Initialize: Media Queries)===-----**/
  fInitMediaQueries ();
  /**-----===( Viewport resize load media queries )===-----**/
  window.addEventListener ('resize', fMediaQueries);

} ());
