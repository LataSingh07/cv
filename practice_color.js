const buttons=document.querySelectorAll("button");
const body=document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        if(event.target.id == 'grey'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id == 'blue'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id == 'white'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id == 'red'){
            body.style.backgroundColor=event.target.id;
        }
    })
})
const nav=document.querySelector('nav')
const home=document.querySelector("#home");
const youtube=document.querySelector("#youtube");

home.addEventListener('click',function(e){
    nav.style.backgroundColor='pink';
})

youtube.addEventListener('click',function(e){
    nav.style.backgroundColor='orange';
})