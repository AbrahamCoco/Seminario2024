import { Utils } from "@/app/utils/utils";

export class MenuController {
  static async getCategorias() {
    try {
      const response = await fetch("http://localhost:8080/categorias/findAll", {
        method: "GET",
      });
      const res = await response.json();
      Utils.swalSuccess("Categorias obtenidas con exito");
      return res;
    } catch (error) {
      Utils.swalError("Error al obtener las categorias");
    }
  }
}
