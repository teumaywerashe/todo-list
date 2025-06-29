 let todolist = [];

 function add() {

     let name = document.getElementById('input-text').value
     document.getElementById('input-text').value = ''
     let dueDate = document.getElementById('input-date').value;
     document.getElementById('input-date').value = '';
     let dueTime = document.getElementById('input-time').value;
     document.getElementById('input-time').value = '';
     todolist.push({ name, dueTime, dueDate })
     display();
 }

 function display() {

     let todoHTML = ''
     for (let i = 0; i < todolist.length; i++) {
         todoHTML += `<div>${todolist[i].name} </div>  
         <div>${todolist[i].dueTime}</div><div>${todolist[i].dueDate}</div>
         <button id='delete-button'
         onclick='todolist.splice(${i},1)
         display();
         '
         >Delete</button>`
     }

     document.getElementById('container').innerHTML = todoHTML

 }