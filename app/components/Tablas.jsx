import { Button, Table } from "react-bootstrap";

export default function Tablas({ data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido paterno</th>
          <th>Apellido materno</th>
          <th>Usuario</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.username}</td>
            <td>{item.username}</td>
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
