document.addEventListener("DOMContentLoaded", loadEvents);

const events = [
    {
        name: "1ª Confraternização da AREA-PB",
        description: "No primeiro encontro de 2025, a associação apresentou sua diretoria executiva e conversou sobre os desafios do ano.",
        date: "8 de fevereiro de 2025",
        dateTime: "2025-02-08",
        image: "/src/img/eventos/2025/1bim/primeiraConfraternizacaoAreaPBcapa.jpg",
        link: "/eventos/2025/primeiro-encontro"
    }
];

function loadEvents() {
    const container = document.getElementById("loadEvents");
    if (!container) return;

    if (events.length === 0) {
        container.innerHTML = "<p>Não há eventos publicados no momento. Volte em breve para ver as próximas atividades.</p>";
        return;
    }

    container.innerHTML = events.map(event => `
        <article class="event">
            <a href="${event.link}">
                <img src="${event.image}" alt="Registro da 1ª Confraternização da AREA-PB" class="eventImg">
                <h2 class="eventTitle">${event.name}</h2>
                <time class="eventDate" datetime="${event.dateTime}">${event.date}</time>
                <p class="eventDescription">${event.description}</p>
                <span class="eventMore">Ver detalhes</span>
            </a>
        </article>
    `).join("");
}
