const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : [];
const nameuser = document.querySelector('.input1')
const telephone = document.querySelector('.telephone')
const email = document.querySelector('.email')
const address = document.querySelector('.address')
if(currentUser.username != undefined){
    nameuser.value = currentUser.username
    telephone.value = currentUser.telephone
    email.value = currentUser.email}
// --------------order---------------

const btn2 = document.querySelector('.order')
const success = document.querySelector('.success')
const dangky = document.querySelector('.dangky')
const error =document.querySelector('.error')

btn2.onclick = () =>{if( nameuser.value == 0 || telephone.value== 0|| email.value==0){
    dangky.style.display = 'block'
    }else{
    if(address.value==0){
    error.style.display= 'block'
        }else{
            success.style.display= 'block'        
            }
        }
    }   
// --------------link product---------------

const shoppinglist = localStorage.getItem("shoppinglist")
    ? JSON.parse(localStorage.getItem("shoppinglist"))
    : [];
let sum = 0;
shoppinglist.map((d,index) =>{
    let productlist = document.querySelector('.productlist')
    let addproduct = document.createElement('div')
    addproduct.innerHTML = `  <p>`+d.name+`<p> × `+d.num+`</p>  </p> `
    productlist.append(addproduct)
    sum = sum + parseFloat(d.price) * d.num
})
let total = document.querySelector('.total')
    total.innerHTML = (sum *1000000).toLocaleString('de-DE')

const xoa = document.querySelector('.back')
xoa.onclick = () =>{
    console.log(1);
    shoppinglist.splice(0,shoppinglist.length)
    console.log(shoppinglist);
    localStorage.setItem("shoppinglist", JSON.stringify(shoppinglist));
}