const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  document.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(navbar) &&
      !e.composedPath().includes(menuBtn)
    ) {
      navbar.classList.remove("active");
    }
  });
});

const menu = [
  {
    id: 1,
    img: "imageHala/hummus.png",
    title: "Hummus",
    category: "breakfast",
    price: 15.99,
    desc: "Classic Middle Eastern dip made with chickpeas, tahini, olive oil, lemon juice, and garlic.",
  },
  {
    id: 2,
    img: "imageHala/mtabbal.png",
    title: "Baba Ghanuj",
    category: "lunch",
    price: 13.99,
    desc: "Smoky eggplant dip with tahini, olive oil, and Mediterranean spices.",
  },
  {
    id: 3,
    img: "imageHala/test.png",
    title: "Fattoush",
    category: "lunch",
    price: 22.99,
    desc: "Fresh parsley salad with bulgur wheat, tomatoes, mint, and lemon dressing.",
  },
  {
    id: 4,
    img: "imageHala/",
    title: "Falafel Plate",
    category: "dinner",
    price: 18.99,
    desc: "Crispy chickpea fritters served with tahini sauce and fresh vegetables.",
  },
  {
    id: 5,
    img: "imageHala/Shawarma.png",
    title: "Piatto Shawarma Pollo",
    category: "dinner",
    price: 15.99,
    desc: "Classic Middle Eastern dip made with chickpeas, tahini, olive oil, lemon juice, and garlic.",
  },
  {
    id: 6,
    img: "",
    title: "Piatto Shawarma Carne",
    category: "lunch",
    price: 15.99,
    desc: "Classic Middle Eastern dip made with chickpeas, tahini, olive oil, lemon juice, and garlic.",
  },
  {
    id: 7,
    img: "",
    title: "Piatto Shawarma Carne",
    category: "lunch",
    price: 15.99,
    desc: "Classic Middle Eastern dip made with chickpeas, tahini, olive oil, lemon juice, and garlic.",
  },
  {
    id: 8,
    img: "",
    title: "Piatto Misto",
    category: "lunch",
    price: 15.99,
    desc: "Classic Middle Eastern dip made with chickpeas, tahini, olive oil, lemon juice, and garlic.",
  },
  {
    id: 9,
    img: "",
    title: "Piatto Riso con Kebab",
    category: "lunch",
    price: 15.99,
    desc: "Classic Middle Eastern dip made with chickpeas, tahini, olive oil, lemon juice, and garlic.",
  },

  // Add more menu items as needed
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
                <img src=${item.img} alt="${item.title}" class="photo" />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
                    ${category}
                </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
