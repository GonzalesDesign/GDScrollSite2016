/**
 * Created by Odee on 2/6/16.
 */

//$ (document).ready (
(function () { //IIFE:Immediately-Invoked Function Expression
  'use strict';
  console.log ("•-----=====( GDScrollLayout.js )=====-----•");

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
  //console.log ("containerWidth: ", container.width () + 30);

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
  var aPosterImages = ["intro_02", "intro_03", "intro_04"]; //"intro_00", "intro_01",
  var r1PosterArea    = $ ("#r1PosterArea");
  /** posterWinHeight variable
   * When use for testing, divide the winHeight by any number to
   * decrease the poster height.
   * For production, just take off the divider.
   ***************************************************************/
  var posterWinHeight = winHeight / 2;
  /********************************~********************************/
  r1PosterArea.css ({"height": posterWinHeight}); //Fills the whole viewport on load.
  //r1PosterArea.css ({"background": "url('./images/postersIntro/intro_04.jpg') no-repeat;"});
  var randImg  = aPosterImages[Math.floor (aPosterImages.length * Math.random ())];
  var imageURL = "./images/postersIntro/" + randImg + ".jpg";
  $ ("#r1PosterArea").css ('background-image', 'url(' + imageURL + ')');
  //document.getElementById("r1PosterArea").style.backgroundImage =  "url('./images/postersIntro/intro_04.jpg')";

  var colRightCrop = $ (".colRightCrop"); //Column right cropper. Hidden overflow
  var colRightCropWidth = colRightCrop.width ();

  function fLogoContainer () {
    var logoContainer       = $ (".logoContainer");
    var logoContainerHeight = logoContainer.height ();
    var heightPercentage    = posterWinHeight * .05;
    //console.log ("winHeight: ", winHeight);
    //console.log ("heightPercentage: ", heightPercentage);
    //logoContainer.css ({"top": (winHeight + (logoContainerHeight - 300))});
    logoContainer.css ({"marginTop": posterWinHeight - (logoContainerHeight + heightPercentage)});
  }

  /**-----------=====| Horizon Images |=====-----------**/
  var horizonImagesChamberId = $ ("#horizonImagesChamberId");
  var horizonImg1Id          = $ ("#horizonImg1Id");
  var horizonImg2Id          = $ ("#horizonImg2Id");
  var horizonImg3Id          = $ ("#horizonImg3Id");

  horizonImagesChamberId.css ({"backgroundColor": "#31708f"});

  var aHorizonImages = [horizonImg1Id, horizonImg2Id, horizonImg3Id];

  /**-----------=====| Stax Images |=====-----------**/
  var staxImagesChamberId = $ ("#staxImagesChamberId");
  var staxImg1Id          = $ ("#staxImg1Id");
  var staxImg2Id          = $ ("#staxImg2Id");
  var staxImg3Id          = $ ("#staxImg3Id");
  var staxImg4Id          = $ ("#staxImg4Id");
  var staxImg5Id          = $ ("#staxImg5Id");
  var staxImg6Id          = $ ("#staxImg6Id");
  var staxImg7Id          = $ ("#staxImg7Id");
  var staxImg8Id          = $ ("#staxImg8Id");
  var staxImg9Id          = $ ("#staxImg9Id");

  var aStaxImages = [staxImg1Id, staxImg2Id, staxImg3Id, staxImg4Id, staxImg5Id, staxImg6Id, staxImg7Id, staxImg8Id, staxImg9Id];

  /**-----------=====| Stax 2 Images |=====-----------**/
  var stax2ImagesChamberId = $ ("#stax2ImagesChamberId");
  var stax2Img1Id          = $ ("#stax2Img1Id");
  var stax2Img2Id          = $ ("#stax2Img2Id");
  var stax2Img3Id          = $ ("#stax2Img3Id");
  var stax2Img4Id          = $ ("#stax2Img4Id");
  var stax2Img5Id          = $ ("#stax2Img5Id");
  var stax2Img6Id          = $ ("#stax2Img6Id");
  var stax2Img7Id          = $ ("#stax2Img7Id");
  var stax2Img8Id          = $ ("#stax2Img8Id");
  var stax2Img9Id          = $ ("#stax2Img9Id");

  var aStax2Images = [stax2Img1Id, stax2Img2Id, stax2Img3Id, stax2Img4Id, stax2Img5Id, stax2Img6Id, stax2Img7Id, stax2Img8Id, stax2Img9Id];

  /**-----------=====| OwnPhones Images |=====-----------**/
  var ownImagesChamberId = $ ("#ownImagesChamberId");
  var ownImg1Id          = $ ("#ownImg1Id");
  var ownImg2Id          = $ ("#ownImg2Id");
  var ownImg3Id          = $ ("#ownImg3Id");
  var ownImg4Id          = $ ("#ownImg4Id");
  var ownImg5Id          = $ ("#ownImg5Id");

  var aOwnImages = [ownImg1Id, ownImg2Id, ownImg3Id, ownImg4Id, ownImg5Id];

  /**-----------=====| All Images Containers |=====-----------**/
  var aImgsChamber = [horizonImagesChamberId, staxImagesChamberId, ownImagesChamberId];

  /**-----===( Next Previous Buttons )===-----**/
  /**---{ Horizon Buttons }---**/
  var leftArrowHorizon  = $ ("#leftArrowHorizon");
  var rightArrowHorizon = $ ("#rightArrowHorizon");//[0];
  //var leftArrowHorizon = document.getElementById ("leftArrowHorizon");
  //var rightArrowHorizon2 = document.getElementById ("rightArrowHorizon");

  /**---{ Stax Gallery Buttons }---**/
  var leftArrowStax  = $ ("#leftArrowStax");
  var rightArrowStax = $ ("#rightArrowStax");

  /**---{ OwnPhones Buttons }---**/
  var leftArrowOwn  = $ ("#leftArrowOwn");
  var rightArrowOwn = $ ("#rightArrowOwn");

  /**---{ Stax2 Gallery Buttons }---**/
  var leftArrowStax2  = $ ("#leftArrowStax2");
  var rightArrowStax2 = $ ("#rightArrowStax2");

  /**-----------=====| All the Left Arrows |=====-----------**/
  var aLeftArrows = [leftArrowHorizon, leftArrowStax, leftArrowOwn, leftArrowStax2];
  /** On load hide the left arrow **/
  for (var i = 0; i < aLeftArrows.length; i++) {
    aLeftArrows[i].hide ();
  }
  /**-----------=====| All the Right Arrows |=====-----------**/
  var aRightArrows = [rightArrowHorizon, rightArrowStax, rightArrowOwn, rightArrowStax2];

  //var aImgTitles = ["aImgTitles Uno", "aImgTitles Dos", "HBCBS Website Media Controllers"];

  /**-----------=====| Headers |=====-----------**/
  var h1       = $ ("h1");
  var h1Sub    = $ (".h1Sub");
  var h2       = $ ("h2");
  var h3       = $ ("h3");
  var imgTitle = $ ("h5");
  //imgTitle.css ({"paddingRight": "300px"});

  var imgTitleHeight = 40;

  var imgTitleTop;

  //var nextPos;
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

  var colRight3 = $ (".colRight3")
  var colRightWidth3 = colRight3.width ();

  /**-----------=====| Left columns configuration 2 |=====-----------**/
  var colLeft2       = $ (".colLeft2");
  var colLeft2Width  = colLeft2.width ();
  /**-----------=====| Right columns configuration 2 |=====-----------**/
  var colRight2      = $ (".colRight2");
  var colRight2Width = colRight2.width ();

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
  var horizonImagesChamberIdWidth;

  /**-----===( Image Title )===-----**/
  /*var rImgTitle    = $ (".rImgTitle");
   var titolo       = document.createElement ('div');
   $ (titolo).appendTo (".rImgTitle");
   titolo.className = "titolo";
   //rImgTitleX.appendChild (infoDescription);
   titolo.textContent = aImgTitles[0];*/

  /**-----===( Create r2ImgTitleBar & r2ImgTitle divs and assign a classname )===-----**/
  /*var r2ImgTitleBar       = document.createElement ('div');
   r2ImgTitleBar.className = "r2ImgTitleBar";
   var r2ImgTitle          = document.createElement ('div');
   r2ImgTitle.className    = "r2ImgTitle";

   $ (r2ImgTitleBar).appendTo (".rowImg2");
   $ (r2ImgTitle).appendTo (r2ImgTitleBar);*/
  //r2ImgTitle.textContent  = aImgTitles[j]; //innerHTML textContent

  /**=====================| FUNCTIONS |=====================**/

  /**-----------=====| fAnimateHeight Function |=====-----------**/
  /** Animates element's height
   ****************************************************************/
  function fAnimateHeight (elem, eHeight) {
    //tMx.to (elem, animTym, {css: {height: eHeight}, ease: easePower});
    tMx.to (elem, animTym, {height: eHeight, ease: easePower});
  }

  /**-----------=====| fAnimateLeftPosition Function |=====-----------**/
  /** Animates element's left position
   ****************************************************************/
  function fAnimateLeftPosition (elem, eLeftPos) {
    tMx.to (elem, animTym, {css: {x: eLeftPos}, ease: easePower});
  }

  /**-----------=====| fAnimateWidth Function |=====-----------**/
  /** Animates element's width
   ****************************************************************/
  function fAnimateWidth (elem, eWidth) {
    //tMx.to (elem, animTym, {css: {width: eWidth}, ease: easePower});
    tMx.to (elem, animTym, {width: eWidth, ease: easePower});
  }

  /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
  /** Animates element's height and width
   ****************************************************************/
  function fAnimateHeightWidth (elem, eHeight, eWidth) {
    //tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: easePower});
    tMx.to (elem, animTym, {height: eHeight, width: eWidth, ease: easePower});
  }

  /**-----------=====| fXSlider Function |=====-----------**/
  /** Animates element's left positions
   *  Use the attribute "left" instead of the matrix "x" (translateX())
   *  as a key and the horizPos as value.
   *  http://greensock.com/forums/topic/6963-tweenmax-tweening-css-x-vs-left/
   ****************************************************************/
  function fXSlider (elem, horizPos) {
    //tMx.to (elem, animTym, {x: horizPos, ease: easePower});
    //tMx.to (elem, animTym, {css: {x: horizPos}, ease: easePower});
    //tMx.to (elem, animTym, {css: {left: horizPos}, ease: easePower});
    tMx.to (elem, animTym, {left: horizPos, ease: easePower});
  }

  function fXSlideContainer (elem, horizPos, leftArrow, rightArrow) {
    tMx.to (elem, animTym, {x: horizPos, ease: easePower});
    leftArrow.hide ();
    rightArrow.show ();
    //fAnimateSlider (elem, 0, horizPos);
  }

  /**-----------=====| fAnimateTop Function |=====-----------**/
  /** Animates element's top positions
   ****************************************************************/
  function fAnimateTop (elem, eTopPos) {
    //tMx.to (elem, animTym, {css: {top: eTopPos}, ease: easePower});
    tMx.to (elem, animTym, {top: eTopPos, ease: easePower});
  }

  function fSettingCSSStyle (elem, cssStyle, eValue) {
    elem.css ({cssStyle: eValue});
  }

  /**-----------=====| fTwoColumns Function |=====-----------**/
  /** Function for dividing the container row into two columns
   ****************************************************************/
  function fTwoColumns (rightColumnPercentage) {
    //console.log ("fTwoColumns function----------------: ");
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
    var columnRight    = containerWidth * (rightColumnPercentage / 100); // (90 / 100) for 90%
    var columnLeft            = containerWidth - columnRight;
    //var imageRightColumnWidth = Math.round (columnRight);
    colRightWidth             = Math.round (columnRight);
    console.log("colRightWidth: ",colRightWidth);
    /**----( Adjust left columns width )----**/
    colLeft.css ({"width": columnLeft});
    /**----( Adjust the right columns )----**/
    colRight.css ({"width": columnRight});
    fAnimateWidth (imgTitle, columnRight); //h5
  }

  /**-----------=====| fTwoColumns2 Function |=====-----------**/
  /** Function for dividing the container row into two columns
   *  Configuration 2
   *  TO DO: These two function will be made into one
   ****************************************************************/
  function fTwoColumns2 (rightColumnPercentage) {
    //console.log ("fTwoColumns function----------------: ");
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
    var columnRight    = containerWidth * (rightColumnPercentage / 100); // (90 / 100) for 90%
    var columnLeft            = containerWidth - columnRight;
    var imageRightColumnWidth = Math.round (columnRight);
    colRightWidth             = imageRightColumnWidth;
    /**----( Adjust left columns width )----**/
    colLeft2.css ({"width": columnLeft});
    /**----( Adjust the right columns )----**/
    colRight2.css ({"width": columnRight});
    //fAnimateWidth (imgTitle, columnRight);
    colRightCropWidth = colRightWidth;
  }

  /**-----------=====| fTwoColumns3 Function |=====-----------**/
  /** Function for dividing the container row into two columns
   ****************************************************************/
  function fTwoColumns3 (rightColumnPercentage) {
    //console.log ("fTwoColumns function----------------: ");
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
    var containerWidth = (container.width ()) + padLeftRight; //bootstrap container
    /**-*****************************************************-**/
    var columnRight = containerWidth * (rightColumnPercentage / 100); // (90 / 100) for 90%
    var columnLeft            = containerWidth - columnRight;
    var imageRightColumnWidth = Math.round (columnRight);
    colRightWidth             = imageRightColumnWidth;
    /**----( Adjust left columns width )----**/
    colLeft.css ({"width": columnLeft});
    /**----( Adjust the right columns )----**/
    colRight.css ({"width": columnRight});
    fAnimateWidth (imgTitle, columnRight);
  }

  /**-----------=====| fImagesChamberWidthHeight Function |=====------------------------------**/
  /** Function for adjusting the container's width that holds the images that's in the array
   *  Description: The div that holds all the images based on array length.
   *  id: element id name
   *  imagesArray: array that contains the specific section's images
   *  totalImgsWidth: each image width multiplied by array length
   *  ht: imgRowHeight
   *  imgTitleHeight: 40px
   ****************************************************************************************/
  function fImagesChamberWidthHeight (id, imagesArray, ht) {
    //console.log ("fImagesChamberWidthHeight:----------•");
    var totalImgsWidth = (colRightWidth * imagesArray.length) + 100;
    id.css ({"width": totalImgsWidth});
    //console.log ("imagesArray.length: ", imagesArray.length);
    //console.log ("totalImgsWidth: ", totalImgsWidth);
    //fAnimateWidth (id, totalImgsWidth);
    fAnimateHeight (id, ht + imgTitleHeight); //imgRowHeight + (imgTitleHeight = 40)
    //console.log ("End fImagesChamberWidthHeight:----------•");
  }

  /**-----------=====| fTitlePlacement Function |=====-----------**/
  /** Function for image's title placement underneath each
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

  /**-----------=====| PreviousNextClass Class |=====-----------**/
  var imgWidth;
  var imgXpos;
  var multiplier;

  /**-----------=====| fContainerMultiplier Function |=====-----------**/
  /** Function for the sectionChamber multiplier
   *  Check if the sectionChamber is equivalent to the actual
   *  container id and assign the counter to the corresponding multiplier.
   *  Multiplier or counter is the amount of how many times of either the
   *  left or right buttons was clicked. It is used to calculate the
   *  image width multiplied by the counter.
   *********************************************************************/
  function fContainerMultiplier (sectionChamber, counter) {
    if (sectionChamber === horizonImagesChamberId) {
      horizonMultiplier = counter;
      console.log ("sectionChamber: ", sectionChamber);
      console.log ("horizonMultiplier: ", horizonMultiplier);

    } else if (sectionChamber === staxImagesChamberId) {
      staxMultiplier = counter;
      console.log ("sectionChamber: ", sectionChamber);
      console.log ("horizonMultiplier: ", staxMultiplier);

    } else if (sectionChamber === ownImagesChamberId) {
      ownMultiplier = counter;
      //console.log ("sectionChamber: ", sectionChamber);
      console.log ("ownMultiplier: ", ownMultiplier);
    } else if (sectionChamber === stax2ImagesChamberId) {
      stax2Multiplier = counter;
      //console.log ("sectionChamber: ", sectionChamber);
      console.log ("stax2Multiplier: ", stax2Multiplier);
    }
  }

  var PreviousNextClass = function PreviousNextClass () {
    var nextPos               = 0;
    var ii                    = 0;
    this.fNextPreviousButtons = function
      fNextPreviousButtons (rightArrow,
                            leftArrow,
                            aryImages,
                            rightColumnPercentage,
                            sectionChamber) {

      this.RightArrow       = rightArrow;
      this.LeftArrow        = leftArrow;
      this.SectionChamber = sectionChamber;
      var me                = this;

      this.RightArrow.click (function () {
        //rightArrow.click (function () { //works the same
        console.log ("rightArrow :---------=============• ");
        ii++;
        leftArrow.show ();
        //console.log ("aryImages.length: ", aryImages.length);
        if (ii >= (aryImages.length - 1)) { //last image in an array
          ii = aryImages.length - 1;
          rightArrow.hide ();
          console.log ("Last Image :-----•");
        }

        /** TO DO! **/
        /*var padLeftRight   = 30;
        var containerWidth = (container.width ()) + padLeftRight;
        var colRightWidth    = containerWidth * (rightColumnPercentage / 100);*/
        /** For debugging **/
        if(me.SectionChamber === ownImagesChamberId){
          nextPos = colRightWidth3 * ii;
          /*/!**-----{ fXSlider: Slides the image container to the right }-----**!/
          fXSlider (me.SectionChamber, -nextPos);
          /!**-----{ sectionChamber }-----**!/
          fContainerMultiplier (me.SectionChamber, ii);*/
        } else {
          nextPos = colRightWidth * ii;
          /*/!**-----{ fXSlider: Slides the image container to the right }-----**!/
          fXSlider (me.SectionChamber, -nextPos);
          /!**-----{ sectionChamber }-----**!/
          fContainerMultiplier (me.SectionChamber, ii);*/
        }
        /**-----{ fXSlider: Slides the image container to the right }-----**/
        fXSlider (me.SectionChamber, -nextPos);
        /**-----{ sectionChamber }-----**/
        fContainerMultiplier (me.SectionChamber, ii);




        /*if(sectionChamber === horizonImagesChamberId){
         horizonMultiplier = ii;
         console.log ("sectionChamber: ", sectionChamber);
         console.log ("horizonMultiplier: ", horizonMultiplier);

         } else if(sectionChamber === staxImagesChamberId){
         staxMultiplier = ii;
         console.log ("sectionChamber: ", sectionChamber);
         console.log ("horizonMultiplier: ", staxMultiplier);
         }*/
      });

      /**-------------===========( Left Arrow: Previous Click Functions )===========-------------**/
      this.LeftArrow.bind ("click", function () {
        //console.log ("leftArrowId:--------------");
        rightArrow.show ();
        ii--;
        prevPos = colRightWidth * ii;
        if (prevPos <= 0) {
          prevPos = 0;
        }
        if (ii <= 0) {
          ii = 0;
          leftArrow.hide ();
        }
        /**-----{ fXSlider: Slides the images chamber to the left }-----**/
        fXSlider (me.SectionChamber, -prevPos);
        console.log ("-prevPos: ", -prevPos, " ii: ", ii);

        /**-----{ sectionChamber }-----**/
        fContainerMultiplier (sectionChamber, ii);
      })
    };
  }

  /**-----------=====| End PreviousNextClass Class |=====-----------**/

  function fReturnMe (n) {
    console.log ("fReturnMex 1: ", n);
    return function () {
      console.log ("fReturnMex 2: ", n);
      return n
    }
  }

  /**-----===( fHeightWidthPercentage Function )===-----**/
  var imgRowHeight;

  function fHeightWidthPercentage () {
    /**-----{ Percentage for height and width }-----**/
    var imgOrigWidth = 544; //Image original width
    var imgOrigHeight = 449; //438; //Image original height
    var imgResizePercent = colRightWidth / imgOrigWidth; //Current right column image width / image orig width
    imgRowHeight = (imgOrigHeight * imgResizePercent); //Applying the same percentage for the height
    //console.log ("Orig Width & Height:----- ", imgOrigWidth, " ", imgOrigHeight);
    //console.log ("colRightWidth:----- " + colRightWidth);
    //console.log ("imgSizePercentage1:----- " + imgSizePercentage1);
    //console.log ("imgResizePercent:----- " + imgResizePercent);
    //console.log ("imgRowHeight:----- " + imgRowHeight);
    //console.log ("smallHeight:----- " + smallHeight);
    /**-------------------------------------------------------**/
  }

  /*
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * */
  /*********************** TO DO: March 9, 2016 ***********************/

  /**-----------=====| ImageSectionClass Class |=====-----------**/
  /** Description: Optimized function for the images container columns.
   *    It's used for responsiveness of the page, similar to media queries in CSS.
   *    As the window gets resized it automatically resized the images accordingly.
   *    It overwrites the: Bootstrap's row, col-xs-4, col-xs-8
   *
   *  Pseudo code:
   *    For the two columns:
   *    Take the Bootstrap Class="container" width.
   *    Set up the right column width based on the "rightColPercntage" entry.
   *    .container width minus the right column percentage equals to left column width.
   *    Global var "colRightWidth" will take the "columnRight" value
   *    The "colRightWidth" will be used for the cropping window width and the image width.
   *
   *    Establish a resizing percentage:
   *      Get the orig image width and original image height
   *      Divide the "colRightWidth" by the original image width = "imgResizePercent"
   *      Apply "imgResizePercent" to a width and height vars to be used later.
   *
   *    Populating the images chamber: Text content can be done the same.
   *      In html page create a row with two columns, left and right.
   *      Put all the images div with an id inside the right column div with a class name, "colRight".
   *
   *      Create variables for all the html div classes and ids here in the js file outside this class.
   *      Create array to store multiple classes and ids in the same section.
   *
   *      Invoke and populate the arguments in the "fImageHeightWidth" function
   *      This function takes 3 parameters (images array, images height, colRightWidth).
   *
   *    Setting the images chamber's width:
   *      Invoke and populate the arguments in the "fImagesChamberWidthHeight" function
   *      This function also takes 3 parameters (images chamber id, images array, images height).
   *
   *
   *******************************************************************/
  var ImageSectionClass = function ImageSectionClass (elem, rightColPercntage, imgArry) {
    this.Elem              = elem;
    this.RightColPercntage = rightColPercntage;
    this.ImgArry           = imgArry;

    this.imgSectConfig = function () {
      var colLeft3  = $ (".colLeft3")
      //var colRight3 = $ (".colRight3")

      /**----( Two columns )----**/
      var padLeftRight   = 30;
      var containerWidth = (container.width ()) + padLeftRight;
      var columnRight    = containerWidth * (rightColPercntage / 100); // (90 / 100) for 90%
      var columnLeft = containerWidth - columnRight;

      /** TO DO! **/
      colRightWidth3 = Math.round (columnRight);
      //colRightWidth             = Math.round (columnRight);
      /**----( Adjust left columns width )----**/
      colLeft3.css ({"width": columnLeft});
      /**----( Adjust the right columns )----**/
      colRight3.css ({"width": colRightWidth});
      colRight3.css ({"border": "1px solid black"}); //for debugging

      /**-----{ Percentage for height and width }-----**/
      var imgOrigWidth = 544; //Image original width
      var imgOrigHeight = 449; //438; //Image original height
      var imgResizePercent = colRightWidth3 / imgOrigWidth; //Current right column image width / image orig width
      var imgRowHeight3 = (imgOrigHeight * imgResizePercent); //Applying the same percentage for the height
      console.log ("imgRowHeight3: ", imgRowHeight3);

      var totalImgsWidth = (colRightWidth3 * imgArry.length) + 100;
      console.log ("totalImgsWidth: ", totalImgsWidth);
      elem.css ({"width": totalImgsWidth});

      /**----{ fImageHeightWidth: Setting array member's heights and widths }----**/
      fImageHeightWidth (imgArry, imgRowHeight3, colRightWidth3);

      /**----{ fAnimateHeight: Sets the container height including the title height }----**/
      fAnimateHeight (elem, imgRowHeight3 + imgTitleHeight);

      /**----{ fImagesChamberWidthHeight: Sets the container width based on images array length }----**/
      fImagesChamberWidthHeight (elem, imgArry, imgRowHeight3);

      /**----{ fAnimateWidth: Sets the title in column right }----**/
      fAnimateWidth (imgTitle, colRightWidth3);
    }
  };

  var ownImageSection = new ImageSectionClass (ownImagesChamberId, 100, aOwnImages);
  var stax2ImageSection = new ImageSectionClass (stax2ImagesChamberId, 100, aStax2Images);
  //ownImageSection.imgSectConfig ();

  console.log ("ownImageSection.Elem: ", ownImageSection.Elem);
  console.log ("ownImageSection.RightColPercntage: ", ownImageSection.RightColPercntage);
  console.log ("ownImageSection.ImgArry: ", ownImageSection.ImgArry);

  /*
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * */

  /**-----------=====| fHeaderFonts Function |=====-----------**/
  /** Function to change font size based on the queried media
   *  fHeaderFonts(2.2, 1.4, 1.5, 1.2); //Large settings
   *  Font are in em sizes ~
   *  An em is equal to the current font-size, for instance,
   *  if the font-size of the document is 12pt, 1em is equal to 12pt.
   *  Ems are scalable in nature, so 2em would equal 24pt,
   *  .5em would equal 6pt, etc.
   ****************************************************************/
  function fHeaderFonts (s1, s1b, s2, s3, s5) {
    h1.css ({"fontSize": s1 + "em"});
    h1Sub.css ({"fontSize": s1b + "em"});
    h2.css ({"fontSize": s2 + "em"});
    h3.css ({"fontSize": s3 + "em"});
    imgTitle.css ({"fontSize": s5 + "em"});
  }

  /**-----------=====| fCommonFunctionalities Function |=====-----------**/
  /** These are common functions that are being run on fMediaQueries
   *  Based on the screen size.
   *  Makes it easier for additional sections from the html page
   *  to be added.
   ****************************************************************/
  function fCommonFunctionalities () {
    /**-----{ Image title height and top position }-----**/
    fTitlePlacement (imgTitle, imgTitleHeight, imgRowHeight);

    /**----{ fImageHeightWidth: Setting array member's heights and widths }----**/
    fImageHeightWidth (aHorizonImages, imgRowHeight, colRightWidth);
    fImageHeightWidth (aStaxImages, imgRowHeight, colRightWidth);
    //fImageHeightWidth (aOwnImages, imgRowHeight, colRightWidth);

    /**----{ fImagesChamberWidthHeight: Setting images chamber width based on images array }----**/
    fImagesChamberWidthHeight (horizonImagesChamberId, aHorizonImages, imgRowHeight);
    fImagesChamberWidthHeight (staxImagesChamberId, aStaxImages, imgRowHeight);
    //fImagesChamberWidthHeight (ownImagesChamberId, aOwnImages, imgRowHeight);

    /**-----{ fHeightWidthPercentage: Find the percentage based on image orig size }-----**/
    fHeightWidthPercentage ();

    /**-----{ fLogoContainer: Adjust the logo container's top position }-----**/
    fLogoContainer ();

    ownImageSection.imgSectConfig ();
    stax2ImageSection.imgSectConfig ();

  }

  var mQ                = 0;
  var horizonXpos;
  var horizonMultiplier = 0;
  var staxXpos;
  var staxMultiplier    = 0;
  var ownXpos;
  var ownMultiplier     = 0;
  var stax2Xpos;
  var stax2Multiplier    = 0;

  /**-----------=====| Media Queries |=====-----------**/
  function fMediaQueries () {
    mQ++;
    //console.log ("fMediaQueries -------: ", mQ);
    /**-----===( When re-sizing window get the clicked amount mulitplied
     * by the current image width and used that number to re-position the container
     *********************************************************************)===-----**/
      //horizonMultiplier = 0;
      //horizonXpos = parseInt(colRightWidth * horizonMultiplier);
    horizonXpos = colRightWidth * horizonMultiplier;
    staxXpos    = colRightWidth * staxMultiplier;
    ownXpos     = colRightWidth3 * ownMultiplier;
    stax2Xpos    = colRightWidth3 * stax2Multiplier;

    fXSlider (horizonImagesChamberId, -horizonXpos); //Used the css left instead of the x matrix
    fXSlider (staxImagesChamberId, -staxXpos);
    fXSlider (ownImagesChamberId, ownXpos);
    fXSlider (stax2ImagesChamberId, -staxXpos);

    winWidth = $ (window).width (); //Browser window width
    ////console.log ("winWidth: " + winWidth);
    windowInnerWidth = window.innerWidth;

    /**-------------===========( Cellphones Viewport )===========-------------**/
    if (windowInnerWidth <= 480) {
      //console.log ("•-------------------- Tiny : <= 480 ---------------------•");
      /**-----{ fTwoColumns: Changing the 2 columns width percentages in a Row }-----**/
      fTwoColumns (95); //Right column @ 90% width. Left column @ 10%.
      fHeaderFonts (2.5, .75, 1.2, 1.2, 1);
      fCommonFunctionalities ();
      //fResetContainers ();
      //console.log ("•-------------------- End Tiny ---------------------•");

      /**-------------===========( Smartphones Viewport: 480 - 640 )===========-------------**/
    } else if (windowInnerWidth <= smallDevices && windowInnerWidth > 480) {
      console.log ("•-------------------- Small : 480 - 640 ---------------------•");
      /**-----{ Changing columns width percentage in a Row }-----**/
      fTwoColumns (95);
      fHeaderFonts (4, 1, 1.4, 1.4, 1.2);
      fCommonFunctionalities ();
      //fResetContainers ();
      //console.log ("•-------------------- End Small ---------------------•");

      /**-------------===========( Between Tablets and Smartphones Viewport )===========-------------**/
    } else if (windowInnerWidth <= mediumDevices && windowInnerWidth > smallDevices) {
      console.log ("•--------------- Medium : 640 - 992 ----------------•");
      //console.log ("mediumDevices: ", mediumDevices, " smallDevices: ", smallDevices);
      //colRightCropWidth = 550
      //var colRightWidthX = 500
      /**-----{ Changing columns width percentage in a Row }-----**/
      fTwoColumns (80);
      fHeaderFonts (6, 1.2, 1.4, 1.4, 1.2);
      fCommonFunctionalities ();
      //console.log ("•-------------------- End Medium ---------------------•");

      /**-------------===========( Between Desktop and Tablets Viewport )===========-------------**/
    } else if (windowInnerWidth <= largeDevices && windowInnerWidth > mediumDevices) {
      console.log ("•--------------- Large : 992 - 1200 ----------------•");
      //console.log ("largeDevices: ", largeDevices, "mediumDevices: ", mediumDevices);
      /**-----{ Changing columns width percentage in a Row }-----**/
        //fTwoColumns2 (100);//Testing config 2 for the logo container
        //fTwoColumns3 (containerTemp, 100)
      fTwoColumns (100);
      fHeaderFonts (8, 1.4, 1.4, 1.5, 1.2); //Large settings
      fCommonFunctionalities ();

      /**-------------===========( Extra Large Viewport )===========-------------**/
    } else {
      console.log ("•-------------------- Extra Large ---------------------•");
      /**-----{ Changing columns width percentage in a Row }-----**/
      fTwoColumns (80);
      fHeaderFonts (10, 1.4, 1.4, 1.5, 1.2); //Large settings
      fCommonFunctionalities ();
      //console.log ("•-------------------- End Extra Large ---------------------•");
    }
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

  /**-------------===========( fPrevNextButtons Functions )===========-------------**/
  function fPrevNextButtons () {
    //console.log("fPrevNextButtons:------------===")
    var prevNxtBtn1 = new PreviousNextClass ();
    var prevNxtBtn2 = new PreviousNextClass ();
    var prevNxtBtn3 = new PreviousNextClass ();
    var prevNxtBtn4 = new PreviousNextClass ();
    ///prevNxtBtn1.fNextPreviousButtons (rightArrowElem, leftArrowElem, aHorizonImages, horizonImagesChamberId);
    prevNxtBtn1.fNextPreviousButtons (
      rightArrowHorizon,
      leftArrowHorizon,
      aHorizonImages,
      80,
      horizonImagesChamberId); //horizonXpos, horizonMultiplier);

    prevNxtBtn2.fNextPreviousButtons (
      rightArrowStax,
      leftArrowStax,
      aStaxImages,
      80,
      staxImagesChamberId); //staxXpos, staxMultiplier);

    prevNxtBtn3.fNextPreviousButtons (
      rightArrowOwn,
      leftArrowOwn,
      aOwnImages,
      100,
      ownImagesChamberId); //ownXpos, ownMultiplier);

    prevNxtBtn4.fNextPreviousButtons (
      rightArrowStax2,
      leftArrowStax2,
      aStax2Images,
      80,
      stax2ImagesChamberId);
  }

  /**-----{ Invoke function }-----**/
  fPrevNextButtons ();

  /**-----===( Initialize: Media Queries)===-----**/
  fInitMediaQueries ();

  /**-----===( Viewport resize re-load the page )===-----**/
  window.addEventListener ('resize', fInitMediaQueries);

} ());
//);
