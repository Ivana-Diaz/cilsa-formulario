const form = document.getElementById("form");
const btnNormal = document.getElementById("form-btn-normal");
const btnAltoContraste = document.getElementById("form-btn-contraste");

btnAltoContraste.addEventListener("click", () => {
  form.classList.add("alto-contraste");
});

btnNormal.addEventListener("click", () => {
  form.classList.remove("alto-contraste");
});

function limpiarErrores() {
  const mensajes = document.querySelectorAll(".mensaje-error");
  const inputs = document.querySelectorAll(".campo-form input");

  mensajes.forEach((msg) => {
    msg.textContent = "";
    msg.style.display = "none";
  });

  inputs.forEach((input) => {
    input.classList.remove("input-error");
  });
}

function mostrarError(input, idErrorSpan, campo) {
  input.classList.add("input-error");
  const spanError = document.getElementById(idErrorSpan);
  spanError.textContent = `El campo ${campo} solo puede contener letras.`;
  spanError.style.display = "block";
}

const validarTexto = (campo) => {
  return /^[^\d]*$/.test(campo.value);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let esValido = true;

  limpiarErrores();

  const nombre = document.getElementById("form-nombre");
  const apellido = document.getElementById("form-apellido");
  const pais = document.getElementById("form-pais");

  if (!validarTexto(nombre)) {
    mostrarError(nombre, "error-nombre", "Nombre");
    esValido = false;
  }

  if (!validarTexto(apellido)) {
    mostrarError(apellido, "error-apellido", "Apellido");
    esValido = false;
  }

  if (!validarTexto(pais)) {
    mostrarError(pais, "error-pais", "País de residencia");
    esValido = false;
  }

  if (esValido) {
    const inputs = document.querySelectorAll(".campo-form input");

    inputs.forEach((input) => {
      input.value = "";
    })

    alert("Formulario enviado con éxito");
  }

})