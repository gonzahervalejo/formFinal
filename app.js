// La idea de este formulario es que el usuario pueda hacerle llegar a nuestro cliente una consulta, dejando datos para una respuesta como el nombre y el email.

class User {
    constructor(nombre, email, consulta) {
      this.nombre = nombre;
      this.email = email;
      this.consulta = consulta;
    }
  }
  
  let arrayUsuarios = [];
  
  localStorage.getItem("usuarios")
    ? (arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")))
    : localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));
  
  let formulario = document.getElementById("idForm");
  
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let nombre = document.getElementById("idNombre").value;
    let email = document.getElementById("idEmail").value;
    let consulta = document.getElementById("idConsulta").value;
  
    if (!arrayUsuarios.some((usuarioEnArray) => usuarioEnArray.email == email)) {
      const usuario = new User(nombre, email, consulta);
      arrayUsuarios.push(usuario);
      localStorage.setItem("consultas", JSON.stringify(arrayUsuarios));
      formulario.reset();
    }
  });
  
  document.getElementById("botonAlerta").addEventListener("click", () => {
    swal({
      title: "Enviado!",
      text: "Su consulta fue recibida correctamente",
      icon: "success",
    });
  });