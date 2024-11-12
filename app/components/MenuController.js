import { Utils } from "@/app/utils/utils";

export class MenuController {
  static async getCategorias() {
    try {
      const response = await fetch("http://localhost:8080/categorias/findAll");
      Utils.swalSuccess("Categorias obtenidas con exito");
      return response.json();
    } catch (error) {
      Utils.swalError("Error al obtener las categorias");
    }
  }
}
