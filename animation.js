// $(".container3").click(function(){
//     $(this).addClass('active');
//     setTimeout(() => {
//         $(this).removeClass('active');
//     }, 7000);
// });


const toggle = document.getElementById('toggle_checkbox');
const astronaut = document.getElementById('astronaut');
const splash = document.getElementById('splash');
const container3 = document.getElementsByClassName('container3')[0];
const container2 = document.getElementsByClassName('container2')[0];
const speech = document.getElementsByClassName('speech')[0];
const body = document.querySelector('body');


toggle.addEventListener('click', function () {
    body.classList.toggle('dark-theme');
    astronaut.classList.toggle('active');
    container2.classList.toggle('active');
    container3.classList.toggle('active');
    splash.classList.toggle('active');
    if (speech.innerHTML === "Dark Mode") {
        speech.innerHTML = "Light Mode";
    } else {
        speech.innerHTML = "Dark Mode";
    }
});
