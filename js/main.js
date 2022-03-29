//GALERÍA DE LA ZAPATILLA

const pic1 = {
    title: 'carcasa', 
    description: 'La nueva carcasa de flyknit presenta un hilo trenzado que ha favorecido la interacción en contacto con el balón además de conseguir que el confort se haya aumentado. La tecnología ACC sigue presente y la capa sintética de Nike Skin recubre toda la superficie para proteger el hilo flyknit',
    src: '/images/puntera.webp' 
}

const pic2 = {
    title: 'chasis',
    description: 'Con la evolución de la nueva carcasa Nike ha implementado un chasis que mantiene la estructura de esta además de envolver el pie con un ajuste 360. El mullido del talón se combina con una plantilla antideslizante para evitar que ocurran deslizamientos del pie en el interior de la bota',
    src:'/images/perfil.webp'
}

const pic3 = {
    title: 'suela',
    description: 'La distribución y forma de los tacos se ha mantenido intacta, al igual que la placa anatómica pero a su vez que ha modificado el módulo del metatarso con el objetivo de hacer que esta sea un poco más flexible sin reducir la reactividad de la placa',
    src: '/images/suela.webp'
}

const pic4 = {
    title: 'peso',
    description: 'Todas estas características en una bota con un peso de 200 gramos',
    src:'/images/perfilAlto.webp'
}

const title = document.querySelector('.title');
const description = document.querySelector('.descriptions');
const galery = document.querySelector('.img');
const marcos = document.querySelectorAll('.pic');

title.innerHTML = pic1.title
description.innerHTML = pic1.description
galery.src = pic1.src

marcos.forEach( marco => {
    marco.addEventListener('click', (e) =>{
        e.preventDefault()

       if(marco.id == 'pic1'){
           title.innerHTML = pic1.title
           description.innerHTML = pic1.description
           galery.src = pic1.src

        }else if(marco.id == 'pic2'){
            title.innerHTML = pic2.title
            description.innerHTML = pic2.description
            galery.src = pic2.src

        }else if( marco.id == 'pic3'){
            title.innerHTML = pic3.title
            description.innerHTML = pic3.description
            galery.src = pic3.src

        }else if(marco.id == 'pic4'){
            title.innerHTML = pic4.title
            description.innerHTML = pic4.description
            galery.src = pic4.src
        } 
    });
})
//------------------------------------------------------//


//GALERÍA DE VÍDEOS
const tituloTarjetas = document.querySelector('.players_title');
const tarjetas = document.querySelectorAll('.card');
const player = document.querySelector('.player_video');
const video = document.querySelector('.video');
const cerrar = document.querySelector('.cerrar');

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', (e) => {
        e.preventDefault()
        player.style.display = 'flex';
        tituloTarjetas.style.display = 'none';

        if(tarjeta.id == 'card1'){
            video.src = 'images/videos/CR7_video.mp4';
            

        }else if(tarjeta.id == 'card2'){
            video.src = 'images/videos/Mbappe_video.mp4'
            

        }else if(tarjeta.id == 'card3'){
            video.src = 'images/videos/Neymar_video.mp4'
            
        }
    })
})

cerrar.addEventListener('click', (e) =>{
    e.preventDefault()
    video.pause();
    player.style.display = 'none';
    tituloTarjetas.style.display = 'block';
})