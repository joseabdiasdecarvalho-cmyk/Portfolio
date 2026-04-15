import { projetos } from '../data/projetos.js'

function ProjetoCard({ projeto }) {
  return (
    <div className="projeto-card" data-id={projeto.id}>
      <div className="projeto-header">
        <span className="projeto-icone">{projeto.icone}</span>
      </div>
      <div className="projeto-conteudo">
        <h3 className="projeto-titulo">{projeto.titulo}</h3>
        <p className="projeto-descricao">{projeto.descricao}</p>
        <div className="projeto-tecnologias">
          {projeto.tecnologias.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="projeto-links">
          {projeto.githubLink && (
            <a href={projeto.githubLink} target="_blank" rel="noopener" className="projeto-link">
              <i className="fab fa-github"></i> GitHub
            </a>
          )}
          {projeto.demoLink && (
            <a href={projeto.demoLink} target="_blank" rel="noopener" className="projeto-link">
              <i className="fas fa-external-link-alt"></i> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projetos() {
  return (
    <section id="projetos" className="projetos">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        <p className="section-subtitle">Confira alguns dos meus trabalhos mais recentes</p>
        <div className="projetos-grid" id="projetosContainer">
          {projetos.map(p => <ProjetoCard key={p.id} projeto={p} />)}
        </div>
      </div>
    </section>
  )
}
