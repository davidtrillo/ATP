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
      #dropdownListTipoActuacion {
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

               <a class="nav-item nav-link " href="./welcome.php">Listado de Averías</a>
               <a class="nav-item nav-link " href="./nuevaAveria.php">Nueva Avería</a>

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
  
   <input type="hidden" id="inputId" value="<?php echo $_GET['id']; ?>">

   <!-- Dropdowns Menus -->
   <!-- Subtitulo -->
   <!-- <div class="container-fluid mt-0 p-1" style="background-color:#41B6FF;" id="cabecera">
      <h3><b>Instalaciones</b></h3>
   </div> -->

<div class="container-fluid " id="general"> <!-- Container de General -->
      <!-- Primera Row -->
      
    

       <div class="container-fluid " id="detalleAveria"> <!-- Container de cabecera -->
      <!-- Primera Row -->
      
      </div>
       <!--Fin del container-fluid Cabecera -->


   


         <div class="container-fluid bg-warning p-0"><!-- ----------------------------------------------------- Estados -------------------------------------------------------- -->
          <hr class="border border-dark">     
               <!-- Titulos -->
               <div id="estadosTitulos">

               </div>

               <div id="estadosCuerpo">
                     <!-- repeticion -->
                     <!-- fin repeticion -->        
               </div>

               <hr class="m-0 border border-dark">
         </div>

   <!------------------------------------------------------- Actuaciones ---------------------------------------------------------->
            <div class="container-fluid mt-0 bg-info text-white p-0">
                  <hr class="border border-dark">    
                     <!-- Titulos -->
                  <div id="actuacionesTitulos" >

                  </div>

                  <!-- Cuerpo -->
                  <div id="actuacionesCuerpo" class="">
                     <!-- repeticion -->
                     <!-- fin repeticion -->
                  </div>

                  <hr class="m-0 border border-dark">
         
            </div>
               <!------------------------------------------------------- Materiales ---------------------------------------------------------->
               <div class="container-fluid mt-0 bg-light text-dark p-0">
                  <hr class="border border-dark">    
                     <!-- Titulos -->
                  <div id="materialesTitulos" >

                  </div>

                  <!-- Cuerpo -->
                  <div id="materialesCuerpo" class="">
                     <!-- repeticion -->
                     <!-- fin repeticion -->
                  </div>

                  <hr class="m-0 border border-dark">
         
            </div>

</div> <!-- Fin General -->



      <!-- Formulario footer Nuevo-->
      <!-- <div class="mt-2 p-2 fixed-bottom" id="formFooter">
         <img src="../img/logoajuntament.jpg" alt="" class="img-fluid float-right" style="height:50px">
      </div> -->
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


      <script src="../js/detalleAveria.js"></script>
      

</body>
<!--Fin del Body -->

</html>