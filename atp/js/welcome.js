async function getPendientes(){

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
    if (pendientes[i]["estado"]!='ACABADA') {
      
        
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
    if (acabadas[i]["estado"]=='ACABADA') {
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