const ul = document.querySelector('.list');

const input = document.querySelector('#favchap');

const button  = document.querySelector('button');

button.addEventListener('click', function (){
    const content = input.value;
    
    if (content != ""){
        input.value = '';
        const li = document.createElement('li');
        const span = document.createElement('span');
        
        const new_button = document.createElement('button');
        new_button.setAttribute('class','delete')
        li.appendChild(span);
        li.appendChild(new_button);
        
        span.textContent = content;
        
        new_button.textContent = '❌';
        
        ul.appendChild(li);
        
        new_button.addEventListener('click',
                                ()=>
            {
        ul.removeChild(li);
        });
    }    
        input.focus();
    
    
  });

