const btitle = document.getElementById("bpositiontitle");

btitle.addEventListener("input", (event) => {
  if (btitle.validity.patternMismatch) {
    btitle.setCustomValidity("Field expects 7 or more characters");
    btitle.reportValidity();
  } else {
    btitle.setCustomValidity("");
  }
});

date = new Date(Date.now());
document.querySelector('#form-hour').value = date;