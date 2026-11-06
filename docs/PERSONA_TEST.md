# PERSONA TEST — FAMILY SHIELD WEEK 13
**Test layer:** Layer 1 — synthetic persona  
**Status:** Simulated walkthrough only. This is not a real human session and cannot replace the five Layer 2 sessions.

## Persona used
Doña Mari, 54, sells food outside a metro station. She uses WhatsApp every day, distrusts unfamiliar apps, reads slowly, and may abandon silently when confused. This persona follows the course's example persona and prior Family Shield user research.

## Task
“You receive a call that sounds like your adult child. They say there has been an accident and ask you to transfer money immediately. Use Family Shield to decide what to do.”

## Simulated walkthrough findings
1. **Home:** “Pausa antes de pagar” is clear. The abstract phrase “confirmación independiente” could be mistaken for a technical check performed by the app.
2. **Pause:** “No envíes dinero todavía” is direct. The next action needs to say exactly which number to call.
3. **Contact sequence:** The user needs a plain instruction to open the phone's saved contacts and call the usual number, not call back the number that initiated the suspicious call.
4. **Backup:** The user needs a visible sequence: family member first, trusted contact 1 next, trusted contact 2 last. If the first person does not answer, the app must present the next step instead of ending the flow.
5. **Outcome:** The interface must make clear that the person—not the app—made the separate call. A reported check is not a guarantee.
6. **Fallback:** English jargon such as “Protocol Only” is inappropriate for this user. Use “No se pudo comprobar. Mantén la pausa.”

## Synthetic persona voice — NOT real-user quotes
- “¿A cuál número le marco, al que me llamó o al que ya tengo guardado?”
- “¿La aplicación ya sabe si es mi hijo?”
- “Si no contesta el primero, ¿qué hago?”

These are simulated prompts, not interview quotes and not evidence from a real person.

## Fix applied in the code
- Replaced technical wording with plain Spanish: “Llama tú al número que ya tienes guardado.”
- Added the explicit finite order: family member → trusted contact 1 → trusted contact 2.
- Added an explicit action to move to the next contact when the previous one does not answer.
- Renamed the fallback “PROTOCOLO DE PAUSA · SIN COMPROBACIÓN”.
- Clarified that the app does not make calls or verify identities.

## Retest status
The source code and production build were updated after these findings. A live, observed retest with Doña Mari or another real person has **not** happened. The five Layer 2 sessions remain pending. Do not report this synthetic walkthrough as five-user validation.
