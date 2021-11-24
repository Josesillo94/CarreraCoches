
// Función principal
$(document).ready(function(){
    // Oculto la tabla de puntuaciones
    $("#Posiciones").hide();
    // Declaro constantes y arrays
    const carretera = document.querySelector(".fondo");
    const estadisticas = document.querySelector(".cosas");
    let coches= new Array();
    let posiciones = new Array();
    // Creo el array de los coches 
    let participantes = ["car1.png", "car2.png", "car3.png", 
    "car4.png", "car5.png",
    "car6.png", "car7.png", 
    "car8.png", "car9.png"];
    // Oculto el botón reiniciar y muestro iniciar
    $(".iniciar__boton").show();
    $(".reiniciar__boton").hide();
    // Creo una función que muestre los coches elegidos al seleccionarlos del select 
    $("#coches").change(function(){
        $("#Posiciones").hide();
        $(".cosas").empty();
        $(".iniciar__boton").show();
        $(".reiniciar__boton").hide();
        
        let numeroParticipantes = $("#coches").val();
        
        if(numeroParticipantes >= 1 ){
            $(".coches").remove();
            for(i = 0; i < numeroParticipantes;i++){
              coches[i] = document.createElement("img");  
              coches[i].classList.add('coches');
              coches[i].id = 'coche'+ i;
              coches[i].src = participantes[i];
              carretera.appendChild(coches[i]);
              
              





            }
            
            
            
            
        }else{
            alert("No puede iniciar la carrera si no hay participantes");
        }

    });
    // Creo una función que anime los coches y a su vez prepare para cargar la tabla de puntuaciones
    $(".iniciar__boton").click(function(){

        let numeroParticipantes = $("#coches").val();
        if (numeroParticipantes >= 1){
            
            
            $(".iniciar__boton").hide();
            $(".reiniciar__boton").show();
            for(i = 0; i < numeroParticipantes;i++){
                
                
                
                let duracion = Math.random() * (10 - 1) + 1;
                
                duracion = Math.round(duracion) * 1000;
                
                $('#'+coches[i].id).animate({marginLeft: "96.5%"},duracion, null, function(){
                    posiciones.push(this.id);    
                    if(posiciones.length == numeroParticipantes){
                        for(let y =0; y < posiciones.length;y++){

                            let posicion = document.createElement("div");
                            posicion.id = "posicionesid";
                            posicion.innerHTML = `<td>Posicion:${y + 1}, Nombre:${posiciones[y]}</td>`;
                            estadisticas.appendChild(posicion);
                        }
                        
                        $("#Posiciones").show();
                        $("#posicionesid").show();
                        
                    }
                 
                 

                 
        
                    
                 


                 
                 
                });
                posiciones.pop();
            }
            
            
            



        }
        


    });
    // Creo una funcion que coloca los coches en el inicio y oculta la tabla de puntuaciones 
    $(".reiniciar__boton").click(function(){
        
        let numeroParticipantes = $("#coches").val();
        if (numeroParticipantes >= 1){
            $(".reiniciar__boton").hide();
            $(".iniciar__boton").show();
            $(".coches").remove();
            $("#Posiciones").hide();
            $(".cosas").empty();
            for(i = 0; i < numeroParticipantes;i++){
              coches[i] = document.createElement("img");  
              coches[i].classList.add('coches');
              coches[i].id = 'coche'+ i;
              coches[i].src = participantes[i];
              carretera.appendChild(coches[i]);
              
              





            }
        }
        


    });








});