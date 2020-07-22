getPendientes();



async function getPendientes(){


    document.getElementById("btnPendientes").focus();

    document.getElementById("btnPendientes").classList.add("text-warning");
    document.getElementById("btnRealizadas").classList.remove("text-warning");
    document.getElementById("btnFacturadas").classList.remove("text-warning");

    borrarFiltros();




var r=document.getElementById("rowTitulo");
        r.innerHTML=``;
        r.innerHTML =`

            <div class="row ml-1">
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 text-center p-1 ">
                    <span class="text-center">Id. Avería</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-2 p-1 ">
                    <span class="">Estado</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <span>Fecha del parte</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <span>Instalación</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-3 col-lg-4 col-md-12 p-1 ">
                    <span>Avería</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-5 col-lg-12 col-md-12 p-1 ">
                    <span>Ubicación</span>
                </div>
            </div>
        `
        
        var url = 'http://172.27.120.120/atp/public/api/averias/pendientes';

        var c=document.getElementById("rowCuerpo");
        c.innerHTML=``;

      var pendientes= await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            if (response == "No se han encontrado resultados") {
                c.innerHTML = '';
                r.innerHTML = '';
                alert(response);

            } else {
                 return(response);
            }
        })

for (let i in pendientes) {
    if ((pendientes[i]["estado"]!='ACABADA')&&(pendientes[i]["facturada"]!='true')) {
      
        
        c.innerHTML +=`
        
        <div class="row p-0">
        <div class="col-xl-1 col-lg-2 col-md-3 p-1 ml-0">
        <div class="input-group">
        <div class="input-group-prepend">
        <!-- <span class="input-group-text" id="basic-addon1"> <div class="btn bg-warning" data-toggle="" data-target="#exampleModal"  onclick=""></div></span>    -->
        <button class="btn btn-outline-warning" type="button" id="button-addon1"  onclick="abrirDetalle(${pendientes[i]["id"]})"><i class="fas fa-info-circle"></i></button>
                            </div>
                            <input type="text" class="form-control" placeholder="${pendientes[i]["id"]}" id="idAveria${pendientes[i]["id"]}" aria-label="idAveria" aria-describedby="basic-addon1" disabled>
                            </div>             
                            </div>
                            <div class="col-xl-1 col-lg-2 col-md-2 p-1">
                            <input type="text" class="form-control" placeholder="${pendientes[i]["estado"]}"  aria-label="Estado Avería" aria-describedby="basic-addon1" disabled>
                            </div>
                            <div class="col-xl-1 col-lg-2 col-md-3 p-1">
                            <input type="text" class="form-control" placeholder="${convertDate(pendientes[i]["fecha"])}" aria-label="" aria-describedby="basic-addon1" disabled>
                            </div>
                            <div class="col-xl-1 col-lg-2 col-md-4 p-1">
                            <input type="text" class="form-control" placeholder="${pendientes[i]["instalacion"]}"  aria-label="Instalación" aria-describedby="basic-addon1" disabled>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-12 p-1">
                            <input type="text" class="form-control" placeholder="${pendientes[i]["averia"]}"  aria-label="Avería" aria-describedby="basic-addon1" disabled>
                            </div>
                            <div class="col-xl-5 col-lg-12 col-md-12 p-1">
                            <input type="text" class="form-control" placeholder="${pendientes[i]["ubicacion"]}"  aria-label="Ubicación" aria-describedby="basic-addon1" disabled>
                            </div>
                            </div>
                            `
                            
                            
                        }
                        
                        
                        
                        
                    }
                    
                }
                    
function convertDate(inputFormat) {
     var dt = new Date(inputFormat)
    return (`${
        dt.getDate().toString().padStart(2, '0')}/${
        (dt.getMonth()+1).toString().padStart(2, '0')}/${
        dt.getFullYear().toString().padStart(4, '0')} ${
        dt.getHours().toString().padStart(2, '0')}:${
        dt.getMinutes().toString().padStart(2, '0')}`)
  }


async function getRealizadas(){
    document.getElementById("btnRealizadas").focus();

    document.getElementById("btnPendientes").classList.remove("text-warning");
    document.getElementById("btnRealizadas").classList.add("text-warning");
    document.getElementById("btnFacturadas").classList.remove("text-warning");

    borrarFiltros();

    var t=document.getElementById("rowTitulo");
    t.innerHTML=``;

            t.innerHTML =`
    
            <div class="row p-0">

                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3  text-center p-1 ">
                    <span class="text-center">Id. Avería</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-2 p-1 ">
                    <span class="">Estado</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                 <span>Fecha del parte</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <span>Fecha Realizada</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <span>Instalación</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-3 col-lg-4 col-md-12 p-1 ">
                    <span>Avería</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-3 col-lg-12 col-md-12 p-1 ">
                    <span>Ubicación</span>
                </div>
             </div>
            `
    
            var url = 'http://172.27.120.120/atp/public/api/averias/pendientes';
           
           
            var c=document.getElementById("rowCuerpo");
            c.innerHTML=``;
    
            var acabadas= await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if (response == "No se han encontrado resultados") {
                    c.innerHTML = '';
                    t.innerHTML = '';
                    alert(response);
    
                } else {
                     return(response);
                }
            })


for (let i in acabadas) {
    if ((acabadas[i]["estado"]=='ACABADA')&&(acabadas[i]["facturada"]=='false')) {
            c.innerHTML +=`
    
            <div class="row p-0">
                <div class="col-xl-1 col-lg-2 col-md-3 p-1 ml-0">
                <div class="input-group">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-warning" type="button" id="button-addon1" onclick="abrirDetalle(${acabadas[i]["id"]})"><i class="fas fa-info-circle"></i></button>
                    </div>
                    <input type="text" class="form-control" placeholder="${acabadas[i]["id"]}" id="idAveria${acabadas[i]["id"]}" aria-label="Id Avería" aria-describedby="basic-addon1" disabled>
                </div>             
                </div>
                <div class="col-xl-1 col-lg-2 col-md-2 p-1">
                    <input type="text" class="form-control" placeholder="${acabadas[i]["estado"]}"  aria-label="Estado Avería" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-2 col-md-3 p-1">
                    <input type="text" class="form-control" placeholder="${convertDate(acabadas[i]["fecha"])}"  aria-label="Fecha Inicio" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-2 col-md-3 p-1">
                    <input type="text" class="form-control" placeholder="${convertDate(acabadas[i]["fechafin"])}"  aria-label="Fecha Realizado" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-4 col-md-4 p-1">
                    <input type="text" class="form-control" placeholder="${acabadas[i]["instalacion"]}"  aria-label="Instalación" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-8 p-1">
                    <input type="text" class="form-control" placeholder="${acabadas[i]["averia"]}"  aria-label="Avería" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-12 p-1">
                    <input type="text" class="form-control" placeholder="${acabadas[i]["ubicacion"]}"  aria-label="Ubicación" aria-describedby="basic-addon1" disabled>
                </div>
            </div> 
            `
  
    
        }
      }
}


async function getFacturadas(){
    document.getElementById("btnFacturadas").focus();

    document.getElementById("btnPendientes").classList.remove("text-warning");
    document.getElementById("btnRealizadas").classList.remove("text-warning");
    document.getElementById("btnFacturadas").classList.add("text-warning");

    borrarFiltros();

    var t=document.getElementById("rowTitulo");
    t.innerHTML=``;

            t.innerHTML =`
    
            <div class="row p-0">

                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3  text-center p-1 ">
                    <span class="text-center">Id. Avería</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-2 p-1 ">
                    <span class="">Estado</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                 <span>Fecha del parte</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <span>Fecha Realizada</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <span>Instalación</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-3 col-lg-4 col-md-12 p-1 ">
                    <span>Avería</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-3 col-lg-12 col-md-12 p-1 ">
                    <span>Ubicación</span>
                </div>
             </div>
            `
    
            var url = 'http://172.27.120.120/atp/public/api/averias/pendientes';
           
           
            var c=document.getElementById("rowCuerpo");
            c.innerHTML=``;
    
            var facturadas= await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if (response == "No se han encontrado resultados") {
                    c.innerHTML = '';
                    t.innerHTML = '';
                    alert(response);
    
                } else {
                     return(response);
                }
            })


for (let i in facturadas) {
    if ((facturadas[i]["estado"]=='ACABADA')&&(facturadas[i]["facturada"]=='true')) {
            c.innerHTML +=`
    
            <div class="row p-0">
                <div class="col-xl-1 col-lg-2 col-md-3 p-1 ml-0">
                <div class="input-group">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-warning" type="button" id="button-addon1" onclick="abrirDetalle(${facturadas[i]["id"]})"><i class="fas fa-info-circle"></i></button>
                    </div>
                    <input type="text" class="form-control" placeholder="${facturadas[i]["id"]}" id="idAveria${facturadas[i]["id"]}" aria-label="Id Avería" aria-describedby="basic-addon1" disabled>
                </div>             
                </div>
                <div class="col-xl-1 col-lg-2 col-md-2 p-1">
                    <input type="text" class="form-control" placeholder="${facturadas[i]["estado"]}"  aria-label="Estado Avería" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-2 col-md-3 p-1">
                    <input type="text" class="form-control" placeholder="${convertDate(facturadas[i]["fecha"])}"  aria-label="Fecha Inicio" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-2 col-md-3 p-1">
                    <input type="text" class="form-control" placeholder="${convertDate(facturadas[i]["fechafin"])}"  aria-label="Fecha Realizado" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-4 col-md-4 p-1">
                    <input type="text" class="form-control" placeholder="${facturadas[i]["instalacion"]}"  aria-label="Instalación" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-8 p-1">
                    <input type="text" class="form-control" placeholder="${facturadas[i]["averia"]}"  aria-label="Avería" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-12 p-1">
                    <input type="text" class="form-control" placeholder="${facturadas[i]["ubicacion"]}"  aria-label="Ubicación" aria-describedby="basic-addon1" disabled>
                </div>
            </div> 
            `
    
    
    
        }
      }
}

 function aplicarFiltroInstalacion(){
    
    var f=document.getElementById("inputFiltroInstalacion");
    var id=f.value;
    var url = 'http://172.27.120.120/atp/public/api/filtro/pendientes/instalacion/'+id;

    if(document.getElementById("btnPendientes").classList.contains("text-warning")){
        var key="Pendientes";
    }
    if(document.getElementById("btnRealizadas").classList.contains("text-warning")){
        var key="Realizadas";
    }
    if(document.getElementById("btnFacturadas").classList.contains("text-warning")){
        var key="Facturadas";
    }

    switch (key) {
        case "Pendientes":
            putAplicarFiltroPendientes(url);
            break;
        case "Realizadas":
         putAplicarFiltroRealizadas(url);
            break;
        case "Facturadas":
  
            putAplicarFiltroFacturadas(url);

            break;        
        default:
            break;
    }
           
}

function aplicarFiltroFecha(){
    
    var f=document.getElementById("inputFiltroFecha");
    var id=f.value;
    var url = 'http://172.27.120.120/atp/public/api/filtro/pendientes/fecha/'+id;

    if(document.getElementById("btnPendientes").classList.contains("text-warning")){
        var key="Pendientes";
    }
    if(document.getElementById("btnRealizadas").classList.contains("text-warning")){
        var key="Realizadas";
    }
    if(document.getElementById("btnFacturadas").classList.contains("text-warning")){
        var key="Facturadas";
    }

    switch (key) {
        case "Pendientes":
            putAplicarFiltroPendientes(url);
            break;
        case "Realizadas":
         putAplicarFiltroRealizadas(url);
            break;
        case "Facturadas":
  
            putAplicarFiltroFacturadas(url);

            break;        
        default:
            break;
    }
           
}

function aplicarFiltroId(){
    
    var f=document.getElementById("inputFiltroId");
    var id=f.value;
    var url = 'http://172.27.120.120/atp/public/api/filtro/pendientes/id/'+id;

    if(document.getElementById("btnPendientes").classList.contains("text-warning")){
        var key="Pendientes";
    }
    if(document.getElementById("btnRealizadas").classList.contains("text-warning")){
        var key="Realizadas";
    }
    if(document.getElementById("btnFacturadas").classList.contains("text-warning")){
        var key="Facturadas";
    }

    switch (key) {
        case "Pendientes":
            putAplicarFiltroPendientes(url);
            break;
        case "Realizadas":
         putAplicarFiltroRealizadas(url);
            break;
        case "Facturadas":
  
            putAplicarFiltroFacturadas(url);

            break;        
        default:
            break;
    }
           
}

async function putAplicarFiltroPendientes(url) {
  
 
    var t=document.getElementById("rowTitulo");
    t.innerHTML=``;

            t.innerHTML =`
    
            <div class="row ml-1">
            <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 text-center p-1 ">
                <span class="text-center">Id. Avería</span>
            </div>
            <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-2 p-1 ">
                <span class="">Estado</span>
            </div>
            <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                <span>Fecha del parte</span>
            </div>
            <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                <span>Instalación</span>
            </div>
            <div class="d-none d-lg-none d-xl-block col-xl-3 col-lg-4 col-md-12 p-1 ">
                <span>Avería</span>
            </div>
            <div class="d-none d-lg-none d-xl-block col-xl-5 col-lg-12 col-md-12 p-1 ">
                <span>Ubicación</span>
            </div>
            </div>
            `;


           
            var c=document.getElementById("rowCuerpo");
            c.innerHTML=``;
    
            var filtro= await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if (response == "No se han encontrado resultados") {
                    c.innerHTML = '';
                    t.innerHTML = '';
                    alert(response);
    
                } else {
                     return(response);
                }
            })


for (let i in filtro) {
    if ((filtro[i]["estado"]!='ACABADA')&&(filtro[i]["facturada"]!='true')) {
            c.innerHTML +=`
    
            <div class="row p-0">
            <div class="col-xl-1 col-lg-2 col-md-3 p-1 ml-0">
            <div class="input-group">
            <div class="input-group-prepend">
            <!-- <span class="input-group-text" id="basic-addon1"> <div class="btn bg-warning" data-toggle="" data-target="#exampleModal"  onclick=""></div></span>    -->
            <button class="btn btn-outline-warning" type="button" id="button-addon1"  onclick="abrirDetalle(${filtro[i]["id"]})"><i class="fas fa-info-circle"></i></button>
                                </div>
                                <input type="text" class="form-control" placeholder="${filtro[i]["id"]}" id="idAveria${filtro[i]["id"]}" aria-label="idAveria" aria-describedby="basic-addon1" disabled>
                                </div>             
                                </div>
                                <div class="col-xl-1 col-lg-2 col-md-2 p-1">
                                <input type="text" class="form-control" placeholder="${filtro[i]["estado"]}"  aria-label="Estado Avería" aria-describedby="basic-addon1" disabled>
                                </div>
                                <div class="col-xl-1 col-lg-2 col-md-3 p-1">
                                <input type="text" class="form-control" placeholder="${convertDate(filtro[i]["fecha"])}" aria-label="" aria-describedby="basic-addon1" disabled>
                                </div>
                                <div class="col-xl-1 col-lg-2 col-md-4 p-1">
                                <input type="text" class="form-control" placeholder="${filtro[i]["instalacion"]}"  aria-label="Instalación" aria-describedby="basic-addon1" disabled>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-12 p-1">
                                <input type="text" class="form-control" placeholder="${filtro[i]["averia"]}"  aria-label="Avería" aria-describedby="basic-addon1" disabled>
                                </div>
                                <div class="col-xl-5 col-lg-12 col-md-12 p-1">
                                <input type="text" class="form-control" placeholder="${filtro[i]["ubicacion"]}"  aria-label="Ubicación" aria-describedby="basic-addon1" disabled>
                                </div>
                                </div>
            `
    
    
    
        }
      }
    
}

async function putAplicarFiltroFacturadas(url) {
    console.log("estoy dentro de facturadas 2");
    var t=document.getElementById("rowTitulo");
    t.innerHTML=``;

            t.innerHTML =`
    
            <div class="row p-0">

                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3  text-center p-1 ">
                    <span class="text-center">Id. Avería</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-2 p-1 ">
                    <span class="">Estado</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                 <span>Fecha del parte</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <span>Fecha Realizada</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <span>Instalación</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-3 col-lg-4 col-md-12 p-1 ">
                    <span>Avería</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-3 col-lg-12 col-md-12 p-1 ">
                    <span>Ubicación</span>
                </div>
             </div>
            `
    
           
           
            var c=document.getElementById("rowCuerpo");
            c.innerHTML=``;
    
            var facturadas= await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if (response == "No se han encontrado resultados") {
                    c.innerHTML = '';
                    t.innerHTML = '';
                    alert(response);
    
                } else {
                     return(response);
                }
            })


for (let i in facturadas) {
    if ((facturadas[i]["estado"]=='ACABADA')&&(facturadas[i]["facturada"]=='true')) {
            c.innerHTML +=`
    
            <div class="row p-0">
                <div class="col-xl-1 col-lg-2 col-md-3 p-1 ml-0">
                <div class="input-group">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-warning" type="button" id="button-addon1" onclick="abrirDetalle(${facturadas[i]["id"]})"><i class="fas fa-info-circle"></i></button>
                    </div>
                    <input type="text" class="form-control" placeholder="${facturadas[i]["id"]}" id="idAveria${facturadas[i]["id"]}" aria-label="Id Avería" aria-describedby="basic-addon1" disabled>
                </div>             
                </div>
                <div class="col-xl-1 col-lg-2 col-md-2 p-1">
                    <input type="text" class="form-control" placeholder="${facturadas[i]["estado"]}"  aria-label="Estado Avería" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-2 col-md-3 p-1">
                    <input type="text" class="form-control" placeholder="${convertDate(facturadas[i]["fecha"])}"  aria-label="Fecha Inicio" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-2 col-md-3 p-1">
                    <input type="text" class="form-control" placeholder="${convertDate(facturadas[i]["fechafin"])}"  aria-label="Fecha Realizado" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-4 col-md-4 p-1">
                    <input type="text" class="form-control" placeholder="${facturadas[i]["instalacion"]}"  aria-label="Instalación" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-8 p-1">
                    <input type="text" class="form-control" placeholder="${facturadas[i]["averia"]}"  aria-label="Avería" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-12 p-1">
                    <input type="text" class="form-control" placeholder="${facturadas[i]["ubicacion"]}"  aria-label="Ubicación" aria-describedby="basic-addon1" disabled>
                </div>
            </div> 
            `
    
    
    
        }
      }
}

async function putAplicarFiltroRealizadas(url) {

    var t=document.getElementById("rowTitulo");
    t.innerHTML=``;

            t.innerHTML =`
    
            <div class="row p-0">

                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3  text-center p-1 ">
                    <span class="text-center">Id. Avería</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-2 p-1 ">
                    <span class="">Estado</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                 <span>Fecha del parte</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <span>Fecha Realizada</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <span>Instalación</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-3 col-lg-4 col-md-12 p-1 ">
                    <span>Avería</span>
                </div>
                <div class="d-none d-lg-none d-xl-block col-xl-3 col-lg-12 col-md-12 p-1 ">
                    <span>Ubicación</span>
                </div>
             </div>
            `
    
            
           
           
            var c=document.getElementById("rowCuerpo");
            c.innerHTML=``;
    
            var acabadas= await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if (response == "No se han encontrado resultados") {
                    c.innerHTML = '';
                    t.innerHTML = '';
                    alert(response);
    
                } else {
                     return(response);
                }
            })


for (let i in acabadas) {
    if ((acabadas[i]["estado"]=='ACABADA')&&(acabadas[i]["facturada"]=='false')) {
            c.innerHTML +=`
    
            <div class="row p-0">
                <div class="col-xl-1 col-lg-2 col-md-3 p-1 ml-0">
                <div class="input-group">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-warning" type="button" id="button-addon1" onclick="abrirDetalle(${acabadas[i]["id"]})"><i class="fas fa-info-circle"></i></button>
                    </div>
                    <input type="text" class="form-control" placeholder="${acabadas[i]["id"]}" id="idAveria${acabadas[i]["id"]}" aria-label="Id Avería" aria-describedby="basic-addon1" disabled>
                </div>             
                </div>
                <div class="col-xl-1 col-lg-2 col-md-2 p-1">
                    <input type="text" class="form-control" placeholder="${acabadas[i]["estado"]}"  aria-label="Estado Avería" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-2 col-md-3 p-1">
                    <input type="text" class="form-control" placeholder="${convertDate(acabadas[i]["fecha"])}"  aria-label="Fecha Inicio" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-2 col-md-3 p-1">
                    <input type="text" class="form-control" placeholder="${convertDate(acabadas[i]["fechafin"])}"  aria-label="Fecha Realizado" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-4 col-md-4 p-1">
                    <input type="text" class="form-control" placeholder="${acabadas[i]["instalacion"]}"  aria-label="Instalación" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-8 p-1">
                    <input type="text" class="form-control" placeholder="${acabadas[i]["averia"]}"  aria-label="Avería" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-12 p-1">
                    <input type="text" class="form-control" placeholder="${acabadas[i]["ubicacion"]}"  aria-label="Ubicación" aria-describedby="basic-addon1" disabled>
                </div>
            </div> 
            `
  
    
        }
      }
}

function abrirDetalle(id) {
  location.href='http://172.27.120.120/atp/public/detalleAveria.php?id='+id;
}

function getFiltroInstalacion() {
   
       var b=document.getElementById("btnFiltroInstalacion");
       
       if (b.classList.contains("text-warning")){
           b.classList.remove("text-warning");
            getPendientes();
       }else{
            b.classList.add("text-warning");
            document.getElementById("btnFiltroFecha").classList.remove("text-warning");
            document.getElementById("btnFiltroId").classList.remove("text-warning");
            //aplicarfiltro
            aplicarFiltroInstalacion();


       }

}

function getFiltroId() {
   
    var b=document.getElementById("btnFiltroId");
    
    if (b.classList.contains("text-warning")){
        b.classList.remove("text-warning");
         //borrarfiltro
         getPendientes();


    }else{
         b.classList.add("text-warning");
         document.getElementById("btnFiltroInstalacion").classList.remove("text-warning");
         document.getElementById("btnFiltroFecha").classList.remove("text-warning");
         //aplicarfiltro
         aplicarFiltroId();

    }

}

function getFiltroFecha() {
   
    var f=document.getElementById("btnFiltroFecha");
    
    if (f.classList.contains("text-warning")){
        f.classList.remove("text-warning");
        getPendientes();
         //borrarfiltro
    }else{
        f.classList.add("text-warning");
       document.getElementById("btnFiltroInstalacion").classList.remove("text-warning");
       document.getElementById("btnFiltroId").classList.remove("text-warning");

         //aplicarfiltro

         aplicarFiltroFecha();
    }

}

function borrarFiltros() {
    document.getElementById("btnFiltroInstalacion").classList.remove("text-warning");
    document.getElementById("btnFiltroId").classList.remove("text-warning");
    document.getElementById("btnFiltroFecha").classList.remove("text-warning");
    document.getElementById("btnFiltroInstalacion").classList.remove("text-warning");
    document.getElementById("btnFiltroId").classList.remove("text-warning");
    document.getElementById("btnFiltroFecha").classList.remove("text-warning");
    document.getElementById("inputFiltroInstalacion").value="";
    document.getElementById("inputFiltroFecha").value="";
    document.getElementById("inputFiltroId").value="";
}