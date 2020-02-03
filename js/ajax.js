////////////// VER NIEVE ////////////////
nieve();


// proyectos();
function proyectos(){
    fetch('database/proyectos.txt')//database/proyectos.json
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
}

// proyectos2();
function proyectos2(){
    $.ajax({
        url: "database/proyectos.json",
        type: 'GTE',
        dataType: "JSON",
        //dataType: 'json',
        success: function (r) {
            console.log(r);
        }
    });
}

proyectos3();
function proyectos3(){
    $.get("database/proyectos.json",function(datos){
        //var res = JSON.parse(datos);
        console.log(datos);
        var template = '';
        var cont = 0;
        for(var row in datos){
            cont = cont + 1;
            var titulo = row.toUpperCase();
            
            if (cont===1){
                template+= `
                <div class="carousel-item active">
                     <button type="button"  data-toggle="modal" data-target="#exampleModal" value="video/video.mp4" title="reproducir video `+titulo+`" onclick="madal_video('`+titulo+`','`+datos[row]['url_video']+`');"><img src="images/video.png" alt="img de reproducir video `+datos[row]['url']+` " class="video"></button>
                    <img src="`+datos[row]['imagen']+`" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block" style="background-color: #000000ab !important;">
                        <h5>`+titulo+`</h5>
                        <p class="text-white">`+datos[row]['descripcion']+`</p>
                        <a href="`+datos[row]['url']+`" class="text-info" target="_blank" rel="noopener noreferrer">Link de pagina</a>
                    </div>
                </div>
                `;
                //break;
            }else {
                template+= `
                <div class="carousel-item">
                    <button type="button"  data-toggle="modal" data-target="#exampleModal" value="video/video.mp4" title="reproducir video `+titulo+`" onclick="madal_video('`+titulo+`','`+datos[row]['url_video']+`');"><img src="images/video.png" alt="img de reproducir video `+datos[row]['url']+` " class="video"></button>
                    <img src="`+datos[row]['imagen']+`" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block" style="background-color: #000000ab !important;">
                        <h5>`+titulo+`</h5>
                        <p class="text-white">`+datos[row]['descripcion']+`</p>
                        <a href="`+datos[row]['url']+`" class="text-info" target="_blank" rel="noopener noreferrer">Link de pagina</a>
                    </div>
                </div>
                `;
            }
        }
        var template_cont_job = '';
        for(var i = 0; i< cont; i++)
        {
            if(i===1){
                template_cont_job+= `
                <li data-target="#trabajo" data-slide-to="`+i+`" class="active"></li>
                `;
                //break;
            }else {
                template_cont_job+= `
                <li data-target="#trabajo" data-slide-to="`+i+`"></li>
                `;
             }
        }
        
        // console.log(res);
        document.getElementById('cantidad_job').innerHTML = template_cont_job;

        document.getElementById('contenido_job').innerHTML = template;
    });
}




certificados();
function certificados(){
    alert('d');
    $.get("database/certificados.json",function(datos){
        //var res = JSON.parse(datos);
        //console.log(datos);
        var template = '';
        var cont = 0;
        for(var row in datos){
            cont = cont + 1;
            var titulo = row.toUpperCase();
            //var ruta_video = datos[row]['url_video'];

                template+= `
                <div class="col-4">
                    <div class="card rounded-bottom text-center">
                    <img src="`+datos[row]['imagen']+`" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">`+titulo+`</h5>
                            <p class="card-text">`+datos[row]['descripcion']+`</p>
                        </div>
                        <strong> <p class="text-muted">`+datos[row]['fecha']+`</p></strong>
                    </div>
                </div>
                `;

            //madal_video(datos[row]['url'],ruta);
        }
        document.getElementById('certificado').innerHTML = template;
    });
}


/////////////  MODAL DE VIDEO  ////////////////////////
function madal_video(titulo,ruta_video){
    var template_video = '';
    template_video = `
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">`+titulo+`</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div class="modal-body">
                    <video src="video/video.mp4" controls width="100%" height="auto" autoplay></video>
                </div>
                `;
              
    document.getElementById('contenido_video').innerHTML = template_video;
}


////////////   NIEVE  ////////////////
function nieve(){
    var fecha = new Date();
    
    if(fecha.getMonth() +1 === 12){
        var template_nieve = `
                            <div class="snow foreground"></div>
                            <div class="snow foreground layered"></div>
                            <div class="snow middleground"></div>
                            <div class="snow middleground layered"></div>
                            <div class="snow background"></div>
                            <div class="snow background layered"></div>
                            `;
    }    
    document.getElementById('nieve').innerHTML = template_nieve;
}
