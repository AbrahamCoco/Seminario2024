import { Button, Table } from "react-bootstrap";

export default function Tablas({ data }) {
  const eliminar = (id) => async () => {
    console.log("Eliminar", id);
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
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.idtContacto}>
            <td>{item.idtContacto}</td>
            <td>{item.nombre}</td>
            <td>{item.apellidoP}</td>
            <td>{item.apellidoM}</td>
            <td>{item.alias}</td>
            <td>
              <Button variant="danger" onClick={eliminar(item.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
