export default function ServicioCard({ servicio }) {
  return (
    <div className={`tarjeta-servicio ${servicio.precio > 1000 ? "servicio-premium" : ""}`}>
      <img src={servicio.imagen} alt={servicio.nombre} />
      <h2>{servicio.nombre}</h2>
      <p className="desc-corta">{servicio.descripcion}</p>
      <p className="precio-servicio">${servicio.precio}</p>
    </div>
  );
}