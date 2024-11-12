"use client";
import { useEffect, useState } from "react";
import { Button, Modal, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MenuController } from "./MenuController";

export default function Menu() {
  const [categoria, setCategoria] = useState([]);

  const fetchCategorias = async () => {
    try {
      const response = await MenuController.getCategorias();
      setCategoria(response.data);
    } catch (error) {
      console.log("Error al obtener las categorias");
    }
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavDropdown title="Contactos por categoria">
            <NavDropdown.Item href={`/dashboard/${0}`}>Todos los contactos</NavDropdown.Item>
            {categoria.length > 0 ? (
              categoria.map((item) => (
                <NavDropdown.Item key={item.idtCategoria} href={`/dashboard/${item.idtCategoria}`}>
                  {item.descripcion}
                </NavDropdown.Item>
              ))
            ) : (
              <NavDropdown.Item>Sin categoria</NavDropdown.Item>
            )}
          </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard/categories">Categories</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
