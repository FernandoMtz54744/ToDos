//Variables
const formulario = document.querySelector('#formulario');
const tarea = document.querySelector("#tarea");
const materia = document.querySelector("#materia");
const lista = document.querySelector("#lista");
const tareas = [];



//funciones
const agregarTarea = ()=>{
    if(tarea.value && tarea.value.length > 0 && materia.value && materia.value.length > 0){
        let nuevaTarea = {
            tarea:tarea.value,
            materia:materia.value
        }
        tareas.push(nuevaTarea);
        console.log(tareas);
        tarea.value = "";
        materia.value = "";
    }
    
}

const mostrarTareas = ()=>{
    let html ="";
    tareas.forEach(({tarea, materia}, id)=>{
        html += generarHTML({tarea, materia}, id);
    })
    lista.innerHTML = html;
}

const generarHTML= ({tarea, materia}, id)=>{
    return `<li id="t${id}"><p class="tarea">Tarea: ${tarea}</p><p class="materia"> Materia: ${materia} </p><span onClick="eliminarTarea(${id})">Eliminar 🗑️</span></li>`;
}

const eliminarTarea = (id)=>{
    tareas.splice(id, 1); 
    mostrarTareas();
}

//event listeners
formulario.addEventListener('click', (event)=>{
    event.preventDefault();
    mostrarTareas();
})