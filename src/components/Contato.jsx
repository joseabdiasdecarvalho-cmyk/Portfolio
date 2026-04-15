import { useState } from 'react'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Obrigado, ${form.nome}! Sua mensagem foi enviada com sucesso.`)
    setForm({ nome: '', email: '', mensagem: '' })
  }

  return (
    <section id="contato" className="contato">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">Vamos trabalhar juntos? Entre em contato!</p>
        <div className="contato-content">
          <div className="contato-info">
            <div className="contato-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <a href="mailto:joseabdiasdecarvalho@gmail.com">joseabdiasdecarvalho@gmail.com</a>
              </div>
            </div>
            <div className="contato-item">
              <i className="fab fa-github"></i>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/joseabdiasdecarvalho-cmyk" target="_blank" rel="noopener">@joseabdiasdecarvalho-cmyk</a>
              </div>
            </div>
          </div>

          <form className="contato-form" id="contatoForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="nome" name="nome" placeholder="Seu nome" required value={form.nome} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Seu email" required value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <textarea id="mensagem" name="mensagem" rows="5" placeholder="Sua mensagem" required value={form.mensagem} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  )
}
