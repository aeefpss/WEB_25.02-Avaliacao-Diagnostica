// ALERT ao entrar no site
window.onload = function(){
    alert("Bem-vinda ao The Fashion Foward");
}

// Botão hero
function boasVindas(){
    alert("Prepare-se para unir estilo futebol!");
}

// Curtir post
function curtirPost(botao){
    botao.innerText = "Curtido";
    botao.disable = true;
}

// Newsletter
function inscrever(){
    let email = document.getElementById("email").value;

    if(email === ""){
        alert("Por favor, digite um email válido!");
    } else {
        alert("Inscrição realizada com sucesso");
        document.getElementById("email").value = "";
    }
}