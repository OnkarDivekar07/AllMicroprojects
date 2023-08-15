const form = document.getElementById('form');
const amount = document.getElementById('amount');
const reason = document.getElementById('reason');
const catogary = document.getElementById('catogory');
const list = document.getElementById('list')

form.addEventListener('submit',addexpense);


function addexpense(e){
    //this prevent refreshing of the page
   e.preventDefault();
   //console.log('click');
   //by using tagname with target we can get values of the inputs
    const amount = e.target.amount.value;
    const reason = e.target.reason.value;
    const catogary = e.target.catogory.value;
    //creating obj of values for localstorage and edit functionality
    const obj={
        id:new Date() ,
        a:amount,
        r:reason,
        c:catogary
}
const jasonobj=JSON.stringify(obj);
addtolocalstorage(jasonobj,obj);

//creating a new li element to append to the list and shoe=wing on screen
const li=document.createElement('li');
li.style.border="2px solid gray"
li.style.padding="2px";
li.appendChild(document.createTextNode(`Amount:${amount}    Reason:${reason}    Catogary:${catogary}`))
list.appendChild(li);
button(li,obj);
}


function button(li,obj){

const delete1=document.createElement('input');
delete1.type="button";
delete1.className='btn btn-secondary';
delete1.style.float="right"
delete1.value="Delete";
li.appendChild(delete1);
delete1.onclick=()=>{
list.removeChild(li);
}
const edit = document.createElement('input');
edit.type = "button";
edit.className = 'btn btn-secondary';
edit.style.float="right";
edit.value = "Edit";
    edit.onclick = () => {
        document.getElementById('amount').value=obj.a
        document.getElementById('reason').value=obj.r
        document.getElementById('catogory').value=obj.c
    }
li.appendChild(edit);
list.appendChild(li);
}
 function  addtolocalstorage(obj,obj1){
    localStorage.setItem(`${obj1.id}`,obj);
}