class empleados{
    constructor(nombre,sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }

}

const EMPLE1 = new empleados("pedro",100000);
const EMPLE2 = new empleados("mario" , 1033434);
const EMPLE3 = new empleados("maria",212343);

let calc_promedio = function(){

    let pro = EMPLE1.sueldo+EMPLE2.sueldo+EMPLE3.sueldo / 3;

    return console.log(pro);
}

console.log(calc_promedio(pro));
