'use strict';
let listadoCategorias=['Todos'];
let galeria = [];
let filtrito=null;
fetch("productos.json")
    .then(response => response.json()
    .then(productos => {
            
        for(let producto of productos){
            galeria.push(new Producto(producto.id, producto.nombre, producto.descripcion, producto.precio, producto.imagen, producto.categoria)
            );
        };
        mostrarCatalogo();
        console.log(productos);
        listarCategorias(galeria);//le paso todo el listado de productos
        botonCategorias();
    })
  );
//Ahi termina esto



//console.log("antes de llamar a la funcion");
/* showing();
//console.log("paso el showing");

function showing(){//Ambos metodos funcionan de la misma manera
    
    console.log(galeria);
    for(let index in galeria){
        console.log(index);
        galeria[index].show();
    }
    console.log("Dentro del Showing");
    
    //console.log("entro22 a showing"); 
}

console.log("despues de llamar a la funcion"); */


////////
function mostrarCatalogo(){
    //Posiciona donde se va a imprimir
    const contenedor = document.querySelector("#misProductos");
    contenedor.innerHTML="";//Esto limpia el HTML
    //Agregamos cada libro del catalogo


    if(filtrito==null || filtrito=='Todos'){
        galeria.forEach(elemento => {//Este libro es una variable local creada aca, no es una variable global.
              //contenedor.innerHTML += elemento.libro.toHTML()
            contenedor.append(elemento.toHTML())
            });
            filtrito=null;
    }else{
       
        galeria.forEach(elemento => {//Este libro es una variable local creada aca, no es una variable global.
          //contenedor.innerHTML += elemento.libro.toHTML()
          if(elemento.categoria==filtrito){
            contenedor.append(elemento.toHTML())
          }
        });
    }






    
}


function listarCategorias(productos){
    for(let index in productos){
        if (!listadoCategorias.includes(productos[index].categoria)) {//.
            listadoCategorias.push(productos[index].categoria);
        }
    }
    //console.log(listadoCategorias);    
    //
}

function botonCategorias(){
    console.log("entro");
    listadoCategorias.forEach(categoria => {
        console.log(categoria);
        //Aca creo un boton por cada genero de la lista
        const btncito = document.createElement("button");
        //btncito.classList.add("btn", "btn-primary");
        btncito.setAttribute("class", "btn btn-primary mx-1 mb-1");
        btncito.innerText = categoria;
        //
        btncito.addEventListener("click", (e) => {//Se agrega este evento al Boton, simular a INTERRUPCION
            document.querySelector("#misProductos").innerHTML="";
            filtrito = e.target.innerText;
            console.log(filtrito);
            //Filtro por Genero
            let categorias_filtradas=galeria.filter(producto => producto.categoria.includes(filtrito));//Seria mejor una funcion mostrar pelis
            console.log(categorias_filtradas);
            mostrarCatalogo();
            //categorias_filtradas.forEach(producto => document.querySelector("#misProductos").innerHTML+=mostrarCatalogo());

          });



        //        
        document.querySelector("#misBotones").append(btncito);
        //btncito.addEventListener("click", (e) => {//Se agrega este evento al Boton, simular a INTERRUPCION
        //document.querySelector("#pelis").innerHTML="";
        //let filtrito = e.target.innerText;
    })
                              
}