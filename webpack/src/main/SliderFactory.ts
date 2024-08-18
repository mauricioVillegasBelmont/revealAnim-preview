
import KeenSlider from "keen-slider";


export interface KeenSliderConfig {
  prev: () => any;
  next: () => any;
  options: { slides: { [id: string]: number }; trackConfig: object[] };
  container: HTMLDivElement;
  track: { details: { slides: any[]; rel: any } };
  moveToIdx: (arg0: any) => any;
  on: (arg0: string, arg1: { (): void; (): void; (): void; (): void }) => void;
}
function navigation(slider: KeenSliderConfig) {

  let wrapper: HTMLDivElement | null,
    dots: HTMLDivElement | null,
    arrowLeft: HTMLDivElement | null,
    arrowRight: HTMLDivElement | null;

  function markup(remove: boolean = false) {
    wrapperMarkup(remove);
    dotMarkup(remove);
    arrowMarkup(remove);
  }

  function removeElement(elment: HTMLDivElement) {
    if (elment instanceof HTMLDivElement) {
      elment.parentNode?.removeChild(elment);
    }
  }
  function createDiv(className: string) {
    var div = document.createElement("div");
    var classNames = className.split(" ");
    classNames.forEach((name) => div.classList.add(name));
    return div;
  }

  function arrowMarkup(remove: boolean) {
    if (remove) {
      if (arrowLeft) removeElement(arrowLeft);
      if (arrowRight) removeElement(arrowRight);
      return;
    }
    arrowLeft = createDiv("arrow arrow--left");
    arrowLeft.addEventListener("click", () => slider.prev());
    arrowRight = createDiv("arrow arrow--right");
    arrowRight.addEventListener("click", () => slider.next());
    if (wrapper instanceof HTMLDivElement) {
      wrapper.appendChild(arrowLeft);
      wrapper.appendChild(arrowRight);
    }
  }

  function wrapperMarkup(remove: boolean) {
    if (remove) {
      var parent = wrapper?.parentNode;
      while (wrapper?.firstChild)
        parent?.insertBefore(wrapper.firstChild, wrapper);
      if (wrapper instanceof HTMLDivElement) removeElement(wrapper);
      return;
    }
    wrapper = createDiv("navigation-wrapper");
    slider.container.parentNode?.appendChild(wrapper);
    wrapper.appendChild(slider.container);
  }

  function dotMarkup(remove: boolean) {
    if (remove) {
      if (dots instanceof HTMLDivElement) removeElement(dots);
      return;
    }
    dots = createDiv("dots");
    slider.track.details.slides.forEach((_e, idx) => {
      var dot = createDiv("dot");
      dot.addEventListener("click", () => slider.moveToIdx(idx));
      if (dots instanceof HTMLDivElement) dots.appendChild(dot);
    });
    if (wrapper instanceof HTMLDivElement) wrapper.appendChild(dots);
  }

  function updateClasses() {
    var slide = slider.track.details.rel;
    slide === 0
      ? arrowLeft?.classList.add("arrow--disabled")
      : arrowLeft?.classList.remove("arrow--disabled");
    slide === slider.track.details.slides.length - 1
      ? arrowRight?.classList.add("arrow--disabled")
      : arrowRight?.classList.remove("arrow--disabled");

    if(dots) Array.from(dots.children).forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active");
    });
    const perView = slider.options.slides.perView
    const track = slider.options.trackConfig.length
    if(perView >= track){
      arrowLeft?.classList.add("hidden");
      arrowRight?.classList.add("hidden");
      dots?.classList.add("hidden");
    }else{
      arrowLeft?.classList.remove("hidden");
      arrowRight?.classList.remove("hidden");
      dots?.classList.remove("hidden");
    }
  }

  slider.on("created", () => {
    markup();
    updateClasses();
  });
  slider.on("optionsChanged", () => {
    markup(true);
    markup();
    updateClasses();
  });
  slider.on("slideChanged", () => {
    updateClasses();
  });
  slider.on("destroyed", () => {
    markup(true);
  });
}

export function SliderFactory(id:string,config:{[id:string]:any}={}){
  return new KeenSlider(id, config,[navigation]);
};
