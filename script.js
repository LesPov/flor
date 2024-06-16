document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos
    const petalos = document.querySelectorAll(".petalo");
    const hoja1 = document.querySelector(".hoja1");
    const hoja2 = document.querySelector(".hoja2");

    // Definir el desplazamiento y la rotación para los pétalos
    let rotacionPetalos = 0;

    // Función para animar los pétalos
    function animarPetalos() {
        // Actualizar la rotación de los pétalos
        rotacionPetalos += 8; // Ajusta según tu preferencia

        // Aplicar transformación con rotación a cada pétalo
        petalos.forEach((petalo) => {
            petalo.style.transform = `rotate(${rotacionPetalos}deg)`;
        });
    }

    // Definir el desplazamiento y la rotación para las hojas
    let movimientoHojas = 8;
    let direccionHojas = 1; // 1 para derecha, -1 para izquierda
    let rotacionHojas = 0;

    // Función para animar las hojas
    function animarHojas() {
        // Obtener las posiciones actuales de las hojas
        const leftHoja1 = parseInt(getComputedStyle(hoja1).left);
        const leftHoja2 = parseInt(getComputedStyle(hoja2).left);

        // Verificar límites y cambiar la dirección
        if (leftHoja1 >= 1 || leftHoja1 <= 0) {
            direccionHojas *= -1;
        }

        // Actualizar la rotación de las hojas
        rotacionHojas += movimientoHojas * direccionHojas;

        // Aplicar transformación con rotación
        hoja1.style.transform = `rotate(${rotacionHojas}deg)`;
        hoja2.style.transform = `rotate(${-rotacionHojas}deg)`;
    }

    // Establecer intervalos para la animación de pétalos y hojas
    setInterval(animarPetalos, 100);
    setInterval(animarHojas, 100); // Puedes ajustar la velocidad cambiando el valor de 100
});
// Función para abrir el modal
function abrirModal() {
    var modal = document.getElementById("miModal");
    modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
}

// Agrega un evento de clic al div "centro"
document.getElementById("centro").addEventListener("click", abrirModal);
