function captura(){
    let correoel = document.getElementById("correo").value;
    let contra = document.getElementById("contra").value;
    localStorage.setItem("correo", correoel);
    localStorage.setItem("contraseña", contra);
}
