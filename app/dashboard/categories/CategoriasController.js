import { Utils } from "@/app/utils/utils";

export class CategoriasController {
  static async addCategoria(data) {
    try {
      response = await fetch("http://localhost:8080/categorias/insert", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      Utils.swalSuccess("Categoria agregada correctamente");
      return response;
    } catch (error) {
      Utils.swalError("Error al mandar la peticion");
    }
  }

  static async deleteCategoria(id) {
    try {
      response = await fetch(`http://localhost:8080/categorias/delete?id=${id}`, {
        method: "GET",
      });
      Utils.swalSuccess("Categoria eliminada correctamente");
      return response;
    } catch (error) {
      Utils.swalError("Error al mandar la peticion");
    }
  }
}
