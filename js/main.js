
/* Se obtiene la etiqueta table y el hijo tbody */ 
const tabla = document.querySelector("table");
const tbody = document.querySelector("tbody");

/* Se obtiene las etiquetas input button con los ID "#agreFila" y "#elimFila" */
const btnFila = document.querySelector("#agreFila");
// const btnElmFila = document.querySelector("#elimFila"); //Este boton no se agrego al HTML aún.


/*-----<Funcion para agregar fila>-------*/
btnFila.addEventListener('click', () => {
    console.log("Funciona gato");
    tabla.querySelector("tbody").innerHTML += `
    <tr>
        <td class="fila1"><input type="text" name="" id=""></td>
        <td class="fila2">
            <div class="contCant">
                <input type="number" min="1" value="1" name="" id="">
            </div>                                
        </td>
        <td class="fila3"><input type="text" name="" id=""></td>
        <td class="fila4"><input type="text" name="" id=""></td>
    </tr>
  `;
});

/*-------<Funcion para eliminar fila>------*/
btnElmFila.addEventListener("click", () => {
  const ultimaFila = tbody.lastElementChild;
  tbody.removeChild(ultimaFila);
});