import Reveal from "reveal.js";
import Pushbar from "./main/pushbarMenu";

import animejsPlugin from "./main/reveal-animejs-plugin";
import PageHelpers from "./main/utils/pageHelpers"

import { SliderFactory } from "./main/SliderFactory";


import "animate.css";
import "@sass/sass-master.scss";
import "keen-slider/keen-slider.min.css";
const homeSlider = {
  slides: {
    perView: 1,
    spacing: 10,
  },
  breakpoints: {
    "(min-width: 920px)": {
      slides: { perView: 3, },
    },
  }
};
const slider = SliderFactory("#home__mecanica_slider", homeSlider);
const menu = new Pushbar({});



export type PageHelpersItem = { variable: string; selector: string };
export type PageHelpersSetup = PageHelpersItem[];
const pageHelpersSetup: PageHelpersSetup = [
  {
    variable: "--main-h",
    selector: "#main__body",
  },
  {
    variable: "--footer-h",
    selector: "#main__footer",
  },
  {
    variable: "--header-h",
    selector: "#main__header",
  },
];
function setPageVariables() {
  pageHelpersSetup.forEach((item) => {
    PageHelpers.layoutHelper(item);
  });
}
window.addEventListener(
  "load",
  function () {
    setPageVariables();
  },
  false
);
window.addEventListener("resize", function () {
  setPageVariables();
});





const presentation = new Reveal({
  // plugins: [animejsPlugin],
});
presentation.initialize({
  width: "100%",
  height: "100%",
  margin: 0,
  minScale: 1,
  maxScale: 1,

  display: "flex",

  view: "scroll",
  scrollProgress: false, //"auto",
  scrollSnap: "mandatory", // - false: - proximity - mandatory
});

presentation.on("slidechanged", (event) => {
  slider.update();
  return;
});
