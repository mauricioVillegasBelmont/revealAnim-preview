import anime from "animejs";
// import Reveal from "reveal.js";

import Utils from "./utils/Utils";

export const FRAGMENT_STYLE_REGEX =
  /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;


  /*
  {
    [id:string | number]:{
      slides:number; // defines number of slides 0 = on view  x>0 defines on scroll animation 1 sames slide 2 2 slides
      aniamtion:object // animejs config obj
    }
  }
  */




const initAnimateJs = function(Reveal){
  const reveal:Reveal = Reveal
  const scrollConfig: false | "proximity" | "mandatory"  = Reveal.getConfig().scrollSnap || "mandatory";
  const elements: NodeListOf<Element> | null =
    document.querySelectorAll("[data-anime-js]") || null;
  const animationTrigger:'scroll'|'view' = 'scroll'
  // console.log(animationTrigger);
  const animations = []



  // elements.forEach((element) => {
  //   const item ={

  //   }
  //   // element.
  // });
  console.log(Reveal.getConfig().animejsAnimations);


  for (var i = 0; i < elements.length; i++) {

    // if (!elements[i].hasAttribute("data-anime-js-id")) {
    //   const str = Utils.randHash(5), h = '0', v = '0';
    //   const _id = `${str}__${i}--${h}-${v}`;
    //   elements[i].setAttribute("data-anime-js-id", _id);
    // }
    // var animation = anime({
    //   targets: "[data-anime-js]",
    //   translateX: 250, // -> '250px'
    //   rotate: 540, // -> '540deg'
    //   direction: "alternate",
    //   autoplay: false,
    // });

  }


  // this.viewportElement.addEventListener("scroll", this.onScroll, {
  //   passive: true,
  // });
  // console.log(elements, scrollConfig);
  console.log("-----Reveal----");
  console.log(Reveal);
  console.log('---------');


  // console.log(Reveal.getCurrentSlide());
  console.log("-------scrollConfig-------");
  console.log(Reveal.getSlides());
  console.log('--------------');
  // setTimeout(function(){
  //   console.log("-------scrollConfig-------");
  //   console.log(Reveal.getConfig().scrollSnap);
  //   console.log('--------------');
  // },200)

  const viewportElement:HTMLElement = reveal.getViewportElement()


  function setProgressValue(){
    return viewportElement.scrollTop / ( viewportElement.scrollHeight - viewportElement.offsetHeight );
  }
  function onScroll(e){
    // console.log(e);
    const scrollHeight = viewportElement.scrollHeight;
    const offsetHeight = viewportElement.offsetHeight;
    const viewportHeightFactor = offsetHeight / scrollHeight;
    const stepsProgress = viewportElement.scrollTop / offsetHeight;
    // console.log(Reveal.getCurrentSlide())
    console.log('---------');

    // console.log("scrollHeight: ", scrollHeight);
    // console.log("offsetHeight: ", offsetHeight);
    // console.log("viewportElement.scrollTop: ", viewportElement.scrollTop);

    console.log("stepsProgress: ", stepsProgress);
    // console.log('---------');
    // console.log(
    //   "scrollTop * viewportHeightFactor: ",
    //   viewportElement.scrollTop * viewportHeightFactor
    // );
    console.log('---------');
    // console.log("getIndices: ", reveal.getIndices());
    // console.log("setProgressValue: ", setProgressValue());
    // console.log('---------');
    // console.log('');
  }

  viewportElement.addEventListener("scroll", onScroll, {
    passive: true,
  });





  function parseJSON(str:JSON) {
	    str = str.replace(/(\r\n|\n|\r|\t)/gm,""); // remove line breaks and tabs
	    var json;
	    try {
				json = JSON.parse(str, function (key, value) {
					if (value && (typeof value === 'string') && value.indexOf("function") === 0) {
						// we can only pass a function as string in JSON ==> doing a real function
            // eval("var jsFunc = " + value);
						var jsFunc = new Function('return ' + value)();
						return jsFunc;
					}
					return value;
				});
	    } catch (e) {
				return null;
			}
			return json;
	}
}


// const animejsPlugin = new InitAnimateJs();

const animejsPlugin = () => ({
  id: "animejs",
  init: (Reveal) => {
    // return new initAnimateJs(Reveal);
    initAnimateJs.call(this, Reveal);
  },
});
export default animejsPlugin;