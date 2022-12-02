import "../styles/style.css";
import { skins } from "./skins";

//create boxes
const createboxes = function () {
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
};
createboxes();

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

//coding buttons fix this shit
document.querySelector("#select-btn").addEventListener("click", function () {
  remove();
});

const remove = function () {
  //console.log(document.querySelectorAll(".baby"));
  document.querySelectorAll(".baby").forEach((babybox) => babybox.remove());
};

const selectskins = skins.map(selectfilter);

function selectfilter(skins) {
  skins.filter((skin) => skin.edition.includes("Select"));
}

console.log(selectskins);
