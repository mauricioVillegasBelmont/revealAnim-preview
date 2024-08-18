type HTTPMethods = string|"GET"|"POST"|"PUT" |"HEAD"|"DELETE"|"PATCH"|"OPTIONS"|"CONNECT"|"TRACE";
import {FormResponse} from "../registro"

export default class FormSumbiterApi {
  static async submit(
    path: URL | string,
    method: HTTPMethods,
    formData: FormData
  ) {
    return new Promise<FormResponse>((resolve) => {
      fetch(path, {
        method: method,
        headers: {
          "Cache-Control": "no-cache",
        },
        body: formData,
      })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        resolve(response);
      });
    });
  }
}