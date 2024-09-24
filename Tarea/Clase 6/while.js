function tablaDeMultiplicar(n){

    let factor = 1;

    while (factor <= 10){
        console.log(`${n} * ${factor} = ${n * factor}`);
        factor++

    }
    console.log(`Esa es la tabla del ${n}`);
}

tablaDeMultiplicar(2);

