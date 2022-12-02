import "../styles/style.css";
import { skins } from "./skins";

skins.forEach((skin) =>
  document.querySelector(".parent").insertAdjacentHTML(
    "beforeend",
    `<div class="baby">
  <img class="bundleimage" src="${skin.image}">
  <div class="info">
  <h4>${skin.name}</h4>
  <p class="specific-info">${skin.edition} EDITION // ${skin.price} VP</p>
  </div>
  </div>`
  )
);

//theme change
document.querySelector("#theme-btn").addEventListener("click", function () {
  if (document.body.classList.contains("blue-theme")) {
    document.body.classList.add("default-theme");
    document.body.classList.remove("blue-theme");
  } else {
    document.body.classList.add("blue-theme");
    document.body.classList.remove("default-theme");
  }
});

document.querySelector("#select-btn").addEventListener("click", function () {
  document.querySelector(".baby").remove(); //fix this so that it removes everything, use nodelist and forEach?
  skins
    .filter((skin) => skin.edition.includes("Select"))
    .forEach((selectSkin) => console.log(selectSkin.name));
});
