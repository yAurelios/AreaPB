function loadFooter() {
    const footerContainer = document.getElementById("footer");
    if (!footerContainer) return;

    footerContainer.innerHTML = `
    <footer>
        <article>
            <h2>Associação Regional de Engenheiros e Arquitetos de Pato Branco</h2>
            <address>
                R. Tapajós, nº 305, sala 106 — Centro, Pato Branco — PR, CEP 85501-030<br>
                Telefone: <a href="tel:+5546991262389">(46) 99126-2389</a>
            </address>
        </article>
    </footer>
    `;
}

document.addEventListener("DOMContentLoaded", loadFooter);
