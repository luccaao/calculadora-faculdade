let displayValue = "";

function add(value) {
  displayValue += value;
  document.querySelector(".resultado").textContent = displayValue;
}

const apagar = document.querySelector(".ac");
const aparecerErro = document.querySelector(".teste");

apagar.addEventListener("click", () => {
  displayValue = "";
  document.querySelector(".resultado").textContent = "0";
  aparecerErro.classList.add("hidden");
});

function calcular() {
  try {
    displayValue = eval(displayValue);
    document.querySelector(".resultado").textContent = displayValue;
  } catch (error) {
    
    if (error) {
      aparecerErro.classList.remove("hidden");
    }
    const displayError = "Erro!";
    document.querySelector(".resultado").textContent = displayError;
  }
}
