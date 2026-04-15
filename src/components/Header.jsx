import { useState, useEffect } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <h1>José Abdias<span>.dev</span></h1>
        </div>
        <nav className="nav">
          <button
            className={`nav-toggle${open ? ' active' : ''}`}
            id="navToggle"
            aria-label="Toggle navigation"
            onClick={() => setOpen(o => !o)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <ul className={`nav-menu${open ? ' active' : ''}`} id="navMenu">
            <li><a href="#home" className="nav-link" onClick={close}>Início</a></li>
            <li><a href="#sobre" className="nav-link" onClick={close}>Sobre</a></li>
            <li><a href="#projetos" className="nav-link" onClick={close}>Projetos</a></li>
            <li><a href="#contato" className="nav-link" onClick={close}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
