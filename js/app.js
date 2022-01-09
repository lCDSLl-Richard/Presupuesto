const ingresos = [];

const egresos = [];

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

const totalIngresos = () => {
    let totalIngreso = 0;

    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    
    return totalIngreso;
}

const totalEgresos = () => {
    let totalEgreso = 0;

    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    
    return totalEgreso;
}

const cargarCabecero = () => {

    document.getElementById('presupuesto').innerHTML = formatoMoneda(totalIngresos() - totalEgresos());

    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(totalEgresos()/totalIngresos());

    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());

    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:0})
}

const cargarIngresos = () => {
    let ingresosHTML = '';
    
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;

    return ingresoHTML;
}

const cargarEgresos = () => {
    let egresosHTML = '';
    
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;

    return egresoHTML;
}

const eliminarIngreso = (id) => {
    ingresos.splice(ingresos.findIndex(ingreso => ingreso.id === id), 1);
    cargarApp();
}

const eliminarEgreso = (id) => {
    egresos.splice(egresos.findIndex(egreso => egreso.id === id), 1);
    cargarApp();
}

const agregarDato = () => {
    let forma = document.getElementById('forma');
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];

    if(descripcion.value != '' && valor.value != ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
        }
        else{
            egresos.push(new Egreso(descripcion.value, +valor.value));
        }
        
        descripcion.value = '';
        valor.value = '';
    }

    cargarApp();
}