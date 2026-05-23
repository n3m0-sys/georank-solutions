import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart3, Bot, CheckCircle2, ChevronDown, Compass, Instagram, Linkedin, MapPinned, Menu, MessageCircle, Rocket, Search, ShieldCheck, Sparkles, Star, Target, TrendingUp, Users, X, Zap } from 'lucide-react';

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

const metrics = [
  ['+300%', 'visualizações'],
  ['+250%', 'chamadas'],
  ['+180%', 'rotas'],
  ['+500%', 'alcance local'],
];

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
  return <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[.35em] text-sky-300">{eyebrow}</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">{title}</h2>{text && <p className="mt-5 text-lg leading-8 text-slate-400">{text}</p>}</div>;
}

function Card({ children, className = '' }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`glass card-hover rounded-[2rem] p-7 ${className}`}>{children}</motion.div>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState(0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 cyber-grid opacity-35" />
      <div className="pointer-events-none fixed left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/20 blur-[130px]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#topo" className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl border border-sky-400/40 bg-sky-400/10 text-sky-300 shadow-glow font-black">GR</div><div><p className="font-black tracking-[.22em]">GEORANK</p><p className="-mt-1 text-xs text-slate-400">Solutions</p></div></a>
          <div className="hidden items-center gap-8 lg:flex"><a href="#beneficios">Benefícios</a><a href="#servicos">Serviços</a><a href="#planos">Planos</a><a href="#faq">FAQ</a></div>
          <a href={whatsappLink} className="hidden rounded-full bg-sky-400 px-5 py-3 text-sm font-black text-slate-950 glow-button transition hover:scale-105 lg:block">Fale no WhatsApp</a>
          <button onClick={() => setMenu(!menu)} className="rounded-xl border border-white/10 p-2 lg:hidden">{menu ? <X /> : <Menu />}</button>
        </nav>
        {menu && <div className="grid gap-4 border-t border-white/10 bg-slate-950 p-5 lg:hidden"><a href="#beneficios">Benefícios</a><a href="#servicos">Serviços</a><a href="#planos">Planos</a><a href="#faq">FAQ</a><a href={whatsappLink} className="rounded-full bg-sky-400 px-5 py-3 text-center font-black text-slate-950">WhatsApp</a></div>}
      </header>

      <section id="topo" className="relative flex min-h-screen items-center px-5 pb-20 pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200"><Sparkles size={16} /> SEO Local premium para dominar sua região</div>
            <h1 className="text-5xl font-black leading-[.95] tracking-tight md:text-7xl lg:text-8xl">Sua empresa no topo do <span className="text-gradient">Google Maps.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">Transformamos negócios locais em referências da região usando SEO Local, Google Meu Negócio e automações inteligentes.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href={whatsappLink} className="glow-button inline-flex items-center justify-center gap-3 rounded-full bg-sky-400 px-7 py-4 font-black text-slate-950 transition hover:scale-105">Quero aparecer no Google <ArrowRight size={20} /></a><a href="#metricas" className="rounded-full border border-white/10 bg-white/5 px-7 py-4 text-center font-bold transition hover:border-sky-400/40">Ver resultados</a></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9 }} className="glass rounded-[2.5rem] p-5">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-slate-400">Dashboard Local</p><h3 className="text-2xl font-black">GeoRank Intelligence</h3></div><span className="rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-300">+87% mês</span></div><div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-3xl bg-white/[.04] p-5"><MapPinned className="text-sky-300" /><p className="mt-4 text-sm text-slate-400">Posição Maps</p><p className="text-4xl font-black">#3</p></div><div className="rounded-3xl bg-white/[.04] p-5"><BarChart3 className="text-sky-300" /><p className="mt-4 text-sm text-slate-400">Visualizações</p><p className="text-4xl font-black">+300%</p></div></div><div className="mt-6 flex h-44 items-end gap-3 rounded-3xl bg-white/[.03] p-5">{[38, 54, 49, 72, 68, 88, 96].map((h, i) => <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: .5 + i * .08 }} className="flex-1 rounded-t-2xl bg-gradient-to-t from-sky-600 to-cyan-200" />)}</div></div>
          </motion.div>
        </div>
      </section>

      <section id="beneficios" className="px-5 py-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Benefícios" title="Mais presença. Mais confiança. Mais clientes." text="Uma presença local forte faz sua empresa ser encontrada quando o cliente está pronto para comprar." /><div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{benefits.map(([title, desc, Icon]) => <Card key={title}><Icon className="mb-6 text-sky-300" size={30} /><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{desc}</p></Card>)}</div></div></section>

      <section className="px-5 py-24"><div className="mx-auto max-w-6xl"><SectionTitle eyebrow="Como funciona" title="Um processo claro para colocar sua marca no radar local." /><div className="mt-16 space-y-5">{steps.map((step, i) => <Card key={step} className="flex items-center gap-5"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-400/10 font-black text-sky-300">{i + 1}</div><div><h3 className="text-2xl font-black">{step}</h3><p className="mt-2 text-slate-400">Execução estratégica, acompanhamento e melhoria contínua para aumentar sua autoridade local.</p></div></Card>)}</div></div></section>

      <section id="servicos" className="px-5 py-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Serviços" title="Tudo que seu perfil precisa para parecer grande." text="Estratégia, execução e acompanhamento para transformar seu Google Meu Negócio em canal de aquisição." /><div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, desc, Icon]) => <Card key={title}><div className="mb-7 grid h-16 w-16 place-items-center rounded-3xl bg-sky-400/10 text-sky-300"><Icon size={30} /></div><h3 className="text-2xl font-black">{title}</h3><p className="mt-4 leading-7 text-slate-400">{desc}</p></Card>)}</div></div></section>

      <section id="metricas" className="px-5 py-24"><div className="mx-auto max-w-7xl rounded-[2.5rem] border border-sky-400/20 bg-sky-400/10 p-8 md:p-14"><div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-sm font-black uppercase tracking-[.35em] text-sky-200">Resultados</p><h2 className="mt-4 text-4xl font-black md:text-6xl">Métricas que mostram crescimento real.</h2><p className="mt-5 text-lg leading-8 text-slate-300">Acompanhe visualizações, chamadas, rotas e alcance local com relatórios claros.</p></div><div className="grid gap-5 sm:grid-cols-2">{metrics.map(([value, label]) => <div key={label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-7"><p className="text-5xl font-black text-gradient">{value}</p><p className="mt-3 text-slate-300">{label}</p></div>)}</div></div></div></section>

      <section id="planos" className="px-5 py-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Planos" title="Escolha seu nível de domínio local." text="Planos pensados para sair da invisibilidade e construir presença real no Google Maps." /><div className="mt-16 grid gap-6 lg:grid-cols-3">{plans.map(([name, monthly, annual, features]) => <Card key={name} className={name === 'Pro' ? 'border-sky-300/50 bg-sky-400/10 shadow-glow' : ''}><div className="flex items-center justify-between"><h3 className="text-3xl font-black">{name}</h3>{name === 'Pro' && <span className="rounded-full bg-sky-400 px-3 py-1 text-xs font-black text-slate-950">POPULAR</span>}</div><p className="mt-8 text-sm text-slate-400">Mensal</p><p className="text-5xl font-black">{monthly}</p><p className="mt-2 text-sky-300">Anual: {annual}</p><a href={whatsappLink} className="mt-8 block rounded-full bg-sky-400 px-6 py-4 text-center font-black text-slate-950 transition hover:scale-105">Escolher {name}</a><ul className="mt-8 space-y-4">{features.map(f => <li key={f} className="flex gap-3 text-sm text-slate-300"><CheckCircle2 className="text-sky-300" size={18} /> {f}</li>)}</ul></Card>)}</div></div></section>

      <section id="faq" className="px-5 py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-sm font-black uppercase tracking-[.35em] text-sky-300">FAQ</p><h2 className="mt-4 text-4xl font-black md:text-6xl">Dúvidas antes de dominar o Maps.</h2></div><div className="space-y-4">{faqs.map(([q, a], i) => <div key={q} className="glass overflow-hidden rounded-3xl"><button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between p-6 text-left font-black"><span>{q}</span><ChevronDown className={`text-sky-300 transition ${faq === i ? 'rotate-180' : ''}`} /></button><AnimatePresence>{faq === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 leading-7 text-slate-400">{a}</motion.p>}</AnimatePresence></div>)}</div></div></section>

      <section className="px-5 py-24"><div className="mx-auto max-w-7xl rounded-[2.8rem] border border-sky-300/30 bg-gradient-to-br from-sky-400/20 via-slate-950 to-blue-950 p-8 text-center md:p-16"><Zap className="mx-auto mb-7 text-sky-300" size={48} /><h2 className="mx-auto max-w-4xl text-4xl font-black md:text-7xl">Seu concorrente já está aparecendo. E você?</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Comece agora a transformar seu perfil do Google em um canal real de clientes locais.</p><a href={whatsappLink} className="glow-button mt-10 inline-flex items-center gap-3 rounded-full bg-sky-400 px-9 py-5 font-black text-slate-950 transition hover:scale-105">Quero crescer no Google Maps <ArrowRight /></a></div></section>

      <footer className="border-t border-white/10 px-5 py-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row"><div><p className="font-black tracking-[.22em]">GEORANK SOLUTIONS</p><p className="mt-3 max-w-md text-slate-400">SEO Local, Google Meu Negócio e automações inteligentes para negócios locais.</p></div><div className="flex gap-3"><a className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5"><Instagram /></a><a className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5"><Linkedin /></a></div></div><p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-7 text-sm text-slate-500">© 2026 GeoRank Solutions. Todos os direitos reservados.</p></footer>
    </main>
  );
}
