# Lapstr

## Educational Purpose

This project was created primarily for **educational and learning purposes**.  
While it is well-structured and could technically be used in production, it is **not intended for commercialization**.  
The main goal is to explore and demonstrate best practices, patterns, and technologies in software development.

## Description

**Lapstr** is a React Native stopwatch application built with Expo, designed to be fast, visual, and customizable. At its core, it provides a precise timer that you can start, stop, and reset at any time. While the timer is running, you can record individual laps using the **Lap** button — each lap is captured and displayed in a scrollable list beneath the timer, letting you track split times throughout your session. The **Clear** button resets both the timer and the entire lap history in one tap.

Beyond timing, Lapstr lets you personalize the experience through a dedicated skin system. A slide-in navigation panel gives you access to a skin selector where you can choose from four built-in clock styles: a classic analog look, a standard digital clock, a pixel-art hourglass, and an animated running Pikachu. Each skin has two states — a static image when the timer is stopped and an animated GIF while it is running — so the interface always reflects whether you are actively timing or not.

The app also supports **light and dark color modes**, allowing the UI to adapt to your preference or system setting. The theme system is built around a structured color palette with semantic tokens, making the switch between modes seamless across all components.

Under the hood, Lapstr uses React Native Reanimated for smooth, native-driven animations (such as the NavBar slide-in transition), Expo Router for navigation, and a context-based state architecture that separates timer logic, lap management, and UI state into independent, testable units. The project includes a full Jest + React Testing Library test suite covering all major components.

## Technologies used

1. React Native
2. TypeScript
3. Expo SDK 54
4. expo-router

## Libraries used

The runtime depends on the Expo SDK 54 ecosystem and Reanimated for native-driven animations. The development toolchain combines ESLint + Prettier (with a Husky pre-commit hook) and Jest + React Testing Library for tests.

#### Dependencies

```
"@expo/vector-icons": "^15.0.2"
"expo": "~54.0.0"
"expo-asset": "~12.0.9"
"expo-constants": "~18.0.13"
"expo-font": "~14.0.9"
"expo-image": "~3.0.9"
"expo-linking": "~8.0.12"
"expo-router": "~6.0.23"
"expo-status-bar": "~3.0.9"
"react": "19.1.0"
"react-dom": "19.1.0"
"react-native": "0.81.5"
"react-native-reanimated": "~4.1.1"
"react-native-worklets": "0.5.1"
"react-native-safe-area-context": "~5.6.0"
"react-native-screens": "~4.16.0"
"react-native-web": "^0.21.0"
```

#### devDependencies

```
"@babel/core": "^7.20.0"
"@eslint/js": "^9.0.0"
"@testing-library/react-native": "^12.1.2"
"@types/jest": "~29.5.14"
"@types/node": "^22.0.0"
"@types/react": "~19.1.10"
"babel-plugin-module-resolver": "^5.0.2"
"babel-preset-expo": "~54.0.1"
"eslint": "^9.0.0"
"eslint-config-prettier": "^9.0.0"
"eslint-plugin-prettier": "^5.5.5"
"eslint-plugin-react-hooks": "^5.0.0"
"globals": "^15.0.0"
"husky": "^9.0.0"
"jest": "~29.7.0"
"jest-expo": "~54.0.0"
"lint-staged": "^15.0.0"
"prettier": "^3.0.0"
"react-test-renderer": "19.1.0"
"typescript": "^5.2.2"
"typescript-eslint": "^8.0.0"
```

## Getting Started

### Prerequisites

Lapstr targets **Node.js 22+** (enforced via `engines` in `package.json` and `engine-strict=true` in `.npmrc`). A `.nvmrc` file is included, so if you use `nvm` you can simply run `nvm use` from the project root to switch to the correct version.

### Editor setup

A `.editorconfig` file and a `.vscode/extensions.json` recommendation list ship with the repo. When you open the project in VS Code, you will be prompted to install the recommended extensions (ESLint, Prettier, EditorConfig, Expo Tools, Jest, Error Lens, and more) that align with the project's lint, format, and test workflows.

### Run locally

With the stack in mind, follow these steps to run Lapstr locally:

1. Clone the repository
2. Navigate to the project folder
3. Execute: `npm install`
4. Execute: `npm start`

Install **Expo Go** on your device ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779)) and scan the QR code that appears in the terminal.

## Testing

Once the app runs locally, you can validate the codebase with the included Jest + React Testing Library suite:

1. Navigate to the project folder
2. Execute: `npm test`

For coverage report:

```bash
npm run test:coverage
```

## Continuous Integration

The repository ships with a **GitHub Actions** pipeline defined in [`.github/workflows/ci.yml`](.github/workflows/ci.yml). It runs automatically on every `push` and `pull_request` targeting the `main` branch and is composed of four sequential jobs that share a common Node.js toolchain (pinned through [`.nvmrc`](.nvmrc)) and an npm cache.

### Pipeline overview

```
                      ┌─── PR or push to main ───┐
                      ▼                          ▼
┌──────────────────────┐  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   lint-and-audit     │─▶│      testing     │─▶│      bundle      │─▶│   expo-doctor    │
│ eslint · tsc · prettier│ │ jest --verbose  │  │ expo export       │  │ npx expo-doctor  │
└──────────────────────┘  └──────────────────┘  └──────────────────┘  └──────────────────┘
```

### Validation jobs (run on every PR and push to `main`)

1. **`lint-and-audit`** — installs dependencies with `npm ci`, then runs `npm run lint` (ESLint over `src`, `app` and `__tests__`), `npm run typecheck` (`tsc --noEmit` against `tsconfig.app.json`) and `npm run format:check` (Prettier verification).
2. **`testing`** — runs the full Jest suite with `npm run test`. Depends on `lint-and-audit`.
3. **`bundle`** — produces a production bundle via `npx expo export --platform all` and uploads the resulting `dist/` directory as an artifact named `expo-dist` (7-day retention, `if-no-files-found: error`). Depends on `testing`.
4. **`expo-doctor`** — runs `npm run doctor` (`npx expo-doctor`) to validate Expo SDK versions, dependency compatibility and project configuration. Depends on `bundle`.

Every job uses `actions/setup-node@v4` with `node-version-file: .nvmrc` and `cache: npm`, so the runners always match the local Node version declared in `.nvmrc` (Node 22) and reuse the npm cache across jobs.

### Where the build outputs live

| Output                          | Location                                            |
| ------------------------------- | --------------------------------------------------- |
| Lint, typecheck and format logs | **Actions** tab on GitHub                           |
| Jest test logs                  | **Actions** tab on GitHub                           |
| Expo bundle (`dist/`)           | Workflow run artifact `expo-dist` (7-day retention) |
| Expo Doctor report              | **Actions** tab on GitHub                           |

> **Note:** the Expo bundle produced by `expo export` is the platform-agnostic JavaScript bundle and is meant for hosting, smoke-testing or downstream EAS builds. Native binaries (`.apk`, `.aab`, `.ipa`) are not produced by this workflow — those are handled separately through Expo Application Services.

### Running the same checks locally

```bash
# lint-and-audit
npm run lint
npm run typecheck
npm run format:check

# testing
npm run test

# bundle
npx expo export --platform all

# expo-doctor
npm run doctor
```

## Security Audit

Beyond the test suite, the project ships with two commands to audit the development environment and dependency tree.

### npm audit

Check for vulnerabilities in dependencies:

```bash
npm audit
```

### Expo Doctor

Run a full health check on the project (dependency versions, SDK compatibility, configuration):

```bash
npm run doctor
```

## Known Issues

The audit commands above currently surface one limitation worth documenting:

### npm audit reports 9 vulnerabilities (5 low, 4 moderate)

Running `npm audit` reports vulnerabilities in two transitive packages:

- **`@tootallnate/once`** — reached through `http-proxy-agent` → `jsdom` → `jest-environment-jsdom` → `jest-expo`.
- **`postcss`** (moderate, XSS via unescaped `</style>` in stringify output) — reached through `@expo/metro-config` → `@expo/cli` → `expo`.

Both chains live entirely inside Expo's internal toolchain (`jest-expo`, `@expo/cli`, `@expo/metro-config`). None of these packages are included in the app bundle delivered to end users; they run exclusively on the developer's machine during build and test.

The suggested fix (`npm audit fix --force`) would apply two breaking changes:

- Downgrade `jest-expo` to `47.0.1`, which is incompatible with Expo SDK 54.
- Move `expo` to `55.0.25`, jumping past the SDK version this project targets (`~54.0.0`) and forcing an SDK migration that has not been validated against the rest of the dependency tree.

Do not run `npm audit fix --force`. This is a known limitation of the Expo ecosystem tracked upstream and will be resolved when Expo updates its internal dependencies. No action is required on the project side.

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/lapstr`](https://www.diegolibonati.com.ar/#/project/lapstr)
