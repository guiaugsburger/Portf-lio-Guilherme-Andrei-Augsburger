import './styles.css';

const services = [
  {
    number: '01',
    title: 'Design estratégico',
    text: 'Interfaces claras, funcionais e pensadas para transformar objetivos em experiências.',
  },
  {
    number: '02',
    title: 'Identidade visual',
    text: 'Sistemas visuais consistentes que dão personalidade e presença para cada projeto.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    text: 'Sites rápidos, responsivos e fiéis ao design, prontos para crescer com seu negócio.',
  },
];

const projects = [
  { title: 'Ateliê Aurora', type: 'Identidade + digital', image: '/images/project-aurora.svg' },
  { title: 'Forma Studio', type: 'Web design', image: '/images/project-forma.svg' },
  { title: 'Casa Nômade', type: 'Direção de arte', image: '/images/project-nomade.svg' },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#top" aria-label="Voltar ao início">
          GA<span>.</span>
        </a>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
        </nav>
        <a className="header-contact" href="#contato">
          Vamos conversar <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Direção criativa · Design · Digital</p>
            <h1>Ideias que<br /><em>ganham forma.</em></h1>
            <p className="intro">
              Eu sou Guilherme, designer e diretor criativo. Construo marcas e experiências
              digitais com intenção, beleza e resultado.
            </p>
            <a className="circle-link" href="#projetos" aria-label="Ver projetos">
              <span>Ver<br />projetos</span>
              <Arrow />
            </a>
          </div>
          <div className="hero-art" aria-label="Composição abstrata">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-shape" />
            <span className="art-caption">forma / função / futuro</span>
          </div>
          <p className="scroll-note">Role para explorar <span>↓</span></p>
        </section>

        <section className="statement" id="sobre">
          <p className="eyebrow">Uma abordagem humana</p>
          <h2>O design pode ser bonito.<br /><em>Mas precisa ser memorável.</em></h2>
          <div className="statement-detail">
            <p>
              Meu trabalho nasce do encontro entre estratégia e expressão. Acredito em soluções
              simples, detalhes bem resolvidos e relações duradouras.
            </p>
            <a className="text-link" href="#contato">Conheça meu jeito de trabalhar <Arrow /></a>
          </div>
        </section>

        <section className="services" id="servicos">
          <div className="section-heading">
            <p className="eyebrow">O que eu faço</p>
            <h2>Serviços feitos<br /><em>para ir além.</em></h2>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-arrow"><Arrow /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="work" id="projetos">
          <div className="work-heading">
            <div>
              <p className="eyebrow">Projetos selecionados</p>
              <h2>Feito com<br /><em>propósito.</em></h2>
            </div>
            <p className="work-description">Algumas histórias que ajudei a contar através do design.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <a className={`project project-${index + 1}`} href="#contato" key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt="" />
                  <span className="project-number">0{index + 1}</span>
                </div>
                <div className="project-meta">
                  <h3>{project.title}</h3>
                  <span>{project.type}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="contact" id="contato">
          <p className="eyebrow">Tem um projeto em mente?</p>
          <h2>Vamos criar algo<br /><em>incrível juntos.</em></h2>
          <a className="contact-mail" href="mailto:ola@guilhermeaugsburger.com">
            ola@guilhermeaugsburger.com <Arrow />
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Guilherme Augsburger</span>
        <div><a href="#top">Instagram</a><a href="#top">LinkedIn</a></div>
        <a href="#top">Voltar ao topo ↑</a>
      </footer>
    </div>
  );
}