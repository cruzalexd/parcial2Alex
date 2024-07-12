class Producto{
  // Constructor
  constructor(id, nombre, descripcion, precio, imagen, categoria){
    this.id = id,
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.precio = precio,
    this.imagen = imagen,
    this.categoria = categoria
  };

///////////////////////////

  toHTML(){//Esto es un metodo no es una funcion
    //DOM - Creo la tarjeta
    const card = document.createElement("div");
    //card.classList.add("card");
    card.setAttribute("class" , "card mb-2")//Es mejor esta forma, admite mas campo
    card.style = "width: 18rem;";

    //Creo imagen
    let foto = document.createElement("img");
    foto.src = this.imagen;
    foto.className = "card-img-top";
    foto.alt = "que pasa" 

    //Creo card body
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    //Creo H5
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = this.nombre;
    //Creo el p
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.setAttribute("class","fs-4");
    cardText.innerText = this.descripcion;
    //Creo el UL
    const listGroup = document.createElement("ul");
    listGroup.classList.add("list-group", "list-group-flush");
    //creo el autor
    const liAutor = document.createElement("li");
    liAutor.className = "list-group-item";
    liAutor.innerText = this.precio;
    //creo la editorial
    const liEditorial = document.createElement("li");
    liEditorial.className = "list-group-item";
    liEditorial.innerText = this.categoria;
    //Creo el genero
        //const liGenero = document.createElement("li");
        //liGenero.className = "list-group-item";
        //liGenero.innerText = this.editorial;
    //Creo el div del boton
    const cardBtnBody = document.createElement("div");
    cardBtnBody.setAttribute("class", "card-body");//Agregar la clase para que se acomoden mejor los botones
    //creo el button Pedir
    const btnPedir = document.createElement("button");
    btnPedir.className = "btn btn-primary";
    btnPedir.innerText = "Pedir";
    ////ACA SE AGREGA EL EVENTO QUE FALTA AL BOTON COMPRAR

    //creo el button Devolver
    const btnDevolver =  document.createElement("button");
    btnDevolver.className= "btn btn-primary";
    btnDevolver.innerText = "Devolver";
    ////ACA AGREGAR EL EVENTO QUE FALTA AL BOTON DEVOLVER

    //Se ordena el "Objeto" en orden de aparicion, como lo muestra la estructura.
    cardBody.append(cardTitle, cardText);
    //listGroup.append(liAutor, liEditorial, liGenero);
    cardBtnBody.append(btnPedir, btnDevolver);
    card.append(foto, cardBody, listGroup, cardBtnBody);
  
    return card;

  }



}



  