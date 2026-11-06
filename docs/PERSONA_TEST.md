# PERSONA TEST — FAMILY SHIELD WEEK 13
**Test layer:** Layer 1 — synthetic persona  
**Status:** Simulated source-based walkthrough only. This is not a real human session and cannot replace the five Layer 2 sessions.

## Persona used
Doña Mari, 54, sells food outside a metro station. She uses WhatsApp every day, distrusts unfamiliar apps, reads slowly, and may abandon silently when confused. This persona follows the course's example persona and prior Family Shield user research.

## Task
“You receive a call that sounds like your adult child. They say there has been an accident and ask you to transfer money immediately. Use Family Shield to decide what to do.”

## Screen-by-screen walkthrough
1. **Home:** “Pausa antes de pagar” is clear. The abstract phrase “confirmación independiente” could be mistaken for a technical check performed by the app.
2. **Pause:** “No envíes dinero todavía” is direct. The next action needs to say exactly which number to call.
3. **Family member route:** The user needs a plain instruction to open saved contacts and call the usual number, not call back the number that initiated the suspicious call.
4. **Trusted contact 1:** The next step must be obvious if the family member does not answer.
5. **Trusted contact 2:** The second backup must be distinguishable from the first and remain part of a finite sequence.
6. **Outcome:** The interface must make clear that the person—not the app—made the separate call. A reported check is not a guarantee.
7. **Pause fallback:** English jargon such as “Protocol Only” is inappropriate for this user. Use “No se pudo comprobar. Mantén la pausa.”

## Synthetic persona voice — NOT real-user quotes
- “¿A cuál número le marco, al que me llamó o al que ya tengo guardado?”
- “¿La aplicación ya sabe si es mi hijo?”
- “Si no contesta el primero, ¿qué hago?”

These are simulated prompts, not interview quotes and not evidence from a real person.

## Fix applied in the code
- Replaced technical wording with plain Spanish and made the saved-number callback explicit.
- Enforced the finite order: family member → trusted contact 1 → trusted contact 2.
- Added an explicit action to move to the next contact when the previous one does not answer.
- Renamed the fallback “PROTOCOLO DE PAUSA · SIN COMPROBACIÓN”.
- Clarified that the app does not make calls or verify identities.

## Evidence and retest status
This was a source-based walkthrough of the UI states, not a live observed session. No screen-capture files are included: the user explicitly requested no generated image, and the external browser could not retrieve the protected/public deployment from the available inspection route. The source code and production build were updated after the simulated findings. A live retest with Doña Mari or another real person has not happened. The five Layer 2 sessions remain pending. Do not report this synthetic walkthrough as five-user validation.
