"use client";
import Tablas from "@/app/components/Tablas";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ContactoController } from "@/app/dashboard/[categoria]/categoriaController";
import { Button } from "react-bootstrap";

export default function Categoria() {
  const params = useParams();
  const categoria = params.categoria;
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      if (categoria == 0) {
        const response = await ContactoController.getContacto();
        setData(response.data);
      } else {
        const response = await ContactoController.getContactobyCategoria(categoria);
        setData(response.data);
      }
    } catch (error) {
      console.log("Error al obtener las categorias");
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoria]);

  if (data == null) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <Tablas data={data} />
    </>
  );
}
