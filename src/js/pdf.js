document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        loadPDF('/src/pdf/3EdicaoRevista.pdf'); // Certifique-se da extensão do arquivo
    }, 1000);
});

function loadPDF(pdfUrl) {
    const canvas = document.getElementById("pdf-viewer");
    const context = canvas.getContext("2d");

    // Definir o Worker do PDF.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

    pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
        pdf.getPage(1).then(page => {
            let container = document.getElementById("pdf-container") || canvas.parentElement;
            let scale = container.clientWidth / page.getViewport({ scale: 1 }).width;

            let viewport = page.getViewport({ scale });
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            context.clearRect(0, 0, canvas.width, canvas.height);

            page.render({ canvasContext: context, viewport });
        });
    }).catch(error => {
        console.error("Erro ao carregar o PDF:", error);
    });
}
