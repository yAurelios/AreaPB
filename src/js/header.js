function loadHeader() {
    const headerHTML = `
    <header>
    <button class="hamburger" aria-label="Toggle menu">☰</button>
        <div id="headerContent">
            <figure class="logo">
                <img src="/src/img/areaPatoBranco.svg" alt="areaPBlogo" id="pcVersion"/>
                <img src="/src/img/areaPatoBrancoWhite.svg" alt="areaPBlogo" id="mobileVersion"/>
            </figure>
            <nav class="navBox" style="display: none;"> <!-- Oculta inicialmente -->
                <ul>
                    <li><a href="/">Página Inicial</a></li>
                    <li><a href="/eventos">Eventos</a></li>
                    <li><a href="/revista">Revista</a></li>
                    <li><a href="/infos">Sobre nós</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;

    document.getElementById('header').innerHTML = headerHTML;

    const hamburger = document.querySelector('.hamburger');
    const navBox = document.querySelector('.navBox');

    // Evita animação no carregamento
    setTimeout(() => {
        navBox.style.display = "flex"; // Torna visível sem animação
        navBox.classList.add("ready"); // Adiciona classe que permite animação futura
    }, 10);

    hamburger.addEventListener('click', () => {
        navBox.classList.toggle('active');
    });

    // Remove a animação ao redimensionar a tela para evitar efeito indesejado
    window.addEventListener("resize", () => {
        if (!navBox.classList.contains("active")) {
            navBox.style.transition = "none"; // Remove transição temporariamente
            setTimeout(() => {
                navBox.style.transition = ""; // Reativa a transição depois que o resize termina
            }, 100);
        }
    });
}

// Inicializa o cabeçalho ao carregar a página
document.addEventListener("DOMContentLoaded", loadHeader);
