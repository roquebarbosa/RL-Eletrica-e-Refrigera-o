<script>
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");

    const showSection = (id) => {
      sections.forEach((s) => (s.style.display = "none"));
      const target = document.getElementById(id);
      if (target) {
        target.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Aplica para qualquer link que leve a uma âncora (href="#...") da página
    document.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href").substring(1);
        showSection(id);
      });
    });

    // Exibe a seção inicial ao carregar
    showSection("inicio");
  });
</script>
