const newtodolist =document.getElementById('newtodo');
const addbtn= document.getElementById('addbtn');
const todolist= document.getElementById('todolist');

function addtodo(){
    const newTodoText = newtodolist.value;
    newtodolist.value='';

    const listitem =document.createElement('li');
    const compltecheckbox=document.createElement('input');
    const todotext =document.createElement('span');
    const deletebn=document.createElement('button');

    compltecheckbox.type='checkbox';

    listitem.appendChild(compltecheckbox);
    listitem.appendChild(todotext);
    listitem.appendChild(deletebn);

    todotext.textContent=newTodoText;
    deletebn.textContent='Delete';

    todolist.append(listitem);

    deletebn.addEventListener('click',function(){
        todolist.removeChild(listitem)
    })

}

addbtn.addEventListener('click',addtodo)
