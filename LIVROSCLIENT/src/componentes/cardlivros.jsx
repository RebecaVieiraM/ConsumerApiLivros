export default function LivrosCard({key, nome, capa, genero, autor, ano}) {
    return(
        <div className="card" key={key} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <div className="divCard">
                <div className="div1">
                    <h1>{nome}</h1>            
                    <img src={capa} alt={nome} width={200} />
                </div>
                <div>
                    <h3>Gênero: {genero}</h3>
                    <h3>Autor: {autor}</h3>
                    <h3>Ano de Lançamento: {ano}</h3>
                </div>
            </div>
            
        </div>
    )
}