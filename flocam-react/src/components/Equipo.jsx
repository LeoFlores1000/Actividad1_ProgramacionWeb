import React from 'react';
// Importamos las fotos de la carpeta assets
import fotoLeo from '../assets/Leo.jpeg'; 
import fotoDiana from '../assets/Diana.jpeg';

export default function Equipo() {
  const miembros = [
    {
      nombre: "Diana Campos Rosas",
      rol: "Backend developer",
      bio: "Enfocada en el desarrollo backend y la gestión de bases de datos relacionales.",
      imagen: fotoDiana
    },
    {
      nombre: "Leo Flores Vitela",
      rol: "Web developer",
      bio: "Enfocado en el desarrollo de interfaces web atractivas y funcionales.",
      imagen: fotoLeo
    }

  ];

  return (
    <section className="seccion-equipo">
      <h2 className="titulo-seccion">Nuestra Experiencia</h2>
      <p className="subtitulo-seccion">
        Estudiantes de 6º Semestre - ISC
      </p>

      <div className="grid-equipo">
        {miembros.map((m, i) => (
          <div key={i} className="tarjeta-miembro">
            <img src={m.imagen} alt={m.nombre} className="foto-perfil" />

            <div className="info-miembro">
              <h3>{m.nombre}</h3>
              <p className="rol">{m.rol}</p>
              <p className="bio">{m.bio}</p>

              <a href="#" className="btn-secundario">
                Ver más
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}