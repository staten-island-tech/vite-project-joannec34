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

//dom

const dom = {
  parent: document.querySelector(".parent"),
  allbtn: document.querySelector("#all-btn"),
  selectbtn: document.querySelector("#select-btn"),
};

//coding buttons

const remove = function () {
  document.querySelectorAll(".baby").forEach((baby) => baby.remove());
};

const createboxes = function (card) {
  dom.parent.insertAdjacentHTML(
    "beforeend",
    `<div class="baby">
  <img class="bundleimage" src="${card.image}">
  <div class="info">
  <h4>${card.name}</h4>
  <p class="specific-info">${card.edition} EDITION // ${card.price} VP</p>
  </div>
  </div>`
  );
};
skins.forEach(createboxes);

dom.allbtn.addEventListener("click", function () {
  remove();
  skins.forEach(createboxes);
});

dom.selectbtn.addEventListener("click", function () {
  remove();
  const select = skins.filter((skin) => skin.edition.includes("Select"));
  select.forEach(createboxes);
});

document.querySelector("#deluxe-btn").addEventListener("click", function () {
  remove();
  const deluxe = skins.filter((skin) => skin.edition.includes("Deluxe"));
  deluxe.forEach(createboxes);
});

document.querySelector("#premium-btn").addEventListener("click", function () {
  remove();
  const premium = skins.filter((skin) => skin.edition.includes("Premium"));
  premium.forEach(createboxes);
});

document.querySelector("#exclusive-btn").addEventListener("click", function () {
  remove();
  const exclusive = skins.filter((skin) => skin.edition.includes("Exclusive"));
  exclusive.forEach(createboxes);
});

document.querySelector("#ultra-btn").addEventListener("click", function () {
  remove();
  const ultra = skins.filter((skin) => skin.edition.includes("Ultra"));
  ultra.forEach(createboxes);
});

//converter, fix this somehow idk

document.querySelector("#money-btn").addEventListener("click", function () {
  const skinsusd = skins.map((skin) => {
    const convertedskins = {};
    convertedskins.name = skin.name;
    convertedskins.image = skin.image;
    convertedskins.edition = skin.edition;
    convertedskins.price = Math.round(skin.price * 0.010505);
    return convertedskins;
  });
  remove();
  skinsusd.forEach(createboxes);
});

//get stuff ?

const editions = {
  getSelect: function () {
    skins
      .filter((skin) => skin.edition.includes("Select"))
      .forEach((skin) => console.log(skin.name));
  },
  getDeluxe: function () {
    skins
      .filter((skin) => skin.edition.includes("Deluxe"))
      .forEach((skin) => console.log(skin.name));
  },
  getPremium: function () {
    skins
      .filter((skin) => skin.edition.includes("Premium"))
      .forEach((skin) => console.log(skin.name));
  },
  getExclusive: function () {
    skins
      .filter((skin) => skin.edition.includes("Exclusive"))
      .forEach((skin) => console.log(skin.name));
  },
  getUltra: function () {
    skins
      .filter((skin) => skin.edition.includes("Ultra"))
      .forEach((skin) => console.log(skin.name));
  },
};
//editions.getSelect();
