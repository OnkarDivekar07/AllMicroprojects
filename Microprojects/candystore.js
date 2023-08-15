const form = document.getElementById('form');
//console.log(form);
const Itemname = document.getElementById('ItemName')
//console.log(Itemname);
const Description = document.getElementById('Description')
//console.log('Description')
const price = document.getElementById('price');
//console.log(price);
const Quntity = document.getElementById('Quntity');
//console.log(Quntity);
const list = document.getElementById('list');
//created the event lister with the function addcandy which will get triggered on submition
form.addEventListener('submit', addcandy)





function addcandy(e) {
    //this will prevent refreshing of page
    e.preventDefault();
    //console.log('click');
    //targeting input values through tag name
    const ItemName = e.target.ItemName.value;
    const Description = e.target.Description.value
    const price = e.target.price.value
    const Quntity = e.target.Quntity.value
    //created obj so can be post to crudcrud backend
    const obj = {
        ItemName,
        Description,
        price,
        Quntity
    }
    //posting data to crudcrud through http axios liabrary
    axios.post("https://crudcrud.com/api/7e8ee1dedf2b49bb8e465a8cf269e14e/candydata", obj)
        .then((response) => {
            addcart(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })

}

//creating all buttons in this function and updating  remaning quntity on front by inner html
function addcart(responsedata) {
    const li = document.createElement('li');
    //this create actual node which get displayed after clicking on submit button
    li.appendChild(document.createTextNode(`Itemname:${responsedata.ItemName} Description:${responsedata.Description} price:${responsedata.price} Quntity${responsedata.Quntity}`))
    const buy1 = document.createElement('input');
    buy1.type = "button";
    buy1.className = " btn btn-secondary"
    buy1.value = "buy1"

    buy1.onclick = () => {
        responsedata.Quntity -= 1
        updateQuantity(responsedata)
        //this updating above created text node according to new quntity
        li.innerText = `Itemname${responsedata.ItemName} Description${responsedata.Description} price${responsedata.price} Quntity${responsedata.Quntity}`
    }
    const buy2 = document.createElement('input');
    buy2.type = "button";
    buy2.className = " btn btn-secondary"
    buy2.value = "buy2"

    buy2.onclick = () => {
        responsedata.Quntity -= 2
        updateQuantity(responsedata)
        li.innerText = `Itemname${responsedata.ItemName} Description${responsedata.Description} price${responsedata.price} Quntity${responsedata.Quntity}`

    }
    const buy3 = document.createElement('input');
    buy3.type = "button";
    buy3.className = " btn btn-secondary"
    buy3.value = "buy3"

    buy3.onclick = () => {
        responsedata.Quntity -= 3
        updateQuantity(responsedata)
        li.innerText = `Itemname${responsedata.ItemName} Description${responsedata.Description} price${responsedata.price} Quntity${responsedata.Quntity}`

    }
    //to keep buttons on write side
    buy3.style.float = "right";
    buy2.style.float = "right";
    buy1.style.float = "right";
    li.appendChild(buy3)
    li.appendChild(buy2)
    li.appendChild(buy1)
    list.appendChild(li);
}

function updateQuantity(responsedata) {
    //we need id for the put request hence the id is abstacted from obj
    const id = responsedata._id
    console.log(id);
    //we can directly put obj in here because it contains old id  which  can create issue
    axios.put(`https://crudcrud.com/api/7e8ee1dedf2b49bb8e465a8cf269e14e/candydata/${id}`, {
        ItemName: responsedata.ItemName, Description: responsedata.Description, price: responsedata.price, Quntity: responsedata.Quntity
    })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log('error');
        })
}

//this function give us all the input items after we refresh the page
window.addEventListener('DOMContentLoaded', () => {

    axios.get("https://crudcrud.com/api/7e8ee1dedf2b49bb8e465a8cf269e14e/candydata")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                addcart(response.data[i]);
            }
        })
        .catch((error) => {
            console.log('error');
        })


})