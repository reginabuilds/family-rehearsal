# FAMILY SHIELD — WEEK 13 PACKET
**Owner:** Regina Cucchia Villalobos  
**Role:** USER  
**Milestone:** Real Humans — Five Users Who Don't Love You  
**Status:** Functional prototype specification; five real-user sessions and return evidence are pending.

## 1. Problem in my words
A person receives an urgent call or voice note that appears to come from a family member and asks for money. Under fear and time pressure, the recipient may act before checking the story independently. Voice cloning makes hearing a familiar voice insufficient proof. The gap is not only awareness: families often have not agreed, configured, and rehearsed a simple verification routine before an emergency.

## 2. Exact user
Initial segment: Mexican parents approximately 45–65 whose adult children (18–25) live elsewhere. The parent may receive the suspicious call and be the person asked to send money; the adult child is the person being impersonated or supposedly in danger. The prototype must also be understandable to an older adult with low confidence using unfamiliar apps, slow reading speed, and routine use of WhatsApp.

## 3. Success definition
Before the module closes, a first-time user can follow the sequence without coaching: pause; call the family member using a number already saved; if unavailable, try trusted contact 1 and then trusted contact 2; and correctly understand the difference between a reported independent check and an unconfirmed request. The user must understand that the app itself does not verify identity. The app logs anonymous interaction events locally. This is a functional prototype criterion, not proof of fraud prevention, 10:1 value, willingness to pay, or commercial viability.

## 4. Screen mockup — text-only substitute
The user explicitly requested no generated image. This text wireframe is a substitute and does **not** satisfy the course's image-generated mockup requirement.

**Screen 1 — Home**
- FAMILY SHIELD · DEMO · DATOS FICTICIOS
- Headline: “Pausa antes de pagar.”
- Copy: “Antes de enviar dinero, comprueba la situación por otro medio.”
- CTA: “Iniciar verificación”

**Screen 2 — Pause**
- “No envíes dinero todavía.”
- “Termina la llamada si te presionan. Respira y comprueba la situación por un canal distinto.”
- CTA: “Entendido, voy a comprobarlo”

**Screen 3 — Contact sequence**
- First: call the family member using the number already saved; never call back the number supplied by the suspicious caller.
- If there is no answer: trusted contact 1, then trusted contact 2.
- A family security phrase is an additional signal, never the only proof.

**Screen 4 — Outcome**
- “¿Pudiste comprobarlo por otro medio?”
- Yes: “Comprobación por otro medio realizada” — not a guarantee or payment authorization.
- No: “No se pudo comprobar. Mantén la pausa.”

## 5. Feature flow — Mermaid swimlane
~~~mermaid
flowchart TD
  subgraph HUMAN[PERSONA / FAMILIAR]
    A[Receives urgent call or voice note]
    B[Opens Family Shield]
    C[Pauses; does not transfer money]
    D[Calls family member on a previously saved number]
    E[Tries trusted contact 1]
    F[Tries trusted contact 2]
    G{Could the situation be checked independently?}
    H[Keeps payment decision under own control]
    I[Pause protocol: no transfer while unconfirmed]
  end
  subgraph PRODUCT[FAMILY SHIELD]
    J[Shows calm pause instruction]
    K[Shows finite contact order]
    L[Logs anonymous event type locally]
    M[Shows non-certifying outcome]
  end
  subgraph TRUST[TRUSTED CONTACTS]
    N[Confirm separately using an existing channel]
    O[Unavailable / cannot confirm]
  end
  A --> B --> J --> C --> D
  D -->|No answer| E
  E -->|No answer| F
  D -->|Answers| N
  E -->|Answers| N
  F -->|Answers| N
  F -->|No answer| O
  N --> G
  O --> G
  G -->|Yes| M --> H
  G -->|No| I
  C --> L
  D --> L
  E --> L
  F --> L
  I --> L
~~~

## 6. Global benchmark — global to local
- **Closest family-verification benchmark: UK Government, Stop! Think Fraud.** Its phone-fraud guidance recommends a family safe phrase, ending a pressured call, and calling back using a known number. Family Shield localizes this into a short Spanish-language sequence for Mexican households: saved-number callback, two trusted contacts in a finite order, and a plain-language pause fallback.
- **Complementary system benchmark: Singapore ScamShield.** The government-backed suite combines scam checking/blocking, reporting, public information, and a 24/7 helpline. Family Shield does not copy its detection or national infrastructure; it focuses narrowly on household preparation and independent confirmation.
- **Mexican baseline: Guardia Nacional CERT-MX and SSPC.** Mexican authorities already advise verifying serious family situations through another channel and agreeing on family key words. Family Shield's gap hypothesis is that public advice is not the same as a configured and rehearsed household routine; this must be tested rather than assumed.

## 7. Long view — three years
If this slice works, Family Shield could become a lightweight family preparedness service that helps households configure trusted-contact order, private verification phrases, and periodic rehearsals. Distribution could be tested through banks or other trusted institutions, while keeping family data private and leaving payment decisions with the user. In three years, the product should still be a coordination and preparedness layer—not a voice-authenticity detector, emergency authority, or payment controller.

## 8. Scope cut — what is NOT being built
- No deepfake, voice, face, or video detection.
- No guarantee that a caller or emergency is authentic.
- No payment initiation, payment blocking, or automatic transfer hold.
- No access to balances, banking credentials, call recordings, WhatsApp messages, or family communications.
- No automated contact dialing or contact-book access in this prototype.
- No AI-generated emergency advice.
- No backend storage of personal or family data; this prototype stores only anonymous event types and timestamps in the current browser.
- No 24/7 monitoring or emergency response service.

## 9. Architecture and stack
| Layer | Choice | Reason / boundary |
|---|---|---|
| UI | Next.js 15.5.28 + React 19.1.2 + TypeScript | Small, testable client-side flow; patched dependency release |
| Styling | CSS, responsive and reduced-motion aware | No external UI dependency |
| Hosting | Existing Vercel project family-rehearsal | Public deployment; verify access without sign-in |
| Source control | GitHub reginabuilds/family-rehearsal | Versioned source and docs |
| Feedback | Anonymous local event log | Event type + timestamp only; clearable |
| Database | None | No personal data is sent to a server |
| Authentication / RLS | Not applicable to this slice | No account or user-data table exists |
| Secrets | None in source | No API keys or third-party services |

## 10. 10:1 hypothesis and test plan
The 10:1 case is a hypothesis, not a result. The user value is preventing a rushed decision by making an existing safety behavior easier to remember and perform. In the pilot, compare each participant's current workaround with the Family Shield flow on comparable fictional scenarios: active time, number of steps, errors, help required, and correct explanation of the outcome. Record any willingness-to-pay or sponsor interest separately; do not infer it from compliments. Do not assign a speculative peso value to an avoided loss.

Mechanical checks: verify the family-member callback, contact 1, contact 2, confirmation, pause fallback, restart, and event-log clear action; then test mobile layout and keyboard navigation.

Layer 1: synthetic Doña Mari, 54, sells food outside a metro station, uses WhatsApp, distrusts unfamiliar apps, and reads slowly. Synthetic findings are not real-user evidence.

Layer 2: five real users who could receive or act on an urgent family call; at least three strangers. Record role, task, observed struggle, exact quote, assistance, and consented anonymous notes. Do not invent these sessions.

Rank the three observed pains by severity, frequency, threat to the 10:1 case, and feasibility. Fix the #1 noncritical pain, redeploy, and repeat the same task. Count only an unsolicited repeat visit, message, or signup as a return signal.

## 11. Security floor and acceptance criteria
- No secrets in the repository.
- No real personal data in demo content or seed data.
- No backend table containing personal data; no Supabase credentials or public data endpoint.
- No free-text personal-data forms.
- Event log stores only generic event types and timestamps, with a visible clear control.
- Every path states that Family Shield does not authenticate voices or emergencies.
- No path displays “safe”, “authentic”, or “emergency verified”.
- A user can reach either a reported independent check or the pause fallback.
- All demo content is fictional and labeled.

## References
- UK Government, Stop! Think Fraud, “How to spot phone fraud”: https://stopthinkfraud.campaign.gov.uk/how-to-spot-fraud/how-to-spot-phone-fraud/
- GovTech Singapore, “ScamShield”: https://www.tech.gov.sg/products-and-services/for-citizens/scam-prevention/scamshield/
- Guardia Nacional CERT-MX, “Recomendaciones ante falsas llamadas con fines de fraude mediante la clonación de voz” (20 Feb 2026): https://www.gob.mx/gncertmx/es/articulos/recomendaciones-ante-falsas-llamadas-con-fines-de-fraude-mediante-la-clonacion-de-voz
- SSPC, “Recomendaciones ante posibles fraudes por clonación de voz con inteligencia artificial” (13 Mar 2025): https://www.gob.mx/sspc/prensa/la-sspc-emite-recomendaciones-ante-posibles-fraudes-por-clonacion-de-voz-con-inteligencia-artificial
