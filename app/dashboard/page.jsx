"use client";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Dashboard() {
  return (
    <Container>
      <h1>Agregar contacto</h1>
      <Row>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="apellidoP" className="form-label">
              Apellido Paterno
            </label>
            <input type="text" className="form-control" id="apellidoP" placeholder="Apellido Paterno" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="apellidoM" className="form-label">
              Apellido Materno
            </label>
            <input type="text" className="form-control" id="apellidoM" placeholder="Apellido Materno" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Alias
            </label>
            <input type="text" className="form-control" id="email" placeholder="Alias" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="telefonoA" className="form-label">
              Telefono
            </label>
            <input type="text" className="form-control" id="telefonoA" placeholder="Telefono" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="telefonoB" className="form-label">
              Telefono
            </label>
            <input type="text" className="form-control" id="telefonoB" placeholder="Telefono" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="telefonoC" className="form-label">
              Telefono
            </label>
            <input type="text" className="form-control" id="telefonoC" placeholder="Telefono" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="correoA" className="form-label">
              Correo
            </label>
            <input type="text" className="form-control" id="correoA" placeholder="Correo" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="correoB" className="form-label">
              Correo
            </label>
            <input type="text" className="form-control" id="correoB" placeholder="Correo" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">
              Direccion
            </label>
            <input type="text" className="form-control" id="direccion" placeholder="Direccion" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="codigoPostal" className="form-label">
              Codigo Postal
            </label>
            <input type="text" className="form-control" id="codigoPostal" placeholder="Codigo Postal" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="estado" className="form-label">
              Estado
            </label>
            <input type="text" className="form-control" id="estado" placeholder="Estado" />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="pais" className="form-label">
              Pais
            </label>
            <input type="text" className="form-control" id="pais" placeholder="Pais" />
          </div>
        </Col>
      </Row>
      <Button variant="primary">Agregar contacto</Button>
    </Container>
  );
}
