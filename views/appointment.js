const form=document.getElementById('form')
const name=document.getElementById('name')
const email=document.getElementById('email')
const phonenumber=document.getElementById('phonenumber')
const list=document.getElementById('list')
const submit=document.getElementById('submit');

form.addEventListener('submit',save);

 function save(e){
    e.preventDefault();
    const username = name.value
    const useremail=email.value
    const userphonenumber=phonenumber.value;

const userinfo={
    name:username,
    email:useremail,
    phonenumber:userphonenumber
}
console.log(userinfo);
     axios.post("http://localhost:3000/submitappoinment",userinfo)
         .then((response) => {
          buttons(response.data);
             console.log(response.data);
         })
         .catch((error) => {
             console.log(error);
         })
}


function buttons(responsedata){
 const li = document.createElement('li');
 li.appendChild(document.createTextNode(`Name:${responsedata.name} Email:${responsedata.email} phonenumber:${responsedata.phonenumber}`))
    
    const deletebutton = document.createElement('input');
    deletebutton.type = "button";
    deletebutton.className = " btn btn-secondary"
    deletebutton.value = "Delete"
    deletebutton.style.float = "right";
    deletebutton.onclick = () => {
        const deleteid = responsedata.id;
        axios.delete(`http://localhost:3000/submitappoinment/${deleteid}`)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log('error');
            })
            list.removeChild(li);
    }
    const edit = document.createElement('input');
    edit.type = "button";
    edit.className = 'btn btn-secondary';
    edit.style.float = "right";
    edit.value = "Edit"
    edit.onclick = () => {
        const editid = responsedata.id;
        console.log(editid);
        document.getElementById('name').value = responsedata.name
        document.getElementById('email').value = responsedata.email
        document.getElementById('phonenumber').value =responsedata.phonenumber
        const deleteid = responsedata.id;
        axios.delete(`http://localhost:3000/submitappoinment/${deleteid}`)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log('error');
            })
        list.removeChild(li);
    }
    li.appendChild(edit);
    li.appendChild(deletebutton);
    list.appendChild(li);

    }
   
window.addEventListener('DOMContentLoaded', () => {

    axios.get("http://localhost:3000/sendappoinment")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                buttons(response.data[i]);
            }
        })
        .catch((error) => {
            console.log('error');
        })


})



    
    

