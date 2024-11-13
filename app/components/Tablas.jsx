import { Button, Table } from "react-bootstrap";
import { TablasController } from "./TablasController";

export default function Tablas({ data, fetchData }) {
  const eliminarContacto = (id) => async () => {
    try {
      const response = await TablasController.deleteContacto(id);
      console.log(response);
      fetchData();
    } catch (error) {
      console.log("Error al eliminar el contacto", error);
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido paterno</th>
          <th>Apellido materno</th>
          <th>Usuario</th>
          <th>Categoria</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => (
            <tr key={item.idtContacto}>
              <td>{item.idtContacto}</td>
              <td>{item.nombre}</td>
              <td>{item.apellidoP}</td>
              <td>{item.apellidoM}</td>
              <td>{item.alias}</td>
              <td>{item.idTCategoria.descripcion}</td>
              <td>
                <Button variant="danger" onClick={eliminarContacto(item.idtContacto)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>No hay datos</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
