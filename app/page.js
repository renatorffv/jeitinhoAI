import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { Logo, LogoMark } from "@/components/Logo";
import { faqs, reasons, services, site, steps, whatsappLink } from "@/components/site";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />

      <main id="topo">
        {/* HERO */}
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">Desenvolvimento com Inteligência Artificial</p>
              <h1 className="hero__title">
                Tecnologia com IA,
                <br />
                do <mark>seu jeito</mark>.
              </h1>
              <p className="hero__lead">
                Criamos sites, aplicativos com agentes de IA e atendimento automático no WhatsApp para o
                seu negócio crescer — sem complicação e sem tecniquês.
              </p>
              <div className="hero__actions">
                <a
                  href={whatsappLink("Olá! Quero levar IA para o meu negócio.")}
                  className="btn btn--primary btn--lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero um orçamento
                </a>
                <a href="#servicos" className="btn btn--ghost btn--lg">
                  Ver serviços
                </a>
              </div>
            </div>

            <div className="hero__visual" aria-hidden="true">
              <div className="chat">
                <div className="chat__head">
                  <LogoMark size={36} />
                  <div>
                    <strong>JeitinhoAI</strong>
                    <span>online agora</span>
                  </div>
                </div>
                <div className="chat__body">
                  <p className="bubble bubble--in">Oi! Vocês abrem no sábado?</p>
                  <p className="bubble bubble--out">
                    Oi! 😉 Abrimos sim, das 8h às 14h. Quer que eu já reserve um horário pra você?
                  </p>
                  <p className="bubble bubble--in">Quero! Às 10h?</p>
                  <p className="bubble bubble--out">Prontinho, reservado para sábado às 10h ✅</p>
                </div>
                <div className="chat__badge">Atendimento 24h com IA</div>
              </div>
              <LogoMark size={96} className="hero__float" />
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="section">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">O que a gente faz</p>
              <h2 className="section__title">Quatro jeitos de colocar IA para trabalhar por você</h2>
            </div>

            <div className="services">
              {services.map((s, i) => (
                <article key={s.id} className="card service">
                  <div className="service__top">
                    <span className="num">{i + 1}</span>
                    {s.highlight && <span className="tag">{s.highlight}</span>}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="section section--white">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">Como funciona</p>
              <h2 className="section__title">Do bate-papo ao ar, sem enrolação</h2>
            </div>

            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title} className="step">
                  <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* POR QUE */}
        <section id="por-que" className="section">
          <div className="container why">
            <div className="why__intro">
              <p className="eyebrow">Por que a JeitinhoAI</p>
              <h2 className="section__title">
                IA de verdade, com o <mark>jeitinho</mark> brasileiro de resolver
              </h2>
              <p className="muted">
                A gente acredita que tecnologia boa é aquela que resolve o seu problema — não a que cria
                outros. Por isso juntamos o que há de mais moderno em IA com atendimento próximo e humano.
              </p>
            </div>
            <div className="reasons">
              {reasons.map((r) => (
                <div key={r.title} className="card reason">
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section--white">
          <div className="container container--narrow">
            <div className="section__head">
              <p className="eyebrow">Dúvidas</p>
              <h2 className="section__title">Perguntas frequentes</h2>
            </div>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + CONTATO */}
        <section id="contato" className="cta">
          <div className="container cta__inner">
            <div className="cta__copy">
              <h2>
                De um <span className="hl">jeitinho aí</span>
                <br />
                no seu negócio!
              </h2>
              <p>
                Conte o que você precisa e a gente responde rapidinho. A primeira conversa e o orçamento
                são por nossa conta.
              </p>
              <ul className="cta__contacts">
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              </ul>
              <LogoMark size={88} variant="light" className="cta__mark" />
            </div>
            <div className="cta__form">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <Logo variant="light" tagline size={40} />
          <p>
            © {year} {site.name}. Tecnologia com IA, do seu jeito.
          </p>
        </div>
      </footer>
    </>
  );
}
