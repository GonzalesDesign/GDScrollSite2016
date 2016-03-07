/**
 * Created by Odee on 2/6/16.
 */
$ (document).ready (
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
    var r1PosterArea = $ (".r1PosterArea");
    //r1PosterArea.css ({"height": winHeight}); //Fills the whole viewport on load.

    var colRightCrop = $ (".colRightCrop"); //Column right cropper. Hidden overflow
    var colRightCropWidth = colRightCrop.width ();

    /**-----------=====| Horizon Images |=====-----------**/
    var horizonImagesContainerId = $ ("#horizonImagesContainerId");
    var horizonImg1Id            = $ ("#horizonImg1Id");
    var horizonImg2Id            = $ ("#horizonImg2Id");
    var horizonImg3Id            = $ ("#horizonImg3Id");

    horizonImagesContainerId.css ({"backgroundColor": "#31708f"});

    var aHorizonImages = [horizonImg1Id, horizonImg2Id, horizonImg3Id];

    /**-----------=====| Stax Images |=====-----------**/
    var staxImagesContainerId = $ ("#staxImagesContainerId");
    var staxImg1Id            = $ ("#staxImg1Id");
    var staxImg2Id            = $ ("#staxImg2Id");
    var staxImg3Id            = $ ("#staxImg3Id");
    var staxImg4Id            = $ ("#staxImg4Id");
    var staxImg5Id            = $ ("#staxImg5Id");
    var staxImg6Id            = $ ("#staxImg6Id");
    var staxImg7Id            = $ ("#staxImg7Id");
    var staxImg8Id            = $ ("#staxImg8Id");
    var staxImg9Id            = $ ("#staxImg9Id");

    var aStaxImages = [staxImg1Id, staxImg2Id, staxImg3Id, staxImg4Id, staxImg5Id, staxImg6Id, staxImg7Id, staxImg8Id, staxImg9Id];

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
    var rightArrowHorizon = $ ("#rightArrowHorizon");//[0];
    //var leftArrowHorizon = document.getElementById ("leftArrowHorizon");
    //var rightArrowHorizon2 = document.getElementById ("rightArrowHorizon");

    /**---{ Stax Gallery Buttons }---**/
    var leftArrowStax  = $ ("#leftArrowStax");
    var rightArrowStax = $ ("#rightArrowStax");

    /**---{ OwnPhones Buttons }---**/
    var leftArrowOwn  = $ ("#leftArrowOwn");
    var rightArrowOwn = $ ("#rightArrowOwn");

    /**-----------=====| All the Left Arrows |=====-----------**/
    var aLeftArrows = [leftArrowHorizon, leftArrowStax, leftArrowOwn];
    /** On load hide the left arrow **/
    for (var i = 0; i < aLeftArrows.length; i++) {
      aLeftArrows[i].hide ();
    }
    /**-----------=====| All the Right Arrows |=====-----------**/
    var aRightArrows = [rightArrowHorizon, rightArrowStax, rightArrowOwn];

    var aImgTitles = ["aImgTitles Uno", "aImgTitles Dos", "HBCBS Website Media Controllers"];

    /**-----------=====| Headers |=====-----------**/
    var h1       = $ ("h1");
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
      var imageRightColumnWidth = Math.round (columnRight);
      colRightWidth             = imageRightColumnWidth;
      /**----( Adjust left columns width )----**/
      colLeft.css ({"width": columnLeft});
      /**----( Adjust the right columns )----**/
      colRight.css ({"width": columnRight});
      fAnimateWidth (imgTitle, columnRight);
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

    /**-----------=====| PreviousNextClass Class |=====-----------**/
    var imgWidth;
    var imgXpos;
    var multiplier;

    /**-----------=====| fContainerMultiplier Function |=====-----------**/
    /** Function for the sectionContainer multiplier
     *  Check if the sectionContainer is equivalent to the actual
     *  container id and assign the counter to the corresponding multiplier.
     *  Multiplier or counter is the amount of how many times of either the
     *  left or right buttons was clicked. It is used to calculate the
     *  image width multiplied by the counter.
     *********************************************************************/
    function fContainerMultiplier (sectionContainer, counter) {
      if (sectionContainer === horizonImagesContainerId) {
        horizonMultiplier = counter;
        console.log ("sectionContainer: ", sectionContainer);
        console.log ("horizonMultiplier: ", horizonMultiplier);

      } else if (sectionContainer === staxImagesContainerId) {
        staxMultiplier = counter;
        console.log ("sectionContainer: ", sectionContainer);
        console.log ("horizonMultiplier: ", staxMultiplier);
      }
    }

    function PreviousNextClass () {
      var nextPos               = 0;
      var ii                    = 0;
      this.fNextPreviousButtons = function
        fNextPreviousButtons (rightArrow,
                              leftArrow,
                              aryImages,
                              sectionContainer) {

        this.RightArrow       = rightArrow;
        this.LeftArrow        = leftArrow;
        this.SectionContainer = sectionContainer;
        var me                = this;

        this.RightArrow.click (function () {
          //rightArrow.click (function () { //works the same
          console.log ("rightArrow :---------=============• ", this);
          ii++;
          leftArrow.show ();
          //console.log ("aryImages.length: ", aryImages.length);
          if (ii >= (aryImages.length - 1)) { //last image in an array
            ii = aryImages.length - 1;
            rightArrow.hide ();
            console.log ("Last Image :-----•");
          }
          nextPos = colRightWidth * ii;
          /**-----{ fXSlider: Slides the image container to the right }-----**/
          fXSlider (me.SectionContainer, -nextPos);

          /**-----{ sectionContainer }-----**/
          fContainerMultiplier (sectionContainer, ii);
          /*if(sectionContainer === horizonImagesContainerId){
           horizonMultiplier = ii;
           console.log ("sectionContainer: ", sectionContainer);
           console.log ("horizonMultiplier: ", horizonMultiplier);

           } else if(sectionContainer === staxImagesContainerId){
           staxMultiplier = ii;
           console.log ("sectionContainer: ", sectionContainer);
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
          /**-----{ fXSlider: Slides the image container to the left }-----**/
          fXSlider (me.SectionContainer, -prevPos);
          console.log ("-prevPos: ", -prevPos, " ii: ", ii);

          /**-----{ sectionContainer }-----**/
          fContainerMultiplier (sectionContainer, ii);
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
      ////console.log ("imgSizePercentage1:----- " + imgSizePercentage1);
      //console.log ("imgResizePercent:----- " + imgResizePercent);
      //console.log ("imgRowHeight:----- " + imgRowHeight);
      //console.log ("smallHeight:----- " + smallHeight);
      /**-------------------------------------------------------**/
    }

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
      fImageHeightWidth (aOwnImages, imgRowHeight, colRightWidth);

      /**----{ fImagesContainerWidthHeight: Setting images container width based on images array }----**/
      fImagesContainerWidthHeight (horizonImagesContainerId, aHorizonImages, imgRowHeight);
      fImagesContainerWidthHeight (staxImagesContainerId, aStaxImages, imgRowHeight);
      fImagesContainerWidthHeight (ownImagesContainerId, aOwnImages, imgRowHeight);

      /**-----{ fHeightWidthPercentage: Find the percentage based on image orig size }-----**/
      fHeightWidthPercentage ();

    }

    var mQ                = 0;
    var horizonXpos;
    var horizonMultiplier = 0;
    var staxXpos;
    var staxMultiplier    = 0;
    var ownXpos;
    var ownMultiplier = 0;

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
      ownXpos     = colRightWidth * ownMultiplier;

      fXSlider (horizonImagesContainerId, -horizonXpos); //Used the css left instead of the x matrix
      fXSlider (staxImagesContainerId, -staxXpos);
      fXSlider (ownImagesContainerId, ownXpos);

      winWidth = $ (window).width (); //Browser window width
      ////console.log ("winWidth: " + winWidth);
      windowInnerWidth = window.innerWidth;

      /**-------------===========( Cellphones Viewport )===========-------------**/
      if (windowInnerWidth <= 480) {
        //console.log ("•-------------------- Tiny : <= 480 ---------------------•");
        /**-----{ fTwoColumns: Changing the 2 columns width percentages in a Row }-----**/
        fTwoColumns (90); //Right column @ 90% width. Left column @ 10%.
        fHeaderFonts (1.8, 1.2, 1.2, 1);
        fCommonFunctionalities ();
        //fResetContainers ();
        //console.log ("•-------------------- End Tiny ---------------------•");

        /**-------------===========( Smartphones Viewport: 480 - 640 )===========-------------**/
      } else if (windowInnerWidth <= smallDevices && windowInnerWidth > 480) {
        console.log ("•-------------------- Small : 480 - 640 ---------------------•");
        /**-----{ Changing columns width percentage in a Row }-----**/
        fTwoColumns (90);
        fHeaderFonts (2.2, 1.4, 1.4, 1.2);
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
        fHeaderFonts (2.2, 1.4, 1.4, 1.2);
        fCommonFunctionalities ();
        //console.log ("•-------------------- End Medium ---------------------•");

        /**-------------===========( Between Desktop and Tablets Viewport )===========-------------**/
      } else if (windowInnerWidth <= largeDevices && windowInnerWidth > mediumDevices) {
        console.log ("•--------------- Large : 992 - 1200 ----------------•");
        //console.log ("largeDevices: ", largeDevices, "mediumDevices: ", mediumDevices);
        /**-----{ Changing columns width percentage in a Row }-----**/
        fTwoColumns (80);
        fHeaderFonts (2.2, 1.4, 1.5, 1.2); //Large settings
        fCommonFunctionalities ();

        /**-------------===========( Extra Large Viewport )===========-------------**/
      } else {
        console.log ("•-------------------- Extra Large ---------------------•");
        /**-----{ Changing columns width percentage in a Row }-----**/
        fTwoColumns (80);
        fHeaderFonts (2.2, 1.4, 1.5, 1.2); //Large settings
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
      ///prevNxtBtn1.fNextPreviousButtons (rightArrowElem, leftArrowElem, aHorizonImages, horizonImagesContainerId);
      prevNxtBtn1.fNextPreviousButtons (
        rightArrowHorizon,
        leftArrowHorizon,
        aHorizonImages,
        horizonImagesContainerId); //horizonXpos, horizonMultiplier);

      prevNxtBtn2.fNextPreviousButtons (
        rightArrowStax,
        leftArrowStax,
        aStaxImages,
        staxImagesContainerId); //staxXpos, staxMultiplier);

      prevNxtBtn3.fNextPreviousButtons (
        rightArrowOwn,
        leftArrowOwn,
        aOwnImages,
        ownImagesContainerId); //ownXpos, ownMultiplier);
    }

    /**-----{ Invoke function }-----**/
    fPrevNextButtons ();

    /**-----===( Initialize: Media Queries)===-----**/
    fInitMediaQueries ();

    /**-----===( Viewport resize re-load the page )===-----**/
    window.addEventListener ('resize', fInitMediaQueries);

  } ()));
