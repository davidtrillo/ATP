<?php
 use Psr\Http\Message\ServerRequestInterface as Request;
 use Psr\Http\Message\ResponseInterface as Response;






//$app = new \Slim\App;

//GET Todas las instalaciones SELECT


$app->get('/api/averias/pendientes',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    //$sql="SELECT a.id, t.estado, a.fecha, a.instalacion,a.averia,a.ubicacion FROM atp.averia a inner join atp.estado t on a.id=t.idaveria where t.estado<>'ACABADA' order by 3 desc;";
    $sql="SELECT a.id, t.estado, a.fecha,t.fecha as fechafin , a.instalacion,a.averia,a.ubicacion,a.facturada FROM atp.averia a inner join atp.estado t on a.id=t.idaveria WHERE t.id IN (SELECT MAX(id) FROM atp.estado GROUP BY idaveria) ORDER BY t.id DESC";
    
    
    
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/averias/detalle/{id}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $id= $request->getAttribute('id');
    $sql="SELECT * FROM atp.averia WHERE id=".$id.";";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/averias/estado/{id}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $id= $request->getAttribute('id');
    $sql="SELECT * FROM atp.estado WHERE idaveria=".$id." order by fecha desc;";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/averias/actuacion/{id}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $id= $request->getAttribute('id');
    $sql="SELECT * FROM atp.actuacion WHERE idaveria=".$id." order by fecha desc;";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/averias/tipoaveria/{tipo}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $id= $request->getAttribute('tipo');
    $tipo=substr($id,0,5);
    
    $sql="SELECT tipoaveria FROM atp.tipoaveria where categoria LIKE '%".$tipo."%';";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/averias/tipoactuacion/{tipo}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $tipo= $request->getAttribute('tipo');
    $tipo=substr($tipo,0,5);
    
    $sql="SELECT tipoactuacion, partida FROM atp.tipoactuacion where categoria LIKE '%".$tipo."%' ORDER BY tipoactuacion;";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/averias/instalacion/{id}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $id= $request->getAttribute('id');
 
    $sql="SELECT count(a.id) FROM atp.averia a  join atp.estado e on  a.id=e.idaveria where instalacion='".$id."' and e.estado<>'ACABADA' ;";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/averias/ultima',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    //$id= $request->getAttribute('tipo');
    $sql="SELECT id FROM atp.averia order by id desc limit 1";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/filtro/pendientes/instalacion/{id}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $id= $request->getAttribute('id');
    $sql="SELECT a.id, t.estado, a.fecha,t.fecha as fechafin , a.instalacion,a.averia,a.ubicacion,a.facturada FROM atp.averia a inner join atp.estado t on a.id=t.idaveria WHERE (t.id IN (SELECT MAX(id) FROM atp.estado GROUP BY idaveria)) and (a.instalacion='".$id."' ) ORDER BY t.id DESC";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/filtro/pendientes/fecha/{fecha}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $fecha= $request->getAttribute('fecha');
    $sql="SELECT a.id, t.estado, a.fecha,t.fecha as fechafin , a.instalacion,a.averia,a.ubicacion,a.facturada FROM atp.averia a inner join atp.estado t on a.id=t.idaveria WHERE (t.id IN (SELECT MAX(id) FROM atp.estado GROUP BY idaveria)) and (a.fecha like '".$fecha."%' ) ORDER BY t.id DESC";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/filtro/pendientes/id/{id}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $id= $request->getAttribute('id');
    $sql="SELECT a.id, t.estado, a.fecha,t.fecha as fechafin , a.instalacion,a.averia,a.ubicacion,a.facturada FROM atp.averia a inner join atp.estado t on a.id=t.idaveria WHERE (t.id IN (SELECT MAX(id) FROM atp.estado GROUP BY idaveria)) and (a.id = '".$id."' ) ORDER BY t.id DESC";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/filtro/sino/{id}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $id= $request->getAttribute('id');
    $sql="SELECT count(*) as c FROM atp.actuacion where idaveria='".$id."' and isnull(facturable);";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/rol/{usuario}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $usuario= $request->getAttribute('usuario');
    $sql="SELECT rol FROM atp.rol where usuario='".$usuario."';";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
           echo json_encode("No se han encontrado resultados",JSON_UNESCAPED_UNICODE);
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->put('/api/modificar/{id}', function (Request $request, Response $response) {
    //declaracion de las variables de recepcion desde FRONT

    $id = $request->getAttribute('id'); // PARA RECUPERAR LA ID DEL REGISTRO QUE SE VA A HACER UPDATE
    $hoy = date("Y-m-d H:i:s");

    // echo "todas las instalaciones";

    //  $sql='UPDATE 12_bici SET idTipoActuacion=:idtipoActuacion,idNumSerie=:idNumSerie,idUsuario=:idUsuario,observaciones=:observaciones,fechaActuacion=:fechaActuacion,precio=:precio,activo=:activo WHERE id='.$id;
    $sql = "UPDATE atp.averia SET facturada = 'true', fechafacturada='".$hoy."' WHERE (id ='".$id."' )";

    try {
        $db = new db();
        $db = $db->conectDB();
        $resultado = $db->prepare($sql);

        //Asignar campos del SQL a las variables obtenidas
       // $resultado->bindParam(':id',$id);
        // $resultado->bindParam(':idTipoActuacion', $idTipoActuacion);
        // $resultado->bindParam(':idNumSerie', $idNumSerie);
        // $resultado->bindParam(':albaran', $albaran);
        // $resultado->bindParam(':observaciones', $observaciones);
        // $resultado->bindParam(':fechaActuacion', $fechaActuacion);
        // $resultado->bindParam(':idUsuario', $idUsuario);
        // $resultado->bindParam(':precio', $precio);
        // $resultado->bindParam(':activo', $activo);

        $resultado->execute();
        echo json_encode("FACTURADA", JSON_UNESCAPED_UNICODE);

        $resultado = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error":{"text":' . $e->getMessage() . '}';
    }
});

$app->put('/api/modificarfacturablesi/{id}', function (Request $request, Response $response) {
    //declaracion de las variables de recepcion desde FRONT

    $id = $request->getAttribute('id'); // PARA RECUPERAR LA ID DEL REGISTRO QUE SE VA A HACER UPDATE

    // echo "todas las instalaciones";

    //  $sql='UPDATE 12_bici SET idTipoActuacion=:idtipoActuacion,idNumSerie=:idNumSerie,idUsuario=:idUsuario,observaciones=:observaciones,fechaActuacion=:fechaActuacion,precio=:precio,activo=:activo WHERE id='.$id;
    $sql = "UPDATE atp.actuacion SET facturable = 'si' WHERE (id ='".$id."' )";

    try {
        $db = new db();
        $db = $db->conectDB();
        $resultado = $db->prepare($sql);

        //Asignar campos del SQL a las variables obtenidas
       // $resultado->bindParam(':id',$id);
        // $resultado->bindParam(':idTipoActuacion', $idTipoActuacion);
        // $resultado->bindParam(':idNumSerie', $idNumSerie);
        // $resultado->bindParam(':albaran', $albaran);
        // $resultado->bindParam(':observaciones', $observaciones);
        // $resultado->bindParam(':fechaActuacion', $fechaActuacion);
        // $resultado->bindParam(':idUsuario', $idUsuario);
        // $resultado->bindParam(':precio', $precio);
        // $resultado->bindParam(':activo', $activo);

        $resultado->execute();
            echo json_encode("ok", JSON_UNESCAPED_UNICODE);

        $resultado = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error":{"text":' . $e->getMessage() . '}';
    }
});

$app->put('/api/modificarfacturableno/{id}', function (Request $request, Response $response) {
    //declaracion de las variables de recepcion desde FRONT

    $id = $request->getAttribute('id'); // PARA RECUPERAR LA ID DEL REGISTRO QUE SE VA A HACER UPDATE

    // echo "todas las instalaciones";

    //  $sql='UPDATE 12_bici SET idTipoActuacion=:idtipoActuacion,idNumSerie=:idNumSerie,idUsuario=:idUsuario,observaciones=:observaciones,fechaActuacion=:fechaActuacion,precio=:precio,activo=:activo WHERE id='.$id;
    $sql = "UPDATE atp.actuacion SET facturable = 'no' WHERE (id ='".$id."' )";

    try {
        $db = new db();
        $db = $db->conectDB();
        $resultado = $db->prepare($sql);

        //Asignar campos del SQL a las variables obtenidas
       // $resultado->bindParam(':id',$id);
        // $resultado->bindParam(':idTipoActuacion', $idTipoActuacion);
        // $resultado->bindParam(':idNumSerie', $idNumSerie);
        // $resultado->bindParam(':albaran', $albaran);
        // $resultado->bindParam(':observaciones', $observaciones);
        // $resultado->bindParam(':fechaActuacion', $fechaActuacion);
        // $resultado->bindParam(':idUsuario', $idUsuario);
        // $resultado->bindParam(':precio', $precio);
        // $resultado->bindParam(':activo', $activo);

        $resultado->execute();
            echo json_encode("ok", JSON_UNESCAPED_UNICODE);

        $resultado = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error":{"text":' . $e->getMessage() . '}';
    }
});

$app->put('/api/modificarfacturablenull/{id}', function (Request $request, Response $response) {
    //declaracion de las variables de recepcion desde FRONT

    $id = $request->getAttribute('id'); // PARA RECUPERAR LA ID DEL REGISTRO QUE SE VA A HACER UPDATE

    // echo "todas las instalaciones";

    //  $sql='UPDATE 12_bici SET idTipoActuacion=:idtipoActuacion,idNumSerie=:idNumSerie,idUsuario=:idUsuario,observaciones=:observaciones,fechaActuacion=:fechaActuacion,precio=:precio,activo=:activo WHERE id='.$id;
    $sql = "UPDATE atp.actuacion SET facturable = null WHERE (id ='".$id."' )";

    try {
        $db = new db();
        $db = $db->conectDB();
        $resultado = $db->prepare($sql);

        //Asignar campos del SQL a las variables obtenidas
       // $resultado->bindParam(':id',$id);
        // $resultado->bindParam(':idTipoActuacion', $idTipoActuacion);
        // $resultado->bindParam(':idNumSerie', $idNumSerie);
        // $resultado->bindParam(':albaran', $albaran);
        // $resultado->bindParam(':observaciones', $observaciones);
        // $resultado->bindParam(':fechaActuacion', $fechaActuacion);
        // $resultado->bindParam(':idUsuario', $idUsuario);
        // $resultado->bindParam(':precio', $precio);
        // $resultado->bindParam(':activo', $activo);

        $resultado->execute();
            echo json_encode("ok", JSON_UNESCAPED_UNICODE);

        $resultado = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error":{"text":' . $e->getMessage() . '}';
    }
});

$app->put('/api/modificarfacturablematerialsi/{id}', function (Request $request, Response $response) {
    //declaracion de las variables de recepcion desde FRONT

    $id = $request->getAttribute('id'); // PARA RECUPERAR LA ID DEL REGISTRO QUE SE VA A HACER UPDATE

    // echo "todas las instalaciones";

    //  $sql='UPDATE 12_bici SET idTipoActuacion=:idtipoActuacion,idNumSerie=:idNumSerie,idUsuario=:idUsuario,observaciones=:observaciones,fechaActuacion=:fechaActuacion,precio=:precio,activo=:activo WHERE id='.$id;
    $sql = "UPDATE atp.material SET facturable = 'si' WHERE (id ='".$id."' )";

    try {
        $db = new db();
        $db = $db->conectDB();
        $resultado = $db->prepare($sql);

        //Asignar campos del SQL a las variables obtenidas
       // $resultado->bindParam(':id',$id);
        // $resultado->bindParam(':idTipoActuacion', $idTipoActuacion);
        // $resultado->bindParam(':idNumSerie', $idNumSerie);
        // $resultado->bindParam(':albaran', $albaran);
        // $resultado->bindParam(':observaciones', $observaciones);
        // $resultado->bindParam(':fechaActuacion', $fechaActuacion);
        // $resultado->bindParam(':idUsuario', $idUsuario);
        // $resultado->bindParam(':precio', $precio);
        // $resultado->bindParam(':activo', $activo);

        $resultado->execute();
            echo json_encode("ok", JSON_UNESCAPED_UNICODE);

        $resultado = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error":{"text":' . $e->getMessage() . '}';
    }
});

$app->put('/api/modificarfacturablematerialno/{id}', function (Request $request, Response $response) {
    //declaracion de las variables de recepcion desde FRONT

    $id = $request->getAttribute('id'); // PARA RECUPERAR LA ID DEL REGISTRO QUE SE VA A HACER UPDATE

    // echo "todas las instalaciones";

    //  $sql='UPDATE 12_bici SET idTipoActuacion=:idtipoActuacion,idNumSerie=:idNumSerie,idUsuario=:idUsuario,observaciones=:observaciones,fechaActuacion=:fechaActuacion,precio=:precio,activo=:activo WHERE id='.$id;
    $sql = "UPDATE atp.material SET facturable = 'no' WHERE (id ='".$id."' )";

    try {
        $db = new db();
        $db = $db->conectDB();
        $resultado = $db->prepare($sql);

        //Asignar campos del SQL a las variables obtenidas
       // $resultado->bindParam(':id',$id);
        // $resultado->bindParam(':idTipoActuacion', $idTipoActuacion);
        // $resultado->bindParam(':idNumSerie', $idNumSerie);
        // $resultado->bindParam(':albaran', $albaran);
        // $resultado->bindParam(':observaciones', $observaciones);
        // $resultado->bindParam(':fechaActuacion', $fechaActuacion);
        // $resultado->bindParam(':idUsuario', $idUsuario);
        // $resultado->bindParam(':precio', $precio);
        // $resultado->bindParam(':activo', $activo);

        $resultado->execute();
            echo json_encode("ok", JSON_UNESCAPED_UNICODE);

        $resultado = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error":{"text":' . $e->getMessage() . '}';
    }
});

$app->put('/api/modificarfacturablematerialnull/{id}', function (Request $request, Response $response) {
    //declaracion de las variables de recepcion desde FRONT

    $id = $request->getAttribute('id'); // PARA RECUPERAR LA ID DEL REGISTRO QUE SE VA A HACER UPDATE

    // echo "todas las instalaciones";

    //  $sql='UPDATE 12_bici SET idTipoActuacion=:idtipoActuacion,idNumSerie=:idNumSerie,idUsuario=:idUsuario,observaciones=:observaciones,fechaActuacion=:fechaActuacion,precio=:precio,activo=:activo WHERE id='.$id;
    $sql = "UPDATE atp.material SET facturable = null WHERE (id ='".$id."' )";

    try {
        $db = new db();
        $db = $db->conectDB();
        $resultado = $db->prepare($sql);

        //Asignar campos del SQL a las variables obtenidas
       // $resultado->bindParam(':id',$id);
        // $resultado->bindParam(':idTipoActuacion', $idTipoActuacion);
        // $resultado->bindParam(':idNumSerie', $idNumSerie);
        // $resultado->bindParam(':albaran', $albaran);
        // $resultado->bindParam(':observaciones', $observaciones);
        // $resultado->bindParam(':fechaActuacion', $fechaActuacion);
        // $resultado->bindParam(':idUsuario', $idUsuario);
        // $resultado->bindParam(':precio', $precio);
        // $resultado->bindParam(':activo', $activo);

        $resultado->execute();
            echo json_encode("ok", JSON_UNESCAPED_UNICODE);

        $resultado = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error":{"text":' . $e->getMessage() . '}';
    }
});





//POST para crear una nueva instalación CREATE

$app->post('/api/nuevo/averia',function(Request $request, Response $response){
    //declaracion de las variables de recepcion desde FRONT

    $instalacion=$request->getParam('instalacion');
    $averia=$request->getParam('averia');
    $observacion=$request->getParam('observacion');
    $nid=$request->getParam('nid');
    $usuario=$request->getParam('usuario');
    $fecha=$request->getParam('fecha');
    $facturada=$request->getParam('facturada');
    $ubicacion=$request->getParam('ubicacion');
    $tipoInstalacion=$request->getParam('tipoInstalacion');

    // echo $usuario;
    // echo $fecha;
    // echo $descripcion;
    // echo $idaveria;
   
    $sql="INSERT INTO atp.averia(instalacion,averia,observacion,nid,usuario,fecha,facturada,ubicacion,tipoInstalacion) VALUES (:instalacion,:averia,:observacion,:nid,:usuario,:fecha,:facturada,:ubicacion,:tipoInstalacion);";
 

   try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);


        //Asignar campos del SQL a las variables obtenidas
         $resultado->bindParam(':instalacion',$instalacion);
         $resultado->bindParam(':averia',$averia);
         $resultado->bindParam(':observacion',$observacion);
         $resultado->bindParam(':nid',$nid );
         $resultado->bindParam(':usuario',$usuario);
         $resultado->bindParam(':fecha',$fecha);
         $resultado->bindParam(':facturada',$facturada);
         $resultado->bindParam(':ubicacion',$ubicacion);
         $resultado->bindParam(':tipoInstalacion',$tipoInstalacion);
       

        $resultado->execute();
        echo json_encode("Registro guardado con éxito",JSON_UNESCAPED_UNICODE);

        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }
});

$app->post('/api/nuevo/estado2',function(Request $request, Response $response){
    //declaracion de las variables de recepcion desde FRONT

     $usuario=$request->getParam('usuario');
     $fecha=$request->getParam('fecha');
     $estado=$request->getParam('estado');
     $descripcion=$request->getParam('descripcion');
     $idaveria=$request->getParam('idaveria');

    // echo $usuario;
    // echo $fecha;
    // echo $descripcion;
    // echo $idaveria;
   
    $sql="INSERT INTO atp.estado(usuario,fecha,estado,descripcion,idaveria) VALUES (:usuario,:fecha,:estado,:descripcion,:idaveria);";
 

   try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);


        //Asignar campos del SQL a las variables obtenidas
         $resultado->bindParam(':usuario',$usuario);
         $resultado->bindParam(':fecha',$fecha);
         $resultado->bindParam(':estado',$estado);
         $resultado->bindParam(':descripcion',$descripcion);
         $resultado->bindParam(':idaveria',$idaveria );
       

        $resultado->execute();
        echo json_encode("Registro guardado con éxito",JSON_UNESCAPED_UNICODE);

        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }
});

$app->post('/api/nuevo/actuacion',function(Request $request, Response $response){
    //declaracion de las variables de recepcion desde FRONT

     $usuario=$request->getParam('usuario');
     $fecha=$request->getParam('fecha');
     $actuacion=$request->getParam('actuacion');
     $observaciones=$request->getParam('observaciones');
     $idaveria=$request->getParam('idaveria');
     $nid=$request->getParam('nid');
     $partidaActuacion=$request->getParam('partidaActuacion');

    // echo $usuario;
    // echo $fecha;
    // echo $descripcion;
   
    $sql="INSERT INTO atp.actuacion (partida, idaveria, fecha, usuario, actuacion, nid, observaciones) VALUES (:partidaActuacion, :idaveria, :fecha, :usuario, :actuacion, :nid, :observaciones);";
 


   try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);


        //Asignar campos del SQL a las variables obtenidas
         $resultado->bindParam(':partidaActuacion',$partidaActuacion);
         $resultado->bindParam(':usuario',$usuario);
         $resultado->bindParam(':fecha',$fecha);
         $resultado->bindParam(':actuacion',$actuacion);
         $resultado->bindParam(':observaciones',$observaciones);
         $resultado->bindParam(':idaveria',$idaveria);
         $resultado->bindParam(':nid',$nid);
            

        $resultado->execute();
        echo json_encode("Registro guardado con éxito ",JSON_UNESCAPED_UNICODE);

        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }
});

$app->get('/api/material/familia',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    //$sql="SELECT a.id, t.estado, a.fecha, a.instalacion,a.averia,a.ubicacion FROM atp.averia a inner join atp.estado t on a.id=t.idaveria where t.estado<>'ACABADA' order by 3 desc;";
    $sql="SELECT familia from atp.tipomaterial group by familia order by 1 asc";
    
    
    
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/material/categoria/{familia}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    //$sql="SELECT a.id, t.estado, a.fecha, a.instalacion,a.averia,a.ubicacion FROM atp.averia a inner join atp.estado t on a.id=t.idaveria where t.estado<>'ACABADA' order by 3 desc;";
    $familia = $request->getAttribute('familia');
    $sql="SELECT categoria from atp.tipomaterial where familia='".$familia."' GROUP BY categoria order by 1 asc";
    
    
    
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->get('/api/material/detalle/{familia}/{categoria}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    //$sql="SELECT a.id, t.estado, a.fecha, a.instalacion,a.averia,a.ubicacion FROM atp.averia a inner join atp.estado t on a.id=t.idaveria where t.estado<>'ACABADA' order by 3 desc;";
    $familia = $request->getAttribute('familia');
    $categoria = $request->getAttribute('categoria');
    $sql="SELECT detalle,partida from atp.tipomaterial where familia='".$familia."' and categoria='".$categoria."' order by 1 asc";
        
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});

$app->post('/api/nuevo/material',function(Request $request, Response $response){
    //declaracion de las variables de recepcion desde FRONT

    $idAveria=$request->getParam('idAveria');
    $fecha=$request->getParam('fecha');
    $familia=$request->getParam('familia');
    $categoria=$request->getParam('categoria');
    $detalle=$request->getParam('detalle');
    $partida=$request->getParam('partida');
    $observacion=$request->getParam('observacion');
    $usuario=$request->getParam('usuario');
    $nid=$request->getParam('nid');
    $unidades=$request->getParam('unidades');


    // echo $usuario;
    // echo $fecha;
    // echo $descripcion;
    // echo $idaveria;
   
    $sql="INSERT INTO atp.material (idaveria,fecha,usuario,familia,categoria,detalle, nid, observacion,unidades,partida) VALUES (:idAveria, :fecha, :usuario, :familia,:categoria,:detalle, :nid, :observacion, :unidades,:partida);";
 

   try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);


        //Asignar campos del SQL a las variables obtenidas
        $resultado->bindParam(':fecha',$fecha);
        $resultado->bindParam(':usuario',$usuario);
         $resultado->bindParam(':familia',$familia);
         $resultado->bindParam(':categoria',$categoria);
         $resultado->bindParam(':detalle',$detalle);
         $resultado->bindParam(':observacion',$observacion);
         $resultado->bindParam(':nid',$nid );
         $resultado->bindParam(':idAveria',$idAveria);
         $resultado->bindParam(':partida',$partida);
         $resultado->bindParam(':unidades',$unidades);
       

        $resultado->execute();

            echo json_encode("Registro guardado con éxito",JSON_UNESCAPED_UNICODE);

        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }
});

$app->get('/api/material/{id}',function(Request $request, Response $response){
    // echo "todas las instalaciones";
    $id= $request->getAttribute('id');
    $sql="SELECT * FROM atp.material WHERE idaveria=".$id." order by fecha desc;";
    try{
        $db= new db();     
        $db=$db->conectDB();
        $resultado= $db->prepare($sql);
        $resultado->execute();

        if($resultado->rowCount()>0){
            $tipoInstalacion= $resultado->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($tipoInstalacion,JSON_UNESCAPED_UNICODE);
            
        }else{
            echo json_encode("No se han encontrado resultados");
        }
        $resultado=null;
        $db=null;

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';
    }

    
});