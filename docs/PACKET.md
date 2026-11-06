# FAMILY SHIELD — WEEK 13 PACKET
**Owner:** Regina Cucchia Villalobos  
**Role:** USER  
**Milestone:** Real Humans — Five Users Who Don't Love You  
**Status:** Build plan and prototype specification. Real-user evidence is pending.

## 1. Problem in my words
A person receives an urgent call or voice note that appears to come from a family member and asks for money. Under fear and time pressure, the recipient may act before checking the story independently. Voice cloning makes hearing a familiar voice insufficient proof. The gap is not only awareness: families often have not agreed, configured, and rehearsed a simple verification routine before an emergency.

## 2. Exact user
Initial segment: Mexican parents approximately 45–65 whose adult children (18–25) live elsewhere. The parent may receive the suspicious call and be the person asked to send money; the adult child is the person being impersonated or supposedly in danger. The prototype must also be understandable to an older adult with low confidence using unfamiliar apps, slow reading speed, and routine use of WhatsApp.

## 3. Success definition
Before the module closes, a first-time user can start the emergency flow, understand the pause instruction, choose the first or backup trusted contact, and correctly understand the “independently confirmed” versus “not confirmed / Protocol Only” outcomes without coaching. The app logs anonymous interaction events locally. This is a functional prototype success criterion, not proof of fraud prevention, 10:1 value, willingness to pay, or commercial viability.

## 4. Screen mockup — text-only substitute
The user explicitly requested no generated image. This text wireframe is a substitute and does **not** satisfy the course's image-generated mockup requirement.

**Screen 1 — Home**
- FAMILY SHIELD · DEMO · DATOS FICTICIOS
- Headline: “Pausa antes de pagar.”
- Copy: “Antes de enviar dinero, verifica por otro medio con alguien de confianza.”
- CTA: “Iniciar verificación”

**Screen 2 — Pause**
- “No envíes dinero todavía.”
- “Termina la llamada si te presionan. Respira y verifica por un canal distinto.”
- CTA: “Entendido, voy a verificar”

**Screen 3 — Independent route**
- “Usa un contacto que ya conoces.”
- First contact, then backup contact, using numbers already saved in the user's phone.
- Family security phrase is an additional signal, never the only proof.

**Screen 4 — Outcome**
- “¿Pudiste confirmar por otro medio?”
- Yes: “Confirmación independiente realizada” — explicitly not a guarantee or payment authorization.
- No: “Protocol Only — no se pudo confirmar; mantén la pausa.”

## 5. Feature flow — Mermaid swimlane
~~~mermaid
flowchart TD
  subgraph HUMAN[PERSONA / FAMILIAR]
    A[Receives urgent call or voice note]
    B[Opens Family Shield]
    C[Pauses; does not transfer money]
    D[Calls relative on a previously saved number]
    E[If unavailable, contacts trusted person 1]
    F[If unavailable, contacts trusted person 2]
    G{Independent confirmation obtained?}
    H[Keeps payment decision under own control]
    I[Protocol Only: no transfer while unverified]
  end
  subgraph PRODUCT[FAMILY SHIELD]
    J[Shows calm pause instruction]
    K[Shows contact order and reminder]
    L[Records anonymous event type locally]
    M[Shows non-certifying outcome]
  end
  subgraph TRUST[TRUSTED CONTACTS]
    N[Confirm separately using an existing channel]
    O[Unavailable / cannot confirm]
  end
  A --> B --> J --> C --> K --> D
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

## 6. Global benchmark line
- **Best existing solution for the family verification behavior:** UK Government's Stop! Think Fraud guidance recommends a family safe phrase, hanging up when pressured, and calling back through a known number. Family Shield localizes that guidance into a rehearsable Mexican family contact order, a short Spanish-language flow, and a Protocol Only fallback.
- **Complementary system benchmark:** Singapore's ScamShield combines app-based checking/blocking, scam reporting, public information, and a 24/7 helpline. Family Shield does not copy its detection or national infrastructure; it focuses narrowly on household preparedness and independent confirmation.
- **Mexican baseline:** Guardia Nacional CERT-MX advises verifying serious family situations through another channel and creating family key words. Family Shield's gap hypothesis is that advice is not the same as a configured and rehearsed household routine; this must be tested, not assumed.

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
| UI | Next.js 15 + React + TypeScript | Small, testable client-side flow |
| Styling | CSS, responsive and reduced-motion aware | No external UI dependency |
| Hosting | Vercel project family-rehearsal | Existing project; public access must be verified |
| Source control | GitHub reginabuilds/family-rehearsal | Versioned source and docs |
| Feedback | Anonymous local event log | Event type + timestamp only; clearable |
| Database | None | No personal data is sent to a server |
| Authentication / RLS | Not applicable to this prototype | No account or user-data table exists |
| Secrets | None in source | No API keys or third-party services |

## 10. Test plan
1. Mechanical pass: verify all six screens/states, contact 1 then contact 2, confirmation, Protocol Only, restart, clear log, keyboard focus, mobile layout, and reduced-motion behavior.
2. Bug hunt: test the “no contact can be reached” path from the contact-selection screen; verify that it cannot be mistaken for confirmation.
3. Persona pass (Layer 1): synthetic Doña Mari, 54, sells food outside a metro station, uses WhatsApp, distrusts unfamiliar apps, and reads slowly. Give her screenshots/screen text in sequence; observe hesitation, misread terms, and abandonment. Mark all outputs as synthetic.
4. Layer 2 (required separately): five real users who could receive or act on an urgent family call; at least three strangers. Record role, task, observed struggle, exact quote, assistance, and consented anonymous notes. Do not invent these sessions.
5. Pain ranking: rank three observed findings by threat to the 10:1 value case. Fix the #1 pain, redeploy, and repeat the same task.
6. Return signal: count only an unsolicited repeat visit, message, or signup as proof. A compliment or invited second task is not proof.
7. Security floor: no secrets in repo; no real personal data; no personal-data backend; no raw user text fields; local event log can be cleared.

## 11. Acceptance criteria
- The first screen clearly says “Pausa antes de pagar.”
- Every path makes clear that Family Shield does not authenticate voices or emergencies.
- A user can reach either independent-confirmation outcome or Protocol Only.
- No path displays “safe”, “authentic”, or “emergency verified”.
- The event log records only generic event types and timestamps, with a visible clear control.
- No user data is sent to a server; no credentials or secrets are included.
- All demo content is fictional and labeled.
