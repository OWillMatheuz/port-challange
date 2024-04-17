// Uma função de download de um arquivo PDF. Quando esse botão é clicado pelo usuário, o código inicia o download de um arquivo PDF pré-definido. No caso um Currículo
document.addEventListener("DOMContentLoaded", function () {
  const btnGerarPdf = document.getElementById("gerar-pdf");

  btnGerarPdf.addEventListener("click", function () {
    // Caminho para o PDF
    const pdfPath =
      "./assets/img/pdf_Currículo  dev. web java full-stack jr. (3).pdf ";

    // Criar um elemento a para iniciar o download do PDF
    const a = document.createElement("a");
    a.href = pdfPath;
    a.download = "curriculo.pdf";

    // Adicionar o elemento ao corpo e simular um clique para iniciar o download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});
