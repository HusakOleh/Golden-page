const $drop = document.querySelector('#drop')
const $drop1 = document.querySelector('.drop1')
const $drop2 = document.querySelector('.drop2')
const $drop3 = document.querySelector('.drop3')
const $dropmenu = document.querySelector('.content-space-between__ul')
const $contentAfter = document.querySelector('#header-h1')




$drop.addEventListener('click', menu);

function menu() {
    $drop1.classList.toggle('active')
    $drop2.classList.toggle('active')
    $drop3.classList.toggle('active')
    $dropmenu.classList.toggle('active')
    $contentAfter.classList.toggle('active')




}