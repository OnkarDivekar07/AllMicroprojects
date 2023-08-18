//reverse a string
// let str="ram";
// let ans=''
// for (let i = str.length-1;i>=0;i--){
//      ans=ans+str[i];
// }
// console.log(ans);

//second maximum in the array
// let ans = [1, 2, 4, 1, 5, 7,8]
// let max1=ans[0];
// let max2=Infinity;
// for(let i=0;i<ans.length;i++){
//     if(ans[i]>max1){
//         max2=max1;
//         max1=ans[i];
//     }
//     else if(ans[i]>max2 && ans[i]  != max1){
//         max2=ans[i];
//     }
// }
// console.log(max2);


//q21 starting with web devlopment
// const item1=document.getElementById('1');
// const item2=document.getElementById('2');
// //console.log(item1)
// item1.innerText='hello';
// item1.style.backgroundColor='green'
// item2.style.backgroundColor='yellow';



//q22 strting web devlopment
//Add separate events for click, mouseover and mouseout functionality(Dont club them into 1)

//2)Now take the value in the form and console log the value in the browsers after doing the necessary validations

// const form = document.getElementById('my-form');
// submit = document.getElementById('submit');
// console.log(submit);

// form.addEventListener('mouseover', colorchange);
// form.addEventListener('mouseout', colorgone)
// form.addEventListener('submit', printuserdetails)

// function printuserdetails(e) {
//     e.preventDefault();'
//     const name = e.target.name.value
//     const email = e.target.email.value
//     console.log(name);
//     console.log(email);
// }

// function colorchange(e) {
//     form.style.backgroundColor = 'gray';
// }
// function colorgone() {
//     form.style.backgroundColor = '#ccc'
// }

//dom manipulation part starts here 
// const header = document.getElementById('header-title');
// console.log(header);
// header.style.borderBottom='3px solid black'
// header.innerText='hello'
// const add = document.querySelectorAll('.list-group-item')
// console.log(add);
// add[0].style.fontWeight='bold';
// const c = document.getElementsByClassName('list-group-item');
// for(let i=0;i<c.length;i++){
//     c[i].style.fontWeight = 'bold';
// }
// c[2].style.backgroundColor='green';
// const li=document.createElement('li');
// li.className='new';
// li.id='litag';
// const newli = document.getElementsByTagName('li');
// console.log(newli);
// newli[4].style.backgroundColor='yellow';
