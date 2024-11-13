import { Utils } from "../utils/utils";

export class ContactoController {
  static async addContacto(data) {
    try {
      const response = await fetch("http://localhost:8080/contacto/insert", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      Utils.swalSuccess("Contacto agregado correctamente");
      return response;
    } catch (error) {
      Utils.swalError("Error al mandar la peticion");
    }
  }
}
