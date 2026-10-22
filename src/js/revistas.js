document.addEventListener("DOMContentLoaded", loadRevistas);

const magazines = [
    {
        name: "Engenharia em Debate — 4ª edição",
        description: "Publicada em 2026. Consulte a revista em PDF.",
        date: "2026",
        image: "/src/html/revistas/2026/4EdicaoRevistaCapa.png",
        link: "/revista/2026-4"
    },
    {
        name: "Engenharia em Debate — 3ª edição",
        description: "Publicada em parceria com o CREA-PR, esta edição reúne uma retrospectiva de 2022 a 2024 e conteúdos sobre sustentabilidade e planejamento urbano.",
        date: "2024",
        image: "/src/html/revistas/2024/3EdicaoRevistaCapa.png",
        link: "/revista/2024-2"
    }
];

function loadRevistas() {
    const container = document.getElementById("loadRevistas");
    if (!container) return;

    container.innerHTML = magazines.map(magazine => `
        <article class="magazine">
            <a href="${magazine.link}">
                ${magazine.image ? `<img class="magazineCover" src="${magazine.image}" alt="Capa da ${magazine.name}">` : ""}
                <h2 class="magazineTitle">${magazine.name}</h2>
                <p class="magazineDate">Ano ${magazine.date}</p>
                <p class="magazineDescription">${magazine.description}</p>
                <span class="magazineMore">Ler edição</span>
            </a>
        </article>
    `).join("");
}
