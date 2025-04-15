document.getElementById("entrarButton").addEventListener("click", function () {
   
    const nome = document.getElementById("nome").value;

   
    if (nome.trim() === "") {
        alert("Por favor, insira seu nome.");
        return;
    }

   
    window.location.href = `https://discord.gg/wHh5C8z9V9`;
});

document.getElementById("exibirTabela").addEventListener("click", function () {
   
    const tabela = document.getElementById("tabelaContainer");

   
    if (tabela.style.display === "none") {
        tabela.style.display = "block"; 
        this.textContent = "Ocultar Reviews"; 
    } else {
        tabela.style.display = "none";
        this.textContent = "Exibir Reviews"; 
    }
});
