export interface EventDispatcher {
  dispatchEvent: (event: Event) => boolean;
  addEventListener: (
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions
  ) => void;
  removeEventListener: (
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ) => void;
}

const customEventDispatcher: EventDispatcher = {
  dispatchEvent: (event: Event) => {
    return window.dispatchEvent(event);
  },
  addEventListener: (
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions
  ) => {
    window.addEventListener(type, listener, options);
  },
  removeEventListener: (
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ) => {
    window.removeEventListener(type, callback, options);
  },
};
export default customEventDispatcher;