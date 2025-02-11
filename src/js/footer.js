function loadFooter() {
    const footerHTML = `
    <footer>
        <article>
            <h2>Associação Regional de Engenheiros e Arquitetos de Pato Branco</h2>
            <p>R. Tapajós, Nº305, Sala 106 - Centro, Pato Branco - PR, 85501-030 - (46) 99126-2389</p>
        </article>
    </footer>
    `;
    document.getElementById('footer').innerHTML = footerHTML;
}
document.addEventListener("DOMContentLoaded", loadFooter);