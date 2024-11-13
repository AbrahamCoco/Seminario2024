"use client";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MenuController } from "../components/MenuController";
import { ContactoController } from "./ContactoController";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [alias, setAlias] = useState("");
  const [telefonoA, setTelefonoA] = useState("");
  const [telefonoB, setTelefonoB] = useState("");
  const [telefonoC, setTelefonoC] = useState("");
  const [correoA, setCorreoA] = useState("");
  const [correoB, setCorreoB] = useState("");
  const [direccion, setDireccion] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");
  const [catego, setCatego] = useState(0);

  const [categoria, setCategoria] = useState([]);

  const fetchCategorias = async () => {
    try {
      const response = await MenuController.getCategorias();
      setCategoria(response.data);
    } catch (error) {
      console.log("Error al obtener las categorias");
    }
  };

  const agregarContacto = async () => {
    try {
      const data = {
        nombre,
        apellidoP,
        apellidoM,
        alias,
        telefonoA,
        telefonoB,
        telefonoC,
        correoA,
        correoB,
        direccion,
        codigoPostal,
        estado,
        pais,
        idTCategoria: Number(catego),
      };

      const response = await ContactoController.addContacto(data);
      setNombre("");
      setApellidoP("");
      setApellidoM("");
      setAlias("");
      setTelefonoA("");
      setTelefonoB("");
      setTelefonoC("");
      setCorreoA("");
      setCorreoB("");
      setDireccion("");
      setCodigoPostal("");
      setEstado("");
      setPais("");
      setCatego(0);

      return response;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  return (
    <Container>
      <h1>Agregar contacto</h1>
      <Row>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input type="text" className="form-control" id="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="apellidoP" className="form-label">
              Apellido Paterno
            </label>
            <input type="text" className="form-control" id="apellidoP" placeholder="Apellido Paterno" value={apellidoP} onChange={(e) => setApellidoP(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="apellidoM" className="form-label">
              Apellido Materno
            </label>
            <input type="text" className="form-control" id="apellidoM" placeholder="Apellido Materno" value={apellidoM} onChange={(e) => setApellidoM(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="alias" className="form-label">
              Alias
            </label>
            <input type="text" className="form-control" id="alias" placeholder="Alias" value={alias} onChange={(e) => setAlias(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="telefonoA" className="form-label">
              Telefono
            </label>
            <input type="text" className="form-control" id="telefonoA" placeholder="Telefono" value={telefonoA} onChange={(e) => setTelefonoA(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="telefonoB" className="form-label">
              Telefono
            </label>
            <input type="text" className="form-control" id="telefonoB" placeholder="Telefono" value={telefonoB} onChange={(e) => setTelefonoB(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="telefonoC" className="form-label">
              Telefono
            </label>
            <input type="text" className="form-control" id="telefonoC" placeholder="Telefono" value={telefonoC} onChange={(e) => setTelefonoC(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="correoA" className="form-label">
              Correo
            </label>
            <input type="text" className="form-control" id="correoA" placeholder="Correo" value={correoA} onChange={(e) => setCorreoA(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="correoB" className="form-label">
              Correo
            </label>
            <input type="text" className="form-control" id="correoB" placeholder="Correo" value={correoB} onChange={(e) => setCorreoB(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">
              Direccion
            </label>
            <input type="text" className="form-control" id="direccion" placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="codigoPostal" className="form-label">
              Codigo Postal
            </label>
            <input type="text" className="form-control" id="codigoPostal" placeholder="Codigo Postal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="estado" className="form-label">
              Estado
            </label>
            <input type="text" className="form-control" id="estado" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="pais" className="form-label">
              Pais
            </label>
            <input type="text" className="form-control" id="pais" placeholder="Pais" value={pais} onChange={(e) => setPais(e.target.value)} />
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label htmlFor="categoria" className="form-label">
              Categoria
            </label>
            <select name="categoria" id="categoria" className="form-control" onChange={(e) => setCatego(e.target.value)}>
              <option value="0">Seleccione una categoria</option>
              {categoria.length > 0 ? (
                categoria.map((item) => (
                  <option key={item.idtCategoria} value={item.idtCategoria}>
                    {item.descripcion}
                  </option>
                ))
              ) : (
                <option value="0">Sin categoria</option>
              )}
            </select>
          </div>
        </Col>
      </Row>
      <Button variant="primary" onClick={agregarContacto}>
        Agregar contacto
      </Button>
    </Container>
  );
}
