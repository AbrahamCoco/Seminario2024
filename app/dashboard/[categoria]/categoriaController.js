import { Utils } from "@/app/utils/utils";

export class ContactoController {
  static async getContacto() {
    try {
      const response = await fetch("http://localhost:8080/contacto/findAll");
      Utils.swalSuccess("Categorias obtenidas con exito");
      return response.json();
    } catch (error) {
      Utils.swalError("Error al obtener las categorias");
    }
  }

  static async getContactobyCategoria(id) {
    try {
      const response = await fetch(`http://localhost:8080/contacto/findByCategoria?idtCategoria=${id}`);
      Utils.swalSuccess("Categoria obtenida con exito");
      return response.json();
    } catch (error) {
      Utils.swalError("Error al obtener la categoria");
    }
  }

  static async addContact(data) {
    try {
      const response = await fetch("http://localhost:8080/contacto/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      Utils.swalSuccess("Contacto agregado con exito");
      return response.json();
    } catch (error) {
      Utils.swalError("Error al agregar el contacto");
    }
  }
}
