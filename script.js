const form = document.getElementById("form");

// salvar no localStorage
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dados = {
    nome: nome.value,
    cpf: cpf.value,
    data: data.value,
    endereco: endereco.value
  };

  localStorage.setItem("formData", JSON.stringify(dados));
  alert("Dados salvos!");
});

// carregar ao abrir
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem("formData"));
  if (saved) {
    nome.value = saved.nome;
    cpf.value = saved.cpf;
    data.value = saved.data;
    endereco.value = saved.endereco;
  }
};

// gerar pdf (impressão)
function gerarPDF() {
  window.print();
}