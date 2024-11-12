"use client";
import { useEffect, useState } from "react";
import { Button, Modal, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MenuController } from "./MenuController";

export default function Menu() {
  const [categoria, setCategoria] = useState(0);

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
  });

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavDropdown title="Home" id="basic-nav-dropdown">
            <NavDropdown.Item href={`/dashboard/${0}`}>Todos los contactos</NavDropdown.Item>
            <NavDropdown title="Contactos por categoria">
              {/* {categoria.map((item) => (
                <NavDropdown.Item href={`/dashboard/${item.idtcategoria}`} key={item.idtcategoria}>
                  {item.decripcion}
                </NavDropdown.Item>
              ))} */}
            </NavDropdown>
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
