//Ejecucion al cargar la pagina completa
window.addEventListener('load', function(){
    //Llamada a la funcion foco()
    //Declaracion debajo de la llamada
    foco();
})

function foco(){
    //Le agrega un clase al body
    document.querySelector('body').classList.add('oscuridad');

    //Agregar el titulo
    const titulo = document.createElement("h1");
    titulo.classList.add("titulo");
    const anio = new Date().getFullYear();
    titulo.innerText = `Desarrollo de Sistemas Web ${anio}`;
    document.body.appendChild(titulo);

    //Crear elemeto HTML Imagen
    const img = document.createElement("img");
    img.classList.add('foco');
    img.setAttribute('src', 'images/foco-apagado.jpg');
    
    //Agregar funcion al eveb¿nto click
    img.addEventListener('click', () => {
        if(img.src.indexOf("apagado") > 0){
            //Cambiamos la imagen y el fondo
            img.setAttribute('src', 'images/foco-prendido.jpg');
            document.body.classList.remove('oscuridad');
            document.body.classList.add('luz');
        } else {
            //Cambiar la imagen y el fondo
            img.setAttribute('src', 'images/foco-apagado.jpg');
            document.body.classList.remove('luz');
            document.body.classList.add('oscuridad');
        }
    });

    document.body.appendChild(img);
}
