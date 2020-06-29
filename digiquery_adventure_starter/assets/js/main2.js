//Exercice12
var button = document.querySelector('button');
button.addEventListener('click', function(e){
    e.target.innerHTML = 'button cliqued';
});
//Exercice13
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('h1').style="color : red";
});
//Exercice14
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('h1').classList.add('highlight');
});


