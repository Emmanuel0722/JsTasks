const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text.toUpperCase();

        li.appendChild(p);
        li.appendChild(deleteB());
        ul.appendChild(li);

        input.value = "";
        empty.style.display = 'none';
    }else{
        alert("Por favor Agrege una tarea!!")
    }
})

function deleteB() {
    const deletebtn = document.createElement('button')
    deletebtn.textContent = "X";
    deletebtn.className = 'btn-delete';

    deletebtn.addEventListener('click', (e)=>{
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            empty.style.display = 'block';
        }

    });
    return deletebtn;
}
