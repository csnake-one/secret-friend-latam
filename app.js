// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.
//Desafio del amigo secreto
/* Especificaciones 
Descripción
Amigo secreto

En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una 
lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". 
Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, 
un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.
Fucionalidades:

   a) Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto 
       y lo agregarán a una lista visible al hacer clic en "Adicionar".

    b) Validar entrada: Si el campo de texto está vacío,
     el programa mostrará una alerta pidiendo un nombre válido.

    c) Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

    d) Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre 
       de la lista y se mostrará en la página.
*/
//Tomando el valor del input id= amigo y validando que no sea vacio se agrega a la lista
let listaAmigos =[];
function validaNombreAmigo(){
    let nombreAmigo = document.querySelector('#amigo').value;
    console.log(nombreAmigo);
    if (!nombreAmigo){
        alert("Escribe un nombre valido; NO Puede estar vacio");
        
    }else {
        listaAmigos.push(nombreAmigo);
        console.log(listaAmigos.length);
        console.log(listaAmigos);
        document.querySelector('#amigo').value='';
        agregaAmigo();
    }
    return;

}

function agregaAmigo(){

    for (let index = 0; index < listaAmigos.length; index++) {
        document.querySelector('#listaAmigos').appendChild(listaAmigos[index]);
        
    }
    return;
}