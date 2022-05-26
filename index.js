const service1 = document.getElementById("service-1");
const service2 = document.getElementById("service-2");
const service3 = document.getElementById("service-3"); // services offered

const costPerItem1 = document.getElementById("total-item-1"); // price per item
const costPerItem2 = document.getElementById("total-item-2"); // price per item
const costPerItem3 = document.getElementById("total-item-3"); // price per item

const dollarAmtTotal = document.getElementById("dollar-amount"); // price total

// buttons clicked
const washBtn = document.getElementById("wash-car-btn"); // wash car button
const mowBtn = document.getElementById("mow-lawn-btn"); // mow button
const pullWeedsBtn = document.getElementById("pull-weeds-btn"); // pull weeds button
const sendInvoiceBtn = document.getElementById("send-invoice-btn"); // send invoice button and clear form/ does  not send any information

// array for services prices and description
const servicesDescription = ["Wash Car", "Mow lawn", "Pull Weeds"];
const servicesPrices = [10, 20, 30];

let totalCost1 = 0;
let totalCost2 = 0;
let totalCost3 = 0;

// buttons addEventListener if clicked
let washBtnClicked = false;
washBtn.addEventListener("click", function () {
  service1.innerHTML = `${servicesDescription[0]} `;
  costPerItem1.innerText = `$ ${servicesPrices[0]}`;
  washBtnClicked  = true
  checkIfClickedAddToTotal(washBtnClicked)
  // calculateService1(washBtnClicked);
  
});



let mowBtnClicked = false;
mowBtn.addEventListener("click", function () {
  service2.innerHTML = `${servicesDescription[1]}`;
  costPerItem2.innerHTML = ` $ ${servicesPrices[1]}`;
  mowBtnClicked = true
  checkIfClickedAddToTotal(mowBtnClicked)
  // calculateService2(mowBtnClicked);
});


let pullWeedsBtnClicked = false;
pullWeedsBtn.addEventListener("click", function () {
  service3.innerHTML = `${servicesDescription[2]}`;
  costPerItem3.innerHTML = ` $ ${servicesPrices[2]}`;
  pullWeedsBtnClicked = true
  checkIfClickedAddToTotal(pullWeedsBtnClicked)

});



sendInvoiceBtn.addEventListener("click", function () {
  location.reload();
});

// check if clicked and add to total if clicked
function checkIfClickedAddToTotal() {
  let totalCost = 0;
  
  if (washBtnClicked  ) {
    totalCost += servicesPrices[0]; // add first to total if clicked is true
  }
  if (mowBtnClicked  ) {
    totalCost += servicesPrices[1]; // add second to total if clicked is true
  }
  if (pullWeedsBtnClicked) {
    totalCost += servicesPrices[2]; // add third to total if clicked is true
  }

  dollarAmtTotal.innerHTML = `$ ${totalCost}`;
}


