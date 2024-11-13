import { Utils } from "../utils/utils";

export class TablasController {
  static async deleteContacto(id) {
    try {
      const response = await fetch(`http://localhost:8080/contacto/delete?id=${id}`, {
        method: "GET",
      });
      Utils.swalSuccess("Contacto eliminado correctamente");
      return response;
    } catch (error) {
      return error;
    }
  }
}
