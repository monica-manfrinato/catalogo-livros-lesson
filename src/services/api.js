// No emulador Android, 10.0.2.2 aponta para o localhost da maquina host.
const BASE_URL = "http://10.0.2.2:3000";

export async function buscarLivros() {
  try{
    const response = await fetch(`${BASE_URL}/livros`)
    if (!response.ok){
      throw new Error(`Erro ${response.status} : falha ao buscar livros`)
    }
    return response.json()
  }
  catch(e){
    console.error('buscarLivros:', e.message)
  }
}

export async function buscarLivroPorId(id) {
  try{
    const response = await fetch(`${BASE_URL}/livros/${id}`)
    if (!response.ok){
      throw new Error(`Erro ${response.status} : status não encontrado`)
    }
    return response.json()

  }
  catch(e){
    console.error('buscarLivroPorId:', e.message)
  }
}

export async function adicionarFavorito(livroId, observacao = "") {
  try{
    const response = await fetch(`${BASE_URL}/favoritos,`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({livroId, observacao})
    })

    if (!response.ok){
      const corpo = await response.json().catch(()=>({}))
      const erro = new Error(corpo.erro ?? `Erro ${response.status} : falha ao adicionar favorito` )
      erro.status = response.status
      throw erro
    }
    return response.json()

  }
  catch(e){
    console.error('adicionarFavorito:', e.message)
  }
}

export async function listarFavoritos() {
  try{
    const response = await fetch(`${BASE_URL}/favoritos`)
    if (!response.ok){
      throw new Error(`Erro ${response.status} : falha ao listar favoritos`)
    }
    return response.json()

  }
  catch(e){
    console.error('listarFavoritos:', e.message)
  }
}

export async function editarFavorito(id, observacao) {
  // TODO: implementar
}

export async function removerFavorito(id) {
  // TODO: implementar
}
