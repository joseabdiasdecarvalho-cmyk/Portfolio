const skills = [
  { icon: 'fab fa-html5', label: 'HTML5' },
  { icon: 'fab fa-css3-alt', label: 'CSS3' },
  { icon: 'fab fa-js', label: 'JavaScript' },
  { icon: 'fab fa-react', label: 'React' },
  { icon: 'fab fa-node', label: 'Node.js' },
  { icon: 'fab fa-git-alt', label: 'Git' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="sobre-content">
          <div className="sobre-foto">
            <div className="foto-wrapper">
              <img src="/perfil.png" alt="José Abdias de Carvalho" className="perfil-img" />
            </div>
          </div>
          <div className="sobre-text">
            <p>
              Desenvolvedor web com foco em criar soluções digitais que fazem a diferença.
              Apaixonado por tecnologia e inovação, busco sempre entregar projetos de qualidade
              que atendam às necessidades dos clientes.
            </p>
            <p>
              Com experiência em desenvolvimento front-end e back-end, trabalho com as principais
              tecnologias do mercado para criar aplicações modernas, responsivas e eficientes.
            </p>
            <p>
              Estou sempre em busca de novos desafios e oportunidades para aplicar meu conhecimento
              e contribuir com projetos que agreguem valor.
            </p>
          </div>

          <div className="skills">
            <h3>Tecnologias e Ferramentas</h3>
            <div className="skills-grid">
              {skills.map(s => (
                <div key={s.label} className="skill-card">
                  <i className={s.icon}></i>
                  <h4>{s.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
