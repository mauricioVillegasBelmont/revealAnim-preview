class Pymeweb {
  init_inputs(): void {
    // Añadir la clase 'input-mode' cuando un input de tipo texto o mail obtiene el foco
    document
      .querySelectorAll('form input[type="text"],form input[type="mail"]')
      .forEach((input) => {
        input.addEventListener("focus", () => {
          document.body.classList.add("input-mode");
        });

        input.addEventListener("blur", () => {
          document.body.classList.remove("input-mode");
        });
      });

    // Convertir el valor a mayúsculas en elementos con la clase 'value__toUpper'
    document.querySelectorAll(".value__toUpper").forEach((input) => {
      input.addEventListener("input", function () {
        (this as HTMLInputElement).value = (
          this as HTMLInputElement
        ).value.toUpperCase();
      });
    });

    // Manejo de mensajes de validación para campos requeridos
    document
      .querySelectorAll("form :required")
      .forEach((input) => {
        if (
          input instanceof HTMLInputElement ||
          input instanceof HTMLTextAreaElement ||
          input instanceof HTMLSelectElement
        ) {
          input.addEventListener("input", (e) => {
            (e.target as HTMLInputElement).setCustomValidity("");
          });
          input.addEventListener("invalid", (e) => {
            const message = this.invalidMsg(input.name);
            input.setCustomValidity = message;
          });




        }
      });

    if (document.querySelectorAll("form input:required").length > 0) {


      document
        .querySelectorAll('form input[name="confirm"]')
        .forEach((input) => {
          if (
            input instanceof HTMLInputElement ||
            input instanceof HTMLTextAreaElement ||
            input instanceof HTMLSelectElement
          ) {
            input.required = true;
            input.addEventListener("input", (e) => {
              const target = e.target as HTMLInputElement;
              const name = target.dataset.confirm!;
              const msg = target.dataset.validityMessage! || '';
              const relatedInput = document.querySelector(
                `input[name="${name}"]`
              ) as HTMLInputElement;

              if (target.value === relatedInput.value) {
                target.setCustomValidity("");
              } else {
                target.setCustomValidity(msg);
              }
            });
          }
        });

      document
        .querySelectorAll(".input__filelabel input[type=file]")
        .forEach((input) => {
          input.addEventListener("input", function () {
            const file = this.files![0].name;
            (
              this.closest(".input__filelabel") as HTMLElement
            ).style.setProperty("--filename", `'${file}'`);
          });
        });

      document.querySelectorAll('form input[type="radio"]').forEach((input) => {
        input.addEventListener("click", function () {
          const name = (this as HTMLInputElement).name;
          window["ric_" + name] = true;
          document
            .querySelectorAll(`input[name="${name}"]`)
            .forEach((radioInput) => {
              (radioInput as HTMLInputElement).setCustomValidity("");
            });
        });
      });

      document.querySelectorAll(".nor_input_required").forEach((input) => {
        input.addEventListener("input", () => {
          let x = 0;
          document.querySelectorAll(".nor_input_required").forEach((elmnt) => {
            (elmnt as HTMLInputElement).required = false;
            if ((elmnt as HTMLInputElement).value) {
              x++;
              (elmnt as HTMLInputElement).required = true;
            }
          });

          if (x === 0) {
            document
              .querySelectorAll(".nor_input_required")
              .forEach((elmnt) => {
                (elmnt as HTMLInputElement).required = true;
              });
          }
        });
      });

      document
        .querySelectorAll('input[type="number"], .input__numeric--only')
        .forEach((input) => {
          input.addEventListener("keypress", (e) => {
            const key = e.key;
            if (!e.metaKey && e.key !== "Backspace" && !/[0-9]/.test(key)) {
              e.preventDefault();
            }
          });
        });

      document.querySelectorAll(".dialogHelp").forEach((button) => {
        button.addEventListener("click",  () => {
          const modalId = (button as HTMLElement).dataset.dialog!;
          const modal = document.getElementById(modalId);
          if (modal) {
            (modal as HTMLDialogElement).showModal();
          }
        });
      });
    }
  }

  invalidMsg(name:string):string{
    let message = '';
    switch (name) {
      case "confirm":
      case "confirm[]":
        break;
      case "nombre":
        message = "Por favor, ingresa tu nombre."
        break;
      case "email":
        message = "Por favor, ingresa una cuenta de correo válida ej.: nombre@dominio.com";
        break;
      case "password":
        message = "Tu contraseña deve tener almenos una mayuscula, una minuscula, un número y un caracter especial.";
        break;
      case "terminos":
      case "agree":
        message = "Acepta los términos y condiciones para seguir registrandote.";
        break;
      case "vin":
        message = "Por favor, ingresa número VIN valido. ej.: 4Y1SL65848Z411439"
        break;
      case "invoice":
        message = "Por favor, ingresa número de factura valido."
        break;
      case "phone":
      case "telefono":
        message = "Por favor, ingresa un número de telefono valido ej.:55 1234 5678"
        break;
      case "estado":
        message = "Por favor, selecciona el estado donde resides.";
        break;
      case "file":
        message = "Por favor, sube un archivo "
        break;
      case "chekbox":
      case "radio":
        message = "Por favor, selecciona una opción."
        break;
      default:
        message = "Por favor, ingresa este dato."
    }
    return message;
  }
}
