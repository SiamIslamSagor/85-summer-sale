let total = 0;

let count = 0;

function handelClick(clickElement) {
  // const price = parseFloat(clickElement.childNodes[9].innerText.split('.')[0]);
  // total += price;
  // console.log(total)

  const clickedElementName = clickElement.childNodes[7].innerText;
  const count = document.getElementById("cartEntryName").childElementCount;
  const div = document.createElement("div");
  // div.innerHTML = clickedElementName;
  div.innerHTML = `
    <p>${count + 1}. ${clickedElementName}</p>
    `;

  cartEntryName.appendChild(div);
  // console.log(clickedElementName)

  // console.log(clickElement.childNodes[7].innerText);
}

function reload() {
  location.reload();
}
