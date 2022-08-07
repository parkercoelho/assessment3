console.log("hello ")

const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritBtn = document.querySelector('#ritual')

colorBtn.addEventListener('click', e => {
    alert(`My favorite color is green`)
})
placeBtn.addEventListener('click', e => {
    alert(`My favorite place is disneyland`)
})
ritBtn.addEventListener('click', e => {
    alert(`My favorite ritual is christmas tree decorating`)
})
