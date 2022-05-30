let mon = document.getElementById('mon')
let tue = document.getElementById('tue')
let wed = document.getElementById('wed')
let thu = document.getElementById('thu')
let fri = document.getElementById('fri')
let sat = document.getElementById('sat')
let sun = document.getElementById('sun')

now = new Date

if (now.getDay() == 0) {
    mon.classList.add('today')
}
if (now.getDay() == 1) {
    tue.classList.add('today')
}
if (now.getDay() == 2) {
    wed.classList.add('today')
}
if (now.getDay() == 3) {
    thu.classList.add('today')
}
if (now.getDay() == 4) {
    fri.classList.add('today')
}
if (now.getDay() == 5) {
    sat.classList.add('today')
}
if (now.getDay() == 6) {
    sun.classList.add('today')
}