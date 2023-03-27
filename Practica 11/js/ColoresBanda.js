
function Colores(numColor){
    var nomC = nombreColor(numColor);
    var colorB = defineColor(numColor);

    var tabla = document.getElementById("tablaColores");
    var fila = tabla.insertRow();
    var celda1 = fila.insertCell();

    celda1.style = "border: 1px solid #999999; text-align: center; background-color:" + colorB + "; width: 320px; height: 30px";
    celda1.innerHTML = nomC;
}

function ColoresT(numColor){
    var nomC = nombreColorT(numColor);
    var colorB = defineColorT(numColor);

    var tabla = document.getElementById("tablaColores");
    var fila = tabla.insertRow();
    var celda1 = fila.insertCell();

    celda1.style = "border: 1px solid #999999; text-align: center; background-color:" + colorB + "; width: 320px; height: 30px";
    celda1.innerHTML = nomC;

    var tolerancia = "0%"
    if (nomC == "CAFE")
        tolerancia = "1%";
        else if (nomC == "ROJO")
            tolerancia = "2%";
            else if (nomC == "VERDE")
            tolerancia = "0.5%";
                else if (nomC == "AZUL")
                tolerancia = "0.25%";
                    else if (nomC == "VIOLETA")
                    tolerancia = "0.1%";
                        else if (nomC == "GRIS")
                        tolerancia = "0.05%";
                            else if (nomC == "ORO")
                            tolerancia = "5%";
                                else if (nomC == "PLATA")
                                tolerancia = "10%";
    return tolerancia;

}

function ColoresPPM(numColor){
    var nomC = nombreColorPPM(numColor);
    var colorB = defineColorPPM(numColor);

    var tabla = document.getElementById("tablaColores");
    var fila = tabla.insertRow();
    var celda1 = fila.insertCell();

    celda1.style = "border: 1px solid #999999; text-align: center; background-color:" + colorB + "; width: 320px; height: 30px";
    celda1.innerHTML = nomC;

    var ppm = "0ppm"
    if (nomC == "CAFE")
        ppm = "100ppm";
        else if (nomC == "ROJO")
            ppm = "50ppm";
            else if (nomC == "NARANJA")
                ppm = "15ppm";
                else if (nomC == "AMARILLO")
                    ppm = "25ppm";
                    else if (nomC == "AZUL")
                        ppm = "10ppm";
                        else if (nomC == "VIOLETA")
                            ppm = "5ppm";
    return ppm;

}

function defineColor(n){
    switch(parseInt(n)){
        case 0: return "rgb(122,128,121)";
        case 1: return "rgb(147, 77, 14)";
        case 2: return "rgb(255, 0, 0)";
        case 3: return "rgb(255, 147, 0)";
        case 4: return "rgb(247, 255, 0)";
        case 5: return "rgb(73, 255, 0)";
        case 6: return "rgb(0, 39, 255)";
        case 7: return "rgb(174, 0, 255)";
        case 8: return "rgb(188, 188, 188)";
        case 9: return "rgb(255, 255, 255)";
        case 10: return "rgb(184, 156, 51)";
        case 11: return "rgb(216, 223, 240)";
    }
}

function defineColorT(n){
    switch(parseInt(n)){
        case 0: return "rgb(122,128,121)";
        case 1: return "rgb(147, 77, 14)";
        case 2: return "rgb(255, 0, 0)";
        case 3: return "rgb(73, 255, 0)";
        case 4: return "rgb(0, 39, 255)";
        case 5: return "rgb(174, 0, 255)";
        case 6: return "rgb(188, 188, 188)";
        case 7: return "rgb(184, 156, 51)";
        case 8: return "rgb(216, 223, 240)";
    }
}

function defineColorPPM(n){
    switch(parseInt(n)){
        case 0: return "rgb(122,128,121)";
        case 1: return "rgb(147, 77, 14)";
        case 2: return "rgb(255, 0, 0)";
        case 3: return "rgb(255, 147, 0)";
        case 4: return "rgb(247, 255, 0)";
        case 5: return "rgb(0, 39, 255)";
        case 6: return "rgb(174, 0, 255)";
    }
}

function nombreColor(n){
    switch(parseInt(n)){
        case 0: return "NEGRO";
        case 1: return "CAFE";
        case 2: return "ROJO";
        case 3: return "NARANJA";
        case 4: return "AMARILLO";
        case 5: return "VERDE";
        case 6: return "AZUL";
        case 7: return "VIOLETA";
        case 8: return "GRIS";
        case 9: return "BLANCO";
        case 10: return "ORO";
        case 11: return "PLATA";
    }
}

function nombreColorPPM(n){
    switch(parseInt(n)){
        case 0: return "NEGRO";
        case 1: return "CAFE";
        case 2: return "ROJO";
        case 3: return "NARANJA";
        case 4: return "AMARILLO";
        case 5: return "AZUL";
        case 6: return "VIOLETA";
    }
}

function nombreColorT(n){
    switch(parseInt(n)){
        case 0: return "NEGRO";
        case 1: return "CAFE";
        case 2: return "ROJO";
        case 3: return "VERDE";
        case 4: return "AZUL";
        case 5: return "VIOLETA";
        case 6: return "GRIS";
        case 7: return "ORO";
        case 8: return "PLATA";
    }
}

function imprimirCuatroColores() {
    var tabla = document.getElementById("tablaColores");
    tabla.innerHTML = ""; // borra contenido anterior
    var numColor1 = document.getElementsByName("numColor1")[0].value;
    var numColor2 = document.getElementsByName("numColor2")[0].value;
    var numColor3 = document.getElementsByName("numColor3")[0].value;
    var numColor4 = document.getElementsByName("numColor4")[0].value;
    Colores(numColor1);
    Colores(numColor2);
    Colores(numColor3);
    var tolerancia = ColoresT(numColor4);

    calcularResistencia(numColor1, numColor2, numColor3, tolerancia);
    }

function calcularResistencia(n1, n2, n3, t) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // borra contenido anterior
    var newDiv = document.createElement("div");

    var b1 = parseInt(n1);
    var b2 = parseInt(n2);
    var b3 = parseInt(n3);
    var b4 = t;
    var resultado;
    resultado = (b1*b3)+(b2*(b3/10));
    
    var newContent = document.createTextNode("El valor de la resitencias es: " + resultado + " con una tolerancia de: " + b4);
    newDiv.appendChild(newContent); //añade texto al div creado.

    // añade el elemento creado y su contenido al DOM
    resultadoDiv.appendChild(newDiv);
}

function imprimirCincoColores() {
    var tabla = document.getElementById("tablaColores");
    tabla.innerHTML = ""; // borra contenido anterior
    var numColor1 = document.getElementsByName("numColor1")[0].value;
    var numColor2 = document.getElementsByName("numColor2")[0].value;
    var numColor3 = document.getElementsByName("numColor3")[0].value;
    var numColor4 = document.getElementsByName("numColor4")[0].value;
    var numColor5 = document.getElementsByName("numColor5")[0].value;
    Colores(numColor1);
    Colores(numColor2);
    Colores(numColor3);
    Colores(numColor4);
    var tolerancia = ColoresT(numColor5);

    calcularResistencia5(numColor1, numColor2, numColor3, numColor5, tolerancia);
}

function calcularResistencia5(n1, n2, n3, n4, t) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // borra contenido anterior
    var newDiv = document.createElement("div");

    var b1 = parseInt(n1);
    var b2 = parseInt(n2);
    var b3 = parseInt(n3);
    var b4 = parseInt(n4);
    var b5 = t;
    var resultado;
    resultado = (b2*b4)+(b3*(b4/10))+(b1*b4);
    
    var newContent = document.createTextNode("El valor de la resitencias es: " + resultado + " con una tolerancia de: " + b5);
    newDiv.appendChild(newContent); //añade texto al div creado.

    // añade el elemento creado y su contenido al DOM
    resultadoDiv.appendChild(newDiv);
}

function imprimirSeisColores() {
    var tabla = document.getElementById("tablaColores");
    tabla.innerHTML = ""; // borra contenido anterior
    var numColor1 = document.getElementsByName("numColor1")[0].value;
    var numColor2 = document.getElementsByName("numColor2")[0].value;
    var numColor3 = document.getElementsByName("numColor3")[0].value;
    var numColor4 = document.getElementsByName("numColor4")[0].value;
    var numColor5 = document.getElementsByName("numColor5")[0].value;
    var numColor6 = document.getElementsByName("numColor6")[0].value;
    Colores(numColor1);
    Colores(numColor2);
    Colores(numColor3);
    Colores(numColor4);
    var tolerancia = ColoresT(numColor5);
    var ppm = ColoresPPM(numColor6)

    calcularResistencia6(numColor1, numColor2, numColor3, numColor5, tolerancia, ppm);
}

function calcularResistencia6(n1, n2, n3, n4, t, p) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // borra contenido anterior
    var newDiv = document.createElement("div");

    var b1 = parseInt(n1);
    var b2 = parseInt(n2);
    var b3 = parseInt(n3);
    var b4 = parseInt(n4);
    var b5 = t;
    var b6 = p;
    var resultado;
    resultado = (b1*100+b2*10+b3) * Math.pow(10,b4);
    
    var newContent = document.createTextNode("El valor de la resitencias es: " + resultado + " con una tolerancia de: " + b5 + " y " + b6);
    newDiv.appendChild(newContent); //añade texto al div creado.

    // añade el elemento creado y su contenido al DOM
    resultadoDiv.appendChild(newDiv);
}