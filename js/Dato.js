class Dato{

    constructor(descripcion, valor){

        this.descripcion_ = descripcion;
        this.valor_ = valor;

    }

    get descripcion(){
        return this.descripcion_;
    }

    get valor(){
        return this.valor_;
    }

    set descripcion(descripcion){
        this.descripcion_ = descripcion;
    }

    set valor(valor){
        this.valor_ = valor;
    }

}