"use client";

import { useEffect, useState } from "react";

type Stage = "home" | "pause" | "route" | "outcome" | "confirmed" | "protocol";
type Route = "family" | "primary" | "backup";
type EventItem = { type: string; at: string };
const KEY = "family-shield-demo-events";

export default function Home() {
  const [stage, setStage] = useState<Stage>("home");
  const [route, setRoute] = useState<Route>("family");
  const [events, setEvents] = useState<EventItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as EventItem[];
        if (Array.isArray(parsed)) setEvents(parsed);
      }
    } catch {}
    setReady(true);
  }, []);

  function track(type: string) {
    const next = [...events, { type, at: new Date().toISOString() }].slice(-50);
    setEvents(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
  }
  function start() { track("verification_started"); setRoute("family"); setStage("pause"); }
  function openRoute(which: Route) {
    setRoute(which);
    track(which + "_route_opened");
    setStage("route");
  }
  function openOutcome() {
    track(route + "_contact_attempted");
    setStage("outcome");
  }
  function confirmed() { track("user_reports_independent_confirmation"); setStage("confirmed"); }
  function unconfirmed() { track("protocol_only_activated"); setStage("protocol"); }
  function restart() { track("flow_restarted"); setStage("home"); setRoute("family"); }
  function clearLog() {
    setEvents([]);
    try { localStorage.removeItem(KEY); } catch {}
  }

  const routeTitle = route === "family" ? "tu familiar" : route === "primary" ? "el contacto de confianza 1" : "el contacto de respaldo 2";
  const outcomeTitle = route === "family" ? "¿Pudiste hablar con tu familiar?" : route === "primary" ? "¿Pudiste comprobarlo con el contacto 1?" : "¿Pudiste comprobarlo con el contacto 2?";

  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); restart(); }}>
          <span className="brand-mark">FS</span><span>FAMILY SHIELD</span>
        </a>
        <span className="demo-pill">DEMO · DATOS FICTICIOS</span>
      </header>

      <section className="hero">
        <div className="eyebrow">PROTOCOLO FAMILIAR DE VERIFICACIÓN</div>
        <h1>Pausa antes<br /><em>de pagar.</em></h1>
        <p className="hero-copy">Una llamada urgente puede sonar real. Antes de enviar dinero, verifica por otro medio con alguien de confianza.</p>
      </section>

      <section className="app-card" aria-live="polite">
        {stage === "home" && <div className="screen">
          <div className="step-label">ANTES DE UNA EMERGENCIA</div>
          <div className="shield-icon">✓</div>
          <h2>Ten un plan antes de necesitarlo.</h2>
          <p>Family Shield te guía para hacer una pausa y comprobar la situación por otro medio. La app no analiza voces ni sabe quién está llamando.</p>
          <ul className="plain-list">
            <li><span>01</span>No transfieras dinero bajo presión.</li>
            <li><span>02</span>Llama tú al número que ya tienes guardado.</li>
            <li><span>03</span>Si no logras comprobarlo, sigue el protocolo de pausa.</li>
          </ul>
          <button className="primary" onClick={start}>Iniciar verificación <b>→</b></button>
          <p className="micro">Prueba el flujo con un escenario ficticio. No introduzcas nombres, teléfonos ni datos reales.</p>
        </div>}

        {stage === "pause" && <div className="screen">
          <div className="step-label">PASO 1 DE 3 · DETENTE</div>
          <div className="alert-icon">!</div>
          <h2>No envíes dinero todavía.</h2>
          <p>Si alguien te presiona para pagar o compartir códigos, termina la llamada. Respira y comprueba la situación por un canal distinto.</p>
          <div className="notice"><strong>Recuerda:</strong> escuchar una voz conocida o ver un número en pantalla no demuestra quién está llamando.</div>
          <button className="primary" onClick={() => { track("pause_acknowledged"); setStage("route"); setRoute("family"); }}>Entendido, voy a comprobarlo <b>→</b></button>
        </div>}

        {stage === "route" && <div className="screen">
          <div className="step-label">PASO 2 DE 3 · COMPRUEBA POR OTRO MEDIO</div>
          <h2>{route === "family" ? "Llama tú al número que ya tienes guardado." : "Ahora intenta con " + routeTitle + "."}</h2>
          <p>{route === "family" ? "No devuelvas la llamada al número que te acaba de contactar. Abre tus contactos y marca el número habitual de tu familiar." : "Usa el número que ya tienes guardado para esta persona. No uses números que te haya dado quien te llamó."}</p>
          <div className="notice subtle"><strong>Importante:</strong> la app no hace la llamada. Tú compruebas la situación por un canal que ya conoces.</div>
          <button className="primary" onClick={openOutcome}>Ya intenté llamar <b>→</b></button>
          <button className="text-button" onClick={unconfirmed}>No puedo contactar a nadie</button>
        </div>}

        {stage === "outcome" && <div className="screen">
          <div className="step-label">PASO 3 DE 3 · RESULTADO DE LA COMPROBACIÓN</div>
          <div className="shield-icon">?</div>
          <h2>{outcomeTitle}</h2>
          <p>La app no hace llamadas ni verifica identidades. Marca confirmación solo si hablaste por otro medio y comprobaste la situación directamente.</p>
          <div className="notice"><strong>La clave familiar es una señal adicional</strong>, nunca la única prueba de identidad.</div>
          <button className="primary" onClick={confirmed}>Sí, lo comprobé por otro medio</button>
          {route === "family" && <button className="secondary full" onClick={() => openRoute("primary")}>No contestó; intentar contacto 1</button>}
          {route === "primary" && <button className="secondary full" onClick={() => openRoute("backup")}>No contestó; intentar contacto 2</button>}
          <button className="text-button" onClick={unconfirmed}>No pude comprobarlo</button>
        </div>}

        {stage === "confirmed" && <div className="screen">
          <div className="success-icon">✓</div>
          <div className="step-label">COMPROBACIÓN POR OTRO MEDIO REALIZADA</div>
          <h2>Ya hiciste una comprobación por otro medio.</h2>
          <p>Esto no garantiza que toda la situación sea segura ni autoriza un pago. Mantén el control de tu decisión y confirma cualquier detalle pendiente directamente.</p>
          <div className="notice subtle">Family Shield no verifica identidades, no certifica emergencias y no procesa ni bloquea pagos.</div>
          <button className="primary" onClick={restart}>Cerrar protocolo</button>
        </div>}

        {stage === "protocol" && <div className="screen">
          <div className="alert-icon">!</div>
          <div className="step-label">PROTOCOLO DE PAUSA · SIN COMPROBACIÓN</div>
          <h2>No se pudo comprobar. Mantén la pausa.</h2>
          <p>No envíes dinero ni compartas contraseñas o códigos. Busca a otra persona de confianza y, si hay una amenaza creíble, contacta directamente a las autoridades por canales oficiales.</p>
          <ol className="number-list">
            <li>No transfieras mientras la solicitud siga sin comprobar.</li>
            <li>Intenta de nuevo por un número conocido o con el siguiente contacto acordado.</li>
            <li>Guarda evidencia de la llamada o mensaje sin reenviar datos sensibles.</li>
          </ol>
          <button className="primary" onClick={restart}>Volver al inicio</button>
        </div>}
      </section>

      <section className="bottom-grid">
        <div className="info-card"><div className="eyebrow">LÍMITE DEL PRODUCTO</div><h3>No detectamos deepfakes.</h3><p>Organizamos una pausa y una comprobación por otro medio. Nunca mostramos “llamada auténtica” o “emergencia real”.</p></div>
        <div className="info-card"><div className="eyebrow">PREPARACIÓN FAMILIAR</div><h3>Dos contactos. Una rutina.</h3><p>Acuerda el orden de contacto y una clave privada antes de que ocurra una urgencia. Confirma el protocolo cada seis meses.</p></div>
      </section>

      <section className="analytics">
        <div><span className="eyebrow">REGISTRO ANÓNIMO DE PRUEBA</span><strong>{ready ? events.length : "—"} eventos</strong><small>Solo guarda tipo de interacción y hora en este dispositivo. No registra nombres, teléfonos, audios ni mensajes.</small></div>
        <button className="clear-button" onClick={clearLog} disabled={!events.length}>Borrar registro</button>
      </section>
      <footer><span>FAMILY SHIELD · PROTOTIPO WEEK 13</span><span>La comprobación por otro medio importa más que la voz.</span></footer>
    </main>
  );
}