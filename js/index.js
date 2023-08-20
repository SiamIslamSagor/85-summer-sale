let totalPrice = 0;

let count = 0;

function handelClick(clickElement) {
  const price = parseFloat(clickElement.childNodes[9].innerText.split(".")[0]);
  totalPrice += price;
  document.getElementById("total-price").innerText = totalPrice.toFixed(2);

  const clickedElementName = clickElement.childNodes[7].innerText;
  const count = document.getElementById("cartEntryName").childElementCount;
  const div = document.createElement("div");
  div.innerHTML = `
    <p>${count + 1}. ${clickedElementName}</p>
    `;

  cartEntryName.appendChild(div);

  if (totalPrice != 0) {
    document.getElementById("make-purchase").removeAttribute("disabled");
  }
  if (totalPrice >= 200) {
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.removeAttribute("disabled");
    applyBtn.classList.remove("bg-gray-300");
    applyBtn.classList.add("bg-fuchsia-600");
  }
  document.getElementById('gray-line').classList.remove('hidden');
  document.getElementById('total').innerText = document.getElementById("total-price").innerText;
}



function couponChecker(){
  const coupon = getInputValueById('coupon-field');
  if(coupon == 'SELL200'){
    const discount = totalPrice * 20 / 100;
    const discountElement = document.getElementById('discount');
    discountElement.innerText = discount.toFixed(2);
    const total = totalPrice - discount;
    document.getElementById('total').innerText = total.toFixed(2);
  }

}

function getInputValueById(inputFiledId){
  const value = document.getElementById(inputFiledId).value;
  return value;
}


function reloadPage() {
  location.reload();
}

// const totalPrice = document.getElementById('total-price');
// totalPrice.innerText = total.toFixed(2);
// console.log(total)
