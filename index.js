const container = document.getElementById("container");

for (let i = 0; i < 76; i++) {
  const div = document.createElement("div");
  div.innerText = i + 1;
  div.id = i;
  div.classList.add("number");
  container.appendChild(div);
}


const random = () => {
  const randomNumber = Math.round(Math.random() * 75);
  const element = document.getElementById(randomNumber);
  element.classList.add("number-select");
}