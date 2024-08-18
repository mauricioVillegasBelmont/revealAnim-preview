import Form from "./forms/form";
import FormHandler from "./forms/formHandlers";
const forms:NodeListOf<HTMLFormElement> = document.querySelectorAll("form");

export interface FormResponse{
  status: string;
  msg: string;
  redirect?: string;
}


if (forms) {
  forms.forEach( (form:HTMLFormElement)=>{

    new Promise<FormResponse>((resolve) => {
      const callback = (formResponse: FormResponse) => resolve(formResponse);
      new Form( form, callback );
    })
    .then((response)=>{
      if(response.status == 'ok'){
        return FormHandler.success(response);
      }
      return FormHandler.wrong(response);
    })
  })
}
