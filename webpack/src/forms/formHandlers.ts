import { FormResponse } from "@app/registro";



export default class FormHandler {
  static success(response: FormResponse){
    if (!response.redirect) return;
    window.location.href = response.redirect;
  }
  static wrong(response: FormResponse) {
    const errorClases = ["c__error", "text--center", "my--5"];
    const msg_cont = document.getElementById("error_msg");
    if (!msg_cont) return;
    msg_cont.innerHTML = "";
    const paragraph = document.createElement("p");
    const textNode = document.createTextNode(response.msg);
    paragraph.appendChild(textNode);
    paragraph.classList.add(...errorClases);
    msg_cont.appendChild(paragraph);
  }
}
