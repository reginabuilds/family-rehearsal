"use client";

import Link from "next/link";

const series = [
  { name: "01 · Reconoce el riesgo", items: ["Una voz conocida no es una verificación.", "La urgencia es una razón para pausar."] },
  { name: "02 · Actúa en el momento", items: ["Pausa antes de pagar.", "Si no contesta, ¿qué sigue?"] },
  { name: "03 · Prepara a tu familia", items: ["Acuerden hoy dos contactos de confianza.", "Practiquen el plan en cinco minutos."] },
];

export default function DistributionPage() {
  return (
    <main className="distribution-shell">
      <nav className="distribution-nav"><Link href="/">← Family Shield</Link><span>GUÍA FAMILIAR · DISTRIBUCIÓN</span></nav>
      <header className="distribution-hero">
        <p className="eyebrow">FAMILY SHIELD · PREPARACIÓN FAMILIAR</p>
        <h1>Una voz conocida<br/><em>no es una verificación.</em></h1>
        <p>Si una llamada te pide dinero con urgencia, haz una pausa y comprueba por otro medio con alguien de confianza.</p>
        <Link className="distribution-cta" href="/">Conoce el protocolo <span>→</span></Link>
      </header>
      <section className="distribution-steps">
        <article><b>01</b><h2>Pausa</h2><p>No transfieras dinero bajo presión ni compartas códigos.</p></article>
        <article><b>02</b><h2>Llama</h2><p>Termina la llamada y marca tú al número que ya tienes guardado.</p></article>
        <article><b>03</b><h2>Comprueba</h2><p>Si no responde, intenta con dos contactos de confianza, en el orden acordado.</p></article>
      </section>
      <section className="distribution-series">
        <p className="eyebrow">CONTENIDO PARA TU FAMILIA</p><h2>Un método sencillo para practicar antes de necesitarlo.</h2>
        <div className="distribution-grid">{series.map((s) => <article className="distribution-card" key={s.name}><p>{s.name}</p><ul>{s.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>
      <section className="distribution-callout"><h2>Acuerden hoy dos contactos de confianza.</h2><p>Guarden sus números y decidan en qué orden llamar. Una frase familiar puede ser una señal adicional, nunca la única prueba.</p><Link href="/">Prueba el protocolo gratuito →</Link></section>
      <footer className="distribution-footer">Family Shield no detecta deepfakes, no verifica identidades, no garantiza que una emergencia sea real y no bloquea pagos. La decisión siempre es tuya.</footer>
    </main>
  );
}
