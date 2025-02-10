function loadHeader() {
    const headerHTML = `
    <header>
        <div id="headerContent">

            <button class="hamburger" aria-label="Toggle menu">☰</button>

            <figure class="logo">
                <img src="../../../src/img/areaPatoBranco.png" alt="areaPBlogo"/>
            </figure>
            <nav class="navBox">
                <ul>
                    <li><a href="/">Página Inicial</a></li>
                    <li><a href="/">Eventos</a></li>
                    <li><a href="/">Revista</a></li>
                    <li><a href="/">Associação</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;

    document.getElementById('header').innerHTML = headerHTML;

    // Evento para o botão de hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navBox = document.querySelector('.navBox');

    hamburger.addEventListener('click', () => {
        navBox.classList.toggle('active');
    });
}

// Inicializa o cabeçalho ao carregar a página
document.addEventListener("DOMContentLoaded", loadHeader);