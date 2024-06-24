document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("footer form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
  });
});
