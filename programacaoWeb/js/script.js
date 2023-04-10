const enviar = document.querySelector("#enviar");

enviar.addEventListener("click", function(form){

    form.preventDefault();

    const txtnome = document.querySelector("#txtnome");
    const nome = txtnome.value;

    const txtfone = document.querySelector("#txtfone");
    const fone = txtfone.value;

    const txtemail = document.querySelector("#txtemail");
    const email = txtemail.value;

    const txtmensagem = document.querySelector("#txtmensagem");
    const mensagem = txtmensagem.value;

    console.log(`Nome: ${nome}\nTelefone: ${fone}\nE-mail: ${email}\nMensagem: ${mensagem}`);
});