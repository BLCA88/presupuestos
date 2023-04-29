const btnFila = document.querySelector("#agreFila");
console.log(btnFila);

const tabla = document.querySelector("table");
const tr = document.querySelector("#tr");
console.log(tabla, tr);
console.log(tabla);


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