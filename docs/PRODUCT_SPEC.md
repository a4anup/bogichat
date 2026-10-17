# BogiChat functional specification (prototype v0.1)

## Brand
BogiChat — Unknown Passengers. Real Conversations. Home: Platform 0. First primary action: Book a Seat.

## Screens (implemented)
1. Splash / Welcome
2. Private user registration (name, email, +91 phone; demo-only)
3. Verification (fixed `123456` UI simulation; NOT verified)
4. Anonymous passenger setup (nickname, avatar)
5. Platform 0 / discover trains with simple filters
6. Create Train (name, route, topic, language, region, time, duration, coach types, late boarding)
7. Train Detail (capacity, route, status, coach selection)
8. Seat chart (available, occupied, current seat)
9. Coach chat (sending limited to live journey; text-only)
10. Switch coach/seat (same train only one active seat)
11. My Trains (multiple simultaneous trips and per-train chats)
12. Public passenger profile
13. Account/private details and privacy notices

## State rules
- Membership has key `{trainId,coachId,seatId}`. Only one entry per `trainId` for each signed-in user.
- Every successful booking in a train replaces that train membership and frees user's old seat on that train.
- Chat messages are associated to a coach ID. Moving compartments changes chat visibility.
- User may have simultaneous memberships in different train IDs.
- `Scheduled` when `now < departure`; `Live` when `departure <= now < arrival`; `Ended` afterward.
- Seats can be reserved before departure or joined en route if train permits, until arrival.
- Creating a train does not automatically allocate the host a seat.
- After arrival, the chat becomes read-only. Production deletion/retention is still unimplemented.

## Production backlog
Real auth/OTP; server-side validation of age and terms; PII encryption and RBAC; real-time multiplayer chat; atomic capacity and seat-switch endpoints; scheduled start/end jobs; train invitations; moderation, user blocking/reporting, abuse detection, audit logs, privacy policy/data export/deletion, accessibility, localization (Kannada/Hindi), push notifications, tests, trust/safety and store review.
