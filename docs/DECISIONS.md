# DECISIONS — FAMILY SHIELD WEEK 13

## Product decisions
- The slice is preparedness and independent verification, not detection.
- The user pauses before paying and checks through a separate known channel.
- A family phrase is optional and secondary, never sole proof.
- Two trusted contacts are used in a finite order.
- If no independent confirmation is possible, use Protocol Only and do not transfer while unverified.
- User retains control of any payment decision.
- No automatic holds, payment blocks, or transaction controls.
- No AI, voice, or video authenticity claim.

## Technical decisions
- Next.js + TypeScript + CSS on Vercel.
- GitHub repository: reginabuilds/family-rehearsal.
- Anonymous event log stays in browser localStorage and stores only event type + timestamp.
- No backend database or Supabase is used because the prototype does not need to store personal data.
- Demo uses fictional roles and labels; no real family data is requested.

## Open items
- Complete and document the mechanical pass on the deployed URL.
- Run the Layer 1 synthetic persona test and record confusion.
- Run five Layer 2 real-user sessions; at least three participants must be strangers.
- Rank three actual pains; fix and redeploy the #1 pain.
- Capture a genuine voluntary return signal if one occurs.
- Record the live demo video.
- The course's generated-image mockup requirement is intentionally not completed at the user's request; the packet contains a text wireframe instead.

## Session close
- First move next session: open the public deployment on a mobile viewport and execute T1–T10.
