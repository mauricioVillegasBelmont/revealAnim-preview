import FormSumbiterApi from "./api";

export default class Form {
  api = FormSumbiterApi;

  form: HTMLFormElement;
  callback: (formResponse: any) => void;
  constructor(form: HTMLFormElement, callback: (formResponse: any) => void) {
    this.form = form;
    this.callback = callback;
    this.bindEvents();
  }
  private bindEvents(){
    const self = this;
    this.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      self.submit();
    })
  }
  get formData() {
    return new FormData(this.form);
  }
  submit() {
    const data = this.formData;
    const action = this.form.action;
    const method = this.form.method.toUpperCase();
    if (!data || !action || !method) return;
    this.api.submit(action, method, data).then((data) => {
      this.callback(data);
    });
  }
}