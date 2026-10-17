# BogiChat — Expo starter pack

**BogiChat** is a fictional social-journey app: create virtual trains, book exactly one seat per train, join multiple trains simultaneously, switch compartments, and have conversations that close when journeys end.

## Run locally

Prerequisites: Node.js 20.19+ (Node 22 recommended), npm, and the **Expo Go** app on Android/iOS.

```bash
cd BogiChat-Expo-Starter
npm install
npx expo start --clear
```

Scan the QR code in Expo Go on your phone (same network as development computer). If local network discovery fails: `npx expo start --tunnel`. Press `a` for an installed Android emulator or `i` for an iOS simulator on macOS.

**No API keys are necessary to test the prototype.** For web testing, run `npx expo install react-dom react-native-web @expo/metro-runtime` then `npm run web`.

## Demo walkthrough

1. **Get Started** → register with made-up demo details, confirm 18+ and terms.
2. **Verification** → enter the fixed demonstration code `123456` (no SMS/email is sent).
3. Choose public nickname/avatar → **Enter Platform 0**.
4. Explore trains → select train → compartment → an available seat. You can switch compartments; moving releases your old seat.
5. **My Trains** displays each train you joined. Join a second train and toggle between conversations.
6. To test an immediate chat, choose **Moonlight Express** (already live). Create additional trains with departure set to `0` minutes for immediate live testing.
7. **Create** → configure name, fictional route, interest, language, region, compartments, departure offset, duration, and late-boarding policy.
8. **Profile** → view the anonymous display identity and locally saved private profile. Reset from Settings.

## Design tokens

See `src/theme.ts`. Colors are designed from the selected dark cinematic mockups:

| Token | Hex | Usage |
|---|---|---|
| bg | `#070B1B` | Midnight base |
| surface | `#10172D` | Cards/inputs |
| elevated | `#17203C` | Selected/raised elements |
| primary | `#8247FA` | CTAs, seat selected |
| purple | `#A765FF` | Highlights |
| blue | `#32BDFC` | Rail/secondary accent |
| pink | `#DE68F5` | Brand accent |
| text | `#F8F8FF` | Main content |
| muted | `#A2AACC` | Supporting text |
| green | `#31D49A` | Free seats/live status |
| red | `#FF6984` | Alerts |

Brand asset: `assets/brand-logo.png` cropped from the user-selected reference design; entire design board in `assets/design-reference.png`.

## Architecture

- `App.tsx`: navigable single-app prototype screens and demo interactions
- `src/model.ts`: train, coach, seat, member, chat types and seed data
- `src/theme.ts`: brand colors, spacing, class definitions
- `src/components.tsx`: shared buttons, inputs, cards and typography
- `src/storage.ts`: local AsyncStorage persistence
- `AGENTS.md`: detailed coding constraints and production path
- `docs/PRODUCT_SPEC.md`: product rules and screen inventory

## Prototype limitations — critical

This is **NOT a production chat app**. There is no backend, real authentication, OTP, realtime sync across devices, real users, report/block flow, moderation, or verified legal compliance. The demo name, email and phone are stored as **unencrypted local AsyncStorage** (prototype only): use fake data. All demo train/seat/chat state is local to one device, so a seat only appears occupied there. Demo avatars may represent seeded placeholders, not other participants. Chats lock at departure/arrival according to device time; they are not automatically purged from storage. Do not publish this build to actual users.

Before publishing: implement an authenticated backend, server-authoritative seat transactions and train timers, real OTP with rate limits, private PII tables plus restricted access, robust abuse and child-safety safeguards, reporting/blocking and moderation, deletion/retention policy, account age checks, and app-store policy review (especially anonymous/random-chat restrictions).

## Recommended implementation next

1. Move state/actions into a typed service layer with authenticated server APIs.
2. Add reliable server-side scheduler, realtime messages, server-enforced capacity and unique `(user_id, train_id)` active-seat constraint.
3. Add real verification, admin moderation console, reporting, blocking, privacy/delete flows.
4. Implement screen-specific components and automated tests; validate Android and iOS.

