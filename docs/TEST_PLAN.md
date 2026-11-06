# FAMILY SHIELD — WEEK 13 TEST PLAN

## Mechanical pass
| Test | Action | Expected result | Status |
|---|---|---|---|
| T1 Start | Tap Iniciar verificación | Pause screen appears | Pending live browser check |
| T2 Pause | Acknowledge pause | Saved-number callback instruction appears | Pending live browser check |
| T3 Family callback | Attempt family member using saved number | Outcome screen asks whether the user could check independently | Pending live browser check |
| T4 Contact 1 | If family member does not answer, select contact 1 | Contact 1 route appears | Pending live browser check |
| T5 Contact 2 | If contact 1 does not answer, select contact 2 | Contact 2 route appears | Pending live browser check |
| T6 Confirmed | Select confirmed only after out-of-app check | Non-certifying outcome state | Pending live browser check |
| T7 Unconfirmed | Select cannot confirm | Pause protocol appears | Pending live browser check |
| T8 Restart | Restart the flow | Home screen returns | Pending live browser check |
| T9 Event log | Complete a path, then clear log | Generic event count resets | Pending live browser check |
| T10 Mobile / keyboard | Test at 390px and tab through controls | No horizontal overflow; visible focus; actions reachable | Pending live browser check |

## Layer 1 — synthetic persona
Persona: Doña Mari, 54, sells food outside a metro station, uses WhatsApp, distrusts unfamiliar apps, reads slowly, and may abandon silently when confused. This is a synthetic test persona, not a real participant.

Task: “You receive a call that sounds like your adult child. They say there has been an accident and ask you to transfer money immediately. Use this prototype to decide what to do.”

Observe: whether she understands the pause instruction; whether she uses a saved number instead of the caller ID; whether she mistakes the app for an identity verifier; whether she follows the family → contact 1 → contact 2 sequence; whether she understands the pause fallback.

Synthetic findings and the code changes they motivated are recorded in docs/PERSONA_TEST.md. They are not Layer 2 evidence.

## Layer 2 — five real sessions (pending)
Recruit five people who could actually receive or act on a family emergency call. At least three must be strangers to the researcher. Suggested mix:
- Parent aged 45–65 with an adult child living elsewhere.
- Older adult who manages their own calls and payments.
- Adult child who supports a parent with digital tasks.
- Adult who regularly coordinates family matters over WhatsApp.
- Family caregiver who helps coordinate relatives.

Do not count classmates as target users unless they genuinely fit the segment. Do not count bank staff as end users; they are buyer/channel stakeholders.

For each session record: participant code (P1–P5), role only, stranger to researcher (yes/no), task, completion, time, assistance, exact quote, observed hesitation, and consent. Do not record names, phone numbers, actual family codes, or real incident details.

## Pain ranking rule
Rank only observed findings, not assumptions. For each finding score severity, frequency, threat to the 10:1 case, and feasibility of correction. A demonstrated serious safety/privacy issue stops the affected flow immediately. A candidate pain list is not a finding.

## Fix and redeploy
Fix the #1 observed noncritical usability pain. Repeat the same task before and after the fix with comparable conditions. Save dated screenshots or a concise observation log. Do not claim a fix was validated until retested.

## Return evidence
Accept only a voluntary repeat visit, unsolicited message, or signup. Do not count a compliment or an invited follow-up task as a return signal.
