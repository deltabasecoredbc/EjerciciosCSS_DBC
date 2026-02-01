/* ============================
   INTERACTIVIDAD PARA EL CV
   ============================ */

/* === 1. Botón para volver arriba === */
const botonArriba = document.createElement("button");
botonArriba.textContent = "↑ Volver arriba";
botonArriba.id = "btnArriba";
document.body.appendChild(botonArriba);

botonArriba.style.position = "fixed";
botonArriba.style.bottom = "20px";
botonArriba.style.right = "20px";
botonArriba.style.padding = "10px 15px";
botonArriba.style.border = "none";
botonArriba.style.borderRadius = "8px";
botonArriba.style.background = "#0b4f8f";
botonArriba.style.color = "white";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botonArriba.style.display = "block";
  } else {
    botonArriba.style.display = "none";
  }
});

botonArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* === 2. Menú desplegable para secciones === */
const menu = document.createElement("select");
menu.id = "menuNavegacion";

menu.innerHTML = `
  <option value="">Ir a sección...</option>
  <option value="perfil">Perfil Profesional</option>
  <option value="formacion">Formación Académica</option>
  <option value="complementaria">Formación Complementaria</option>
  <option value="idiomas">Idiomas</option>
  <option value="experiencia">Experiencia Profesional</option>
`;

document.querySelector("header").appendChild(menu);

menu.addEventListener("change", (evento) => {
  const destino = evento.target.value;
  if (destino) {
    const seccion = document.getElementById(destino);
    seccion.scrollIntoView({ behavior: "smooth" });
  }
});


/* === 3. Resaltado dinámico de secciones al pasar el ratón === */
const titulos = document.querySelectorAll("h3");

titulos.forEach((titulo) => {
  titulo.addEventListener("mouseover", () => {
    titulo.style.backgroundColor = "#d6eaff";
  });

  titulo.addEventListener("mouseout", () => {
    titulo.style.backgroundColor = "transparent";
  });
});


/* === 4. Animación suave al hacer clic en artículos === */
const articulos = document.querySelectorAll("article");

articulos.forEach((art) => {
  art.addEventListener("click", () => {
    art.style.transform = "scale(1.02)";
    art.style.transition = "0.2s";

    setTimeout(() => {
      art.style.transform = "scale(1)";
    }, 200);
  });
});


/* === 5. Efecto de foco en enlaces del header === */
const enlacesHeader = document.querySelectorAll("header a");

enlacesHeader.forEach((enlace) => {
  enlace.addEventListener("focus", () => {
    enlace.style.color = "#ffdd57";
  });

  enlace.addEventListener("blur", () => {
    enlace.style.color = "#f1f1f1";
  });
});


/* === 6. Mensaje de bienvenida interactivo === */
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("Bienvenido al CV interactivo de DeltaBaseCore");
  }, 500);
});