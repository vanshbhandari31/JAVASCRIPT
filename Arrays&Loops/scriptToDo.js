const todo = [];
const tododate=[];

function add() {
    const work = document.querySelector('.ele');
    const idate=document.querySelector('.js-date');
    if (work.value.trim() !== '') {
        todo.push(work.value.trim());
        console.log(todo);
    }

    work.value = ''; // Clear input field
    idate.value = ''; // Clear input field
}

function disp() {
    const work2 = document.querySelector('.ele2');
    if (work2.value.trim() !== '') {
        todo.push(work2.value.trim());
        console.log(todo);
    }
    if (idate.value.trim() !== '') {
        tododate.push(idate.value.trim());
        console.log(tododate);
    }

    generateHTML();
    work2.value = ''; // Clear input field
    idate.value = '';
}

function listTable() {
    const work2 = document.querySelector('.js-task');
    const idate=document.querySelector('.js-date');
    if (idate.value.trim() !== '') {
        tododate.push(idate.value.trim());
        console.log(tododate);
    }
    if (work2.value.trim() !== '') {
        todo.push(work2.value.trim());
        console.log(todo);
    }


    generateHTML();
    document.querySelector('.js-task').value = ''; // Clear input field
    document.querySelector('.js-date').value = ''; // Clear input field
}

function generateHTML() {
    let todoHTML = '';
    for (let i = 0; i < todo.length; i++) {
        todoHTML += `
                    <div>${todo[i]}</div>
                    <div>${tododate[i]}</div>
                    <button onclick="todo.splice(${i},1);tododate.splice(${i},1); listTable()" >DELETE</button>
                    `;
    }
    document.querySelector('.todogrid').innerHTML = todoHTML;
}

