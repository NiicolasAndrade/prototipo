document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Função para adicionar ou remover a classe sticky ao header
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  // Função para rolar suavemente para o elemento de âncora
  function handleSmoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  }

  // Função para alternar a classe ativa no menu
  function handleMenuToggle() {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  // Adiciona o evento de rolagem ao window
  window.addEventListener("scroll", handleScroll);

  // Adiciona o evento de clique para rolagem suave em links de âncora
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", handleSmoothScroll);
  });

  // Adiciona o evento de clique para alternar o menu
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", handleMenuToggle);
  }
});
