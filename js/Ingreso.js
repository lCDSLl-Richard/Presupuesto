class Ingreso extends Dato{

    static contadorIngresos = 0;

    constructor(descripcion, valor){

        super(descripcion, valor);
        this.id_ = ++Ingreso.contadorIngresos;

    }

    get id(){
        return this.id_;
    }

}