document.addEventListener("DOMContentLoaded", function () {
    loadEvents();
});

const events = [
    {

        name: "Primeira Confraternização AREA Pato Branco 2025",
        description: "Realizada a primeira Confraternização da Associação de Engenheiros e Arquitetos de Pato Branco, com a apresentação da diretoria executiva e também os desafios para 2025.",
        date: "08 de fevereiro 2025",
        link: "/eventos/2025/primeiro-encontro"
    },
];

function loadEvents() {
    const container = document.getElementById("loadEvents");
    if (!container) return;

    let content = "";
    events.forEach(event => {
        content += `
            <section class="event">
                <a href="${event.link}">
                    <img src="/src/img/eventos/2025/1bim/primeiraConfraternizacaoAreaPBcapa.jpg" alt="Capa Primeira Confraternização" class="eventImg">
                    <h1 class="eventTitle">${event.name}</h1>
                    <p class="eventDate">${event.date}</p>
                    <p class="eventDescription">${event.description}</p>
                </a>
            </section>
        `;
    });

    container.innerHTML = content;
}