/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input")
const buttonEl = document.getElementById("button")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
let val = 1;
inputEl.value = val;

render()

buttonEl.addEventListener("click", render)

function render() {
    val = inputEl.value
    lengthEl.textContent = `${val} meters = ${(val * 3.281).toFixed(3)} feet | ${val} feet = ${(val / 3.281).toFixed(3)} meters`
    volumeEl.textContent = `${val} liters = ${(val * 0.264).toFixed(3)} gallons | ${val} gallons = ${(val / 0.264).toFixed(3)} liters`
    massEl.textContent = `${val} kilos = ${(val * 2.204).toFixed(3)} pounds | ${val} pounds = ${(val / 2.204).toFixed(3)} kilos`
}
