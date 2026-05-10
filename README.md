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
"react-native": "0.81.5"
"react-native-reanimated": "~4.1.1"
"react-native-worklets": "0.5.1"
"react-native-safe-area-context": "~5.6.0"
"react-native-screens": "~4.16.0"
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

### npm audit reports 18 vulnerabilities (4 low, 14 moderate)

Running `npm audit` reports vulnerabilities in `@tootallnate/once`, `postcss`, and `uuid`. All of them are transitive dependencies of Expo's internal toolchain — specifically `jest-expo`, `@expo/cli`, `@expo/metro-config`, and `@expo/config-plugins`. None of these packages are included in the app bundle delivered to end users; they run exclusively on the developer's machine during build and test.

The suggested fix (`npm audit fix --force`) would downgrade `expo` to v49 and `jest-expo` to v47, both of which are incompatible with the current SDK. Do not run it.

This is a known limitation of the Expo ecosystem tracked upstream. The vulnerabilities will be resolved when Expo updates its internal dependencies. No action is required on the project side.

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/lapstr`](https://www.diegolibonati.com.ar/#/project/lapstr)
