"use client";
import { MenuController } from "@/app/components/MenuController";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { CategoriasController } from "./CategoriasController";

export default function Categories() {
  const [categorias, setCategorias] = useState([]);
  const [descripcion, setDescripcion] = useState("");

  const fetchCategorias = async () => {
    try {
      const response = await MenuController.getCategorias();
      setCategorias(response.data);
    } catch (error) {
      console.log("Error al obtener las categorias");
    }
  };

  const addCategory = async () => {
    try {
      const data = {
        descripcion,
      };
      const response = await CategoriasController.addCategoria(data);
      fetchCategorias();
      setDescripcion("");
      await MenuController.updateMenu(); // Actualizar el componente Menu
      return response;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <h1>Categorias</h1>
        </Col>
        <Col md={3}>
          <input type="text" className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </Col>
        <Col md={3}>
          <Button onClick={addCategory}>Agregar</Button>
        </Col>
        <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Descripcion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {categorias.length > 0 ? (
                categorias.map((categoria) => (
                  <tr key={categoria.idtCategoria}>
                    <td>{categoria.idtCategoria}</td>
                    <td>{categoria.descripcion}</td>
                    <td>
                      <Button variant="danger" href={`/dashboard/categories/${categoria.idtCategoria}`}>
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No hay categorias</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
7;
