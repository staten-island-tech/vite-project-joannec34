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

//dom and functions

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

const skinsusd = skins.map((skin) => {
  const convertedskins = {};
  convertedskins.name = skin.name;
  convertedskins.image = skin.image;
  convertedskins.edition = skin.edition;
  convertedskins.price = Math.round(skin.price * 0.010505);
  return convertedskins;
});

dom.allbtn.addEventListener("click", function () {
  remove();
  createallcards();
});

const createallcards = function () {
  if (document.body.classList.contains("usd")) {
    skinsusd.forEach(createboxesusd);
  } else {
    skins.forEach(createboxes);
  }
};

dom.selectbtn.addEventListener("click", function () {
  remove();
  createselectcards();
});

const createselectcards = function () {
  if (document.body.classList.contains("usd")) {
    let select = skinsusd.filter((skin) => skin.edition.includes("Select"));
    select.forEach(createboxesusd);
  } else {
    let select = skins.filter((skin) => skin.edition.includes("Select"));
    select.forEach(createboxes);
  }
};

dom.deluxebtn.addEventListener("click", function () {
  remove();
  createdeluxecards();
});

const createdeluxecards = function () {
  if (document.body.classList.contains("usd")) {
    let deluxe = skinsusd.filter((skin) => skin.edition.includes("Deluxe"));
    deluxe.forEach(createboxesusd);
  } else {
    let deluxe = skins.filter((skin) => skin.edition.includes("Deluxe"));
    deluxe.forEach(createboxes);
  }
};

dom.premiumbtn.addEventListener("click", function () {
  remove();
  createpremiumcards();
});

const createpremiumcards = function () {
  if (document.body.classList.contains("usd")) {
    let premium = skinsusd.filter((skin) => skin.edition.includes("Premium"));
    premium.forEach(createboxesusd);
  } else {
    let premium = skins.filter((skin) => skin.edition.includes("Premium"));
    premium.forEach(createboxes);
  }
};

dom.exclusivebtn.addEventListener("click", function () {
  remove();
  createexclusivecards();
});

const createexclusivecards = function () {
  if (document.body.classList.contains("usd")) {
    let exclusive = skinsusd.filter((skin) =>
      skin.edition.includes("Exclusive")
    );
    exclusive.forEach(createboxesusd);
  } else {
    let exclusive = skins.filter((skin) => skin.edition.includes("Exclusive"));
    exclusive.forEach(createboxes);
  }
};

dom.ultrabtn.addEventListener("click", function () {
  remove();
  createultracards();
});

const createultracards = function () {
  if (document.body.classList.contains("usd")) {
    let ultra = skinsusd.filter((skin) => skin.edition.includes("Ultra"));
    ultra.forEach(createboxesusd);
  } else {
    let ultra = skins.filter((skin) => skin.edition.includes("Ultra"));
    ultra.forEach(createboxes);
  }
};

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

//why no work

const refresh = function () {
  let edition = document.querySelector(".specific-edition").innerHTML;
  console.log(edition);
  if (edition.includes("Select")) {
    remove();
    createselectcards();
  } else if (edition.includes("Deluxe")) {
    remove();
    createdeluxecards();
  } else if (edition.includes("Premium")) {
    remove();
    createpremiumcards();
  } else if (edition.includes("Exclusive")) {
    remove();
    createexclusivecards();
  } else if (edition.includes("Ultra")) {
    remove();
    createultracards();
  } else {
    remove();
    createallcards();
  }
};

//get stuff ?

/* const editions = {
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
editions.getSelect();
 */
