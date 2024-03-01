// Tamaño Matriz
let tam_x = 8;
let tam_y = 8;

// Matriz
let matriz = [];

// Valores maximos
let valores = (tam_x * tam_y) + 5;     // Inicializamos la variable de manera dinámica.

// Auxiliares
let contador;
let vectorAux = [];


// Rellenamos un vector auxiliar (tamaño x * y) y se ordenan con el metodo sort
for(let i= 0; i < (tam_x * tam_y); i++){
    vectorAux.push(Math.floor(Math.random() * valores + 1));
}

// Insertamos los valores del vector en el array bidimensional
rellenarMatriz();

// Cabecera
document.write("HLC - Actividad 2.7");
document.write("<br>Daniel Amores");
document.write("<hr>");

// Mostramos el Array Original por pantalla
document.write("<b>Array Original</b><br>");
mostrarPantalla();

// Ordenamos el vector de menor a mayor comparando con una funcion flecha que asegura tambien
// que se comparan como valores numericos y no como cadenas
vectorAux.sort((a, b) => a - b);

// Insertamos los valores del vector en el array bidimensional
rellenarMatriz();

// Mostramos el Array Ordenado por pantalla
document.write("<br><b>Array Ordenado</b><br>");
mostrarPantalla();


// Buscamos la mediana
// Lo que hacemos es comprobar primero si es par o impar
// En caso de ser par, toma los dos valores centrales de la matriz y saca la division de los 2
// En caso de ser impar toma el valor central de la matriz
let mediana;
let encontrado = false;
if((tam_x * tam_y) % 2 == 0){
    let aux = (tam_x * tam_y) / 2;
    contador = 0;
    for(let i = 0; (i < tam_x) && (!encontrado); i++){
        for(let j = 0; (j < tam_y) && (!encontrado); j++){
            if(contador == aux - 1){
                mediana = matriz[i][j];
            }
            else if(contador == (aux)){
                mediana += matriz[i][j];
                mediana = parseFloat(mediana / 2);
                encontrado = true;
            }
            contador++;
        }
    }
}
else{
    let aux = parseInt((tam_x * tam_y) / 2);
    contador = 0;
    for(let i = 0; (i < tam_x) && (!encontrado); i++){
        for(let j = 0; (j < tam_y) && (!encontrado); j++){
            if(contador == aux){
                mediana = matriz[i][j];
                encontrado = true;
            }
            contador++;
        }
    }
}

// Buscamos la moda
// Lo que hacemos es recorrer la matriz una sola vez, comparando el numero con el anterior (ya que esta ordenada)
// Si el numero es igual al anterior suma 1 al contador, si es diferente comprueba si esta entre los mas repetidos y lo almacena en un array
// Si no es de los mas repetidos cambia el numero al siguiente y sigue realizando la comparacion
// En caso de que encuentre un numero que este repetido mas veces, vacia el array y lo vuelve a rellenar con el nuevo valor
contador = 1;
let maximo = 1;
let numero = 0;
let moda = [];

for(let i = 0; i < tam_x; i++){
    for(let j = 0; j < tam_y; j++){
        if(numero == matriz[i][j]){
            contador ++;

            if((i == tam_x - 1) && (j == tam_y - 1)){
                if(contador > maximo){
                    maximo = contador;
                    moda = [];
                    moda.push(numero);
                }
                else if(contador == maximo){
                    moda.push(numero);
                }
            }
        }
        else{
            if(contador > maximo){
                maximo = contador;
                moda.push(numero);
            }
            else if(contador == maximo){
                moda.push(numero);
            }
            numero = matriz[i][j];
            contador = 1;
        }

        if(maximo < contador){
            moda = [];
            maximo = contador;
        }
    }
}


// Mostramos el resultado por pantalla
// Resultado de la Mediana
document.write("<br><br>");
document.write("Resultados");
document.write("<div>");
document.write("Mediana del array de " + tam_x + "x" + tam_y + ": <b>" + mediana + "</b>");
document.write("</div>")
// Resultado de la moda
document.write("<br>");
document.write("<div>");
document.write("Números Moda en el array de " + tam_x + "x" + tam_y + ": ");
for(let i = 0; i < moda.length; i++){
    document.write("<b>" + moda[i] + "</b> ");
}
document.write("<br>Se han repetido un total de <b>" + maximo + "</b> veces");
document.write("</div>")


// Funcion para mostrar array por pantalla
function mostrarPantalla(){
    document.write("<div class='container'>");
    for(let i = 0; i < tam_x; i++){
        document.write("<div class='fila'>");
        for(let j = 0; j < tam_y; j++){
            document.write("<div class='celda'>" + matriz[i][j] + "</div>");
        }
        document.write("</div>");
    }
    document.write("</div>");
}

// Funcion para rellenar la matriz
function rellenarMatriz(){
    contador = 0;
    for(let i = 0; i < tam_x; i++){
        matriz[i] = [];
        for(let j = 0; j < tam_y; j++){
            matriz[i][j] = vectorAux[contador];
            contador++;
        }
    }
}