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
  var rightArrowHorizon2 = document.getElementById ("rightArrowHorizon");

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

  function fXSlider (elem, horizPos) {
    tMx.to (elem, animTym, {x: horizPos, ease: easePower});
    //fAnimateSlider (elem, 0, horizPos);
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
    //console.log ("imageRightColumnWidth: ", imageRightColumnWidth);
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
  //var counter;
  //var xxx;
  var resizedViewport = false;

  function fNextPreviousButtons (rightArrowId, leftArrowId, aImages, sectionImgsContainerId) { //Assign a value to parameter counter on each container
    console.log ("fNextPreviousButtons:----------• ", "sectionImgsContainerId");
    //fResetNum(resetNum);
    /*xx = fResetNum();
     fTest(0);
     var counter = fResetNum();
     console.log ("counter: ", counter);*/
    //fResetContainers ();
    //counter = 0;
    //xxx    = 0;
    //var counter = 0; //xxx;
    //counter = 0; //Without var declaration it becomes a global variable if it's not using "strict mode"
    //console.log ("xxxa: ", xxx);
    var counter = 0;
    //console.log ("countera: ", counter);

    var nextPos;
    console.log ("nextPos: ", nextPos);
    /**-------------===========( Right Arrow: Next Click Functions )===========-------------**/
    //rightArrowId.click (function () {
    /*rightArrowId.bind ("click", function () {
     leftArrowId.show ();
     //console.log ("rightArrowId:--------------");
     /!**----- NOT WORKING!!! ------**!/
     /!**-----{ resizedViewport: On initial load or resize }-----**!/
     if (resizedViewport === true) {
     //leftArrowId.show ();
     var counteri = 1;
     nextPos = colRightWidth * counteri;
     /!**-----{ fXSlider: Slides the image container to the left }-----**!/
     fXSlider (sectionImgsContainerId, -nextPos);
     console.log ("resizedViewport counteri: if ", counteri);
     /!** resizedViewport: Excecutes the first slide within then reset to false
     *  and excecutes the code within the else statement.
     ************************************************************************!/
     resizedViewport = false;
     } else {
     //counter = 0;
     console.log ("resizedViewport counter: else ");
     //leftArrowId.show ();
     counter++;
     nextPos = colRightWidth * counter;
     console.log ("nextPos: ", nextPos);
     //titolo.textContent = aTitles[counter];
     /!*if (nextPos <= 0) {
     nextPos = 0;
     }*!/
     var maxWidth = colRightWidth * counter;
     console.log ("maxWidth: ", maxWidth);
     if (nextPos >= maxWidth) {
     nextPos = 0;
     }
     if (counter >= (aImages.length - 1)) { //last image in an array
     counter = aImages.length - 1; //imgsCount - 1; //
     rightArrowId.hide ();
     console.log ("last image: ", counter);
     nextPos = colRightWidth * counter;
     //console.log ("-nextPos: ", -nextPos);
     } /!*else {
     //nextPos = colRightWidth * counter;
     }*!/
     /!**-----{ fXSlider: Slides the image container to the left }-----**!/
     fXSlider (sectionImgsContainerId, -nextPos);
     //console.log ("sectionImgsContainerId: ", sectionImgsContainerId);
     console.log ("-nextPos: ", -nextPos, " counter: ", counter);

     /!** Test position **!/
     /!*var elemPosition = sectionImgsContainerId.position ();
     console.log ("elemPosition: ", elemPosition.left);*!/
     }

     });*/

    var clickCount = 0;
    rightArrowId.bind ("click", function () {
      //console.log ("rightArrowId :---------=============• ", "rightArrowId");//,rightArrowId);
      /*if (resizedViewport) {
       console.log ("resizedViewport :------•");
       //resetNumF(counter);
       counter         = 0;
       clickCount      = 0;
       console.log ("reset counter: ", counter);
       resizedViewport = false; //find a way to resizedViewport to all containers
       } else {*/
      //console.log (":--------------------------=============•");
      counter++;
      clickCount++;
      //console.log ("clickCount1: ", clickCount);
      //console.log ("counteraa: ", counter);
      //resetNumF(counter);
      //console.log ("counteraa: ", counter); //from window.counter
      leftArrowId.show ();
      //console.log (":--------------------------=============•");
      /*if (resizedViewport) {
       console.log ("resizedViewport :------•");
       //fResetNum(counter);
       //fResetContainers ();
       clickCount = 0;
       console.log ("clickCount2: ", clickCount);
       //resetNumF(counter);
       console.log ("resizedViewport 1: ", resizedViewport);
       counter         = 0;
       console.log ("counterb: ", counter);
       nextPos    = colRightWidth * counter;
       console.log ("nextPos1: ", nextPos);

       fXSlider (sectionImgsContainerId, counter);
       //console.log ("nextPos1: ", nextPos, " ", counter);
       /!*for (var i = 0; i < aImgsContainer.length; i++) {
       /!**-----===( Hides all the left arrows. Show al the right arrows )===-----**!/
       aLeftArrows[i].hide ();
       aRightArrows[i].show ();
       /!**-----===( fXSlider: Reset all image containers to zero horizontally )===-----**!/
       fXSlider (aImgsContainer[i], 0);
       }*!/
       resizedViewport = false;
       console.log ("resizedViewport 2: ", resizedViewport);
       console.log (":--------------------------=============•");
       console.log (" ");
       } else {
       console.log ("else :------•");
       //counter++;
       //console.log ("aImgsContainer[counter]: ", aImgsContainer[]);
       console.log ("counterc: ", counter);*/
      //nextPos = colRightWidth * counter;
      nextPos = colRightWidth * counter;
      console.log ("nextPos2: ", nextPos);
      //console.log ("colRightWidth: ", colRightWidth);
      //console.log ("aImages.length: ", aImages.length);
      //titolo.textContent = aTitles[counter];
      /*var maxWidth = colRightWidth * counter;
       console.log ("maxWidth: ", maxWidth);
       if (nextPos >= maxWidth) {
       console.log ("maxWidth2: ", maxWidth);
       //nextPos = 1200;
       fXSlider (sectionImgsContainerId, -maxWidth);
       counter = aImages.length - 1;
       rightArrowId.hide ();
       }*/

      if (counter >= (aImages.length - 1)) { //last image in an array
        counter = aImages.length - 1;
        rightArrowId.hide ();
        console.log ("Last Image :-----•");
      }

      /*/!**-----{ fXSlider: Slides the image container to the right }-----**!/
       fXSlider (sectionImgsContainerId, -nextPos);*/
      //console.log ("sectionImgsContainerId: ", sectionImgsContainerId);
      console.log ("-nextPos: ", -nextPos, " counterc: ", counter);

      /*resizedViewport = false;
       console.log ("resizedViewport 2: ", resizedViewport);*/
      console.log (":--------------------------=============•");

      /************************************ • ************************************/
      /**---------==========={ fInnerToOuterFunct Function }===========---------**/
      /** Function to pass local variable to outer function
       *  The outer function = fXSlider(param1, param2)
       *  This function is just an experiment:
       *  Sliding the container could easily be done by,
       *  fXSlider (sectionImgsContainerId, -nextPos);
       *  ----------------------------------------------------
       *  This will come in handy someday.
       *  Don't know if this can be considered as Javascript "Closure"
       **************************************************************************/
      function fInnerToOuterFunct () {
        var variable1 = nextPos;//xPos;
        //passing variable from this function to function2
        //fResetContainers (variable1);
        /**-----{ fXSlider: Slides the image container to the right }-----**/
        fXSlider (sectionImgsContainerId, -variable1);
        console.log ("variable1: ", variable1);

        var var2 = counter;
        fRepositionContainer (sectionImgsContainerId, var2);

      }

      fInnerToOuterFunct ();
      /**---------==========={ end fInnerToOuterFunct }===========---------**/
      /************************************ • ************************************/

      console.log (" ");

      //} //end else

    })

    /**-------------===========( Left Arrow: Previous Click Functions )===========-------------**/
    leftArrowId.bind ("click", function () {
      //console.log ("leftArrowId:--------------");
      rightArrowId.show ();
      counter--;
      //console.log ("ij1: ", counter);
      prevPos = colRightWidth * counter;
      //console.log ("prevPos: ", prevPos);
      //console.log ("colRightWidth: ", colRightWidth);
      //console.log ("aImages.length: ", aImages.length);
      //titolo.textContent = aTitles[counter];
      if (prevPos <= 0) {
        prevPos = 0;
      }
      if (counter <= 0) {
        //console.log ("ij1b: ", counter);
        counter = 0;
        //j = 0;
        leftArrowId.hide ();
      }
      /**-----{ fXSlider: Slides the image container to the left }-----**/
      fXSlider (sectionImgsContainerId, -prevPos);
      //console.log ("sectionImgsContainerId: ", sectionImgsContainerId);
      console.log ("-prevPos: ", -prevPos, " counter: ", counter);
    })
  }

  /**-------------===========( Button Click Functions )===========-------------**/
  //var counter;
  function fResetX (numReset) {
    numReset = 0;
  }

  //var counter;

  function fReturnMe (n) {
    console.log ("fReturnMe 1: ", n);
    return function () {
      console.log ("fReturnMe 2: ", n);
      return n
    }
  }

  var xCount;
  //xCount = fReturnMe(11);
  //xCount();

  function fClicker (buttonId, oppositeArrowId, aImages, sectionImgsContainerId) {
    //var counter = 0;
    var generalCounter = 0;
    /*xCount = fReturnMe(100);
     xCount();*/
    var xPos;
    buttonId.bind ("click", function () {
      /**-----( Passing parameters to click event )-----**/
      /*buttonId.bind ("click", { id: xCount(), name: 'Chuck Norris' }, function (event) {
       var data = event.data;
       data.id;
       data.name;
       console.log ("data.id :------•", data.id);*/
      //alert(data.id);
      //alert(data.name);
      /*btn.bind('click', { id: '12', name: 'Chuck Norris' }, function(event) {
       var data = event.data;
       alert(data.id);
       alert(data.name);
       });*/
      //var xPos;
      //generalCounter;
      //xCount = fReturnMe(100);
      /*if (resizedViewport) {
       console.log ("resizedViewport IF :------•");
       //resetNumF(counter);
       //fResetContainers ();
       //generalCounter         = 0;
       //xPos            = colRightWidth * generalCounter;
       //console.log ("reset generalCounter: ", generalCounter);
       for (var i = 0; i < aImgsContainer.length; i++) {
       /!**-----===( Hides all the left arrows. Show al the right arrows )===-----**!/
       //aLeftArrows[i].hide ();
       //aRightArrows[i].show (); //Already being done in fResetContainers()

       //aSectionCounter[i] = 0;
       //console.log ("reset aSectionCounter[i]: ", aSectionCounter[i], aSectionCounter);
       /!**-----===( fXSlider: Reset all image containers to zero horizontally )===-----**!/
       //fXSlider (aImgsContainer[i], 0); //nextPos); //0);
       /!*btnLoader1.sectContainerXPos (aImgsContainer[i]);
       btnLoader2.sectContainerXPos (aImgsContainer[i]);
       btnLoader1.HPos;
       btnLoader2.HPos;*!/
       }
       resizedViewport = false;
       } else {
       console.log ("resizedViewport ELSE :------•");*/
      oppositeArrowId.show ();
      generalCounter++;
      xPos = colRightWidth * generalCounter;

      /*xCount = fReturnMe(xPos);
       xCount();*/
      //xCount = xPos;
      if (generalCounter >= (aImages.length - 1)) {
        generalCounter = aImages.length - 1;
        buttonId.hide ();
      }

      /**-----{ fXSlider: Slides the image container to the left }-----**/
      fXSlider (sectionImgsContainerId, -xPos);

      /**-----{ fInnerToOuterFunct: Function to pass local variable to outer function }-----**/
      function fInnerToOuterFunct () {
        var variable1 = generalCounter;//xPos;
        //passing variable from this function to function2
        //fResetContainers (variable1);
        console.log ("variable1: ", variable1);
      }

      //fInnerToOuterFunct();
      /**---------==========={ end fInnerToOuterFunct }===========---------**/

        //console.log ("sectionImgsContainerId: ", sectionImgsContainerId);
      console.log ("-xPos: ", -xPos, " generalCounter: ", generalCounter);
      //}
    })

    /*function fXpos(){
     console.log ("fXpos: ", xPos);
     return xPos;
     }
     return fXpos;*/

  }

  /**-----( Passing parameters to click event )-----**/
  /*btn.bind('click', { id: '12', name: 'Chuck Norris' }, function(event) {
   var data = event.data;
   alert(data.id);
   alert(data.name);
   });*/

  /**-----( ButtonClick as a Class )-----**/
  var ButtonClick = function (buttonId, oppositeArrowId, sectionImgsContainerId) {
    this.Btn              = buttonId;
    this.OppButton        = oppositeArrowId;
    this.SectionContainer = sectionImgsContainerId;
    this.counter          = 0;
    this.HPos             = 0;

    var xPos;
    console.log ("xPos: ", xPos);

    /**-----{ Function for resetting counter }-----**/
    this.resetCounter = function () {
      this.counter = 0;
      console.log ("resetCounter: this.HPos = ", this.HPos);
    };

    /**-----{ sectContainerXPos: Slide container to the value of colRightWidth * counter instead of 0 }-----**/
    this.sectContainerXPos = function () {
      this.HPos = xPos;
      console.log ("xPos: ", xPos);
      console.log ("this.HPos: ", this.HPos);
      fXSlider (sectionImgsContainerId, this.HPos);
    };

    this.btnClicker = function () {
      //var counter = 0;
      this.Btn.bind ("click", function () {
        if (resizedViewport) {
          console.log ("resizedViewport :------•");
          //resetNumF(counter);
          //fResetContainers ();
          //console.log ("colRightWidth: ", colRightWidth);
          //var newContainerXpos = colRightWidth * this.counter;

          //this.counter    = 0;
          xPos            = colRightWidth * this.counter;
          console.log ("reset this.counter: ", this.counter);
          resizedViewport = false; //find a way to resizedViewport to all containers
        } else {
          oppositeArrowId.show ();
          this.counter++;
          xPos = colRightWidth * this.counter;
          if (this.counter >= 10) {
            this.counter = 10;
            buttonId.hide ();
          }
          /**-----{ fXSlider: Slides the image container to the left }-----**/
          fXSlider (sectionImgsContainerId, -xPos);
          //console.log ("sectionImgsContainerId: ", sectionImgsContainerId);
          console.log ("-xPos: ", -xPos, " this.counter: ", this.counter);
        }
      })
    }
  }

  /**-----==========( End Next and Previous Click Functions )==========-----**/
  /*

   var AnimClass = function (vXpos, vContnr) {
   this.Xpos   = vXpos; //Container left position
   //this.Width  = vWidth; //Column right width
   this.Container = vContnr;
   //this.Height = vHeight;
   //this.Opaque = vOpaque;
   //this.Elem2         = elem2;
   //this.Elem2Sopacity = e2Opacity;
   //this.Imahe         = vImahe;
   /!**-----| method as member |-----**!/
   this.anim          = function () {
   console.log("AnimClass this: ", this)
   /!*function opaqueAnim () {
   return vOpaque;
   };
   tMx.to (this, animTym, {css: {x: vXpos, width: vWidth, opacity: opaqueAnim ()}, ease: easeSine });*!/
   /!*tMx.to (this, animTym, {css: {x: vXpos}, ease: easeSine });
   fXSlider (vContnr, -vXpos);*!/
   tMx.to (vContnr, animTym, {css: {x: vXpos}, ease: easePower });
   //console.log ("AnimClass: vXpos: ", vXpos)
   ///!**-----| Animates the InfoBox with Text |-----**!/
   //tMx.to (elem2, animTym, {css: {y: eYpos, opacity: e2Opacity}, ease: easePower});
   };
   };

   /!**----------=====| fAnimHorGridDistribute Function |=====----------**!/
   /!*  Animates the display of images across the page based
   *   on the if statements in fScreenQueries function.
   *   elem: divs, vStyleWidth: , vStyleHeight:
   *********************************************************************!/
   function fAnimHorGridDistribute (elem, vStyleWidth, vStyleHeight) {
   tMx.to (elem, animTym, {css: {width: vStyleWidth, height: vStyleHeight}, ease: easePower});
   }

   /!**----------=====| fRollEvents Function |=====----------**!/
   /!*  Holds all the necessary parameters to passed into the new AnimClass for
   *   the 'mouseover' and 'mouseout' event listeners animation.
   *******************************************************************!/
   function fNextPreviousButtons2 (el, sXPos, sContainer) {
   var anSlid = new AnimClass (sXPos, sContainer);
   //var animOut  = new AnimClass (eXPos, eYPos, eWt, eHt, eOpq, elem2, eOpacity, e2eYpos);
   //elem.addEventListener ("click", animSlide.anim);
   //el.addEventListener ("mouseover", animSlide.anim);
   el.addEventListener ('click', anSlid.anim);
   //elem.addEventListener ('mouseout', animOut.anim);
   }

   //var rightArrowHorizon           = document.getElementById ("rightArrowHorizon");
   //fNextPreviousButtons2 (rightArrowHorizon, leftArrowHorizon, aHorizonImages, horizonImagesContainerId);
   fNextPreviousButtons2 (rightArrowHorizon2, -500, horizonImagesContainerId);
   */

  /**-----------=====| fResetContainers Function |=====-----------**/
  /** Function for resetting the images container to zero whenever
   *  the viewport is resized.
   ****************************************************************/
  function fResetContainers (currentCounter) {
    //console.log ("fResetContainers:----------•");
    //counter = 0; //This var is inside fNextPreviousButtons function. Don't have access here.
    /** TO DO: Reset counter to 0 **/
    //counter = 0;

    //btnLoader1.counter = 0;

    //fLoadNextPreviousButtons ();//Similar to on load but not working

    //window.counter = 0;
    //console.log ("window.counter: ", window.counter);
    //fResetNum ();
    //xxx = 0;
    //console.log ("xxx: ", xxx);
    //prevPos =0;
    //nextPos = 0;
    //console.log ("prevPos: ", prevPos);
    //console.log ("nextPos: ", nextPos);

    //nextPos = 0;

    //resizedViewport = true;
    /*btnLoader1.resetCounter();
     console.log ("colRightWidth: ", colRightWidth);
     var newContainerXpos = colRightWidth * btnLoader1.HPos;
     console.log ("newContainerXpos: ", newContainerXpos);*/
    //xCount();
    //var globalXpos = colRightWidth * generalCounter;
    //console.log ("globalXpos: ", globalXpos);

    //console.log ("xCount: ", xCount)

    var resetXpos = colRightWidth * 0;//currentCounter;
    console.log ("------------------------------");
    console.log ("colRightWidth: ", colRightWidth);
    //console.log ("currentCounter: ", currentCounter);
    console.log ("resetXpos: ", resetXpos);
    console.log ("------------------------------");

    for (var i = 0; i < aImgsContainer.length; i++) {
      /**-----===( Hides all the left arrows. Show al the right arrows )===-----**/
      //aLeftArrows[i].hide ();
      //aRightArrows[i].show ();

      //aSectionCounter[i] = 0;

      /**-----===( fXSlider: Reset all image containers to zero horizontally )===-----**/
      //fXSlider (aImgsContainer[i], -resetXpos); //nextPos); //0);

      /*btnLoader1.sectContainerXPos (aImgsContainer[i]);
       btnLoader2.sectContainerXPos (aImgsContainer[i]);
       btnLoader1.HPos;
       btnLoader2.HPos;*/
    }
  }

  var resetNumF = function (num2Reset) {
    num2Reset = 0;
    console.log ("num2Reset: ", num2Reset);
    /*var resetF = function(xPos){
     return xPos = colRightWidth * num2Reset;
     };*/
    //return resetNumF;
  };

  /*function fResetNum (zero) {
   zero = 0;
   //return 0;
   }*/

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

  //A ();

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
      //fLoadNextPreviousButtons();
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

    //fLoadNextPreviousButtons ();
  }

  function fRepositionContainer (containerId, horPos) {
    console.log ("containerId: ",containerId);
    console.log ("horPos: ",horPos);
    /*if (containerId === undefined || horPos === undefined) {
      console.log("no data");
    } else {
      fXSlider (containerId, horPos);
      //containerId.css ({"left": horPos});
    }*/
  }

  /**-----------=====| END FUNCTIONS |=====-----------**/
  /**-***********************************************************************************-**/

  //imgRowHeight = "200px"; /** TO DO!!!!! Initialize imgRowHeight on load **/

  /**-----------=====| Media Queries |=====-----------**/
  function fMediaQueries () {
    console.log ("fMediaQueries --------------------------: ");

    resizedViewport = true;

    /**-----===( fXSlider: Reset all image containers to zero horizontally )===-----**/
    //fResetContainers ();

    //fRepositionContainer ();

    /*for (var i = 0; i < aImgsContainer.length; i++) {
     fXSlider (aImgsContainer[i], 0);
     }*/
    //xxx = 0;
    winWidth = $ (window).width (); //Browser window width
    ////console.log ("winWidth: " + winWidth);
    windowInnerWidth = window.innerWidth;
    ////console.log ("windowInnerWidth: " + windowInnerWidth);
    /*fNextPreviousButtons (rightArrowHorizon, leftArrowHorizon, aHorizonImages, horizonImagesContainerId);
     fNextPreviousButtons (rightArrowStax, leftArrowStax, aStaxImages, staxImagesContainerId);
     fNextPreviousButtons (rightArrowOwn, leftArrowOwn, aOwnImages, ownImagesContainerId);*/

    //fLoadNextPreviousButtons ();

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
      //console.log ("•-------------------- Small : 480 - 640 ---------------------•");

      /**-----{ Changing columns width percentage in a Row }-----**/
      fTwoColumns (90);
      fHeaderFonts (2.2, 1.4, 1.4, 1.2);
      fCommonFunctionalities ();
      //fResetContainers ();
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

    //fLoadNextPreviousButtons ();

  }

  /**-------------===========( Next & Previous Click Functions )===========-------------**/
  var btnLoader1 = new ButtonClick (rightArrowHorizon, leftArrowHorizon, horizonImagesContainerId);
  var btnLoader2 = new ButtonClick (rightArrowStax, leftArrowStax, staxImagesContainerId);

  /*btnLoader1.btnClicker ();
   btnLoader2.btnClicker ();*/
  var counterHorizon = 0;
  var counterStax    = 0;
  var counterOwn     = 0;

  var aSectionCounter = [counterHorizon, counterStax, counterOwn];

  function fLoadNextPreviousButtons () {
    fNextPreviousButtons (rightArrowHorizon, leftArrowHorizon, aHorizonImages, horizonImagesContainerId);
    fNextPreviousButtons (rightArrowStax, leftArrowStax, aStaxImages, staxImagesContainerId);
    fNextPreviousButtons (rightArrowOwn, leftArrowOwn, aOwnImages, ownImagesContainerId);

    /*fClicker (rightArrowHorizon, leftArrowHorizon, horizonImagesContainerId, counterHorizon)
     fClicker (rightArrowStax, leftArrowStax, staxImagesContainerId, counterStax)
     fClicker (rightArrowOwn, leftArrowOwn, ownImagesContainerId, counterOwn)*/

    /*fClicker (rightArrowHorizon, leftArrowHorizon, aHorizonImages, horizonImagesContainerId);
     fClicker (rightArrowStax, leftArrowStax, aStaxImages, staxImagesContainerId);
     fClicker (rightArrowOwn, leftArrowOwn, aOwnImages, ownImagesContainerId);*/

    //a();
    /*btnLoader1.btnClicker();
     btnLoader2.btnClicker();*/

    //fClicker (rightArrowHorizon, leftArrowHorizon, horizonImagesContainerId)
    //fClicker (rightArrowStax, leftArrowStax, staxImagesContainerId)
    //fClicker (rightArrowOwn, leftArrowOwn, ownImagesContainerId)

  };

  fLoadNextPreviousButtons ();

  /**-----===( Initialize: Media Queries)===-----**/
  fInitMediaQueries ();
  /**-----===( Viewport resize load media queries )===-----**/
  window.addEventListener ('resize', fMediaQueries);
  //window.addEventListener ('resize', fInitMediaQueries);

} ());
