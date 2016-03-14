/**
 * Created by Odee on 3/13/16.
 */
(function () { //IIFE:Immediately-Invoked Function Expression
  'use strict';
  console.log ("•-----=====( GDScrollLayout.js )=====-----•");

  /**-----------=====| TweenMax Variables |=====-----------**/
  var tMx       = TweenMax;
  var easeSine  = Sine.easeOut;
  var easePower = Power3.easeOut;
  var animTym   = .5;

  /**-----------=====| Miscellaneous Counter |=====-----------**/
  /**--{ ix: TweenMax.ticker Counter }--**/
  var ix = 0;

  /**-----------=====| Browser Window Dimensions Variables |=====-----------**/
  var windowInnerWidth = window.innerWidth;
  var windowInnerHeight = window.innerHeight;
  console.log("windowInnerWidth: ",windowInnerWidth);
  var winHeight = $ (window).height ();

  /**-----------=====| Bootstrap Container Inner Width |=====-----------**/
  var container = $ (".container");
  var padLeftRight   = 30;
  var containerWidth = (container.width ()) + padLeftRight;
  console.log("containerWidth: ",containerWidth);


  var ContainerRightColClass = function(){
    var self = this;
    this.colRight = function(rightColPerc){
      self.ColumnRight    = Math.round(containerWidth * (rightColPerc / 100));
      self.ColumnLeft = Math.round(containerWidth - self.ColumnRight);
      console.log("self.ColumnRight: ",self.ColumnRight);
      console.log("self.ColumnLeft: ",self.ColumnLeft);
    };
  };

  var containerRightCol1 = new ContainerRightColClass();
  containerRightCol1.colRight(80);
  var containerRightCol2 = new ContainerRightColClass();
  containerRightCol2.colRight(50);
  containerRightCol2.colRight.ColumnRight;


  /**-----------=====| Devices Viewport Width |=====-----------**/
  var largeDevices  = 1200;
  var mediumDevices = 992;
  var smallDevices  = 640;

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

  /**---{ OwnPhones Buttons }---**/
  var leftArrowOwn  = $ ("#leftArrowOwn");
  var rightArrowOwn = $ ("#rightArrowOwn");

  /**---{ Stax2 Gallery Buttons }---**/
  var leftArrowStax2  = $ ("#leftArrowStax2");
  var rightArrowStax2 = $ ("#rightArrowStax2");

  /**-----------=====| All the Left Arrows |=====-----------**/
  var aLeftArrows = [leftArrowOwn, leftArrowStax2];
  /** On load hide the left arrow **/
  for (var i = 0; i < aLeftArrows.length; i++) {
    aLeftArrows[i].hide ();
  }

  /**-----------=====| Headers |=====-----------**/
  var h1       = $ ("h1");
  var h1Sub    = $ (".h1Sub");
  var h2       = $ ("h2");
  var h3       = $ ("h3");
  var imgTitle = $ ("h5");

  var imgTitleHeight = 40;

  /**-----------=====| New left column |=====-----------**/
  var colLeft3      = $ (".colLeft3");
  var colLeftWidth3 = colLeft3.width ();
  /**-----------=====| New right column |=====-----------**/
  var colRight3      = $ (".colRight3");
  var colRightWidth3 = colRight3.width ();

  /**-----------=====| New right column crop |=====-----------**/
  var colRightCrop3      = $ (".colRightCrop3");
  var colRightCrop3Width = colRightCrop3.width ();

  /**-----------=====| fImageHeightWidth Function |=====-----------**/
  /** Function for image height and width
   *  imgsArray: images array
   *  ht: image height
   *  wt: image width
   ****************************************************************/
  function fImageHeightWidth (imgsArray, ht, wt) {
    /**----( Setting array member's heights and widths )----**/
    for (var i = 0; i < imgsArray.length; i++) {
      fAnimateHeightWidth (imgsArray[i], ht, wt); //rowImgRightColmnWidth);
      ////console.log ("imgsArray[i]: ", imgsArray[i]);
    }
  };
  /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
  /** Animates element's height and width
   ****************************************************************/
  function fAnimateHeightWidth (elem, eHeight, eWidth) {
    //tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: easePower});
    tMx.to (elem, animTym, {height: (eHeight + "px"), width: eWidth, ease: easePower});
  };


  /**-----------=====| ImageSectionClass Class |=====-----------**/
  var ImageSectionClass = function ImageSectionClass (elem, imgArry) {
    this.Elem = elem;
    //this.RightColPercntage = rightColPercntage;
    this.ImgArry = imgArry;
    var me = this;
    /**-----------=====| Bootstrap Container Inner Width |=====-----------**/
    var container = $ (".container");
    /*var colRight3 = $ (".colRight3");
     var colRightWidth3 = colRight3.width ();*/
    //var colRightWidth3 = colRight3.width ();

    this.imgSectConfig = function (rightColPercntage) {

      /**----( Two columns )----**/
      var padLeftRight   = 30;
      var containerWidth = (container.width ()) + padLeftRight;
      var columnRight    = containerWidth * (rightColPercntage / 100); // (90 / 100) for 90%
      var columnLeft = containerWidth - columnRight;

      console.log ("elem: ", elem[0].id, " @ ", rightColPercntage, "% Width :-------------=");
      console.log ("columnLeft: ", columnLeft);
      console.log ("columnRight: ", columnRight);

      colRightWidth3 = Math.round (columnRight);
      console.log ("colRightWidth3: ", colRightWidth3);
      //colRightWidth             = Math.round (columnRight);
      //colRightCrop3Width = colRightWidth3;

      //if(elem === elemCrop){

      colLeft3.css ({"width": columnLeft});
      colRight3.css ({"width": colRightWidth3});

      /**-----{ Percentage for height and width }-----**/
      var imgOrigWidth = 544; //Image original width
      var imgOrigHeight = 449; //438; //Image original height
      var imgResizePercent = colRightWidth3 / imgOrigWidth; //Current right column image width / image orig width
      var imgRowHeight3 = Math.round (imgOrigHeight * imgResizePercent); //Applying the same percentage for the height
      console.log ("imgResizePercent: ", imgResizePercent);
      console.log ("imgRowHeight3: ", imgRowHeight3);

      /** Setting the chamber total width **/
      var totalImgsWidth = ((colRightWidth3 * imgArry.length) + 100);//"100px";
      console.log ("totalImgsWidth: ", totalImgsWidth);
      elem.css ({"width": totalImgsWidth});
      //fAnimateHeight (id, ht + imgTitleHeight);

      /**----{ fImageHeightWidth: Setting array member's heights and widths }----**/
      fImageHeightWidth (imgArry, imgRowHeight3, colRightWidth3);
      //me.ImgArry.css ({"height": imgRowHeight3});
      //me.ImgArry.css ({"width": colRightWidth3});

      /**----{ fAnimateHeight: Sets the chamber's height plus the title height }----**/
      //fAnimateHeight (elem, (imgRowHeight3 + imgTitleHeight));
      elem.css ({"height": (imgRowHeight3 + imgTitleHeight)});

      /**----{ fImagesChamberWidthHeight: Sets the container width based on images array length }----**/
      //fImagesChamberWidthHeight (elem, imgArry, imgRowHeight3);
      elem.css ({"height": imgRowHeight3});
      elem.css ({"width": totalImgsWidth});


      /**----{ fAnimateWidth: Sets the title in column right }----**/
      //fAnimateWidth (imgTitle, colRightWidth3);

      /**-----{ fTitlePlacement: Sets the image title's height and the top position }-----**/
      //fTitlePlacement (imgTitle, imgTitleHeight, imgRowHeight3);
    };
  };

  /**-----{ Create instances of the ImageSectionClass }-----**/
  var ownImageSection   = new ImageSectionClass (ownImagesChamberId, aOwnImages);
  var stax2ImageSection = new ImageSectionClass (stax2ImagesChamberId, aStax2Images);
  //ownImageSection.imgSectConfig (); //Put instances in fCommonFunctionalities to get invoke every time the window gets resize.
  console.log ("ownImageSection.Elem: ", ownImageSection.Elem);
  console.log ("ownImageSection.RightColPercntage: ", ownImageSection.RightColPercntage);
  console.log ("ownImageSection.ImgArry: ", ownImageSection.ImgArry);

  /**-----------=====| fCommonFunctionalities Function |=====-----------**/
  /** These are common functions that are being run on fMediaQueries
   *  Based on the screen size.
   *  Makes it easier for additional sections from the html page
   *  to be added.
   ****************************************************************/
  function fCommonFunctionalities () {
    /*/!**-----{ Image title height and top position }-----**!/
     fTitlePlacement (imgTitle, imgTitleHeight, imgRowHeight);

     /!**----{ fImageHeightWidth: Setting array member's heights and widths }----**!/
     fImageHeightWidth (aHorizonImages, imgRowHeight, colRightWidth);
     fImageHeightWidth (aStaxImages, imgRowHeight, colRightWidth);
     //fImageHeightWidth (aOwnImages, imgRowHeight, colRightWidth);

     /!**----{ fImagesChamberWidthHeight: Setting images chamber width based on images array }----**!/
     fImagesChamberWidthHeight (horizonImagesChamberId, aHorizonImages, imgRowHeight);
     fImagesChamberWidthHeight (staxImagesChamberId, aStaxImages, imgRowHeight);
     //fImagesChamberWidthHeight (ownImagesChamberId, aOwnImages, imgRowHeight);

     /!**-----{ fHeightWidthPercentage: Find the percentage based on image orig size }-----**!/
     fHeightWidthPercentage ();

     /!**-----{ fLogoContainer: Adjust the logo container's top position }-----**!/
     fLogoContainer ();*/
    ownImageSection.imgSectConfig (100);
    stax2ImageSection.imgSectConfig (45);
  }

  var ownXpos;
  var ownMultiplier     = 0;
  var stax2Xpos;
  var stax2Multiplier   = 0;

  var ownColRight         = $ ("#ownColRight");
  var ownColRightWidth3   = ownColRight.width ();
  var stax2ColRight       = $ ("#stax2ColRight");
  var stax2ColRightWidth3 = stax2ColRight.width ();

  /**-----------=====| Media Queries |=====-----------**/
  function fMediaQueries () {
    //mQ++;
    //console.log ("fMediaQueries -------: ", mQ);
    /**-----===( When re-sizing window get the clicked amount mulitplied
     * by the current image width and used that number to re-position the container
     *********************************************************************)===-----**/
      //horizonMultiplier = 0;
      //horizonXpos = parseInt(colRightWidth * horizonMultiplier);

      //horizonXpos = colRightWidth * horizonMultiplier;
      //staxXpos    = colRightWidth * staxMultiplier;
    ownXpos   = ownColRightWidth3 * ownMultiplier;
    stax2Xpos = stax2ColRightWidth3 * stax2Multiplier;

    /** Keeps the image in place whenever the window gets resized **/
      //fXSlider (horizonImagesChamberId, -horizonXpos); //Used the css left instead of the x matrix
      //fXSlider (staxImagesChamberId, -staxXpos);
    //fXSlider (ownImagesChamberId, -ownXpos);
    //fXSlider (stax2ImagesChamberId, -stax2Xpos);
    ownImagesChamberId.css ({"left": ownXpos});
    stax2ImagesChamberId.css ({"left": stax2Xpos});

    //winWidth = $ (window).width (); //Browser window width
    ////console.log ("winWidth: " + winWidth);
    windowInnerWidth = window.innerWidth;

    /**-------------===========( Cellphones Viewport )===========-------------**/
    if (windowInnerWidth <= 480) {
      //console.log ("•-------------------- Tiny : <= 480 ---------------------•");
      /**-----{ //fTwoColumns: Changing the 2 columns width percentages in a Row }-----**/
      //fTwoColu//mns (90); //Right column @ 90% width. Left column @ 10%.
      //fHeaderFonts (2.5, .75, 1.2, 1.2, 1);
      fCommonFunctionalities ();
      //fResetContainers ();
      //console.log ("•-------------------- End Tiny ---------------------•");

      /**-------------===========( Smartphones Viewport: 480 - 640 )===========-------------**/
    } else if (windowInnerWidth <= smallDevices && windowInnerWidth > 480) {
      console.log ("•-------------------- Small : 480 - 640 ---------------------•");
      /**-----{ Changing columns width percentage in a Row }-----**/
      //fTwoColumns (90);
      //fHeaderFonts (4, 1, 1.4, 1.4, 1.2);
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
      //fTwoColumns (80);
      //fHeaderFonts (6, 1.2, 1.4, 1.4, 1.2);
      fCommonFunctionalities ();
      //console.log ("•-------------------- End Medium ---------------------•");

      /**-------------===========( Between Desktop and Tablets Viewport )===========-------------**/
    } else if (windowInnerWidth <= largeDevices && windowInnerWidth > mediumDevices) {
      console.log ("•--------------- Large : 992 - 1200 ----------------•");
      //console.log ("largeDevices: ", largeDevices, "mediumDevices: ", mediumDevices);
      /**-----{ Changing columns width percentage in a Row }-----**/
        ////fTwoColumns2 (100);//Testing config 2 for the logo container
        //////fTwoColumns3 (containerTemp, 100)
      //fT//woColumns (80);
      //fHeaderFonts (8, 1.4, 1.4, 1.5, 1.2); //Large settings
      fCommonFunctionalities ();

      /**-------------===========( Extra Large Viewport )===========-------------**/
    } else {
      console.log ("•-------------------- Extra Large ---------------------•");
      /**-----{ Changing columns width percentage in a Row }-----**/
      //fTwoColumns (80);
      //fHeaderFonts (10, 1.4, 1.4, 1.5, 1.2); //Large settings
      fCommonFunctionalities ();
      //console.log ("•-------------------- End Extra Large ---------------------•");
    }
  };

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

  /**-----===( Initialize: Media Queries)===-----**/
  fInitMediaQueries ()

  /**-----------=====| End IIFE |=====-----------**/
} ());
