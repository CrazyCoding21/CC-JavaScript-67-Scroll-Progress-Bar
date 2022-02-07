const indicator = document.getElementById('indicator');
const percent = document.getElementById('barTitle');
const progressBar = document.getElementById('progressBar');

document.addEventListener('mousemove', function(e){
    indicator.style.top = e.clientY+'px';
    indicator.style.left = e.clientX+'px';
});

const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + '%';
    percent.innerHTML = "Scrolling... " + Math.round(progress) + '%';
}