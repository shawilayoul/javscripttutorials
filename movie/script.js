const container = document.querySelector(".container");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const selectedmovie = document.querySelector('.movie');
const seat = document.querySelector(".row .seat:not(.Occupied)");
let ticketPrice = +selectedmovie.value;
// toggleprice
selectedmovie.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateselectedCount();
})
//selectedmovie
function updateselectedCount() {
    let selectedseats = document.querySelectorAll('.row .seat.selected');
    const selectedseatsCount = selectedseats.length;
    count.innerText = selectedseatsCount;
    total.innerText = selectedseatsCount * ticketPrice;
}
container.addEventListener('click', (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains('Occupied')) {
        e.target.classList.toggle('selected')
        updateselectedCount();
    }
})