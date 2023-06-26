// let counter = 0

// function add3(){
//     counter+= 3
//     console.log(counter)
// }

// function remove1(){
//     counter-=1
//     console.log(counter)
// }



let itemPrice = document.getElementById("price")
let itmeImage = document.getElementById('img1')
let errorMessage = document.getElementById('error')
let buyItem = document.getElementById('buyButton')

function printError (){
    itemPrice.style.display= "none"
    itmeImage.style.display= "none"
    buyItem.style.display= "none"
    errorMessage.style.display = 'block'
    errorMessage.innerText= "Something Brocken !!!!!!"
}