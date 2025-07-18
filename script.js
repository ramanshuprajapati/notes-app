let gettextArea = document.querySelector('#noteText');
let addNoteBtn = document.querySelector('#addNoteBtn');
let getArea = document.querySelector('#notesArea');
let clearBtn= document.querySelector('#clearAllBtn');


let tasks = [];

if(localStorage.getItem('yournotes')){
    tasks = JSON.parse(localStorage.getItem('yournotes'));
    displayData();
}


addNoteBtn.addEventListener('click',function(){
    if(gettextArea.value !== ""){
        let value = gettextArea.value.trim();
        tasks.push(value);
        localStorage.setItem('yournotes',JSON.stringify(tasks));
        displayData();
        gettextArea.value = "";
    }else{
        alert(`please enter a text`)
    }

})

function displayData(){
    getArea.innerHTML = "";
    tasks.forEach(function(val,id){
        let createDiv = document.createElement('div');
        createDiv.classList.add('note');
        createDiv.innerHTML = `${val} <button class="delete-btn"> Delete  </button>`
        
        getArea.appendChild(createDiv);

        createDiv.querySelector('.delete-btn').addEventListener('click',function(){
            tasks.splice(id,1);
            localStorage.setItem('yournotes',JSON.stringify(tasks))
            displayData();
        })

    })
}

clearBtn.addEventListener('click',function(){
    tasks= [];
    localStorage.setItem('yournotes',JSON.stringify(tasks));
    displayData()
})