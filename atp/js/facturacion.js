


async function generar(){

usuario=document.getElementById("inputIdUsuario").value;

//comprobar rol
        var url = 'http://172.27.120.120/atp/public/api/rol/'+usuario;
                    
        var rol= await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if (response == "No se han encontrado resultados") {

                    return(response);

                } else {
                    return(response);
                }
            })

    if(rol[0]['rol']=="facturar"){
        var fechaIni=document.getElementById("inputFechaIncio").value;
        var fechaFin=document.getElementById("inputFechaFin").value;
      

            //comprobar fechas
        


            if (fechaIni<fechaFin) {
                console.log("holis2")
            }

    }

}