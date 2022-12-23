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

//dom and stuff

const dom = {
  parent: document.querySelector(".parent"),
  allbtn: document.querySelector("#all-btn"),
  selectbtn: document.querySelector("#select-btn"),
  deluxebtn: document.querySelector("#deluxe-btn"),
  premiumbtn: document.querySelector("#premium-btn"),
  exclusivebtn: document.querySelector("#exclusive-btn"),
  ultrabtn: document.querySelector("#ultra-btn"),
  convertbtn: document.querySelector("#money-btn"),
};

const editions = {
  select: skins
    .filter((skin) => skin.edition.includes("Select"))
    .map((skin) => skin),
  deluxe: skins
    .filter((skin) => skin.edition.includes("Deluxe"))
    .map((skin) => skin),
  premium: skins
    .filter((skin) => skin.edition.includes("Premium"))
    .map((skin) => skin),
  exclusive: skins
    .filter((skin) => skin.edition.includes("Exclusive"))
    .map((skin) => skin),
  ultra: skins
    .filter((skin) => skin.edition.includes("Ultra"))
    .map((skin) => skin),
};

const skinsusd = skins.map((skin) => {
  const convertedskins = {};
  convertedskins.name = skin.name;
  convertedskins.image = skin.image;
  convertedskins.edition = skin.edition;
  convertedskins.price = Math.round(skin.price * 0.010505);
  return convertedskins;
});

const editionsusd = {
  select: skinsusd
    .filter((skin) => skin.edition.includes("Select"))
    .map((skin) => skin),
  deluxe: skinsusd
    .filter((skin) => skin.edition.includes("Deluxe"))
    .map((skin) => skin),
  premium: skinsusd
    .filter((skin) => skin.edition.includes("Premium"))
    .map((skin) => skin),
  exclusive: skinsusd
    .filter((skin) => skin.edition.includes("Exclusive"))
    .map((skin) => skin),
  ultra: skinsusd
    .filter((skin) => skin.edition.includes("Ultra"))
    .map((skin) => skin),
};

const createcards = {
  all: function () {
    if (document.body.classList.contains("usd")) {
      skinsusd.forEach(createboxesusd);
    } else {
      skins.forEach(createboxes);
    }
  },
  select: function () {
    if (document.body.classList.contains("usd")) {
      editionsusd.select.forEach(createboxesusd);
    } else {
      editions.select.forEach(createboxes);
    }
  },
  deluxe: function () {
    if (document.body.classList.contains("usd")) {
      editionsusd.deluxe.forEach(createboxesusd);
    } else {
      editions.deluxe.forEach(createboxes);
    }
  },
  premium: function () {
    if (document.body.classList.contains("usd")) {
      editionsusd.premium.forEach(createboxesusd);
    } else {
      editions.premium.forEach(createboxes);
    }
  },
  exclusive: function () {
    if (document.body.classList.contains("usd")) {
      editionsusd.exclusive.forEach(createboxesusd);
    } else {
      editions.exclusive.forEach(createboxes);
    }
  },
  ultra: function () {
    if (document.body.classList.contains("usd")) {
      editionsusd.ultra.forEach(createboxesusd);
    } else {
      editions.ultra.forEach(createboxes);
    }
  },
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
  <p class="specific-info"><span class="specific-edition">${card.edition}</span> EDITION // ${card.price} VP</p>
  </div>
  </div>`
  );
};
skins.forEach(createboxes);

const createboxesusd = function (cardusd) {
  dom.parent.insertAdjacentHTML(
    "beforeend",
    `<div class="baby">
  <img class="bundleimage" src="${cardusd.image}">
  <div class="info">
  <h4>${cardusd.name}</h4>
  <p class="specific-info"><span class="specific-edition">${cardusd.edition}</span> EDITION // $${cardusd.price}</p>
  </div>
  </div>`
  );
};

dom.allbtn.addEventListener("click", function () {
  remove();
  createcards.all();
});

dom.selectbtn.addEventListener("click", function () {
  remove();
  createcards.select();
});

dom.deluxebtn.addEventListener("click", function () {
  remove();
  createcards.deluxe();
});

dom.premiumbtn.addEventListener("click", function () {
  remove();
  createcards.premium();
});

dom.exclusivebtn.addEventListener("click", function () {
  remove();
  createcards.exclusive();
});

dom.ultrabtn.addEventListener("click", function () {
  remove();
  createcards.ultra();
});

//coding cash converter

dom.convertbtn.addEventListener("click", function () {
  if (document.body.classList.contains("usd")) {
    document.body.classList.add("vp");
    document.body.classList.remove("usd");
    this.innerHTML = "price in usd";
  } else {
    document.body.classList.add("usd");
    document.body.classList.remove("vp");
    this.innerHTML = "price in vp";
  }
  refresh();
});

const refresh = function () {
  let edition = document.querySelector(".specific-edition").innerHTML;
  remove();
  if (edition.includes("hello")) {
    createcards.all();
  } else if (edition.includes("Select")) {
    createcards.select();
  } else if (edition.includes("Deluxe")) {
    createcards.deluxe();
  } else if (edition.includes("Premium")) {
    createcards.premium();
  } else if (edition.includes("Exclusive")) {
    createcards.exclusive();
  } else if (edition.includes("Ultra")) {
    createcards.ultra();
  } else {
    console.log("hello");
  }
};
