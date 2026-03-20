import { useEffect, useState } from "react";
import { serviciosBase } from "../data/servicios";
import ServicioCard from "../components/ServicioCard";
import HeaderServicios from "../components/HeaderServicios";
import PageWrapper from "../components/PageWrapper";

export default function Servicios() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("misServicios")) || [];
    setServicios([...serviciosBase, ...local]);
  }, []);

  return (
    <PageWrapper>
    <div>
      <HeaderServicios
        titulo="Nuestros Servicios"
        subtitulo="Descubre lo que ofrecemos"
      />

      <div className="grid-servicios">
        {servicios.map((s, i) => (
          <ServicioCard key={i} servicio={s} />
        ))}
      </div>
    </div>
    </PageWrapper>
  );
}