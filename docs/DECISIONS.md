# DECISIONS — FAMILY SHIELD WEEK 13

## Product decisions
- The slice is preparedness and independent verification, not detection.
- The user pauses before paying and checks through a separate known channel.
- A family phrase is optional and secondary, never sole proof.
- The contact sequence is family member on saved number → trusted contact 1 → trusted contact 2.
- If no independent confirmation is possible, use the pause protocol and do not transfer while unverified.
- User retains control of any payment decision.
- No automatic holds, payment blocks, or transaction controls.
- No AI, voice, or video authenticity claim.

## Technical decisions
- Next.js 15.5.28 + React 19.1.2 + TypeScript + CSS on Vercel.
- GitHub repository: reginabuilds/family-rehearsal.
- Production alias: https://family-rehearsal.vercel.app.
- Anonymous event log stays in browser localStorage and stores only event type + timestamp.
- No backend database or Supabase is used because the prototype does not need to store personal data.
- Demo uses fictional roles and labels; no real family data is requested.
- No secrets or API keys are included in source.

## Open items
- Run the live mechanical pass T1–T10 in a browser and save screenshots/notes.
- Run five Layer 2 real-user sessions; at least three participants must be strangers.
- Rank three actual pains; fix and retest the #1 observed pain with before/after evidence.
- Capture a genuine voluntary return signal if one occurs.
- Record the live demo video.
- The course's generated-image mockup requirement is intentionally not completed at the user's request; the packet contains a text wireframe instead.

## Session close
- First move next session: open the public production URL on a mobile viewport and execute T1–T10.
