function createEl(el) {
  try {
    const element = document.createElement(el);

    return element;
  } catch (err) {
    throw Error(err, "something went wrong check element name");
  }
}

function createParaText(para_number) {
  const paraElementStr =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptatibus, sequi atque nemo velit dolorem expedita minima consequatur ratione iste et quae explicabo culpa aliquid, ea unde quasi tempora? Sed.";
  let arr = [];
  for (let i = 1; i <= para_number; i++) {
    let para = createEl("p");
    para.textContent = paraElementStr;
    arr.push(para);
  }

  return arr;
}
const bgImage = createEl("div");
bgImage.className += "bg-image ";
bgImage.id = "bg-image";

const container = createEl("div");
container.className += "container";
const h1 = createEl("h1");
h1.textContent = "welcome to our website";
container.appendChild(h1);

const paraElements = createParaText(10);

paraElements.forEach((el) => container.appendChild(el));
console.log(container, bgImage);
document.body.appendChild(bgImage);
document.body.appendChild(container);

// target
const bgImageEl = document.getElementById("bg-image");

// add event
window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
  bgImageEl.style.backgroundSize = 160 - window.pageYOffset/12 + "%";
 
}
