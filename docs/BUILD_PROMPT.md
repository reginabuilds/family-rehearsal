# IMPLEMENTATION PROMPT — FAMILY SHIELD WEEK 13

Build the Family Shield prototype described in docs/PACKET.md. Use the existing Next.js 15, React, TypeScript, CSS, GitHub, and Vercel stack.

## Product boundary
This is a family preparedness and independent-verification guide. It is not a deepfake detector, caller-authentication service, emergency authority, or payment tool. Never show “safe”, “authentic”, “verified caller”, or a guarantee that an emergency is real. Never access contacts, messages, call logs, audio, banking data, or payment rails.

## Small testable features
1. Home screen with “Pausa antes de pagar” and a single start action.
2. Pause screen with concise, readable instructions not to transfer money under pressure.
3. Contact-order screen: user tries the family member's previously saved number, then trusted contact 1, then trusted contact 2. No phone number or contact name is entered into the prototype.
4. Outcome screen: the user reports whether they independently confirmed through a separate known channel. A family phrase may be mentioned as a secondary signal, never the only proof.
5. Protocol Only screen if no independent confirmation is obtained. It must clearly say not to transfer while the request remains unverified.
6. Anonymous local event log: event type and timestamp only; no PII; clearable by the user.
7. Responsive and accessible styling, keyboard-accessible buttons, readable type, visible focus, and reduced-motion support.

## Acceptance criteria
- All routes are reachable and restartable.
- “Confirmed” is never described as proof of identity or authorization to pay.
- The backup path is visible and usable.
- “No contact available” leads to Protocol Only, not a green/safe state.
- Event log contains no names, phone numbers, free text, audio, or message content.
- The build contains no API keys or secrets.
- No personal data is sent to a database; no Supabase table is created.
- All demo content is fictional and labeled.
- Test the mobile layout and keyboard interaction before shipping.

## Commit plan
1. Initialize Next.js package and TypeScript configuration.
2. Add app shell and metadata.
3. Implement the state-driven verification flow.
4. Add responsive CSS and accessibility states.
5. Add packet, test plan, and security documentation.
6. Run the mechanical test; document and fix the first real bug.
7. Redeploy and record the deployment URL and status.

## Do not
- Add AI voice detection.
- Add automatic payment blocks or transaction holds.
- Store family names, phone numbers, or security phrases.
- Claim five real-user tests, a return signal, or 10:1 results without evidence.
