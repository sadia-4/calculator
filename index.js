let screen=document.querySelector('#screen')
let buttons=document.querySelectorAll('button')
for(item of buttons){
    item.addEventListener('click',(e)=>{

        buttonText=e.target.innerText;
        if(buttonText=='='){
           screen.value=eval(screen.value)
        }
        else if(buttonText=='C'){
            screen.value='';
        }
        else{
            screen.value=screen.value+buttonText;
        }

    })
}