function insertarNombre(event){
    event.preventDefault()//el metodo2 prevendefault evita que la etiqueta <form> recargue el navegador 
    //se captura el nombre que se dijita en el imput 
    let imputName = document.getElementById("nombre").value  
    const ul = document.getElementById("lista-nombres")// apunto a la etiqueta ul que esta en el html
    ul.innerHTML += `<li> ${imputName}</li>`//el += incrementa el contenido de la etiqueta ul
    //las comillas invertidas me oermiten interporlar (colocar una variable dentro de una caneda de texto)
   
}