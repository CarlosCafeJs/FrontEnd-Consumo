
const LINK_API = `https://legendary-robot-pj95v95rxx7gh6976-8080.app.github.dev/`


const pd_form = document.getElementById('pd_form');
const pd_resultado = document.getElementById('pd_resultado')

pd_form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = {
    nome: pd_form.nome.value,
    categoria: pd_form.categoria.value,
    descricao: pd_form.descricao.value,
    disponivel: pd_form.disponivel.checked,
    tempoPreparo: pd_form.tempoPreparo.value,
    preco: parseFloat(pd_form.preco.value)
    // Exemplo Especifico Para Endreco:
    endereco: {
      logradouro: pd_form.logradouro.value
    }
    // ==================
  }

  try {
    const resposta = await fetch(`${LINK_API}api/produtos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
    const jsonDadosRetorno = await resposta.json();
    pd_resultado.textContent = JSON.stringify(jsonDadosRetorno, null, 2);
    // pd_resultado.textContent = "Cadastrado com sucesso!;

  } catch (err) {
    console.log('Erro:', err);
    pd_resultado.textContent = "Erro ao enviar dados para API"

  }

})

