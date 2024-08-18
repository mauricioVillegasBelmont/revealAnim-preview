export default class PageHelpers {
  static getElementHeight(selector: string) {
    const element: HTMLElement | null = document.querySelector(selector);
    if (!element) return "0px";
    return element.offsetHeight + "px";
  }
  static layoutHelper(props) {
    const { variable, selector } = props;
    if(!variable || !selector) return;
    document.documentElement.style.setProperty(
      variable,
      PageHelpers.getElementHeight(selector)
    );
  }
}