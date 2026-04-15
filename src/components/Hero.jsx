export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Olá, eu sou <span className="highlight">José Abdias de Carvalho</span></h2>
          <p className="hero-subtitle">Desenvolvedor Web | Soluções Digitais</p>
          <p className="hero-description">
            Transformando ideias em experiências digitais inovadoras.
            Desenvolvedor focado em criar soluções práticas e eficientes.
          </p>
          <div className="hero-buttons">
            <a href="#projetos" className="btn btn-primary">Ver Projetos</a>
            <a href="#contato" className="btn btn-secondary">Entre em Contato</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/joseabdiasdecarvalho-cmyk" target="_blank" rel="noopener" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:joseabdiasdecarvalho@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
