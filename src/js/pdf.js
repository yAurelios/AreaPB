document.addEventListener("DOMContentLoaded", function () {
    loadPDF('/src/pdf/3EdicaoRevista'); // Carrega o primeiro PDF por padrão
  });
  
  function loadPDF(pdfUrl) {
    const canvas = document.getElementById("pdf-viewer");
    const context = canvas.getContext("2d");
  
    pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
      pdf.getPage(1).then(page => {
        let container = document.getElementById("pdf-container");
        let scale = container.clientWidth / page.getViewport({ scale: 1 }).width; // Ajusta o tamanho
  
        let viewport = page.getViewport({ scale });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
  
        context.clearRect(0, 0, canvas.width, canvas.height); // Limpa o PDF anterior
  
        page.render({ canvasContext: context, viewport });
      });
    });
  }
  