function loadHeader() {
    const headerContainer = document.getElementById("header");
    if (!headerContainer) return;

    headerContainer.innerHTML = `
    <header>
        <button class="hamburger" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="siteNavigation">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div id="headerContent">
            <a class="logo" href="/" aria-label="AREA-PB — página inicial">
                <img src="/src/img/areaPatoBranco.svg" alt="AREA-PB">
            </a>
            <nav class="navBox" id="siteNavigation" aria-label="Navegação principal">
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/eventos">Eventos</a></li>
                    <li><a href="/revista">Revista</a></li>
                    <li><a href="/infos">Sobre</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;

    const hamburger = headerContainer.querySelector(".hamburger");
    const navBox = headerContainer.querySelector(".navBox");
    const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

    navBox.querySelectorAll("a").forEach(link => {
        const linkPath = link.pathname.replace(/\/+$/, "") || "/";
        const isCurrentPage = linkPath === "/"
            ? currentPath === "/"
            : currentPath === linkPath || currentPath.startsWith(`${linkPath}/`);

        if (isCurrentPage) {
            link.setAttribute("aria-current", "page");
        }
    });

    hamburger.addEventListener("click", () => {
        const isOpen = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", String(!isOpen));
        hamburger.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
        navBox.classList.toggle("active", !isOpen);
    });

    navBox.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.setAttribute("aria-expanded", "false");
            hamburger.setAttribute("aria-label", "Abrir menu");
            navBox.classList.remove("active");
        });
    });
}

document.addEventListener("DOMContentLoaded", loadHeader);
