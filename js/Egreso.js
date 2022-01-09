class Egreso extends Dato{

    static contadorEgresos = 0;

    constructor(descripcion, valor){

        super(descripcion, valor);
        this.id_ = ++Egreso.contadorEgresos;

    }

    get id(){
        return this.id_
    }
}