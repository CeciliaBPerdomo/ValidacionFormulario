import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  document.getElementById("formulario").addEventListener("submit", validarFormulario)
  inicial()
};

function inicial() {
  document.getElementById("alerta").style.display = "none"
  document.getElementById("cardHelpBlock").style.display = "none"
  document.getElementById("cvcHelpBlock").style.display = "none"
  document.getElementById("amountHelpBlock").style.display = "none"
  document.getElementById("nameHelpBlock").style.display = "none"
  document.getElementById("lastNameHelpBlock").style.display = "none"
  document.getElementById("cityHelpBlock").style.display = "none"
  document.getElementById("stateHelpBlock").style.display = "none"
  document.getElementById("postalCodeHelpBlock").style.display = "none"
  document.getElementById("weAceeptHelpBlock").style.display = "none"
}

function mensajesError(cartel, estado) {
  document.getElementById("alerta").style.display = "block"
  document.getElementById(cartel).style.display = estado
}

function validarFormulario() {
  event.preventDefault()
  // Card
  let tarjeta = document.getElementById("card").value
  if (tarjeta == "" || tarjeta.length < 16) {
    mensajesError("cardHelpBlock", "block")
    document.getElementById("card").style.border = '2px solid red'
    document.getElementById("card").style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
  } else {
    mensajesError("cardHelpBlock", "none")
    document.getElementById("card").style.border = '2px solid green'
    document.getElementById("card").style.backgroundColor = 'white';
  }

  // CVC
  let cvcNumber = document.getElementById("cvc").value
  if (cvcNumber == "" || cvcNumber.length < 3) {
    mensajesError("cvcHelpBlock", "block")
    document.getElementById("cvc").style.border = '2px solid red'
    document.getElementById("cvc").style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
  } else {
    mensajesError("cvcHelpBlock", "none")
    document.getElementById("cvc").style.border = '2px solid green'
    document.getElementById("cvc").style.backgroundColor = 'white';
  }


  // Amount
  let amountPrice = document.getElementById("amount").value
  if (amountPrice == "") {
    mensajesError("amountHelpBlock", "block")
    document.getElementById("amount").style.border = '2px solid red'
    document.getElementById("amount").style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
  } else {
    mensajesError("amountHelpBlock", "none")
    document.getElementById("amount").style.border = '2px solid green'
    document.getElementById("amount").style.backgroundColor = 'white';
  }


  // First name
  let firstName = document.getElementById("name").value
  if (firstName == "") {
    mensajesError("nameHelpBlock", "block")
    document.getElementById("name").style.border = '2px solid red'
    document.getElementById("name").style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
  } else {
    mensajesError("nameHelpBlock", "none")
    document.getElementById("name").style.border = '2px solid green'
    document.getElementById("name").style.backgroundColor = 'white';
  }

  // Last name
  let last_Name = document.getElementById("lastName").value
  if (last_Name == "") {
    mensajesError("lastNameHelpBlock", "block")
    document.getElementById("lastName").style.border = '2px solid red'
    document.getElementById("lastName").style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
  } else {
    mensajesError("lastNameHelpBlock", "none")
    document.getElementById("lastName").style.border = '2px solid green'
    document.getElementById("lastName").style.backgroundColor = 'white';
  }

  // City
  let cityInput = document.getElementById("city").value
  if (cityInput == "") {
    mensajesError("cityHelpBlock", "block")
    document.getElementById("city").style.border = '2px solid red'
    document.getElementById("city").style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
  } else {
    mensajesError("cityHelpBlock", "none")
    document.getElementById("city").style.border = '2px solid green'
    document.getElementById("city").style.backgroundColor = 'white';
  }


  // State
  let stateInput = document.getElementById("state").value
  if (stateInput == "Pick a state") {
    mensajesError("stateHelpBlock", "block")
    document.getElementById("state").style.border = '2px solid red'
    document.getElementById("state").style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
  } else {
    mensajesError("stateHelpBlock", "none")
    document.getElementById("state").style.border = '2px solid green'
    document.getElementById("state").style.backgroundColor = 'white';
  }

  // Postal code
  let postalInput = document.getElementById("postalCode").value
  if (postalInput == "") {
    mensajesError("postalCodeHelpBlock", "block")
    document.getElementById("postalCode").style.border = '2px solid red'
    document.getElementById("postalCode").style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
  } else {
    mensajesError("postalCodeHelpBlock", "none")
    document.getElementById("postalCode").style.border = '2px solid green'
    document.getElementById("postalCode").style.backgroundColor = 'white';
  }

  // Tipo de tarjeta de credito
  let elementoActivo = document.querySelector(
    'input[name="inlineRadioOptions"]:checked'
  );
  if (!elementoActivo) {
    mensajesError("weAceeptHelpBlock", "block")
    document.getElementById("weAceept").style.border = '2px solid red'
  } else {
    mensajesError("weAceeptHelpBlock", "none")
    document.getElementById("weAceept").style.border = '2px solid green'
  }
}