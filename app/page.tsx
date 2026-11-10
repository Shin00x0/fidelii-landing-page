"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, ArrowUpRight, BarChart3, Check, ChevronRight, Clock3, MessageCircle, Sparkles, Target, WalletCards, X } from "lucide-react";
import { useState } from "react";

const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/tu-usuario/diagnostico";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/56900000000";

const decisions = [
  { icon: Target, title: "Recompra", copy: "Detecta quién dejó de volver antes de que se desconecte." },
  { icon: WalletCards, title: "Ticket", copy: "Propone el incentivo correcto para subir valor sin regalar margen." },
  { icon: Clock3, title: "Momento", copy: "Activa la acción cuando el cliente tiene más probabilidad de responder." },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [active, setActive] = useState(0);

  return <main>
    <motion.div className="fixed top-0 left-0 z-[60] h-1 bg-[#d6ff3f]" style={{ width: progress }} />
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 mix-blend-difference md:px-10">
      <a href="#inicio" className="text-xl font-black tracking-[-.1em]">fideliza<span className="text-[#d6ff3f]">.</span></a>
      <div className="hidden gap-7 text-xs font-bold uppercase tracking-[.14em] md:flex"><a href="#como-funciona">Cómo funciona</a><a href="#control">Control</a><a href="#contacto">Contacto</a></div>
      <a href={calendly} target="_blank" rel="noreferrer" className="rounded-full bg-[#d6ff3f] px-4 py-2 text-xs font-black text-black">Diagnóstico <span>↗</span></a>
    </nav>

    <section id="inicio" className="relative min-h-screen overflow-hidden px-5 pb-10 pt-32 md:px-10">
      <div className="grid-lines absolute inset-0 opacity-40" /><div className="noise absolute inset-0" />
      <motion.div initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} transition={{ duration:.7 }} className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1500px] flex-col justify-end">
        <div className="mb-8 flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#d6ff3f] shadow-[0_0_18px_#d6ff3f]" /><p className="eyebrow text-[#d6ff3f]">Fidelización que decide</p></div>
        <h1 className="display max-w-[1120px] text-[17vw] font-black uppercase md:text-[10.2vw]">Cada compra<br /><span className="text-[#d6ff3f]">abre</span> la próxima.</h1>
        <div className="mt-10 grid items-end gap-8 border-t border-white/20 pt-5 md:grid-cols-[1fr_1.2fr]">
          <p className="max-w-xs text-sm leading-relaxed text-zinc-400">Convierte los datos de tu local en ofertas y acciones que traen de vuelta a los clientes correctos.</p>
          <div className="flex flex-wrap gap-3 md:justify-end"><a href={calendly} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-full bg-[#d6ff3f] px-6 py-4 text-sm font-black text-black">Agenda un diagnóstico <ArrowUpRight className="link-arrow size-4" /></a><a href="#como-funciona" className="flex items-center gap-2 rounded-full border border-white/25 px-6 py-4 text-sm font-bold">Ver cómo funciona <ArrowDownRight className="size-4" /></a></div>
        </div>
      </motion.div>
    </section>

    <div className="overflow-hidden border-y border-white/15 bg-[#d6ff3f] py-3 text-black"><div className="whitespace-nowrap text-sm font-black uppercase tracking-[.18em]">Más visitas — mejores decisiones — promociones con intención — más visitas — mejores decisiones — promociones con intención —</div></div>

    <section className="px-5 py-28 md:px-10 md:py-40"><div className="mx-auto max-w-[1500px]"><p className="eyebrow mb-8 text-[#d6ff3f]">El problema no avisa</p><div className="grid gap-10 md:grid-cols-2"><h2 className="display max-w-2xl text-6xl font-black uppercase md:text-8xl">No faltan<br />clientes.<br /><span className="text-zinc-600">Falta volver<br />a hablarles.</span></h2><div className="flex flex-col justify-end gap-6 text-lg leading-relaxed text-zinc-400"><p>Muchos locales usan descuentos sin saber si generan una compra nueva, reparten el mismo incentivo a todos y descubren tarde que sus mejores clientes se enfriaron.</p><p className="text-[#f7f4ed]">Fideliza convierte ese trabajo de seguimiento en una operación continua y medible.</p></div></div></div></section>

    <section id="como-funciona" className="bg-[#f7f4ed] px-5 py-24 text-black md:px-10 md:py-36"><div className="mx-auto max-w-[1500px]"><div className="mb-16 flex items-end justify-between gap-5"><div><p className="eyebrow mb-5 text-zinc-500">Una decisión para cada momento</p><h2 className="display text-6xl font-black uppercase md:text-8xl">La acción<br />correcta.</h2></div><span className="hidden text-sm text-zinc-500 md:block">01 / 03</span></div><div className="grid border-t border-black/20 md:grid-cols-3">{decisions.map((item,index)=>{const Icon=item.icon;return <button key={item.title} onClick={()=>setActive(index)} className="group border-b border-black/20 py-8 text-left md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0" ><Icon className="mb-14 size-7" strokeWidth={1.7}/><span className="mb-3 block text-2xl font-black uppercase tracking-tight">{item.title}</span><p className="max-w-xs text-sm leading-relaxed text-zinc-600">{item.copy}</p><span className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-wider">Explorar <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></span></button>})}</div><div className="mt-10 grid overflow-hidden rounded-3xl bg-black p-7 text-[#f7f4ed] md:grid-cols-2 md:p-12"><AnimatePresence mode="wait"><motion.div key={active} initial={{opacity:0,x:-14}} animate={{opacity:1,x:0}} exit={{opacity:0,x:14}}><p className="eyebrow mb-5 text-[#d6ff3f]">Escenario activo</p><h3 className="display text-5xl font-black uppercase md:text-7xl">{decisions[active].title}<br />con intención.</h3></motion.div></AnimatePresence><div className="mt-10 flex flex-col justify-end md:mt-0"><div className="rounded-2xl bg-white/10 p-5"><div className="mb-4 flex items-center justify-between text-xs text-zinc-400"><span>Señal detectada</span><span className="text-[#d6ff3f]">Ahora</span></div><div className="h-2 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full bg-[#d6ff3f]" animate={{width:["35%","74%","55%"]}} transition={{repeat:Infinity,duration:3}} /></div><p className="mt-4 text-sm">El sistema prioriza una acción según compra, frecuencia, productos y límites definidos por el local.</p></div></div></div></div></section>

    <section id="control" className="px-5 py-28 md:px-10 md:py-40"><div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-2"><div><p className="eyebrow mb-8 text-[#d6ff3f]">Tu negocio pone las reglas</p><h2 className="display text-6xl font-black uppercase md:text-8xl">Automatiza<br />sin soltar<br /><span className="text-[#d6ff3f]">el control.</span></h2></div><div className="grid gap-px self-end overflow-hidden rounded-2xl bg-white/15"><div className="bg-[#0a0a0a] p-7"><span className="text-sm font-bold text-[#d6ff3f]">01</span><p className="mt-4 text-xl font-bold">Tú defines productos, margen y presupuesto.</p></div><div className="bg-[#0a0a0a] p-7"><span className="text-sm font-bold text-[#d6ff3f]">02</span><p className="mt-4 text-xl font-bold">Fideliza propone y activa las mejores acciones disponibles.</p></div><div className="bg-[#0a0a0a] p-7"><span className="text-sm font-bold text-[#d6ff3f]">03</span><p className="mt-4 text-xl font-bold">El dashboard te muestra qué funcionó y qué dejó margen.</p></div></div></div></section>

    <section className="px-5 pb-28 md:px-10 md:pb-40"><div className="mx-auto max-w-[1500px] rounded-[2rem] bg-[#d6ff3f] p-7 text-black md:p-14"><div className="flex flex-col justify-between gap-16 md:min-h-[430px]"><div className="flex items-center justify-between"><Sparkles className="size-7" /><span className="eyebrow">No otra campaña más</span></div><div><h2 className="display max-w-4xl text-6xl font-black uppercase md:text-8xl">Una configuración<br />que aprende<br />de tu local.</h2><p className="mt-8 max-w-lg text-lg leading-relaxed">Conectamos los datos que ya mueven tu negocio, armamos los primeros flujos y medimos cada decisión. Sin humo. Con control.</p></div></div></div></section>

    <footer id="contacto" className="border-t border-white/15 px-5 py-16 md:px-10"><div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-12 md:flex-row md:items-end"><div><p className="eyebrow mb-5 text-[#d6ff3f]">¿Vemos tu oportunidad?</p><h2 className="display text-5xl font-black uppercase md:text-7xl">Hagamos que<br />vuelvan.</h2></div><div className="flex flex-col gap-3"><a href={calendly} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-8 rounded-full bg-white px-6 py-4 text-sm font-black text-black">Agendar diagnóstico <ArrowUpRight className="size-4" /></a><a href={whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-8 rounded-full border border-white/25 px-6 py-4 text-sm font-black"><span className="flex items-center gap-2"><MessageCircle className="size-4" /> Escribir por WhatsApp</span><ArrowUpRight className="size-4" /></a></div></div><div className="mt-20 flex items-center justify-between border-t border-white/15 pt-5 text-xs text-zinc-500"><span>fideliza. / 2026</span><span>Hecho para locales que quieren volver a ver a sus clientes.</span></div></footer>
  </main>;
}
