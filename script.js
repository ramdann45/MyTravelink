// ALERT WHATSAPP
// CLOSE
const closeCs = document.querySelector('.alert-wa .atas .close');
closeCs.addEventListener('click', function(e){
    e.target.parentElement.parentElement.parentElement.style.visibility = "hidden";
    e.target.parentElement.parentElement.parentElement.style.opacity = "0";
});

// toggle whatsapp
const toggleWhatsapp = document.querySelector('.btn-whatsapp-pulse');
toggleWhatsapp.addEventListener('click', function(){
    closeCs.parentElement.parentElement.style.visibility = "visible";
    closeCs.parentElement.parentElement.style.opacity = "1";
});

// ALERT TOUR
const tour = document.getElementById('tour');
const alertTour = document.querySelector('.alert-tour');
const closeTour = document.getElementById('close-btn-tour');

tour.addEventListener('click', function(){
    alertTour.style.opacity = 1;
    alertTour.style.visibility = "visible";
});

closeTour.addEventListener('click', function(){
    alertTour.style.opacity = 0;
    alertTour.style.visibility = "hidden";
});