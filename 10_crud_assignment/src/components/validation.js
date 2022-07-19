function enterProductName() {
  const productName = document.getElementById("productName");
  const reg = /^[a-zA-Z]{4,10}$/;
  let productNameStr = productName.value;
  if (reg.test(productNameStr)) {
    productName.classList.add("is-valid");
    productName.classList.remove("is-invalid");
  } else {
    productName.classList.add("is-invalid");
    productName.classList.remove("is-valid");
  }
}

function enterProductPrice() {
  const productPrice = document.getElementById("productPrice");
  const reg = /^([0-9]){6}$/;
  let productPriceStr = productPrice.value;
  if (reg.test(productPriceStr)) {
    productPrice.classList.add("is-valid");
    productPrice.classList.remove("is-invalid");
  } else {
    productPrice.classList.add("is-invalid");
    productPrice.classList.remove("is-valid");
  }
}

function enterProductQuantity() {
  const productQuantity = document.getElementById("productQuantity");
  const reg = /^([0-9]){2}$/;
  let number = productQuantity.value;
  if (reg.test(number)) {
    productQuantity.classList.add("is-valid");
    productQuantity.classList.remove("is-invalid");
  } else {
    productQuantity.classList.add("is-invalid");
    productQuantity.classList.remove("is-valid");
  }
}

function submitForm(error) {
  error.preventDefault();
  const productName = document.getElementById("productName");
  let success = document.getElementById("success");
  let productNameStr = productName.value;
  if (productNameStr.length > 0) {
    success.classList.add("show");
  }
  setTimeout(() => {
    success.classList.remove("show");
  }, 5000);
}

export {
  enterProductName,
  enterProductPrice,
  enterProductQuantity,
  submitForm,
};
