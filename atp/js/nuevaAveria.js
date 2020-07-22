
getTipoInstalación();

async function putTipoInstalacion(tipo){

    var i=document.getElementById("inputInstalacion");
    if (i.value!=""){
        i.value="";
    };

    var u=document.getElementById("inputUbicacion");
    if (u.value!=""){
        u.value="";
    };

    var a=document.getElementById("inputAveria");
    if (a.value!=""){
        a.value="";
    };
    
    var n=document.getElementById("inputNID");
    if (n.value!=""){
        n.value="";
    };
    
    var t=document.getElementById("inputTipoInstalacion");
        t.value=tipo;


    getInstalacion(tipo);
    getTipoAveria(tipo);
}

async function putInstalacion(tipo,ubicacion){
    var t=document.getElementById("inputInstalacion");
    t.value=tipo;
    var u=document.getElementById("inputUbicacion");
    u.value=ubicacion;

    var url = 'http://172.27.120.120/atp/public/api/averias/instalacion/'+tipo;
    var count= await fetch(url, {
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
     if (count[0]["count(a.id)"]>0) {
        alert("Hay "+ count[0]["count(a.id)"] +" avería/s abierta/s")   ;
     }
    await getNID(tipo);
}

async function putTipoAveria(tipo){
    var t=document.getElementById("inputAveria");
    t.value=tipo;
}

async function getNID(idCruce){
    var tipo=document.getElementById("inputTipoInstalacion").value.substring(0,5);

    if (tipo=="CRUCE") {

       //var idCruce=document.getElementById("inputInstalacion").value;
        
        
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
        document.getElementById("dropdownListNID").innerHTML=listNid;  

    }else{
        document.getElementById("dropdownListNID").innerHTML=""; 
    }



}


async function getTipoAveria(tipo){
    //var tipo=document.getElementById("inputTipoInstalacion").value.substring(0,5);
     //busca los tiposdeaverias
  
   var url = 'http://172.27.120.120/atp/public/api/averias/tipoaveria/'+tipo;
   var tipoAveria= await fetch(url, {
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

    var listTipoAveria='';
    for (let i in tipoAveria) {

        listTipoAveria += '<button class="dropdown-item" onclick="putTipoAveria(this.innerText)">'+tipoAveria[i]["tipoaveria"]+'</button>'    
    }
    document.getElementById("dropdownListTipoAveria").innerHTML=listTipoAveria;  
}

async function getTipoInstalación() {

    var url = 'http://172.27.120.120/atp/public/api/tipoinstalacion';
     tipoInstalacion= await fetch(url, {
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

    var listTipoInstalacion='';
    for (let i in tipoInstalacion) {

        listTipoInstalacion += '<button class="dropdown-item" onclick="putTipoInstalacion(this.innerText)">'+tipoInstalacion[i]["tipoInstalacion"]+'</button>';   
    }


    document.getElementById("dropdownListTipoInstalacion").innerHTML=listTipoInstalacion;



}

async function getInstalacion(tipo) {

    var url = 'http://172.27.120.120/atp/public/api/instalaciones/'+tipo;
     instalacion= await fetch(url, {
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

    var listInstalacion='';
    for (let i in instalacion) {

        listInstalacion += '<button class="dropdown-item" onclick="putInstalacion(this.value, this.name)" name="'+instalacion[i]["ubicacion"]+'" value="'+instalacion[i]["id"]+'">'+instalacion[i]["id"]+'-'+instalacion[i]["ubicacion"]+'</button>';   
    }


    document.getElementById("dropdownListInstalacion").innerHTML=listInstalacion;



}

async function getTipoActuacion(tipo) {
         //CREA UNA CONSULTA DE CATEGORIAS QUE HAY ACTUACIONES SEGUN EL TIPO DE ISNTALCION ELEGIDO EN AVERIA
         //CREA UN ARRAY DE ACTUACIONES E INSERTARLO EN EL DROPDOWN MENU    
         var url = 'http://172.27.120.120/atp/public/api/averias/tipoaveria/'+tipo;
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

async function nuevaAveria() {

    var m = new Date();
    var dateString =
    m.getFullYear() + "/" +
    ("0" + (m.getMonth()+1)).slice(-2) + "/" +
    ("0" + m.getDate()).slice(-2) + " " +
    ("0" + m.getHours()).slice(-2) + ":" +
    ("0" + m.getMinutes()).slice(-2) + ":" +
    ("0" + m.getSeconds()).slice(-2);
    

    var instalacion = document.getElementById('inputInstalacion').value;
    var averia =  document.getElementById('inputAveria').value;
    var observacion =  document.getElementById('inputObservacion').value;
    var nid = document.getElementById('inputNID').value;
    var usuario = document.getElementById('inputIdUsuario').value;
    var fecha = dateString;
    var facturada = "false";
    var ubicacion = document.getElementById('inputUbicacion').value;
    var tipoInstalacion = document.getElementById('inputTipoInstalacion').value;


    // console.log(usuario);
    // console.log(fecha);
    // console.log(actuacion);
    // console.log(observaciones);
    // console.log(idaveria);
    // console.log(nid);


    var url = 'http://172.27.120.120/atp/public/api/nuevo/averia';

     await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    instalacion: instalacion,
                    averia: averia,
                    observacion: observacion.toUpperCase(),
                    nid:nid,
                    usuario: usuario,
                    fecha: fecha,
                    facturada: facturada,
                    ubicacion: ubicacion,
                    tipoInstalacion: tipoInstalacion

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

                //averiguar la idaveria para dar de alta un nuevo estado
                var url = 'http://172.27.120.120/atp/public/api/averias/ultima';

                var ultima= await fetch(url, {
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

                
                //creamos una nueva actuacion
                var url = 'http://172.27.120.120/atp/public/api/nuevo/estado2';

                await fetch(url, {
                           method: 'POST',
                           headers: {
                               'Content-Type': 'application/json'
                           },
                           body: JSON.stringify({
                               idaveria: ultima[0]["id"],
                               fecha: fecha,
                               estado: "PENDIENTE",
                               descripcion: "",
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
                        location.href ="http://172.27.120.120/atp/public/welcome.php";
                       })



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