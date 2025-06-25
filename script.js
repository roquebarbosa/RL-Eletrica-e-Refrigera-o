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
<script>
  // Substitua pelo seu token e chat_id do Telegram
   const TELEGRAM_BOT_TOKEN = '7793676911:AAEkKyd22lRWXzttdX3Qabmu5tFwvaSZSA8';
   const TELEGRAM_CHAT_ID = '8139438816';
  document.querySelector("#contato form").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Preencha todos os campos.");
      return;
    }

    const texto = `Novo contato pelo site:\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: texto
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";
      } else {
        alert("Erro ao enviar mensagem. Tente novamente.");
      }
    })
    .catch(() => {
      alert("Erro ao conectar com o Telegram.");
    });
  });
</script>
</html>
