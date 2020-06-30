<?php

include './login/session.php';

?>
<!doctype html>
<html lang="es">

<head>
   <!-- Required meta tags -->

   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <link rel="icon" href="../img/favicon.jpg" sizes="32x32" type="image/png">

   <!-- Bootstrap CSS -->
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
   <link href="../fontawesome/css/fontawesome.css" rel="stylesheet">
   <link href="../fontawesome/css/solid.css" rel="stylesheet">


   <style>
      #dropdownInstalacion,
      #dropdownElemento,
      #dropdownRegulador,
      #dropdownCruce,
      #dropdownCM,
      #dropdownNIDLed {
         height: 500px;
         overflow-y: auto;

      }

      #dropdownNID {
         overflow-y: auto;
         height: 400px;
      }

      .btn-info {
         min-height: 0px !important;
      }
   </style>

   <title>ATP</title>

</head>

<body>

   <!-- Navbar -->
   <div class="container-fluid p-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
         <a class="navbar-brand" href="#"> <img src="../img/favicon.jpg" class="img-fluid img-thumbnail mr-2"> Gestión
            de Averías</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
               <!-- <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Consultas
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                     <a class="dropdown-item" href="./consultaTipo.php">Tipo Instalación</a>
                     <a class="dropdown-item" href="./consultaTotalesTipo.php">Totales Tipo Instalación</a>
                     <a class="dropdown-item" href="./consultaTotalesLeds.php">Totales Leds</a>
                     <a class="dropdown-item" href="./consultaTotalesElementos.php">Totales Elementos</a>
                     <a class="dropdown-item" href="./consultaTotalesGrupos.php">Consulta de Cruce y total de Leds activos</a>
                     <a class="dropdown-item" href="#"></a>
                     <a class="dropdown-item" href="#"></a> 
                  </div>
               </li> -->

               <a class="nav-item nav-link active" href="./welcome.php">Listado de Averías</a>
               <a class="nav-item nav-link " href="./nuevaAveria.php">Detalle Averías</a>

               <!-- <li class="nav-item dropdown ">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     MFO
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                     <a class="dropdown-item" href="./mfo.php">MFO Cruces</a>
                     <a class="dropdown-item" href="./mfoPP.php">MFO Paso Peatones</a>
                     <a class="dropdown-item" href="./mfoEspiras.php">MFO Espiras</a>
                     <a class="dropdown-item" href="./mfoCargadores.php">MFO Cargadores</a>
                     <a class="dropdown-item" href="./mfoAcires.php">MFO Acires</a>
                  </div>
               </li> -->

               <!-- <a class="nav-item nav-link" href="./pintura.php">Pintura</a>
               <a class="nav-item nav-link" href="./preventivo.php">Preventivo</a>
               <a class="nav-item nav-link" href="./totalLed.php">Leds</a> -->

               <!-- <a class="nav-item nav-link" href="../src/config/config.php" tabindex="-1" aria-disabled="true">Configuración</a> -->
               <a class="nav-item nav-link" href="./login/logout.php" tabindex="-1" aria-disabled="true">Cerrar
                  Sesión</a>
            </div>

         </div>
      </nav>
   </div>
   <!-- Fin Navbar -->

   <!-- Saber que usuario está conectado -->
   <!-- <h4>Bienvenido <?php echo ucwords($login_session); ?></h4> -->
   <input type="hidden" id="inputIdUsuario" value="<?php echo $login_session; ?>">

   <!-- Dropdowns Menus -->
   <!-- Subtitulo -->
   <!-- <div class="container-fluid mt-0 p-1" style="background-color:#41B6FF;" id="cabecera">
      <h3><b>Instalaciones</b></h3>
   </div> -->



   <div class="container-fluid "> <!-- Container de cabecera -->
      <!-- Primera Row -->
      <div class="row ml-1">
         <div class="col-xl-2 col-lg-12 p-1">
            <span>Id. Avería</span>
            <input type="text" class="form-control mt-1 " id="inputIdAveria" placeholder=""
               aria-describedby="basic-addon1" disabled>
         </div>
         <div class="col-xl-2 col-lg-4 p-1">
            <Span>Tipo. Instalación </Span>
            <div class="input-group mt-1">
               <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                  id="inputTipoInstalacion" value="">
               <div class="input-group-append">
                  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                  <div class="dropdown-menu">

                  </div>

               </div>
            </div>
         </div>
         <div class="col-xl-2 col-lg-8 p-1">
            <Span>Instalación</Span>
            <div class="input-group mt-1">
               <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                  id="inputTipoInstalacion" value="">
               <div class="input-group-append">
                  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                  <div class="dropdown-menu">
                     <a class="dropdown-item" href="#">Action</a>
                     <a class="dropdown-item" href="#">Another action</a>
                     <a class="dropdown-item" href="#">Something else here</a>
                     <div role="separator" class="dropdown-divider"></div>
                     <a class="dropdown-item" href="#">Separated link</a>
                  </div>

               </div>
            </div>

         </div>
         <div class="col-xl-5 col-lg-12 p-1">
            <span>Ubicación</span>
            <input type="text" class="form-control mt-1" placeholder="" id="inputUbicacion" aria-label="Ubicación"
               aria-describedby="basic-addon1" disabled>
         </div>
         <div class="col-xl-1 col-lg-1 col-md-1 p-1 ">
         <span class="ml-5">Facturada</span>

                  <input type="checkbox" class="form-control mt-1" placeholder="" id="inputFacturado"
                     aria-label="Facturado" aria-describedby="basic-addon1">
         </div>
      </div>
      <!-- Segunda Row -->
      <div class="row ml-1">
         <div class="col-xl-4 col-lg-12 p-1">
            <Span>Avería</Span>
            <div class="input-group mt-1">
               <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                  id="inputAveria" value="">
               <div class="input-group-append">
                  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                  <div class="dropdown-menu">

                  </div>

               </div>
            </div>

         </div>


         <div class="col-xl-6 col-lg-12 p-1">
            <span>Observación</span>
            <input type="text" class="form-control mt-1" placeholder="" id="inputObservacion" aria-label="Ubicación"
               aria-describedby="basic-addon1">
         </div>

         <div class="col-xl-1 col-lg-4 p-1">
            <Span>NID</Span>
            <div class="input-group mt-1">
               <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                  id="inputDescripcion" value="">
               <div class="input-group-append">
                  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                  <div class="dropdown-menu">
                     <a class="dropdown-item" href="#">NID 1</a>
                     <a class="dropdown-item" href="#">NID 2</a>
                     <a class="dropdown-item" href="#">NID 3</a>
                  </div>


               </div>
            </div>
         </div>
         <div class="col-xl-1 col-lg-4 p-1 mt-1">
            <button type="button" class="btn btn-success mt-4 ">Guardar</button>
         </div>

      </div>
   </div>
   <!--Fin del container-fluid Cabecera -->


   


<div class="container-fluid bg-warning"><!-- ----------------------------------------------------- Estados -------------------------------------------------------- -->
  <hr class="border border-dark">
 
      <!-- Titulos -->
      <div id="estadosTitulos">
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
               <span class="">Observaciones</span>
            </div>
         </div>
      </div>

      <div id="estadosCuerpo">
            <!-- repeticion -->
            <div class="row ml-1">
               <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="88/88/9999 99:99" id="inputFecha"
                     aria-label="Fecha Hora" aria-describedby="basic-addon1">
               </div>
               <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="" id="inputusuario" aria-label="Usuario"
                     aria-describedby="basic-addon1" disabled>
               </div>
               <div class="col-xl-2 col-lg-2 col-md-3 p-1 ">
                  <div class="input-group mt-1">
                     <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                        id="inputEstado" value="">
                     <div class="input-group-append">
                        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                        <div class="dropdown-menu">
                           <a class="dropdown-item" href="#">PENDIENTE</a>
                           <a class="dropdown-item" href="#">ENTERADO</a>
                           <a class="dropdown-item" href="#">INICIADA</a>
                           <a class="dropdown-item" href="#">PAUSADA</a>
                           <a class="dropdown-item" href="#">ACABADA</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6 col-lg-6 col-md-5 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="" id="inputObservacion"
                     aria-label="Observacion" aria-describedby="basic-addon1">
               </div>
            </div>



            <div class="row ml-1">
               <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="88/88/9999 99:99" id="inputFecha"
                     aria-label="Fecha Hora" aria-describedby="basic-addon1">
               </div>
               <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="" id="inputusuario" aria-label="Usuario"
                     aria-describedby="basic-addon1" disabled>
               </div>
               <div class="col-xl-2 col-lg-2 col-md-3 p-1 ">
                  <div class="input-group mt-1">
                     <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                        id="inputEstado" value="">
                     <div class="input-group-append">
                        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                        <div class="dropdown-menu">
                           <a class="dropdown-item" href="#">PENDIENTE</a>
                           <a class="dropdown-item" href="#">ENTERADO</a>
                           <a class="dropdown-item" href="#">INICIADA</a>
                           <a class="dropdown-item" href="#">PAUSADA</a>
                           <a class="dropdown-item" href="#">ACABADA</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6 col-lg-6 col-md-5 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="" id="inputObservacion"
                     aria-label="Observacion" aria-describedby="basic-addon1">
               </div>
            </div>
            <!-- fin repeticion -->        
         </div>

            <!-- Nuevo -->
            
            <div class="row ml-1 mt-3 p-0 border border-dark" >
               <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="88/88/9999 99:99" id="inputFecha"
                     aria-label="Fecha Hora" aria-describedby="basic-addon1">
               </div>
               <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="" id="inputusuario" aria-label="Usuario"
                     aria-describedby="basic-addon1" disabled>
               </div>
               <div class="col-xl-2 col-lg-2 col-md-3 p-1 ">
                  <div class="input-group mt-1">
                     <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                        id="inputEstado" value="">
                     <div class="input-group-append">
                        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                        <div class="dropdown-menu">
                           <a class="dropdown-item" href="#">PENDIENTE</a>
                           <a class="dropdown-item" href="#">ENTERADO</a>
                           <a class="dropdown-item" href="#">INICIADA</a>
                           <a class="dropdown-item" href="#">PAUSADA</a>
                           <a class="dropdown-item" href="#">ACABADA</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6 col-lg-6 col-md-6 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="" id="inputObservacion"
                     aria-label="Observacion" aria-describedby="basic-addon1">
               </div>
               <div class="col-xl-1 col-lg-4 p-1 mt-1">
                  <button type="button" class="btn btn-success ">Guardar</button>
               </div>
            </div>
            <!-- Fin Nuevo -->
            <hr class="border border-dark">


   </div>



         
 
   <!------------------------------------------------------- Actuaciones ---------------------------------------------------------->
   <div class="container-fluid mt-0 bg-info text-white">
    <hr class="border border-dark">    
    <!-- Titulos -->
         <div id="actuacionesTitulos">
            <div class="row ml-1">
               <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-2 col-md-3 p-0 ">
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
               <div class="d-none d-lg-none d-xl-block col-xl-2 col-lg-4 col-md-4 p-1 ">
                  <span class="">NID</span>      
               </div>
               <div class="d-none d-lg-none d-xl-block col-xl-1 col-lg-4 col-md-4 p-1">
                  <span class="ml-3">Sí</span>       
                  <span class="ml-5">No</span>      
               </div>
            </div>
         </div>

          <!-- Cuerpo -->
         <div id="actuacionesCuerpo">
            <!-- repeticion -->
            <div class="row ml-1">
               <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="88/88/9999 99:99" id="inputFecha"
                     aria-label="Fecha Hora" aria-describedby="basic-addon1">
               </div>
               <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="" id="inputUsuario" aria-label="Usuario"
                     aria-describedby="basic-addon1" disabled>
               </div>
               <div class="col-xl-3 col-lg-4 col-md-4 p-1 ">
                  <div class="input-group mt-1">
                     <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                        id="inputActuacion" value="">
                     <div class="input-group-append">
                        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                        <div class="dropdown-menu">
                           <a class="dropdown-item" href="#">PENDIENTE</a>
                           <a class="dropdown-item" href="#">ENTERADO</a>
                           <a class="dropdown-item" href="#">INICIADA</a>
                           <a class="dropdown-item" href="#">PAUSADA</a>
                           <a class="dropdown-item" href="#">ACABADA</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 p-1 ">
                  <input type="text" class="form-control mt-1" placeholder="" id="inputObservacion"
                     aria-label="Observacion" aria-describedby="basic-addon1">
               </div>
               <div class="col-xl-2 col-lg-2 col-md-2 p-1 ">
                  <div class="input-group mt-1">
                     <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                        id="inputEstado" value="">
                     <div class="input-group-append">
                        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                        <div class="dropdown-menu">
                           <a class="dropdown-item" href="#">99999999999999</a>
                           <a class="dropdown-item" href="#">99999999999999</a>
                           <a class="dropdown-item" href="#">99999999999999</a>
                           <a class="dropdown-item" href="#">99999999999999</a>
                           <a class="dropdown-item" href="#">99999999999999</a>
                        </div>
                     </div>

                  </div>

               </div>
               <div class="col-xl-1 col-lg-1 col-md-1  p-1">
                  <div class="input-group-prepend "> 
                     <div class="input-group-text p-3">
                        <input type="checkbox" class=" " aria-label="Checkbox for following text input"> 
                        <input type="checkbox" class="ml-5" aria-label="Checkbox for following text input">
                     </div>
                  </div>

               </div>
            </div>


            <!-- fin repeticion -->

         </div>

               <!-- Nuevo -->
     
      <div class="row ml-1 mt-0 p-0 border border-white">
         <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
            <input type="text" class="form-control mt-1" placeholder="88/88/9999 99:99" id="inputFecha"
               aria-label="Fecha Hora" aria-describedby="basic-addon1">
         </div>
         <div class="col-xl-1 col-lg-2 col-md-3 p-1 ">
            <input type="text" class="form-control mt-1" placeholder="" id="inputUsuario" aria-label="Usuario"
               aria-describedby="basic-addon1" disabled>
         </div>
         <div class="col-xl-3 col-lg-4 col-md-4 p-1 ">
            <div class="input-group mt-1">
               <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                  id="inputActuacion" value="">
               <div class="input-group-append">
                  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                  <div class="dropdown-menu">
                     <a class="dropdown-item" href="#">PENDIENTE</a>
                     <a class="dropdown-item" href="#">ENTERADO</a>
                     <a class="dropdown-item" href="#">INICIADA</a>
                     <a class="dropdown-item" href="#">PAUSADA</a>
                     <a class="dropdown-item" href="#">ACABADA</a>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-xl-4 col-lg-4 col-md-4 p-1 ">
            <input type="text" class="form-control mt-1" placeholder="" id="inputObservacion"
               aria-label="Observacion" aria-describedby="basic-addon1">
         </div>
         <div class="col-xl-2 col-lg-2 col-md-2 p-1 ">
            <div class="input-group mt-1">
               <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                  id="inputEstado" value="">
               <div class="input-group-append">
                  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                  <div class="dropdown-menu">
                     <a class="dropdown-item" href="#">99999999999999</a>
                     <a class="dropdown-item" href="#">99999999999999</a>
                     <a class="dropdown-item" href="#">99999999999999</a>
                     <a class="dropdown-item" href="#">99999999999999</a>
                     <a class="dropdown-item" href="#">99999999999999</a>
                  </div>
               </div>
               <button type="button" class="btn btn-success ml-5 ">Guardar</button>
            </div>

         </div>
      </div>
  <hr class="border border-dark">
    
      <!-- Fin Nuevo -->
      </div>



      <!-- Formulario footer Nuevo-->
      <div class="mt-2 p-2 fixed-bottom" id="formFooter">
         <img src="../img/logoajuntament.jpg" alt="" class="img-fluid float-right" style="height:50px">
      </div>
      <!-- fin formulario Footer-->


      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
         integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
      </script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
         integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
      </script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
         integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous">
      </script>


      <script src="../js/nuevaAveria.js"></script>
      <script src="../js/tablas.js"></script>

</body>
<!--Fin del Body -->

</html>