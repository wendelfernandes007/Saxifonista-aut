// Selecionando os elementos
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Abrir e fechar menu ao clicar no hamburger
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em qualquer link (melhora a experiência)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Inicializar ícones Lucide (opcional se usar ícones)
lucide.createIcons();

//js-2
// Garante que os ícones do Lucide apareçam
lucide.createIcons();

// js-3
document.querySelector('#form-contato').addEventListener('submit', function(e) {
    // Se estiver usando Formspree, não precisa do preventDefault para o envio real
    // e.preventDefault(); 
    
    alert('Obrigado, Alan Dutra recebeu sua mensagem e entrará em contato em breve!');
    this.reset();
});

// No final do seu arquivo script.js
lucide.createIcons();

<script>
  lucide.createIcons();
</script>
