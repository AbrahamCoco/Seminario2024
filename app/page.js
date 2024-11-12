"use client";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const handleUsuario = (event) => {
    event.preventDefault();
    setUsuario(event.target.value);
    setContrasenia(event.target.value);

    console.log("Usuario: ", usuario);
    console.log("Contraseña: ", contrasenia);

    if (usuario === "Prueba") {
      router.push("/dashboard");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card>
            <div className="card-header text-center">Iniciar sesión</div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  Usuario
                </label>
                <input type="text" id="usuario" className="form-control" placeholder="Ingresa usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="contrasenia" className="form-label">
                  Contraseña
                </label>
                <input type="password" id="contrasenia" className="form-control" placeholder="Ingresa contraseña" value={contrasenia} onChange={(e) => setContrasenia(e.target.value)} />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-4 text-center mt-2">
                    <button className="btn btn-primary" onClick={handleUsuario}>
                      Iniciar Sesión
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
