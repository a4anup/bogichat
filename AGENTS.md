# Codex instructions — BogiChat

You are extending an Expo 54 React Native TypeScript demo for an India-first fictional train chat application. Preserve the visual style from `assets/design-reference.png` and logo `assets/brand-logo.png`, and use only theme tokens in `src/theme.ts`.

## Core invariants

- Users may be active on **multiple trains simultaneously**.
- Each user may own **at most one seat within a given train**. Switching frees previous seat atomically and updates membership; a person must not remain in both compartments.
- **Each compartment is an isolated chat**. A member may only read/send to their currently assigned compartment. Chat authorization must be server-enforced in production.
- Train creator selects custom train name, interest, language, broad discovery region, fictional route, departure time, arrival duration, compartments and mid-journey boarding permission.
- Five capacity classes: 1 Tier=2, 2 Tier=4, 3 Tier=6, Sleeper=10, General=20. Multiple coaches/classes per train are supported.
- Chats only permit sending between server-controlled departure and arrival. Train ends deterministically, without host extensions.
- Registered full name, email, phone are **private internal fields** and MUST NEVER be returned to train/chat APIs or exposed to host or other passengers. Public nickname/avatar must be separate.
- Registration with contact information is not identity proof; OTP proves possession only.
- Default to text-only, 18+ flows, block/report, moderation, privacy and appropriate safe age eligibility requirements before any public beta.

## Prototype behavior

This prototype is intentionally local-only; all state persists via AsyncStorage. It does not implement or claim genuine verification, security, multi-device seats, live users, or moderation. Do not label the demo OTP as production verification. Avoid collecting real personal information during demo use.

## Code progression

Keep TypeScript strict; build reusable screens/navigation and predictable state. Extract services before adding backend. For production consider Supabase Postgres/Auth/Realtime and Edge Functions, plus a server-controlled scheduler. For seat reservation use a transaction to enforce unique active seat per train/user and seat occupancy uniqueness. Apply RLS or equivalent access control to compartment messages; test races/reconnections. Add report, mute, block, retention, data export/delete, admin escalation and safety audit logs. Do not implement fake users impersonating humans.

## UX

Bottom tabs: Explore (Platform 0), My Trains, Create, Profile. Welcome > Private Registration > Demo Verification > Anonymous Passenger profile > Platform 0. Train Details > Coach selection > Seat chart > Chat. Chat includes compartment switch entry point and train countdown. Train cards show status, available capacity, interest and language. Preserve dark navy, violet and cyan premium aesthetic; avoid excessive neon bloom and clutter.
