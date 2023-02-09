function buildSign (occasion, name){
    let cadena= occasion;
    let nombre= name;
    console.log(`${cadena} ${nombre}`);
}

//buildSign('bienvenido','Jairo Acosta');

function buildBirthaySign(age){
    let edad= age;
    if(edad>50){
        console.log('maduro');
    }else{
        console.log('joven');
    }
};
//buildBirthaySign(54);

function graduationFor(name,year){
    let nombre=name;
    let anio=year;

    console.log(`Congratulations ${nombre}
    Class ${anio}`);
}

//graduationFor('Jairo',2023);

function costOf(sign,currency){
    let costoInicial=20;
    let signo = sign.length*2;
    let costoTotal=costoInicial+signo;
    let moneda = currency;
        console.log(`Your sign costs ${costoTotal},00 ${moneda}`);
}
costOf('Feliz cumpleaños','dollars');