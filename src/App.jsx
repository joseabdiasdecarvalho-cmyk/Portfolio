import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Projetos from './components/Projetos.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const href = link.getAttribute('href')
      if (href === '#' || href === '') return
      const target = document.getElementById(href.substring(1))
      if (!target) return
      e.preventDefault()
      const offset = target.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </>
  )
}
