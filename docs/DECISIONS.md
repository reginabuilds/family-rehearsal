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
- Latest production deployment: READY, commit 29ca331cfd134467fbee52ff2049fdceece7fa0d.
- Deployment history includes two successful production builds after the initial vulnerable-dependency build failed.
- Anonymous event log stays in browser localStorage and stores only event type + timestamp.
- No backend database or Supabase is used because the prototype does not need to store personal data.
- Demo uses fictional roles and labels; no real family data is requested.
- No secrets or API keys are included in source.

## Course requirements still requiring external evidence
- Live browser mechanical check T1–T10 and dated screenshots/notes.
- Five Layer 2 real-user sessions; at least three participants must be strangers.
- Rank three observed pains; fix and retest #1 with before/after evidence.
- A genuine voluntary return signal, if one occurs.
- A live screen recording for DEMO.mp4.
- The course's generated-image mockup is intentionally omitted at the user's explicit request; the packet contains a text wireframe instead.

## Session close
- Packet structure follows the exact ten required sections.
- Packet is committed before implementation in the repository history.
- The first deployment failed because of a vulnerable Next.js version; dependencies were upgraded to patched releases.
- The latest production deployment is READY and the custom alias is assigned.
- Do not claim human testing, return evidence, or a recorded video until those events actually happen.


# WEEK 15 DISTRIBUTION DECISIONS

- Audience: Mexican parents/caregivers coordinating with an adult child living elsewhere; secondary audience is adult children and trusted relatives.
- Moment: urgent money request that appears to come from a family member.
- Message: Pausa antes de pagar. Comprueba por otro medio.
- Family Shield is a preparedness guide, not a deepfake detector or caller-authentication product.
- Payer remains unvalidated: household D2C and institutional sponsorship are hypotheses.
- Voice: calm, direct, respectful, transparent; no alarmism, blame, unsupported statistics, or false certainty.
- Palette: forest green #1E3A2F, warm ivory #F7F7F1, sage #EAF1EB, ochre #C58B43, ink #26352D.
- Primary channel: WhatsApp family sharing; secondary: Instagram carousel and Reel.
- Test two assets with five real target users; at least three strangers where feasible. Real test remains pending.
- Add a public /distribution explainer route linking to the live protocol; no personal-data capture.
- Do not invent reach, clicks, shares, signups, user quotes, test results, commits, or deployments.
- Existing repo history already has >5 commits and multiple READY production deployments; preserve it.
- Pending human evidence: five real audience sessions, live browser test observations, 3:30 video, and original full build conversation export.
