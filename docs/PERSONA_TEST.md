# PERSONA TEST — FAMILY SHIELD WEEK 13
**Test layer:** Layer 1 — synthetic persona  
**Status:** Simulated walkthrough only. This is not a real human session and cannot replace the five Layer 2 sessions.

## Persona used
Doña Mari, 54, sells food outside a metro station. She uses WhatsApp every day, distrusts unfamiliar apps, reads slowly, and may abandon silently when confused. This persona is grounded in the course's example persona and prior Family Shield user research.

## Task
“You receive a call that sounds like your adult child. They say there has been an accident and ask you to transfer money immediately. Use Family Shield to decide what to do.”

## Simulated walkthrough findings
1. **Home screen:** The headline “Pausa antes de pagar” is understandable. The phrase “confirmación independiente” is too technical for a first-time user.
2. **Pause screen:** The instruction not to send money yet is clear. The warning about caller ID is useful, but the screen should say exactly what to do next.
3. **Contact screen:** “Contacto de confianza 1” is understandable only if the family has already agreed who that person is. The app does not store contacts, so the instruction should explicitly say to open the phone's saved contacts and dial the number already known.
4. **Outcome screen:** “Confirmé por otro medio” could be misunderstood as “the app checked it.” The copy must stress that the person—not the app—made the separate call.
5. **Fallback:** “Protocol Only” is English jargon. Replace it with “No se pudo comprobar. Mantén la pausa.” The action should be direct and readable.

## Synthetic persona voice — NOT real-user quotes
- “¿A cuál número le marco, al que me llamó o al que ya tengo guardado?”
- “¿La aplicación ya sabe si es mi hijo?”
- “Si no contesta el primero, ¿qué hago?”

These are simulated prompts used to expose possible confusion. They are not interview quotes and must not be reported as evidence from a real person.

## Pain ranking from this Layer 1 simulation only
1. **Critical comprehension risk:** User may think the app itself confirms identity. Fix by making the external action explicit and removing any implication that the app verifies a caller.
2. **Workflow gap:** If contact 1 does not answer, the user needs an explicit next action to try contact 2 before entering the no-confirmation fallback.
3. **Language friction:** “Independent confirmation” and “Protocol Only” are abstract or English. Replace with plain Spanish.

## Fix selected for the next build
- Change the contact instructions to: “Llama tú al número que ya tienes guardado. No uses el número que te dio quien te llamó.”
- Add a specific “No contestó; intentar contacto 2” action after contact 1.
- Rename the fallback to “No se pudo comprobar. Mantén la pausa.”
- Keep the statement visible: “La app no verifica la llamada; tú confirmas por otro medio.”

## Validation still required
Run this task with five real users, at least three strangers. Record their exact words and behavior. Do not convert these simulated observations into real-user findings.
