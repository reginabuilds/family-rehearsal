"use client";

import { useEffect, useMemo, useState } from "react";
import "./pricing.css";

type Segment = "household" | "institution";
type Scenario = {
  id: string;
  name: string;
  segment: Segment;
  users: number;
  conversion: number;
  price: number;
  variableCost: number;
};

const STORAGE_KEY = "family-shield-week14-pricing-scenarios";
const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, Number.isFinite(n) ? n : min));
const money = (n: number) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);
const initial: Omit<Scenario, "id" | "name"> = {
  segment: "institution",
  users: 500,
  conversion: 100,
  price: 120,
  variableCost: 24,
};

export default function PricingPage() {
  const [segment, setSegment] = useState<Segment>(initial.segment);
  const [users, setUsers] = useState(initial.users);
  const [conversion, setConversion] = useState(initial.conversion);
  const [price, setPrice] = useState(initial.price);
  const [variableCost, setVariableCost] = useState(initial.variableCost);
  const [scenarioName, setScenarioName] = useState("Piloto institucional");
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setScenarios(parsed.slice(0, 10));
      }
    } catch {
      setNotice("No se pudieron leer los escenarios guardados en este navegador.");
    }
    setLoaded(true);
  }, []);

  const payingHouseholds = useMemo(() => Math.round(users * conversion / 100), [users, conversion]);
  const annualRevenue = useMemo(() => payingHouseholds * price, [payingHouseholds, price]);
  const monthlyRevenue = annualRevenue / 12;
  const annualVariableCost = payingHouseholds * variableCost;
  const contribution = annualRevenue - annualVariableCost;
  const margin = annualRevenue > 0 ? contribution / annualRevenue * 100 : 0;
  const breakEvenVariableCost = price;

  function persist(next: Scenario[]) {
    setScenarios(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      setNotice("No se pudo guardar. Revisa el espacio disponible de tu navegador.");
    }
  }

  function saveScenario() {
    const name = scenarioName.trim().slice(0, 32);
    if (!name) { setNotice("Escribe un nombre para el escenario."); return; }
    const duplicate = scenarios.some((item) =>
      item.name.toLocaleLowerCase("es-MX") === name.toLocaleLowerCase("es-MX") &&
      item.segment === segment &&
      item.users === clamp(users, 0, 1000000) &&
      item.conversion === clamp(conversion, 0, 100) &&
      item.price === clamp(price, 0, 1000000) &&
      item.variableCost === clamp(variableCost, 0, 1000000)
    );
    if (duplicate) { setNotice("Este escenario ya está guardado. Cambia algún dato o el nombre para guardar una versión diferente."); return; }
    if (scenarios.length >= 10) { setNotice("Puedes guardar hasta 10 escenarios. Elimina uno para guardar otro."); return; }
    const item: Scenario = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name,
      segment,
      users: clamp(users, 0, 1000000),
      conversion: clamp(conversion, 0, 100),
      price: clamp(price, 0, 1000000),
      variableCost: clamp(variableCost, 0, 1000000),
    };
    persist([...scenarios, item]);
    setNotice(`Escenario “${name}” guardado en este dispositivo.`);
  }

  function loadScenario(item: Scenario) {
    setSegment(item.segment);
    setUsers(item.users);
    setConversion(item.conversion);
    setPrice(item.price);
    setVariableCost(item.variableCost);
    setScenarioName(item.name);
    setNotice(`Escenario “${item.name}” cargado.`);
  }

  function removeScenario(id: string) {
    persist(scenarios.filter((item) => item.id !== id));
    setNotice("Escenario eliminado.");
  }

  function reset() {
    setSegment(initial.segment);
    setUsers(initial.users);
    setConversion(initial.conversion);
    setPrice(initial.price);
    setVariableCost(initial.variableCost);
    setScenarioName("Piloto institucional");
    setNotice("Se restauraron los supuestos iniciales.");
  }

  return (
    <main className="pricing-shell">
      <header className="pricing-nav">
        <a className="pricing-brand" href="/"><span className="pricing-mark">FS</span> FAMILY SHIELD</a>
        <nav><a href="/">Protocolo</a><a className="active" href="/pricing">Precios</a></nav>
        <span className="prototype-label">WEEK 14 · MONEY</span>
      </header>

      <section className="pricing-hero">
        <p className="eyebrow">PREPARACIÓN FAMILIAR · PRECIOS TRANSPARENTES</p>
        <h1>La protección empieza<br /><em>antes de la llamada.</em></h1>
        <p>El protocolo esencial siempre es gratuito. Los planes de pago agregan preparación, práctica y distribución; nunca prometen detectar voces clonadas ni verificar quién llama.</p>
      </section>

      <section className="boundary-banner" role="note">
        <strong>Importante:</strong> Family Shield no verifica quién está llamando. Pausa y contacta a tu familiar por un número que ya conozcas.
      </section>

      <section className="plans-section" aria-labelledby="plans-title">
        <div className="section-heading"><div><p className="eyebrow">PLANES</p><h2 id="plans-title">Una base gratuita. Más práctica cuando la necesitas.</h2></div><span className="small-note">Precios de prueba · MXN</span></div>
        <div className="plans-grid">
          <article className="plan-card">
            <p className="plan-kicker">HOGAR · ESENCIAL</p><h3>Básico</h3><p className="plan-price">Gratis</p>
            <p className="plan-description">Para que cualquier familia pueda empezar con lo indispensable.</p>
            <ul><li>Protocolo pausa–llamada–dos contactos</li><li>Un ensayo básico</li><li>Sin cuenta y sin datos personales</li></ul>
            <a className="plan-link" href="/">Usar protocolo gratuito</a>
          </article>
          <article className="plan-card featured">
            <div className="popular-tag">HOGAR · DIRECTO</div><p className="plan-kicker">PREPARACIÓN CONTINUA</p><h3>Family Plus</h3><p className="plan-price">$199 <small>MXN / año</small></p>
            <p className="plan-description">Para familias que quieren configurar y practicar su rutina con más frecuencia.</p>
            <ul><li>Configuración guiada del hogar</li><li>Ensayos repetidos</li><li>Instrucciones imprimibles</li><li>Recordatorios accesibles</li></ul>
            <a className="plan-link filled" href="#calculator">Simular Family Plus</a>
          </article>
          <article className="plan-card">
            <p className="plan-kicker">INSTITUCIONES · B2B2C</p><h3>Institucional</h3><p className="plan-price">$120 <small>MXN / familia / año</small></p>
            <p className="plan-description">Acceso patrocinado por bancos para un programa de preparación familiar.</p>
            <ul><li>Acceso patrocinado para hogares inscritos</li><li>Activación y ensayo guiado</li><li>Métricas agregadas no identificables</li><li>Piloto propuesto: 500 familias</li></ul>
            <a className="plan-link" href="#calculator">Simular piloto institucional</a>
          </article>
        </div>
        <p className="pricing-footnote">El precio institucional es una hipótesis de apertura para validar con un comprador real. No existe todavía un compromiso de compra ni evidencia de ahorro atribuible.</p>
      </section>

      <section className="calculator-section" id="calculator" aria-labelledby="calculator-title">
        <div className="calculator-intro"><p className="eyebrow">SIMULADOR DE INGRESOS</p><h2 id="calculator-title">Prueba los números.<br /><em>No escondas los supuestos.</em></h2><p>Cambia el volumen, la conversión y el precio anual. Los resultados son escenarios matemáticos, no pronósticos ni ventas reales.</p></div>
        <div className="calculator-card">
          <div className="calculator-top"><div><span className="calc-icon">↗</span><div><h3>Calculadora de escenarios</h3><p>Los cambios se calculan al instante.</p></div></div><button className="reset-button" onClick={reset}>Restablecer</button></div>
          <div className="segment-switch" role="group" aria-label="Segmento de cliente">
            <button className={segment === "household" ? "selected" : ""} onClick={() => { setSegment("household"); setPrice(199); setConversion(1); setUsers(10000); setVariableCost(24); }}>Familias · D2C</button>
            <button className={segment === "institution" ? "selected" : ""} onClick={() => { setSegment("institution"); setPrice(120); setConversion(100); setUsers(500); setVariableCost(24); }}>Banco · B2B2C</button>
          </div>
          <div className="inputs-grid">
            <label>Familias / usuarios elegibles<input type="number" min="0" max="1000000" step="1" value={users} onChange={(e) => setUsers(clamp(Number(e.target.value), 0, 1000000))} /><small>Entre 0 y 1,000,000</small></label>
            <label>{segment === "household" ? "Conversión a Family Plus" : "Tasa de inscripción al piloto"}<div className="range-row"><input type="range" min="0" max="100" step="0.5" value={conversion} onChange={(e) => setConversion(clamp(Number(e.target.value), 0, 100))} /><strong>{conversion}%</strong></div><small>Porcentaje de usuarios elegibles que pagan o se inscriben</small></label>
            <label>Precio anual por familia<input type="number" min="0" max="1000000" step="1" value={price} onChange={(e) => setPrice(clamp(Number(e.target.value), 0, 1000000))} /><small>MXN por familia inscrita / año</small></label>
            <label>Costo variable por familia<input type="number" min="0" max="1000000" step="1" value={variableCost} onChange={(e) => setVariableCost(clamp(Number(e.target.value), 0, 1000000))} /><small>MXN por familia / año · supuesto editable</small></label>
          </div>
          <div className="results-panel">
            <div className="result-row"><span>Familias de pago / inscritas</span><strong>{payingHouseholds.toLocaleString("es-MX")}</strong></div>
            <div className="result-row"><span>Ingresos mensuales equivalentes</span><strong>{money(monthlyRevenue)}</strong></div>
            <div className="result-row"><span>Ingresos brutos anuales</span><strong>{money(annualRevenue)}</strong></div>
            <div className="result-row"><span>Costo variable anual</span><strong>{money(annualVariableCost)}</strong></div>
            <div className="result-row contribution"><span>Contribución anual estimada</span><strong>{money(contribution)}</strong></div>
            <div className="result-meta"><span>Margen de contribución: <b>{margin.toFixed(1)}%</b></span><span>Antes de costos fijos, ventas, cumplimiento e impuestos.</span></div>
          </div>
          <div className="scenario-save">
            <div><h4>Guardar este escenario</h4><p>Se guarda solo en este navegador, no en un servidor.</p></div>
            <div className="save-row"><input aria-label="Nombre del escenario" maxLength={32} value={scenarioName} onChange={(e) => setScenarioName(e.target.value.slice(0, 32))} placeholder="Ej. Piloto 500 familias" /><button onClick={saveScenario} disabled={!loaded}>Guardar</button></div>
            <small>{scenarios.length}/10 escenarios guardados · nombre máximo 32 caracteres</small>
            {notice && <p className="notice-text" role="status">{notice}</p>}
          </div>
          <div className="saved-list">
            <h4>Escenarios guardados</h4>
            {!scenarios.length && <p className="empty-state">Todavía no guardas escenarios. Guarda uno para compararlo después.</p>}
            {scenarios.map((item) => {
              const count = Math.round(item.users * item.conversion / 100);
              const revenue = count * item.price;
              return <div className="saved-item" key={item.id}><div><strong>{item.name}</strong><small>{item.segment === "institution" ? "Institucional" : "Familias"} · {count.toLocaleString("es-MX")} inscritas · {money(revenue)}/año</small></div><button onClick={() => loadScenario(item)}>Cargar</button><button className="delete-scenario" aria-label={`Eliminar ${item.name}`} onClick={() => removeScenario(item.id)}>×</button></div>;
            })}
          </div>
        </div>
      </section>

      <section className="economics-section">
        <p className="eyebrow">ECONOMÍA UNITARIA · HIPÓTESIS</p><h2>El precio tiene que sostenerse.</h2>
        <div className="economics-grid">
          <div><span>Precio institucional</span><strong>$120</strong><small>MXN / hogar / año</small></div>
          <div><span>Costo variable supuesto</span><strong>$24</strong><small>MXN / hogar / año</small></div>
          <div><span>Contribución estimada</span><strong>$96</strong><small>80% antes de costos fijos</small></div>
          <div><span>Hurdle 10:1</span><strong>$1,200</strong><small>Valor anual medible requerido por hogar</small></div>
        </div>
        <p className="economics-warning">El posible monto de una estafa evitada no es valor esperado demostrado. El banco tendría que probar un beneficio atribuible —por ejemplo, menor carga de soporte— y explicar cómo lo calcula. Si no puede sostener $1,200 MXN de valor por hogar, el 10:1 no se cumple.</p>
      </section>

      <section className="privacy-section"><div><p className="eyebrow">LA MISMA REGLA EN TODOS LOS PLANES</p><h2>El precio nunca compra certeza.</h2><p>Ningún plan desbloquea detección de voz, un sello de llamada auténtica, bloqueo de pagos o acceso a información familiar. Los reportes institucionales son agregados y no identificables.</p></div><a href="/">Volver al protocolo <span>→</span></a></section>
      <footer className="pricing-footer"><span>FAMILY SHIELD · WEEK 14 · PRICING</span><span>Precios y costos sujetos a validación. Datos de escenarios ficticios.</span></footer>
    </main>
  );
}
