# FAMILY SHIELD — WEEK 13 PACKET
**Owner:** Regina Cucchia Villalobos  
**Role:** USER  
**Milestone:** REAL HUMANS — FIVE USERS WHO DON'T LOVE YOU  
**Status:** Product packet and working prototype are built. Five real-user sessions, the voluntary return signal, and the live demo recording remain outstanding.

## 1. Problem
A person receives an urgent call or voice note that appears to come from a family member and asks for money. Fear and time pressure can make the recipient act before checking the story independently. Voice cloning means a familiar voice is no longer sufficient proof. The opportunity is to make a family verification routine easy to remember and follow before an emergency happens.

## 2. Exact user
Initial segment: Mexican parents approximately 45–65 whose adult children (18–25) live elsewhere. The parent may receive the suspicious call and be asked to send money; the adult child is the person being impersonated or supposedly in danger. The experience must also work for an older adult who uses WhatsApp but has low confidence with unfamiliar apps, reads slowly, and may abandon a confusing flow.

## 3. Success definition
A first-time user can follow the sequence without coaching: pause; call the family member using a number already saved; if unavailable, try trusted contact 1 and then trusted contact 2; and correctly understand the difference between a reported independent check and an unconfirmed request. The user understands that Family Shield itself does not verify identity. Functional usability is the prototype success criterion; it is not proof of fraud prevention, 10:1 value, willingness to pay, or commercial viability.

## 4. Image-generated mockup
**Requirement status: intentionally omitted at the user's explicit instruction not to create an image.** The text wireframe below documents the intended screens but does not satisfy the course's image-generated mockup requirement.

- **Home:** “Pausa antes de pagar.” Copy: “Antes de enviar dinero, comprueba la situación por otro medio.” CTA: “Iniciar verificación”.
- **Pause:** “No envíes dinero todavía.” End the pressured call and check through a different known channel.
- **Contact sequence:** call the family member on a saved number; if unavailable, trusted contact 1; then trusted contact 2. Never call back the number supplied by the suspicious caller.
- **Outcome:** “¿Pudiste comprobarlo por otro medio?” If yes, record only that the user reports an independent check; if no, show “No se pudo comprobar. Mantén la pausa.”

## 5. Mermaid flow / swimlanes
~~~mermaid
flowchart TD
  subgraph HUMAN[PERSONA / FAMILIAR]
    A[Receives urgent call or voice note]
    B[Opens Family Shield]
    C[Pauses; does not transfer money]
    D[Calls family member on saved number]
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

## 6. Benchmark line — global to local
**Global benchmark:** UK Government's Stop! Think Fraud guidance recommends ending a pressured call, using a family safe phrase, and calling back on a known number. **Mexico localization:** Family Shield turns the same principle into a short Spanish-language routine for households: saved-number callback, two trusted contacts in a fixed order, and a plain-language pause fallback. Singapore's ScamShield is a complementary national example of scam checking, reporting, information, and helpline support; Mexican Guardia Nacional CERT-MX / SSPC guidance also encourages independent verification and family key words. Family Shield deliberately does not reproduce detection or payment-blocking features.

## 7. Long view — three years
If this slice works, Family Shield could become a lightweight family preparedness service that helps households configure trusted-contact order, private verification phrases, and periodic rehearsals. Distribution could be tested through banks or other trusted institutions, while keeping family data private and leaving payment decisions with the user. In three years, the product should still be a coordination and preparedness layer—not a voice-authenticity detector, emergency authority, or payment controller.

## 8. Scope cut
- No deepfake, voice, face, or video detection.
- No guarantee that a caller or emergency is authentic.
- No payment initiation, payment blocking, or automatic transfer hold.
- No access to balances, banking credentials, call recordings, WhatsApp messages, or family communications.
- No automated contact dialing or contact-book access in this prototype.
- No AI-generated emergency advice, 24/7 monitoring, or emergency response service.
- No backend storage of personal or family data; only anonymous event types and timestamps are stored locally in the browser.

## 9. Architecture + stack
| Layer | Choice | Reason / boundary |
|---|---|---|
| UI | Next.js 15.5.28 + React 19.1.2 + TypeScript | Small, testable client-side flow |
| Styling | CSS | Responsive, visible focus, reduced-motion support |
| Hosting | Vercel production project family-rehearsal | Public deployment; latest production build READY |
| Source control | GitHub reginabuilds/family-rehearsal | Versioned code and docs |
| Feedback | Browser localStorage | Anonymous event type + timestamp only; clearable |
| Database / auth | None | No personal data is sent to a server |
| Secrets | None in source | No API keys or third-party services |

## 10. Test plan
**10:1 value hypothesis:** the user value is preventing a rushed decision by making an existing safety behavior easier to remember and perform. It is a hypothesis, not a result. Compare each participant's current workaround with the Family Shield flow on equivalent fictional scenarios: active time, steps, errors, help required, and correct explanation of the outcome. Record willingness-to-pay or sponsor interest separately; never infer it from compliments or assign a speculative peso value to an avoided loss.

**Mechanical pass:** T1 start; T2 acknowledge pause; T3 attempt family-member saved-number callback; T4 route to trusted contact 1 if no answer; T5 route to trusted contact 2 if no answer; T6 report independent check; T7 enter pause fallback; T8 restart; T9 clear event log; T10 test 390px viewport and keyboard navigation. All ten remain pending live browser verification.

**Layer 1 — synthetic persona:** Doña Mari, 54, sells food outside a metro station, uses WhatsApp, distrusts unfamiliar apps, and reads slowly. The synthetic walkthrough exposed jargon and ambiguity about which number to call; the code was revised to use plain Spanish and a clear family → contact 1 → contact 2 sequence. This is not a real participant session.

**Layer 2 — five real users:** recruit five people who could receive or act on an urgent family call; at least three must be strangers. Record participant code, role only, stranger status, task, observed behavior, time, help required, exact verbatim quote, and consent. Do not collect names, phone numbers, family codes, audio, or message contents. These sessions have not been conducted.

**Pain ranking and fix:** rank the three worst observed pains by severity, frequency, threat to the 10:1 case, and feasibility. Fix the #1 noncritical pain, redeploy, and repeat the same task under comparable conditions; preserve dated before/after evidence. Do not substitute synthetic findings for real-user results.

**Return proof:** count only a voluntary repeat visit, unsolicited message, or signup. A compliment or an invited second task is not proof. No return signal has been observed yet.

**Security floor:** no secrets; no personal data in demo content; no backend personal-data table; no free-text personal-data forms; event log stores only generic event types and timestamps and can be cleared; no path claims that the app authenticates voices or emergencies.

## References
- UK Government, Stop! Think Fraud: https://stopthinkfraud.campaign.gov.uk/how-to-spot-fraud/how-to-spot-phone-fraud/
- GovTech Singapore, ScamShield: https://www.tech.gov.sg/products-and-services/for-citizens/scam-prevention/scamshield/
- Guardia Nacional CERT-MX (20 Feb 2026): https://www.gob.mx/gncertmx/es/articulos/recomendaciones-ante-falsas-llamadas-con-fines-de-fraude-mediante-la-clonacion-de-voz
- SSPC (13 Mar 2025): https://www.gob.mx/sspc/prensa/la-sspc-emite-recomendaciones-ante-posibles-fraudes-por-clonacion-de-voz-con-inteligencia-artificial
