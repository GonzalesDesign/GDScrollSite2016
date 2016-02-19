/**
 * Created by Odee on 2/6/16.
 */
(function () { //IIFE:Immediately-Invoked Function Expression
  'use strict';

  console.log ("-----=====( GDScrollLayout.js )=====-----");

  /**-----| Variables |-----**/
  /*  Variables used for animation using GSAP TweenMax engine
   * */
  var tMx       = TweenMax;
  var easeSine  = Sine.easeOut;
  var easePower = Power3.easeOut;
  var animTym   = 1.5;

  /**-----------=====| Miscellaneous Counter |=====-----------**/
  var j = 0;
  //var jj = 0;

  /**-----------=====| Browser Inner Width |=====-----------**/
  var windowInnerWidth = window.innerWidth; //Browser window inner width
  console.log ("windowInnerWidth: init ", windowInnerWidth);

  /**-----------=====| Browser Window Dimensions Variables |=====-----------**/
  var winWidth; //Window width
  var winHeight = $ (window).height ();
  //winHeight = winHeight-32;
  //console.log ("winWidth: " + winWidth);
  console.log ("winHeight: " + winHeight);

  /**-----------=====| Devices Viewport Width |=====-----------**/
  var largeDevices  = 1200;
  var mediumDevices = 992;
  var smallDevices  = 640; //768;

  /**-----------=====| Poster Area |=====-----------**/
  var r1PosterArea = $ (".r1PosterArea");
  //r1PosterArea.css ({"height": winHeight}); //Fills the whole viewport on load.

  var colRightCrop = $ (".colRightCrop"); //Column right cropper. Hidden overflow

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

  var aImgTitles = ["aImgTitles Uno", "aImgTitles Dos", "HBCBS Website Media Controllers"];

  var imgTitle       = $ (".imgTitle");
  var h3             = $ ("h3");
  var rowHeaderTitle = $ (".rowHeaderTitle");

  var imgTitleTop;

  /**-----{ Changing columns width percentage in a Row }-----**/
  //var colRightWidth;
  //var //imgsContainerWidth;

  /**-----------=====| New left columns |=====-----------**/
  var colLeft      = $ (".colLeft");
  var colLeftWidth = colLeft.width ();
  console.log ("colLeftWidth: init: ", colLeftWidth);

  /**-----------=====| New right columns |=====-----------**/
  var colRight      = $ (".colRight");
  var colRightWidth = colRight.width ();
  console.log ("colRightWidth: init: ", colRightWidth);

  /**-----------=====| Right Column Images Height |=====-----------**/
  var xtraLargeHeight = 668; //625;
  var largeHeight = 560; //520;
  var mediumHeight = 430; //440;
  var smallHeight = 420; //370; //768;

  /**-----------=====| Right Column Images Width |=====-----------**/
  /*var rowImgRightColmn = $ (".rowImgRightColmn"); //col-xs-8
   var rowImgRightColmnWidth = rowImgRightColmn.width (); //col-xs-8 width
   console.log ("rowImgRightColmnWidth x: ", rowImgRightColmnWidth);*/

  var rowImgHeight;// = smallHeight;
  var horizonImagesContainerIdWidth;

  /**-***********************************************************************************-**/
  /**-----------=====| FUNCTIONS |=====-----------**/

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
    windowInnerWidth = window.innerWidth; //Browser window inner width
    console.log ("fTwoColumns windowInnerWidth: ", windowInnerWidth);
    var columnRight  = windowInnerWidth * (rightColumnPercentage / 100); // (90 / 100) for 90%
    var columnLeft            = windowInnerWidth - columnRight;
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

    /*var columnRight = windowInnerWidth * (90 / 100);
     var columnLeft = windowInnerWidth - columnRight;*/
    /*console.log ("columnRight: ", Math.round(columnRight));
     console.log ("columnLeft: ", Math.round(columnLeft));*/

    /*var winWidth10  = winWidth / smallerColumnDivider; //Left column @ 10%
     var winWidth90 = winWidth - winWidth10; //Right column @ 90%
     rowColWidth = winWidth90;*/
    console.log ("windowInnerWidth: ", windowInnerWidth);
    console.log ("rightColumnPercentage: ", rightColumnPercentage);
    /*console.log ("colOne: ", colOne);
     console.log ("colTwo: ", colTwo);*/
    console.log ("columnRight: ", Math.round (columnRight));
    console.log ("columnLeft: ", Math.round (columnLeft));
    console.log ("imageRightColumnWidth: ", imageRightColumnWidth);
    console.log ("colRightWidth: ", colRightWidth);
    //console.log ("imgsContainerWidth: ", imgsContainerWidth);
    console.log ("End fTwoColumns function----------------: ");
  }

  /**-----------=====| fImagesContainerWidth Function |=====------------------------------**/
  /** Function for adjusting the container's width that holds the images that's in the array
   *  id: element id name
   *  imagesArray: array that contains the specific section's images
   ****************************************************************************************/
  function fImagesContainerWidth (id, imagesArray) {
    console.log ("fImagesContainerWidth:----------•");
    var totalImgsWidth = (colRightWidth * imagesArray.length) + 100;
    id.css ({"width": totalImgsWidth});
    console.log ("imagesArray.length: ", imagesArray.length);
    console.log ("totalImgsWidth: ", totalImgsWidth);
    console.log ("End fImagesContainerWidth:----------•");
  }

  /**-----------=====| fTitlePlacement Function |=====-----------**/
  /** Function for title image placement underneath each image
   *  elem: title class name
   *  ht: title background bar height
   *  vPos: top position or vertical position
   ****************************************************************/
  function fTitlePlacement(elem, ht, vPos) {
    fAnimateHeight (elem, ht);
    fAnimateTop (elem, vPos);
  }

  /*var winWidth10  = winWidth / 9; //Left column @ 10%
   var winWidth90 = winWidth - winWidth10; //Right column @ 90%
   console.log ("winWidth10: ", winWidth10);
   console.log ("winWidth90: ", winWidth90);
   rowImgRightColmnWidth = Math.round(winWidth90); //Math.round() NOT WORKING!!!
   console.log ("rowImgRightColmnWidth: rounded--- ", rowImgRightColmnWidth);*/

  /**-----------=====| END FUNCTIONS |=====-----------**/
  /**-***********************************************************************************-**/

  //h3.css ({"lineHeight": "80%"});
  //fSettingCSSStyle(h3, "lineHeight", "80%");
  //fAnimateTop(imgTitle, 40);
  //imgTitle.style.top = "60px";
  //var imgTitleTop = rowImgRightColmnHeight -180;
  //imgTitle.css ({"top": imgTitleTop});
  //console.log("imgTitleTop: ", imgTitleTop);
  //fAnimateSlider (imgTitle, imgTitleTop, 0);

  /*horizonImagesContainerId.css ({"height": rowImgRightColmnHeight});
   liR1Img.css ({"height": xtraLargeHeight, "width": rowImgRightColmnWidth}); //, "border": "4px solid black"
   liR2Img.css ({"height": mediumHeight, "width": rowImgRightColmnWidth});
   liR3Img.css ({"height": mediumHeight, "width": rowImgRightColmnWidth});*/

  /**-----===( Next Previous Buttons )===-----**/
  /**---{ Horizon Buttons }---**/
  var leftArrowHorizon  = $ ("#leftArrowHorizon");
  var rightArrowHorizon = $ ("#rightArrowHorizon");
  /**---{ Stax Gallery Buttons }---**/
  var leftArrowStax  = $ ("#leftArrowStax");
  var rightArrowStax = $ ("#rightArrowStax");

  /**-----===( Image Title )===-----**/
  var rImgTitle = $ (".rImgTitle");
  var titolo       = document.createElement ('div');
  $ (titolo).appendTo (".rImgTitle");
  titolo.className = "titolo";
  //rImgTitleX.appendChild (infoDescription);
  //titolo.textContent = aImgTitles[0];

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
    //fAnimateTop(r2ImgTitleBar, "200px");

  $ (r2ImgTitleBar).appendTo (".rowImg2");
  $ (r2ImgTitle).appendTo (r2ImgTitleBar);
  //r2ImgTitle.textContent  = aImgTitles[j]; //innerHTML textContent

  //rowImgRightColmnWidth      = rowImgRightColmn.width ();
  //var rowImgRightColmnHeight = rowImgRightColmn.height ();
  //imgTitleTop                = rowImgRightColmnHeight;// -40;
  //fAnimateTop (r2ImgTitleBar, imgTitleTop);

  /*
   var xtraLargeHeight  = 625;
   var largeHeight = 520;
   var mediumHeight = 400;
   var smallHeight  = 370;
   */

  //rowImgRightColmn.css ({"height": largeHeight});

  /*
   /!**----------( TO DO: Works when resizing but not on initial load: Create a shared Class for both Left and Right Columns )----------**!/
   /!**- Create a shared left column class: colLeft & a shared right column: colRight
   * No need to create an array for all the left and right columns -**!/
   /!**-----------=====| All the left columns |=====-----------**!/
   var rowHeaderLeftColmn = $ (".rowHeaderLeftColmn");
   var rowImgLeftColmn    = $ (".rowImgLeftColmn");
   var rowTitleLeftColmn  = $ (".rowTitleLeftColmn");
   var rowParagLeftColmn  = $ (".rowParagLeftColmn");

   var aLeftColumns = [rowHeaderLeftColmn, rowImgLeftColmn, rowTitleLeftColmn, rowParagLeftColmn];

   /!**-----------=====| All the right columns |=====-----------**!/
   var rowHeaderRightColmn = $ (".rowHeaderRightColmn");
   var rowImgRightColmn    = $ (".rowImgRightColmn");
   var rowTitleRightColmn  = $ (".rowTitleRightColmn");
   var rowParagRightColmn  = $ (".rowParagRightColmn");
   var paragBodyx          = $ (".paragBodyx");

   var aRightColumns = [rowHeaderRightColmn, rowImgRightColmn, rowTitleRightColmn, rowParagRightColmn, rowParagRightColmn, paragBodyx];
   */
  /**On load resize image**/
  //rowImgRightColmnWidth = $ (rowImgRightColmn).width ();
  /**----( aHorizonImages: HBCBS images array collection )----**/
  /*for (var i = 0; i < aHorizonImages.length; i++) {
   console.log("aHorizonImages");
   fAnimateHeightWidth (aHorizonImages, mediumHeight, 500);//rowImgRightColmnWidth);
   }*/

  /**-----------=====| Dynamic Image Container Width |=====-----------**/
  /** Based on the current image right column width, multiply
   * by the image array length.
   * Add
   **************************************************************************/
  /*var horizonImagesContainerIdWidth = (rowImgRightColmnWidth * aHorizonImages.length) + 100;
   horizonImagesContainerId.css ({"width": horizonImagesContainerIdWidth});
   console.log ("rowImgRightColmnWidth: ", rowImgRightColmnWidth);
   console.log ("horizonImagesContainerIdWidth: ", horizonImagesContainerIdWidth);*/
  /**-**********************************************************************-**/

  /*
   /!**-----{ TO DO: Works when resizing but not on initial load }-----**!/
   /!**-----{ Percentage for height and width }-----**!/
   console.log ("Init load:-----------------•");
   rowImgRightColmnWidth = colRightWidth; //$ (rowImgRightColmn).width ();
   var imgOrigWidth = 544; //Image original width
   var imgOrigHeight = 438; //Image original height
   var imgResizePercent = rowImgRightColmnWidth / imgOrigWidth; //Current right column image width / image orig width
   var imgRowHeight = (imgOrigHeight * imgResizePercent); //Applying the same percentage for the height
   console.log ("rowImgRightColmnWidth:----- " + rowImgRightColmnWidth);
   //console.log ("imgSizePercentage1:----- " + imgSizePercentage1);
   console.log ("imgResizePercent:----- " + imgResizePercent);
   console.log ("imgRowHeight:----- " + imgRowHeight);
   console.log ("smallHeight: hard coded value----- " + smallHeight);
   console.log ("rowImgRightColmnHeight:----- " + rowImgRightColmnHeight);
   console.log ("End Init load:-----------------•");
   //rowImgRightColmnWidth = Math.round(winWidth90);
   */
  /**-------------------------------------------------------**/

  /**-----------=====| Media Queries |=====-----------**/
  function fMediaQueries () {
    console.log ("fMediaQueries --------------------------: ");

    winWidth = $ (window).width (); //Browser window width
    console.log ("winWidth: " + winWidth);

    /*

     /!*var test = horizonImagesContainerId.innerWidth;
     console.log ("test: ", test);
     var test2 = $ (horizonImagesContainerId).width ();
     console.log ("test2: ", test2);*!/

     /!*rowImgRightColmn.css ({"height": rowImgHeight});
     console.log ("rowImgHeight: " + rowImgHeight);*!/

     //fTwoColumns (winWidth, 90);

     /!**-----{ Keep track of the image position when the window resizes }-----**!/
     //elemPosition = horizonImagesContainerId.position ();
     /!*elemPosition = rowImgRightColmnWidth;
     console.log ("elemPosition: ", elemPosition.left);*!/

     //fSlider (horizonImagesContainerId, elemPosition);

     //console.log ("rowImgRightColmnWidth: " + rowImgRightColmnWidth);

     /!*rowImgRightColmnHeight = rowImgRightColmn.height ();
     imgTitleTop = rowImgRightColmnHeight -40;
     console.log("imgTitleTop: ", imgTitleTop);
     console.log("rowImgRightColmnHeight mq: ", rowImgRightColmnHeight);
     fAnimateTop(imgTitle, imgTitleTop);*!/

     /!*Image title top position*!/
     //rowImgRightColmnHeight = $ (rowImgRightColmn).height ();
     //imgTitleTop = rowImgRightColmnHeight -40;
     //console.log("rowImgRightColmnHeight: ", rowImgRightColmnHeight);
     //imgTitle.css ({"top": imgTitleTop});
     //fAnimateSlider (imgTitle, imgTitleTop, 0)
     */

    /**-----{ imgTitle vertical position. Put at the bottom }-----**/
    imgTitleTop = rowImgHeight - 40;

    //rowImgRightColmnWidth = colRightWidth; //$ (rowImgRightColmn).width ();
    //console.log ("colRightWidth1: ", colRightWidth);

    //fAnimateWidth (imgTitle, rowImgRightColmnWidth);

    /*horizonImagesContainerIdWidth = (rowImgRightColmnWidth * aHorizonImages.length) + 100; //Container width
     horizonImagesContainerId.css ({"width": horizonImagesContainerIdWidth}); //Assigning container width
     console.log ("rowImgRightColmnWidth1: ", rowImgRightColmnWidth);
     console.log ("horizonImagesContainerIdWidth1: ", horizonImagesContainerIdWidth);
     console.log ("-----------------------------------------•: ");*/

    /*var xtraLargeHeight = 668; //625;
     var largeHeight = 560; //520;
     var mediumHeight = 440; //400;
     var smallHeight = 410; //370; //768;

     var largeDevices  = 1200;
     var mediumDevices = 992;
     var smallDevices  = 640;
     */
    /**-------------===========( Cellphones Viewport )===========-------------**/
    if (winWidth <= 480) {
      console.log ("•-------------------- Tiny ---------------------•");
      console.log ("tinyDevices: <= 480:-------•");

      /**-----{ Changing columns width percentage in a Row }-----**/
      /*var winWidth10  = winWidth / 9; //Left column @ 10%
       var winWidth90 = winWidth - winWidth10; //Right column @ 90%
       console.log ("winWidth10: ", winWidth10);
       console.log ("winWidth90: ", winWidth90);
       rowImgRightColmnWidth = Math.round(winWidth90); //Math.round() NOT WORKING!!!
       console.log ("rowImgRightColmnWidth: rounded--- ", rowImgRightColmnWidth);*/
      fTwoColumns (90);
      /*fAnimateHeight (imgTitle, 50);
      fAnimateTop (imgTitle, smallHeight - 40);*/
      fTitlePlacement(imgTitle, 50, (smallHeight - 40));
      /**-------------------------------------------------------**/
      //rowImgRightColmnWidth = colRightWidth; //$ (rowImgRightColmn).width ();
      //console.log ("rowImgRightColmnWidth2: ", rowImgRightColmnWidth);

      /**----( aHorizonImages: Setting array value's heights and widths )----**/
      for (var i = 0; i < aHorizonImages.length; i++) {
        fAnimateHeightWidth (aHorizonImages[i], smallHeight, colRightWidth); //rowImgRightColmnWidth);
        //console.log ("aHorizonImages[i]: ", aHorizonImages[i]);
      }
      /*/!**----( Adjust left columns width )----**!/
       /!*for (var i = 0; i < aLeftColumns.length; i++) {
       aLeftColumns[i].css ({"width": "10%"}); //33.33333333%;
       }*!/
       colLeft.css ({"width": "10%"});
       /!**----( Adjust the right columns )----**!/
       /!*for (var i = 0; i < aRightColumns.length; i++) {
       aRightColumns[i].css ({"width": "90%"}); //66.6666666%;
       }*!/
       colRight.css ({"width": "90%"});*/
      fImagesContainerWidth (horizonImagesContainerId, aHorizonImages);

      /**----( aStaxImages: Setting array value's heights and widths )----**/
      for (var i = 0; i < aStaxImages.length; i++) {
        fAnimateHeightWidth (aStaxImages[i], smallHeight, colRightWidth); //rowImgRightColmnWidth);
        //console.log ("aStaxImages[i]: ", aStaxImages[i]);
      }
      fImagesContainerWidth (staxImagesContainerId, aStaxImages);
      /*horizonImagesContainerIdWidth = (colRightWidth * aHorizonImages.length) + 100;
       console.log ("horizonImagesContainerIdWidth: ", horizonImagesContainerIdWidth);
       //horizonImagesContainerIdWidth = imgsContainerWidth;
       horizonImagesContainerId.css ({"width": horizonImagesContainerIdWidth});
       //console.log ("rowImgRightColmnWidth3: ", rowImgRightColmnWidth);
       console.log ("horizonImagesContainerIdWidth: ", horizonImagesContainerIdWidth);*/
      console.log ("•-------------------- End Tiny ---------------------•");

      /**-------------===========( Smartphones Viewport: 480 - 640 )===========-------------**/
    } else if (winWidth <= smallDevices && winWidth > 480) {
      console.log ("•-------------------- Small ---------------------•");
      console.log ("smallDevices:----- " + smallDevices);

      fTwoColumns (90);

      /*fAnimateHeight (imgTitle, 50);
      fAnimateTop (imgTitle, smallHeight - 40);*/
      fTitlePlacement(imgTitle, 50, (smallHeight - 40));

      /**----( aHorizonImages: Setting array value's heights and widths )----**/
      for (var i = 0; i < aHorizonImages.length; i++) {
        fAnimateHeightWidth (aHorizonImages[i], smallHeight, colRightWidth); //rowImgRightColmnWidth);
        //console.log ("aHorizonImages[i]: ", aHorizonImages[i]);
      }

      fImagesContainerWidth (horizonImagesContainerId, aHorizonImages);

      /**----( aStaxImages: Setting array value's heights and widths )----**/
      for (var i = 0; i < aStaxImages.length; i++) {
        fAnimateHeightWidth (aStaxImages[i], smallHeight, colRightWidth); //rowImgRightColmnWidth);
        //console.log ("aStaxImages[i]: ", aStaxImages[i]);
      }
      fImagesContainerWidth (staxImagesContainerId, aStaxImages);

      /*horizonImagesContainerIdWidth = (colRightWidth * aHorizonImages.length) + 100;
       //horizonImagesContainerIdWidth = imgsContainerWidth;
       horizonImagesContainerId.css ({"width": horizonImagesContainerIdWidth});
       //console.log ("rowImgRightColmnWidth3b: ", rowImgRightColmnWidth);
       console.log ("horizonImagesContainerIdWidth: ", horizonImagesContainerIdWidth);*/
      console.log ("•-------------------- End Small ---------------------•");

      /*
       /!**-----{ TO DO: Works when resizing but not on initial load }-----**!/
       /!**-----{ Percentage for height and width }-----**!/
       /!*var imgOrigWidth = 544; //Image original width
       var imgOrigHeight = 438; //Image original height*!/
       //var imgSizePercentage1 =  imgOrigWidth/rowImgRightColmnWidth;
       imgResizePercent =  rowImgRightColmnWidth/imgOrigWidth; //Current right column image width / image orig width
       imgRowHeight = (imgOrigHeight * imgResizePercent); //Applying the same percentage for the height
       console.log ("rowImgRightColmnWidth:----- " + rowImgRightColmnWidth);
       //console.log ("imgSizePercentage1:----- " + imgSizePercentage1);
       console.log ("imgResizePercent:----- " + imgResizePercent);
       console.log ("imgRowHeight:----- " + imgRowHeight);
       console.log ("smallHeight:----- " + smallHeight);
       /!**-------------------------------------------------------**!/

       //fAnimateHeight (rowImgRightColmn, smallHeight);
       fAnimateHeight (rowImgRightColmn, imgRowHeight);
       fAnimateTop (imgTitle, smallHeight - 40);
       //rowImgHeight = smallHeight;
       //fAnimateTop(imgTitle, imgTitleTop);
       //rowImgRightColmn.css ({"height": smallHeight});
       //rowImgHeight = smallHeight;
       rowHeaderTitle.css ({"lineHeight": "90%", "fontSize": "1.2em"});
       h3.css ({"lineHeight": "100%", "fontSize": "1.4em"});

       /!**-----{ Changing columns width percentage in a Row }-----**!/
       var winWidth10  = winWidth / 9; //Left column @ 10%
       var winWidth90 = winWidth - winWidth10; //Right column @ 90%
       console.log ("winWidth10: ", winWidth10);
       console.log ("winWidth90: ", winWidth90);
       rowImgRightColmnWidth = winWidth90;
       //fTwoColumns ();
       /!**-------------------------------------------------------**!/

       /!**----( aHorizonImages: Setting array value's heights and widths )----**!/
       for (var i = 0; i < aHorizonImages.length; i++) {
       fAnimateHeightWidth (aHorizonImages, imgRowHeight, winWidth90); //rowImgRightColmnWidth);
       }

       /!*!/!**----( aHorizonImages: HBCBS images array collection )----**!/
       for (var i = 0; i < aHorizonImages.length; i++) {
       fAnimateHeightWidth (aHorizonImages, smallHeight, rowImgRightColmnWidth); //rowImgRightColmnWidth);
       }*!/
       /!*!/!**----( Compress the left columns )----**!/
       for (var i = 0; i < aLeftColumns.length; i++) {
       aLeftColumns[i].css ({"width": "20%"}); //33.33333333%;
       }
       /!**----( Adjust the right columns )----**!/
       for (var i = 0; i < aRightColumns.length; i++) {
       aRightColumns[i].css ({"width": "80%"}); //33.33333333%;
       }*!/

       /!**----( Adjust left columns width )----**!/
       colLeft.css ({"width": "10%"});
       /!**----( Adjust the right columns )----**!/
       colRight.css ({"width": "90%"});

       /!*!/!**----( Default left columns width )----**!/
       for (var i = 0; i < aLeftColumns.length; i++) {
       aLeftColumns[i].css ({"width": "10%"}); //33.33333333%;
       }
       /!**----( Adjust the right columns )----**!/
       for (var i = 0; i < aRightColumns.length; i++) {
       aRightColumns[i].css ({"width": "90%"}); //66.6666666%;
       }*!/

       horizonImagesContainerIdWidth = (rowImgRightColmnWidth * aHorizonImages.length) + 100;
       horizonImagesContainerId.css ({"width": horizonImagesContainerIdWidth});

       //rowParagRightColmn.css ({"paddingLeft": "15px"});
       console.log ("rowImgRightColmnWidth: " + rowImgRightColmnWidth);
       /!*rowImgRightColmn.css ({"height": "300px"});*!/
       */

      /**-------------===========( Between Tablets and Smartphones Viewport )===========-------------**/
    }
  }

  /*else if (winWidth <= mediumDevices && winWidth > smallDevices) {
   console.log ("mediumDevices:----- " + mediumDevices);
   //rowImgRightColmn.css ({"height": "500px"});
   fAnimateHeight (rowImgRightColmn, mediumHeight);
   fAnimateTop (imgTitle, mediumHeight - 40);
   //rowImgHeight = mediumHeight;
   //fAnimateTop(imgTitle, imgTitleTop);
   //rowImgRightColmn.css ({"height": mediumHeight});
   //rowImgHeight = mediumHeight;
   //fAnimateHeightWidth (liR1Img, mediumHeight, rowImgRightColmnWidth);
   rowHeaderTitle.css ({"lineHeight": "100%", "fontSize": "1.5em"});
   h3.css ({"lineHeight": "80%", "fontSize": "1.5em"});

   /!**----( aHorizonImages: HBCBS images array collection )----**!/
   for (var i = 0; i < aHorizonImages.length; i++) {
   fAnimateHeightWidth (aHorizonImages, mediumHeight, rowImgRightColmnWidth);//rowImgRightColmnWidth);
   }
   /!*!/!**----( Default left columns width )----**!/
   for (var i = 0; i < aLeftColumns.length; i++) {
   aLeftColumns[i].css ({"width": "20%"}); //33.33333333%;
   }
   /!**----( Adjust the right columns )----**!/
   for (var i = 0; i < aRightColumns.length; i++) {
   aRightColumns[i].css ({"width": "80%"}); //66.6666666%;
   }*!/
   /!**----(
   Default left columns width )----**!/
   for
   (var i = 0; i < aLeftColumns.length; i++) {
   aLeftColumns[i].css ({"width": "33.33333333%"}); //33.33333333%;
   }
   /!**----( Adjust the right columns width )----**!/
   for (var i = 0; i < aRightColumns.length; i++) {
   aRightColumns[i].css ({"width": "66.6666666%"}); //66.6666666%;
   }
   //rowParagRightColmn.css ({"paddingLeft": "0px"});
   console.log ("rowImgRightColmnWidth: " + rowImgRightColmnWidth);
   //rowImgRightColmnWidth = $ (rowImgRightColmn).width ();

   /!**-------------===========( Between Desktop and Tablets Viewport )===========-------------**!/
   } else if (winWidth <= largeDevices && winWidth > mediumDevices) {
   console.log ("largeDevices: " + largeDevices);
   //rowImgRightColmn.css ({"height": "largeHeightpx", "backgroundColor": "#323232"});
   fAnimateHeight (rowImgRightColmn, largeHeight);
   //rowImgHeight = largeHeight;
   fAnimateTop (imgTitle, largeHeight - 40);
   //fAnimateWidth (imgTitle, rowImgRightColmnWidth);
   //fAnimateTop(imgTitle, largeHeight);
   //rowImgRightColmn.css ({"height": largeHeight});
   //rowImgHeight = largeHeight;
   //rowImgRightColmn.css ({"height": "300px"});
   //fAnimateHeightWidth (liR1Img, largeHeight, rowImgRightColmnWidth);
   rowHeaderTitle.css ({"lineHeight": "100%", "fontSize": "1.6em"});
   h3.css ({"lineHeight": "80%", "fontSize": "1.5em"});

   for (var i = 0; i < aHorizonImages.length; i++) {
   fAnimateHeightWidth (aHorizonImages, largeHeight, rowImgRightColmnWidth);
   }
   /!**----( Default left columns width )----**!/
   for (var i = 0; i < aLeftColumns.length; i++) {
   aLeftColumns[i].css ({"width": "33.33333333%"}); //33.33333333%;
   }
   /!**----( Adjust the right columns )----**!/
   for (var i = 0; i < aRightColumns.length; i++) {
   aRightColumns[i].css ({"width": "66.6666666%"}); //66.6666666%;
   }
   //rowImgRightColmnWidth = $ (rowImgRightColmn).width ();

   /!**-------------===========( Large Desktop Viewport )===========-------------**!/
   } else {
   console.log ("extra large devices: " + largeDevices);
   //rowImgRightColmn.css ({"height": "625px", "backgroundColor": "#323232"});
   fAnimateHeight (rowImgRightColmn, xtraLargeHeight);
   fAnimateTop (imgTitle, xtraLargeHeight - 40);
   //rowImgHeight = xtraLargeHeight;
   //fAnimateTop(imgTitle, imgTitleTop);
   //fAnimateTop(imgTitle, xtraLargeHeight);
   //rowImgRightColmn.css ({"height": xtraLargeHeight});
   //rowImgHeight = xtraLargeHeight;
   //rowImgRightColmn.css ({"height": xtraLargeHeight});
   //fAnimateHeightWidth (liR1Img, xtraLargeHeight, rowImgRightColmnWidth);
   //fAnimateHeightWidth (liR2Img, xtraLargeHeight, rowImgRightColmnWidth);
   for (var i = 0; i < aHorizonImages.length; i++) {
   fAnimateHeightWidth (aHorizonImages, xtraLargeHeight, rowImgRightColmnWidth);
   }
   /!**----( Default left columns width )----**!/
   for (var i = 0; i < aLeftColumns.length; i++) {
   aLeftColumns[i].css ({"width": "33.33333333%"}); //33.33333333%;
   }
   /!**----( Adjust the right columns )----**!/
   for (var i = 0; i < aRightColumns.length; i++) {
   aRightColumns[i].css ({"width": "66.6666666%"}); //66.6666666%;
   }
   //console.log ("else liR2Img: " + liR2Img);

   };*/

  /** On load hide the left arrow **/
  leftArrowHorizon.hide ();
  var nextPos;
  var prevPos;

  var currentImage;
  var currentImageXpos;
  /**----- Using .bind() or .click() -----**/
  /*leftArrowHorizon.click (function () {*/

  /** Test position **/
  /*var elemPosition = horizonImagesContainerId.position ();
   console.log ("elemPosition: ", elemPosition.left);*/

  /**---===== MAKE THE NEXT AND PREVIOUS USABLE TO MULTIPLE SECTIONS *************/

  //var ij = 0;
  /*function fNextClick(rightArrowId, leftArrowId, aTitles, aImages, sectionImgsContainerId, ij){
   console.log ("fNextClick:--------------");
   console.log ("aImages.length: ", aImages.length);
   rightArrowId.click (function () {
   console.log ("rightArrowId:--------------");
   leftArrowId.show ();
   ij++;
   nextPos            = colRightWidth * ij;
   console.log ("nextPos: ", nextPos);
   titolo.textContent = aTitles[ij];
   if (nextPos <= 0) {
   nextPos = 0;
   }
   if (ij >= (aImages.length - 1)) {
   console.log ("aImages.length - 1: ", aImages.length - 1);
   ij = aImages.length - 1; //imgsCount - 1; //
   rightArrowId.hide ();
   console.log ("ij2b: ", ij);
   }
   fSlider (sectionImgsContainerId, -nextPos);
   })
   };

   //var jj = 0;
   function fPreviousClick(rightArrowId, leftArrowId, aTitles, sectionImgsContainerId, jj){
   // leftArrowId.bind ("click", function () {
   leftArrowId.click (function () {
   rightArrowId.show ();
   jj--;
   prevPos            = colRightWidth * jj;
   titolo.textContent = aTitles[jj];
   if (prevPos <= 0) {
   prevPos = 0;
   }
   if (jj <= 0) {
   jj = 0;
   leftArrowId.hide ();
   }
   fSlider (sectionImgsContainerId, -prevPos);
   });
   }*/

  /**-------------===========( Horizon Next & Previous Click Functions )===========-------------**/
  /*var h = 0;
   fNextClick(rightArrowHorizon, leftArrowHorizon, aHorizonImages, aImgTitles, horizonImagesContainerId, h);
   fPreviousClick(rightArrowHorizon, leftArrowHorizon, aImgTitles, horizonImagesContainerId, h);*/

  /**-------------===========( Stax Next & Previous Click Functions )===========-------------**/
  /*var s = 0;
   fNextClick(rightArrowStax, leftArrowStax, aStaxImages, aImgTitles, staxImagesContainerId, s);
   fPreviousClick(rightArrowStax, leftArrowStax, aImgTitles, staxImagesContainerId, s);*/

  function fNextPreviousButtons (rightArrowId, leftArrowId, aImages, aTitles, sectionImgsContainerId) {
    var ij = 0;
    /**-------------===========( Next Click Functions )===========-------------**/
    rightArrowId.click (function () {
      console.log ("rightArrowId:--------------");
      leftArrowId.show ();
      ij++;
      nextPos            = colRightWidth * ij;
      titolo.textContent = aTitles[ij];
      if (nextPos <= 0) {
        nextPos = 0;
      }
      if (ij >= (aImages.length - 1)) {
        ij = aImages.length - 1; //imgsCount - 1; //
        rightArrowId.hide ();
        console.log ("ij2b: ", ij);
      }
      fSlider (sectionImgsContainerId, -nextPos);

      /** Test position **/
      /*elemPosition = sectionImgsContainerId.position ();
       console.log ("elemPosition: ", elemPosition.left);*/
    });

    /**-------------===========( Previous Click Functions )===========-------------**/
    leftArrowId.bind ("click", function () {
      console.log ("leftArrowId:--------------");
      rightArrowId.show ();
      ij--;
      console.log ("ij1: ", ij);
      prevPos            = colRightWidth * ij;
      console.log ("prevPos: ", prevPos);
      console.log ("colRightWidth: ", colRightWidth);
      console.log ("aImages.length: ", aImages.length);
      titolo.textContent = aTitles[ij];
      if (prevPos <= 0) {
        prevPos = 0;
      }
      if (ij <= 0) {
        console.log ("ij1b: ", ij);
        j = 0;
        leftArrowId.hide ();
      }
      fSlider (sectionImgsContainerId, -prevPos);
    })
  };

  /**-----===( End Next Previous Click Functions )===-----**/

  fNextPreviousButtons(rightArrowHorizon, leftArrowHorizon, aHorizonImages, aImgTitles, horizonImagesContainerId);
  fNextPreviousButtons(rightArrowStax, leftArrowStax, aStaxImages, aImgTitles, staxImagesContainerId);

  /**-------------===========( Next Click Functions )===========-------------**/
  /*rightArrowHorizon.click (function () {
   console.log ("rightArrowHorizon:--------------");
   leftArrowHorizon.show ();
   j++;
   nextPos            = colRightWidth * j;
   titolo.textContent = aImgTitles[j];
   if (nextPos <= 0) {
   nextPos = 0;
   }
   if (j >= (aHorizonImages.length - 1)) {
   j = aHorizonImages.length - 1; //imgsCount - 1; //
   rightArrowHorizon.hide ();
   console.log ("j2b: ", j);
   }
   fSlider (horizonImagesContainerId, -nextPos);

   /!** Test position **!/
   /!*elemPosition = horizonImagesContainerId.position ();
   console.log ("elemPosition: ", elemPosition.left);*!/
   });*/

  /**-------------===========( Previous Click Functions )===========-------------**/
  /*leftArrowHorizon.bind ("click", function () {
   console.log ("leftArrowHorizon:--------------");
   rightArrowHorizon.show ();
   j--;
   console.log ("j1: ", j);
   prevPos            = colRightWidth * j;
   console.log ("prevPos: ", prevPos);
   console.log ("colRightWidth: ", colRightWidth);
   console.log ("aHorizonImages.length: ", aHorizonImages.length);
   titolo.textContent = aImgTitles[j];
   if (prevPos <= 0) {
   prevPos = 0;
   }
   if (j <= 0) {
   console.log ("j1b: ", j);
   j = 0;
   leftArrowHorizon.hide ();
   }
   fSlider (horizonImagesContainerId, -prevPos);
   });*/

  /**-----===( End Next Previous Click Functions )===-----**/

  /**-----===( Get image real dimensions: TEST )===-----**/
  function realImgDimension (img) {
    var i = new Image ();
    i.src = img.src;
    return {
      naturalWidth : i.width,
      naturalHeight: i.height
    };
  }

  var myImage = document.getElementById ("horizonImg1Id");
  myImage.addEventListener ("load", function () {
    var realSize = realImgDimension (this);
    console.log ('My width is: ', realSize.naturalWidth);
    console.log ('My height is: ', realSize.naturalHeight);
  });
  /**-----===( End image real dimensions )===-----**/

  /**-----===( Initial load media queries )===-----**/
  fMediaQueries ();
  /**-----===( Viewport resize load media queries )===-----**/
  window.addEventListener ('resize', fMediaQueries);

} ());
