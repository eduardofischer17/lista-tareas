(function(){
	// Variables
var lista = document.getElementById("lista"), 
	tareaInput = document.getElementById("tareaInput"),
	btnNuevaTarea = document.getElementById("btn-agregar");

// Funciones
var agregarTarea = function(){
	var tarea = tareaInput.value,
	 nuevaTarea = document.createElement("li"),
	 enlace = document.createElement("a"),
	 contenido = document.createTextNode(tarea);

	 if (tarea === "") {
	 	tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
	 	tareaInput.className = "error";
	 	return false;
	 }
	 
	 // Agregamos el contenido de tarea al enlace (a)
	enlace.appendChild(contenido);

	// Le establecemos un  atritubo href para que sea clickeable
	enlace.setAttribute("href", "#");

	// Aqui  agregamos el encale a la nueva tarea (li)
	nuevaTarea.appendChild(enlace);

	//Agregamos la nueva tarea a la lista.
	lista.appendChild(nuevaTarea);
	
	tareaInput.value = "";

	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", function(){
		this.parentNode.removeChild(this);
		});

	}

};

var comprobarInput = function(){
	//Quitar estado de error
	tareaInput.className = "";
	tareaInput.setAttribute("placeholder", "Agrega tu tarea");
};
var eliminarTarea = function(){
	this.parentNode.removeChild(this);
};

//Eventos
//Evento para agregar una tarea.
btnNuevaTarea.addEventListener("click", agregarTarea);

//Evento para comprobar si el input esta vacío.
tareaInput.addEventListener("click", comprobarInput);

// Evento para borrar los elementos de la lista.
for (var i = 0; i <= lista.children.length -1; i++) {
lista.children[i].addEventListener("click", eliminarTarea);

}

}());


