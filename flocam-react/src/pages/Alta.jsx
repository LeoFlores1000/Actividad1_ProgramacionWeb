import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderServicios from "../components/HeaderServicios";
import Toast from "../components/Toast";
import PageWrapper from "../components/PageWrapper";


export default function Alta() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: ""
  });

  const [errores, setErrores] = useState({});
  
  const [toast, setToast] = useState({ visible: false, mensaje: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 🔍 VALIDACIÓN
const validar = () => {
  let nuevosErrores = {};

  if (!form.nombre) nuevosErrores.nombre = true;
  if (!form.precio || isNaN(form.precio) || Number(form.precio) <= 0)
    nuevosErrores.precio = true;
  if (!form.descripcion) nuevosErrores.descripcion = true;

  try {
    new URL(form.imagen);
  } catch {
    nuevosErrores.imagen = true;
  }

  setErrores(nuevosErrores);

  return Object.keys(nuevosErrores).length > 0;
};

    const handleSubmit = (e) => {
    e.preventDefault();

    const hayErrores = validar();

    if (hayErrores) {
        setToast({ visible: true, mensaje: "Corrige los campos marcados" });

        // 💥 quitar animación después (para que se pueda repetir)
        setTimeout(() => setErrores({}), 400);

        return;
    }

    const nuevo = {
      ...form,
      precio: parseFloat(form.precio)
    };

    const local = JSON.parse(localStorage.getItem("misServicios")) || [];
    local.push(nuevo);
    localStorage.setItem("misServicios", JSON.stringify(local));

    // ✅ Éxito
    setToast({ visible: true, mensaje: "Servicio guardado correctamente" });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const audio = new Audio("https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3");
    audio.play();

    setForm({
      nombre: "",
      precio: "",
      descripcion: "",
      imagen: ""
    });

    setTimeout(() => {
      navigate("/servicios");
    }, 3000);
  };

  return (
    <PageWrapper>
    <HeaderServicios 
        titulo="Registrar Servicio"
        subtitulo="Agrega un nuevo servicio al catálogo"
    />

      <div id="notification-container">
        {toast.visible && (
          <Toast 
            mensaje={toast.mensaje}
            onClose={() => setToast({ visible: false, mensaje: "" })}
          />
        )}
      </div>

      <div className="form-container">
        <form className="form-servicios" onSubmit={handleSubmit}>
          
          <div className="campo">
            <label>Nombre</label>
            <input 
              name="nombre" 
              value={form.nombre}
              onChange={handleChange}
              className={errores.nombre ? "error" : ""}
            />
          </div>

          <div className="campo">
            <label>Precio</label>
            <input 
              name="precio" 
              type="number"
              min="1"
              value={form.precio}
              onChange={handleChange}
              className={errores.precio ? "error" : ""}
            />
          </div>

          <div className="campo">
            <label>Descripción</label>
            <textarea 
              name="descripcion" 
              value={form.descripcion}
              onChange={handleChange}
              className={errores.descripcion ? "error" : ""}
            ></textarea>
          </div>

          <div className="campo">
            <label>Imagen (URL)</label>
            <input 
              name="imagen" 
              type="url"
              value={form.imagen}
              onChange={handleChange}
              className={errores.imagen ? "error" : ""}
            />
          </div>

          <button className="btn-primary" type="submit">
            Guardar
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}