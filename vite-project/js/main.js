import "../styles/style.css";
import { skins } from "./skins";

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

//coding buttons

const remove = function () {
  document.querySelectorAll(".baby").forEach((babybox) => babybox.remove());
};

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

document.querySelector("#all-btn").addEventListener("click", function () {
  remove();
  createboxes();
});

document.querySelector("#select-btn").addEventListener("click", function () {
  remove();
  const select = skins.filter((skin) => skin.edition.includes("Select"));
  select.forEach((skin) =>
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
});

document.querySelector("#deluxe-btn").addEventListener("click", function () {
  remove();
  const deluxe = skins.filter((skin) => skin.edition.includes("Deluxe"));
  deluxe.forEach((skin) =>
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
});

document.querySelector("#premium-btn").addEventListener("click", function () {
  remove();
  const premium = skins.filter((skin) => skin.edition.includes("Premium"));
  premium.forEach((skin) =>
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
});

document.querySelector("#exclusive-btn").addEventListener("click", function () {
  remove();
  const exclusive = skins.filter((skin) => skin.edition.includes("Exclusive"));
  exclusive.forEach((skin) =>
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
});

document.querySelector("#ultra-btn").addEventListener("click", function () {
  remove();
  const ultra = skins.filter((skin) => skin.edition.includes("Ultra"));
  ultra.forEach((skin) =>
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
});

//fix this xd
document.querySelector("#money-btn").addEventListener("click", function () {
  const cashconvert = skins.map((skin) => {
    const priceusd = {};
    priceusd.name = skin.name;
    priceusd.image = skin.image;
    priceusd.edition = skin.edition;
    priceusd.price = Math.round(skin.price / 100);
    return priceusd;
  });
  console.log(cashconvert);
});
