import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BarChart3, Bot, CheckCircle2, ChevronDown, Compass, Instagram, Linkedin, MapPinned, Menu, MessageCircle, Rocket, Search, ShieldCheck, Sparkles, Star, Target, Users, X, Zap } from 'lucide-react';

const whatsappLink = 'https://wa.me/5511989549089?text=Ol%C3%A1%2C%20quero%20aparecer%20melhor%20no%20Google%20Maps%20com%20a%20GeoRank%20Solutions.';

const benefits = [
  ['Mais clientes locais', 'Atraia pessoas próximas que já estão procurando por serviços como o seu.', Users],
  ['Mais avaliações', 'Aumente sua prova social e construa confiança antes do primeiro contato.', Star],
  ['Mais chamadas no WhatsApp', 'Transforme buscas no Google em conversas reais com possíveis clientes.', MessageCircle],
  ['Melhor posicionamento', 'Fortaleça sua presença no Google Maps com otimizações locais consistentes.', MapPinned],
  ['Gestão completa', 'Cuidamos do perfil, postagens, reputação, imagens e acompanhamento.', ShieldCheck],
];

const services = [
  ['Gestão Google Meu Negócio', 'Perfil configurado, atualizado e otimizado para transmitir autoridade.', Compass],
  ['SEO Local', 'Estratégia para aparecer em buscas da sua cidade, bairro e região.', Search],
  ['Gestão de avaliações', 'Processo para conquistar, responder e usar avaliações como prova social.', Star],
  ['Postagens estratégicas', 'Conteúdos no perfil para ofertas, serviços, novidades e autoridade local.', Rocket],
  ['Otimização de perfil', 'Categorias, descrições, serviços, fotos, produtos, links e atributos.', Target],
  ['Automação de atendimento', 'Fluxos inteligentes para levar visitantes do Google direto ao WhatsApp.', Bot],
];

const steps = ['Análise do perfil', 'Otimização SEO', 'Estratégia local', 'Crescimento orgânico', 'Relatórios e acompanhamento'];
const metrics = [['+300%', 'visualizações'], ['+250%', 'chamadas'], ['+180%', 'rotas'], ['+500%', 'alcance local']];
const plans = [
  ['Starter', 'R$ 297', 'R$ 2.997/ano', ['Otimização inicial', '4 postagens mensais', 'Ajuste de categorias', 'Relatório mensal simples']],
  ['Pro', 'R$ 497', 'R$ 4.997/ano', ['Tudo do Starter', 'SEO Local contínuo', '8 postagens mensais', 'Gestão de avaliações', 'Análise de concorrentes']],
  ['Elite', 'R$ 897', 'R$ 8.997/ano', ['Tudo do Pro', '16 postagens mensais', 'Automações de atendimento', 'Consultoria mensal', 'Estratégia por bairro']],
];
const faqs = [
  ['SEO Local funciona para meu negócio?', 'Funciona muito bem para empresas que atendem uma região específica: clínicas, oficinas, restaurantes, salões, lojas e prestadores de serviço.'],
  ['Em quanto tempo aparecem resultados?', 'Normalmente os primeiros sinais aparecem entre 30 e 90 dias, dependendo da concorrência, avaliações e consistência das otimizações.'],
  ['Vocês criam o perfil do Google?', 'Sim. Podemos criar, configurar, recuperar, organizar ou assumir a gestão de um perfil já existente.'],
  ['Preciso pagar anúncio?', 'Não obrigatoriamente. O foco é crescimento orgânico, mas anúncios podem acelerar resultados em regiões mais competitivas.'],
];

function SectionTitle({ eyebrow, title, text }) {
  return <div className="section-title"><p>{eyebrow}</p><h2>{title}</h2>{text && <span>{text}</span>}</div>;
}

function Card({ children, highlight = false }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`glass card ${highlight ? 'highlight' : ''}`}>{children}</motion.div>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState(0);

  return (
    <main>
      <div className="grid-bg" />
      <div className="orb orb-one" />
      <header className="navbar">
        <div className="nav-inner">
          <a href="#topo" className="brand"><div className="logo">GR</div><div><strong>GEORANK</strong><small>Solutions</small></div></a>
          <nav className="desktop-menu"><a href="#beneficios">Benefícios</a><a href="#servicos">Serviços</a><a href="#planos">Planos</a><a href="#faq">FAQ</a></nav>
          <a className="btn nav-btn" href={whatsappLink}>Fale no WhatsApp</a>
          <button className="menu-btn" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
        </div>
        {menu && <div className="mobile-menu"><a href="#beneficios">Benefícios</a><a href="#servicos">Serviços</a><a href="#planos">Planos</a><a href="#faq">FAQ</a><a href={whatsappLink}>WhatsApp</a></div>}
      </header>

      <section id="topo" className="hero section-shell">
        <div className="hero-text">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="badge"><Sparkles size={16} /> SEO Local premium para dominar sua região</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}>Sua empresa no topo do <span>Google Maps.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}>Transformamos negócios locais em referências da região usando SEO Local, Google Meu Negócio e automações inteligentes.</motion.p>
          <div className="hero-actions"><a className="btn" href={whatsappLink}>Quero aparecer no Google <ArrowRight size={20} /></a><a className="btn secondary" href="#metricas">Ver resultados</a></div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} className="dashboard glass">
          <div className="dash-head"><div><small>Dashboard Local</small><h3>GeoRank Intelligence</h3></div><b>+87% mês</b></div>
          <div className="dash-cards"><div><MapPinned /><small>Posição Maps</small><strong>#3</strong></div><div><BarChart3 /><small>Visualizações</small><strong>+300%</strong></div></div>
          <div className="chart">{[38, 54, 49, 72, 68, 88, 96].map((h, i) => <motion.i key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: .4 + i * .08 }} />)}</div>
        </motion.div>
      </section>

      <section id="beneficios" className="section-shell stacked"><SectionTitle eyebrow="Benefícios" title="Mais presença. Mais confiança. Mais clientes." text="Uma presença local forte faz sua empresa ser encontrada quando o cliente está pronto para comprar." /><div className="grid five">{benefits.map(([title, desc, Icon]) => <Card key={title}><Icon className="icon" /><h3>{title}</h3><p>{desc}</p></Card>)}</div></section>

      <section className="section-shell stacked"><SectionTitle eyebrow="Como funciona" title="Um processo claro para colocar sua marca no radar local." /><div className="timeline">{steps.map((step, i) => <Card key={step}><div className="step"><b>{i + 1}</b><div><h3>{step}</h3><p>Execução estratégica, acompanhamento e melhoria contínua para aumentar sua autoridade local.</p></div></div></Card>)}</div></section>

      <section id="servicos" className="section-shell stacked"><SectionTitle eyebrow="Serviços" title="Tudo que seu perfil precisa para parecer grande." text="Estratégia, execução e acompanhamento para transformar seu Google Meu Negócio em canal de aquisição." /><div className="grid three">{services.map(([title, desc, Icon]) => <Card key={title}><Icon className="icon big" /><h3>{title}</h3><p>{desc}</p></Card>)}</div></section>

      <section id="metricas" className="section-shell metrics"><div><p className="eyebrow">Resultados</p><h2>Métricas que mostram crescimento real.</h2><span>Acompanhe visualizações, chamadas, rotas e alcance local com relatórios claros.</span></div><div className="metric-grid">{metrics.map(([value, label]) => <div className="metric" key={label}><strong>{value}</strong><p>{label}</p></div>)}</div></section>

      <section id="planos" className="section-shell stacked"><SectionTitle eyebrow="Planos" title="Escolha seu nível de domínio local." text="Planos pensados para sair da invisibilidade e construir presença real no Google Maps." /><div className="grid three">{plans.map(([name, monthly, annual, features]) => <Card key={name} highlight={name === 'Pro'}><div className="plan-head"><h3>{name}</h3>{name === 'Pro' && <em>POPULAR</em>}</div><small>Mensal</small><strong className="price">{monthly}</strong><p className="annual">Anual: {annual}</p><a className="btn full" href={whatsappLink}>Escolher {name}</a><ul>{features.map(f => <li key={f}><CheckCircle2 size={18} /> {f}</li>)}</ul></Card>)}</div></section>

      <section id="faq" className="section-shell faq-section"><div><p className="eyebrow">FAQ</p><h2>Dúvidas antes de dominar o Maps.</h2></div><div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-item glass" key={q}><button onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span><ChevronDown className={faq === i ? 'rotate' : ''} /></button><AnimatePresence>{faq === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{a}</motion.p>}</AnimatePresence></div>)}</div></section>

      <section className="section-shell final-cta"><Zap size={48} /><h2>Seu concorrente já está aparecendo. E você?</h2><p>Comece agora a transformar seu perfil do Google em um canal real de clientes locais.</p><a className="btn" href={whatsappLink}>Quero crescer no Google Maps <ArrowRight /></a></section>

      <footer><div><strong>GEORANK SOLUTIONS</strong><p>SEO Local, Google Meu Negócio e automações inteligentes para negócios locais.</p></div><div className="social"><Instagram /><Linkedin /></div><small>© 2026 GeoRank Solutions. Todos os direitos reservados.</small></footer>
    </main>
  );
}
