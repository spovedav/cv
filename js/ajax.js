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



////////////   NIEVE  ////////////////
function nieve(){
    var fecha = new Date();
    alert('s');
    if(fecha.getMonth() +1 === 1){
        alert('sss');
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
