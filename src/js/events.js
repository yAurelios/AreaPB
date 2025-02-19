document.addEventListener("DOMContentLoaded", function () {
    loadEvents();
});

const events = [
    {

        name: "Primeira Confraternização AREA Pato Branco 2025",
        description: "Um evento para discutir novas práticas e tecnologias para um futuro mais sustentável na engenharia.",
        date: "15 de Março de 2025",
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