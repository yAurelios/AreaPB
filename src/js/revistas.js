document.addEventListener("DOMContentLoaded", function () {
    loadRevistas();
});

const magazines = [
    {
        name: "Revista Engenharia em Debate | 3º Edição",
        description: "De uma parceria entre CREA-PR e AREA-PB, a atuação de diversas engenharias visando um futuro mais sustentável. Nessa 3º Edição, a Revista Engenharia em Debate trás conteúdos diversos, a retrospectiva de 2022/2023/2024, novos padrões de sustentabilidade e planejamento urbano. Confira!",
        date: "Ano 2024",
        link: "/revista/2024-2"
    },
];

function loadRevistas() {
    const container = document.getElementById("loadRevistas");
    if (!container) return;

    let content = "";
    magazines.forEach(magazine => {
        content += `
            <section class="magazine">
                <h1 class="magazineTitle"><a href="${magazine.link}">${magazine.name}</a></h1>
                <p class="magazineDate">${magazine.date}</p>
                <p class="magazineDescription">${magazine.description}</p>
            </section>
        `;
    });

    container.innerHTML = content;
}
