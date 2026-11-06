# FAMILY SHIELD — WEEK 13 TEST PLAN

## Mechanical pass
| Test | Action | Expected result | Evidence |
|---|---|---|---|
| T1 Start | Tap Iniciar verificación | Pause screen appears | Screen capture / event |
| T2 Pause | Acknowledge pause | Contact options appear | Screen capture / event |
| T3 Primary | Select contact 1 | Outcome asks for independent confirmation | Screen capture / event |
| T4 Backup | Return and select contact 2 | Same outcome, backup selected | Screen capture / event |
| T5 Confirmed | Select confirmed only after out-of-app check | Non-certifying confirmation state | Screen capture / event |
| T6 Unconfirmed | Select cannot confirm | Protocol Only state | Screen capture / event |
| T7 Restart | Restart the flow | Home screen returns | Screen capture / event |
| T8 Event log | Complete a path, then clear log | Generic event count resets | Screen capture / event |
| T9 Mobile | Test at 390px viewport | No horizontal overflow; buttons fit | Screenshot |
| T10 Keyboard | Tab through controls | Visible focus; all actions reachable | Observation |

## Layer 1 — synthetic persona
Persona: Doña Mari, 54, sells food outside a metro station, uses WhatsApp, distrusts unfamiliar apps, reads slowly, and may abandon silently when confused. This is a synthetic test persona, not a real participant.

Task: “You receive a call that sounds like your adult child. They say there has been an accident and ask you to transfer money immediately. Use this prototype to decide what to do.”

Observe: whether she understands “verificación independiente”; whether she knows to use a saved number; whether she mistakes the confirmation screen for a guarantee; whether she can find the backup contact; whether she understands Protocol Only.

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
Accept only a voluntary second visit, unsolicited message, or signup. Do not count a compliment or an invited follow-up task.
