recargar(document.getElementById("inputId").value);



async function recargar(id){
  await  getAveria(id);
  await   getEstado(id);
  await getActuacion(id);  
}

async function getAveria(id){


    var url = 'http://172.27.120.120/atp/public/api/averias/detalle/'+id;

   
    
    var detalle= await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        if (response == "No se han encontrado resultados") {

            r.innerHTML = '';
            alert(response);

        } else {
             return(response);
        }
    })

    if (detalle[0]["facturada"]=="true") {
        var facturada=`<input type="checkbox" class="form-control mt-1" value="" id="inputFacturado"
        aria-label="Facturado" aria-describedby="basic-addon1" checked disabled>`;
        } else {
        var facturada=`<input type="checkbox" class="form-control mt-1" value="" id="inputFacturado"
        aria-label="Facturado" aria-describedby="basic-addon1">`;
    }


    var r=document.getElementById("detalleAveria");
    r.innerHTML=``;
    r.innerHTML =`
                <div class="row ml-1">
                    <div class="col-xl-1 col-lg-12 p-1">
                        <span>Id. Avería</span>
                        <input type="text" class="form-control mt-1 " id="inputIdAveria" value="${detalle[0]["id"]}"
                            aria-describedby="basic-addon1" disabled>
                    </div>
                    <div class="col-xl-1 col-lg-2  p-1">
                        <span>Fecha</span>
                        <input type="text" class="form-control mt-1" value="${convertDate(detalle[0]["fecha"])}" aria-label="" aria-describedby="basic-addon1" disabled>
                    </div>
                    <div class="col-xl-2 col-lg-4 p-1">
                        <Span>Tipo. Instalación </Span>
                        <div class="input-group mt-1">
                            <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"  value="${detalle[0]["tipoInstalacion"]}"
                                id="inputTipoInstalacion" disabled>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-8 p-1">
                        <Span>Instalación</Span>
                        <input type="text" class="form-control mt-1" aria-label="Text input with segmented dropdown button" id="inputInstalacion" value="${detalle[0]["instalacion"]}" disabled>
                    </div>
                    <div class="col-xl-5 col-lg-12 p-1">
                        <span>Ubicación</span>
                        <input type="text" class="form-control mt-1" value="${detalle[0]["ubicacion"]}" id="inputUbicacion" aria-label="Ubicación" aria-describedby="basic-addon1" disabled>
                    </div>
                <div class="col-xl-1 col-lg-1 col-md-1 p-1 ">
                    <span class="ml-5">Facturada</span>
                            ${facturada}
                </div>
            </div>
            <!-- Segunda Row -->
            <div class="row ml-1">
                    <div class="col-xl-4 col-lg-12 p-1">
                    <Span>Avería</Span>
                        <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" value="${detalle[0]["averia"]}"
                            id="" value="" disabled>

                    </div>

                    <div class="col-xl-6 col-lg-12 p-1">
                    <span>Observación</span>
                    <input type="text" class="form-control" value="${detalle[0]["observacion"]}" id="inputObservacion" aria-label=""
                        aria-describedby="basic-addon1" disabled>
                    </div>

                    <div class="col-xl-1 col-lg-4 p-1">
                    <Span>NID</Span>
                        <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                        value="${detalle[0]["nid"]}" value="" disabled>
                    </div>
                    <div class="col-xl-1 col-lg-2 p-1">
                    <Span>Usuario</Span>
                        <input type="text" class="form-control" value="${detalle[0]["usuario"]}"  aria-label="Usuario" aria-describedby="basic-addon1" disabled>
                    </div>
                </div>
             
             `
    
}


async function getEstado(id) {
    
    var url = 'http://172.27.120.120/atp/public/api/averias/estado/'+id;
    var estado= await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        if (response == "No se han encontrado resultados") {
         
            alert(response);

        } else {
             return(response);
        }
    })

    // agregar titulos
    var t=document.getElementById("estadosTitulos");
    t.innerHTML=`         
    <div class="row ml-1">
        <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
            <span>Fecha - Hora</span>
        </div>
        <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
            <span>Usuario</span>
        </div>
        <div class="d-none d-lg-none d-xl-block col-xl-2 col-lg-4 col-md-4 p-1 ">
            <span class="">Estado</span>
        </div>
        <div class="d-none d-lg-none d-xl-block col-xl-6 col-lg-4 col-md-4 p-1 ">
            <span class="">Descripción</span>
        </div>
    </div>
    <hr class="m-0 mt-0 border border-dark">
    
    `;
    
    var r= document.getElementById("estadosCuerpo");
        r.innerHTML=``;
        r.innerHTML +=`
        
        <div class="row ml-1 mb-0 p-0" >
            <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                <input type="text" class="form-control mt-1" value="" id="inputFechaEstado" aria-label="Fecha Hora" aria-describedby="basic-addon1" disabled>
            </div>
            <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                <input type="text" class="form-control mt-1" value="" id="inputUsuarioEstado" aria-label="Usuario" aria-describedby="basic-addon1" disabled>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3 p-1 ">
                <div class="input-group mt-1">
                    <input type="text" class="form-control"  aria-label="Text input with segmented dropdown button"  id="inputEstado" value="" disabled>
                        <div class="input-group-append">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                                <div class="dropdown-menu">
                                    <button class="dropdown-item" onclick="putEstado(this.innerText)">PENDIENTE</button>
                                    <button class="dropdown-item" onclick="putEstado(this.innerText)">ENTERADO</button>
                                    <button class="dropdown-item" onclick="putEstado(this.innerText)">INICIADA</button>
                                    <button class="dropdown-item" onclick="putEstado(this.innerText)">PAUSADA</button>
                                    <button class="dropdown-item" onclick="putEstado(this.innerText)">ACABADA</button>
                                </div>
                        </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 p-1 ">
                <input type="text" class="form-control mt-1" value="" id="inputDescripcionEstado" aria-label="Descripcion" aria-describedby="basic-addon1">
            </div>
            <div class="col-xl-1 col-lg-4 p-1 mt-1">
                <button type="button" class="btn btn-success " onclick="nuevoEstado()" >Guardar</button>
            </div>
        </div>
        <hr class="m-0 mt-1 border border-dark">
        `;
        for (let i in estado) {   
        r.innerHTML +=`
            <div class="row ml-1">
                <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <input type="text" class="form-control " value="${convertDate(estado[i]["fecha"])}" aria-label="Fecha Hora" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                     <input type="text" class="form-control " value="${estado[i]["usuario"]}" aria-label="Usuario" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 p-1 ">
                    <input type="text" class="form-control " value="${estado[i]["estado"]}" value="" disabled>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 p-1 ">
                    <input type="text" class="form-control " value="${estado[i]["descripcion"]}"  aria-label="Descripcion" aria-describedby="basic-addon1" disabled>
                </div>
            </div>
        `;
    }




}

async function getActuacion(id) {

        var tipo=document.getElementById("inputTipoInstalacion").value.substring(0,5);
        //console.log(tipo);
        //busca los tiposdeactuacion
      
      
       var url = 'http://172.27.120.120/atp/public/api/averias/tipoactuacion/'+tipo;
       var tipoActuacion= await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            if (response == "No se han encontrado resultados") {
            

            } else {
              
                return response;
            }
        })

       // var tipoActuacion=await getTipoActuacion(tipo);
       //         console.log(tipoActuacion);

        var listTipoActuacion='';
        for (let i in tipoActuacion) {
    
            listTipoActuacion += '<button class="dropdown-item" onclick="putActuacion(this.innerText)">'+tipoActuacion[i]["tipoaveria"]+'</button>'    
        }
    
        //busca los nid si es un cruce
        var tipo=document.getElementById("inputTipoInstalacion").value.substring(0,5);
       
        if (tipo=="CRUCE") {

            var idCruce=document.getElementById("inputInstalacion").value;
            
            
            var url = 'http://172.27.120.120/gestin/public/api/nid/'+idCruce;
            var nid= await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if (response == "No se han encontrado resultados") {
                  
        
                } else {
                  
                     return(response);
                }
            })

            var listNid='';
            for (let i in nid) {
                listNid += '<button class="dropdown-item" onclick="putNid(this.innerText)">'+nid[i]["nid"]+'</button>'  ;  
            }
        }

       
    
    var url = 'http://172.27.120.120/atp/public/api/averias/actuacion/'+id;
    var actuacion= await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        if (response == "No se han encontrado resultados") {
          

        } else {
             return(response);
        }
    })

    //agregar titulos
    var t= document.getElementById("actuacionesTitulos");
    t.innerHTML=`
    <div class="row ml-1">
        <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
            <span>Fecha - Hora</span>
        </div>
        <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-1 ">
            <span>Usuario</span>
        </div>
        <div class="d-none d-lg-none d-xl-block col-xl-3 col-lg-4 col-md-4 p-1 ">
         <span class="">Actuación</span>
        </div>
        <div class="d-none d-lg-none d-xl-block col-xl-4 col-lg-4 col-md-4 p-1 ">
            <span class="">Observaciones</span>
        </div>
        <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-4 col-md-4 p-1 ">
            <span class="">NID</span>      
        </div>

    </div>
    
    `;

    var r= document.getElementById("actuacionesCuerpo");
        r.innerHTML=``;
        

            //agregar nuevo

            r.innerHTML +=`

            <hr class="m-0 mt-1 border border-white">
    
            <div class="row ml-1">
            <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
            <input type="text" class="form-control mt-1" value="" id="inputFechaActuacion"
                aria-label="Fecha Hora" aria-describedby="basic-addon1" disabled>
            </div>
            <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
            <input type="text" class="form-control mt-1" value="" id="inputUsuario" aria-label="Usuario"
                aria-describedby="basic-addon1" disabled>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-4 p-1 ">
            <div class="input-group mt-1">
                <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                    id="inputActuacion" value="" disabled>
                <div class="input-group-append">
                    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                    <div class="dropdown-menu" id="dropdownListTipoActuacion">
                            `+listTipoActuacion+`
    
                    </div>
                </div>
            </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 p-1 ">
            <input type="text" class="form-control mt-1" value="" id="inputObservacionActuacion"
                aria-label="Observacion" aria-describedby="basic-addon1">
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 p-1 ">
            <div class="input-group mt-1">
                <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                    id="inputNID" value="" disabled>
                <div class="input-group-append">
                    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                    <div class="dropdown-menu" id="dropdownNID">
                        `+listNid+`
                    </div>
                </div>
                <button type="button" class="btn btn-warning ml-5" onclick="nuevaActuacion()">Guardar</button>
            </div>
    
            </div>
            </div>
            <hr class="m-0 mt-1 mb-1 border border-white">
    `;

        //agregar contenido
        //rellena el facturable 
    for (let i in actuacion) {   


                if (actuacion[i]["facturable"]=="si") {
                    
                    var facturable=`<span class="">Sí</span><input class="mr-4 ml-2" type="checkbox" id="inputFacturableSi${actuacion[i].id}" aria-label="Radio button for following text input" checked>
                                    <span class="">No</span><input type="checkbox" class="ml-2" id="inputFacturableNo${actuacion[i].id}" aria-label="Radio button for following text input">
                    `;
                }   
                if (actuacion[i]["facturable"]=='no') {
                    var facturable=`<span class="">Sí</span><input class="mr-4 ml-2" type="checkbox" id="inputFacturableSi${actuacion[i].id}" aria-label="Radio button for following text input">
                                    <span class="">No</span><input type="checkbox" class="ml-2" id="inputFacturableNo${actuacion[i].id}" aria-label="Radio button for following text input" checked>`;
                } 
                if (actuacion[i]["facturable"]==null) {
                    var facturable=`<span class="">Sí</span><input class="mr-4  ml-2" type="checkbox" id="inputFacturableSi${actuacion[i].id}" aria-label="Radio button for following text input">
                                    <span class="">No</span><input type="checkbox" class="ml-2" id="inputFacturableNo${actuacion[i].id}" aria-label="Radio button for following text input">`;
                } 



        r.innerHTML +=`
            <div class="row ml-1">
                <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <input type="text" class="form-control mt-0" value="${convertDate(actuacion[i]["fecha"])}" aria-label="Fecha Hora" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                    <input type="text" class="form-control mt-0" value="${actuacion[i]["usuario"]}"  aria-label="Usuario" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-4 p-1 ">
                    <input type="text" class="form-control mt-0" value="${actuacion[i]["actuacion"]}" aria-label="Text input with segmented dropdown button" value="" disabled>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 p-1 ">
                    <input type="text" class="form-control mt-0" value="${actuacion[i]["observaciones"]}" aria-label="Observacion" aria-describedby="basic-addon1" disabled>
                </div>
                <div class="col-xl-1 col-lg-2 col-md-2 p-1 ">
                    <input type="text" class="form-control mt-0" value="${actuacion[i]["nid"]}" aria-label="Text input with segmented dropdown button" value="" disabled>
                </div>
                <div class="col-xl-2 col-lg-1 col-md-1 p-1 mt-0">
                    <div class="input-group p-0 ml-1">
                        <div class="input-group-prepend">
                             <div class="input-group-text ">
                                    `+ facturable +`
                             </div>
                         </div>
                         <button class="btn btn-outline-warning ml-4" type="button" id="button-addon1"><i class="fas fa-save"></i></button>
                    </div>
                </div>

            </div>
        
        
        
        `;
    }


    





    
}

async function getNIDs() {


}

async function getTipoActuacion(tipo) {
        //CREA UNA CONSULTA DE CATEGORIAS QUE HAY ACTUACIONES SEGUN EL TIPO DE ISNTALCION ELEGIDO EN AVERIA
        //CREA UN ARRAY DE ACTUACIONES E INSERTARLO EN EL DROPDOWN MENU    


        var url = 'http://172.27.120.120/atp/public/api/averias/tipoactuacion/'+tipo;
        await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            if (response == "No se han encontrado resultados") {
            

            } else {
              
                return response;
            }
        })
}






async function nuevoEstado() {

    var m = new Date();
    var dateString =
    m.getFullYear() + "/" +
    ("0" + (m.getMonth()+1)).slice(-2) + "/" +
    ("0" + m.getDate()).slice(-2) + " " +
    ("0" + m.getHours()).slice(-2) + ":" +
    ("0" + m.getMinutes()).slice(-2) + ":" +
    ("0" + m.getSeconds()).slice(-2);
    

    var fecha = dateString;
    var usuario = document.getElementById('inputIdUsuario').value;
    var estado =  document.getElementById('inputEstado').value;
    var descripcion =  document.getElementById('inputDescripcionEstado').value;
    var idaveria = document.getElementById('inputIdAveria').value;


    // console.log(usuario);
    // console.log(fecha);
    // console.log(estado);
    // console.log(descripcion);
    // console.log(idaveria);


    var url = 'http://172.27.120.120/atp/public/api/nuevo/estado2';

     await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idaveria: idaveria,
                    fecha: fecha,
                    estado: estado,
                    descripcion: descripcion.toUpperCase(),
                    usuario: usuario

                    //  idaveria:1, //idaveria,
                    //  fecha:"2020/01/19 10:00", //fecha,
                    //  estado: "estadoDAvid",//estado,
                    //  descripcion:"descripcion David", //descripcion,
                    //  idUsuario: "dtrillo"//usuario
                })
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                // alert(response)
            })

        recargar(document.getElementById("inputId").value);
}





async function nuevaActuacion() {

    var m = new Date();
    var dateString =
    m.getFullYear() + "/" +
    ("0" + (m.getMonth()+1)).slice(-2) + "/" +
    ("0" + m.getDate()).slice(-2) + " " +
    ("0" + m.getHours()).slice(-2) + ":" +
    ("0" + m.getMinutes()).slice(-2) + ":" +
    ("0" + m.getSeconds()).slice(-2);
    

    var fecha = dateString;
    var usuario = document.getElementById('inputIdUsuario').value;
    var actuacion =  document.getElementById('inputActuacion').value;
    var observaciones =  document.getElementById('inputObservacionActuacion').value;
    var idaveria = document.getElementById('inputIdAveria').value;
    var nid = document.getElementById('inputNID').value;


    // console.log(usuario);
    // console.log(fecha);
    // console.log(actuacion);
    // console.log(observaciones);
    // console.log(idaveria);
    // console.log(nid);


    var url = 'http://172.27.120.120/atp/public/api/nuevo/actuacion';

     await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idaveria: idaveria,
                    fecha: fecha,
                    actuacion: actuacion,
                    observaciones: observaciones.toUpperCase(),
                    usuario: usuario,
                    nid:nid

                    //  idaveria:1, //idaveria,
                    //  fecha:"2020/01/19 10:00", //fecha,
                    //  estado: "estadoDAvid",//estado,
                    //  descripcion:"descripcion David", //descripcion,
                    //  idUsuario: "dtrillo"//usuario
                })
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                alert(response)
            })

                recargar(document.getElementById("inputId").value);

}










function putEstado(item) {
    var p=document.getElementById("inputEstado");
    p.value=item;

}

function putActuacion(item) {
    var p=document.getElementById("inputActuacion");
    p.value=item;

}

function putNid(item) {
    var p=document.getElementById("inputNID");
    p.value=item;

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