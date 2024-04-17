// Funções para coletar os dados dos campos do forms, e enviar para meu email.
//Cria eventlist para o formulario
// Faz envio para a API da EmailJs, onde tenho uma conta e recebo a transferencia de email para meu Gmail
// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o formulário pelo ID
  const form = document.getElementById("form");

  // Adiciona um event listener para o evento de envio do formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita a recarga da página

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("menssagem").value;

    // Verifica se todos os campos foram preenchidos
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos do formulário.");
      return;
    }

    // Parâmetros do template para o serviço de email
    const templateParams = {
      from_name: nome,
      from_email: email,
      message: mensagem,
    };

    // Envia os dados do formulário para a API de email
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_ye5ffbl",
        template_id: "template_kn73yhm",
        user_id: "FZyBWbSHa8uxJJbvz", // Substitua pelo seu User ID
        template_params: templateParams,
      }),
    })
      .then((response) => {
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error("Erro ao enviar a mensagem.");
        }
        return response.json();
      })
      .catch(() => {
        // Exibe uma mensagem de sucesso e limpa o formulário
        alert(
          "Enviado com sucesso! Logo vou responder o seu contato. Gratidão"
        );
        form.reset(); // Limpa o formulário após o envio
      });
  });
});
