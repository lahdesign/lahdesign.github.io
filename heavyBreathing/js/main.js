// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '.title-cube'
})
.setClassToggle('.title-cube', 'show')
.addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    colorStart: 'pink',
    colorEnd: 'black'
})
.addTo(controller); // assign the scene to the controller

var boxStack = new ScrollMagic.Scene({
    triggerElement: '#smallSquare'
  })
  .setClassToggle('.start', 'end')
  .addTo(controller); // assign the scene to the controller
  

	// define images
	var images = [
		"svgAni/breathingOne.svg",
		"svgAni/breathingTwo.svg",
		"svgAni/breathingThree.svg",
		"svgAni/breathingFour.svg",
		"svgAni/breathingFive.svg",
		"svgAni/breathingSix.svg",
		"svgAni/breathingSeven.svg",
		"svgAni/breathingEight.svg",
		"svgAni/breathingNine.svg",
		"svgAni/breathingTen.svg",
		"svgAni/breathingEleven.svg",
	];
	

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 1,									// repeat 1 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene: Controls the image sequence of the House.
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: -400, duration: 700})
					.setTween(tween)
					.setPin("#imagesequence")
					.addIndicators({
						name: 'img sequenece',
						colorTrigger: 'black',
						colorStart: 'pink',
						colorEnd: 'black'
					}) // add indicators (requires plugin)
					.addTo(controller);


						// init controller
	var controller = new ScrollMagic.Controller();

	// build scene: Controls the background color change and scale change. 
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: -400, duration: 1000})
					.setTween("#imagesequence", {backgroundColor: "#F0E6CD", scale: 1 })
					// .setPin("#imagesequence")
					.addIndicators({
					}) // add indicators (requires plugin)
					.addTo(controller);


	// init controller
	var controller = new ScrollMagic.Controller({vertical: false});

	// build tween
	var tween = TweenMax.to("#target", 0.5, {backgroundColor: "#354753", width: "+=1000"});

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 00})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
					

					var controller = new ScrollMagic.Controller();

					 $(function () { // wait for document ready
            // build scene
            var scene = new ScrollMagic.Scene({triggerElement: "#pin2"})
                            .setPin("#pin2" )
                            .addIndicators({name: " (duration: 0)"}) // add indicators (requires plugin)
                            .addTo(controller);
        });










