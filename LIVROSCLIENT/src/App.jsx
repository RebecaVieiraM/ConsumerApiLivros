import { useState, useEffect } from 'react'
import LivrosCard from './componentes/cardlivros';
import './App.css'

function App() {

  const [livros, setlivros] = useState([]);
  const [generoSelecionado, setGeneroSelecionado] = useState(null);


  useEffect(() => {
    fetch('/api.json')
      .then(res => res.json())
      .then(data => setlivros(data))
  }, [])
 const livrosFiltrados = livros.filter(livro => !generoSelecionado || livro.genero === generoSelecionado);

  return (
    <>
      <div className="app-container">

        <ul className='listaAnos'>
          <li><button onClick={() => setGeneroSelecionado("romance")}>Romance</button></li>
          <li><button onClick={() => setGeneroSelecionado("acao")}>Ação</button></li>
          <li><button onClick={() => setGeneroSelecionado("comedia")}>Comédia</button></li>
          <li><button onClick={() => setGeneroSelecionado(null)}>Todos</button></li>
        </ul>
        <hr />

        <div className="livrosCard">
          {livrosFiltrados.map((livro) => (
            <LivrosCard key={livro.id} nome={livro.nome} capa={livro.capa} genero={livro.genero} autor={livro.autor} ano={livro.ano_lancamento}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
