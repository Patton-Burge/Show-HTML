// function logShowsToConsole() {
//   for (let i = 0; i < SHOWS.length; i++) {
//     let show = SHOWS[i];
//     console.log(show.artist);
//   }
// }
// document.addEventListener("DOMContentLoaded", function () {
//     logShowsToConsole();
// });

const show = document.querySelector("#show-button");
const list = document.querySelector("#gib-me-shows");

function showShows() {
  for (let i = 0; i < SHOWS.length; i++) {
    let show = SHOWS[i];
    let html =
      `<li><div class="list-item"> <p class="text">${show.artist} <br>` +
      `${show.date} ${show.doors} ${show.show} ${show.price} ${show.tickets}</p>` +
      `<img class="artist-image" src="${show.image}"></div></li>`;
    list.insertAdjacentHTML("beforeend", html);
  }
  this.remove();
}

show.addEventListener("click", showShows);
