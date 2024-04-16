document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita a recarga da página

    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("menssagem").value;

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos do formulário.");
      return;
    }

    const templateParams = {
      from_name: nome,
      from_email: email,
      message: mensagem,
    };

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
        if (!response.ok) {
          throw new Error("Erro ao enviar a mensagem.");
        }
        return response.json();
      })
      .catch(() => {
        alert("Enviado com sucesso! Logo vou responder o seu contato. Gratidão");
        form.reset(); // Limpa o formulário após o envio
      });
  });
});
