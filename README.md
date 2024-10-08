# Stopwatch Native

## Getting Started

1. Clone the repository on your computer using: `git clone URL`.
2. Go to the APP directory.
3. Install dependencies using `yarn install`.
4. If you have expo and an Android simulator installed, you can run the app with the command `yarn start` and select the desired option.

- If you don't have expo and an Android simulator installed, search for a tutorial on YouTube.

## Description

In this native application you will be able to time each lap you do using the `lap` button. You can also stop it and change the clock skin. By default there are 4 skins: a classic one, the normal one, an hourglass in pixel format and a running pikachu. There is also one more button to clear the timer and `clear` laps.

## Technologies used

1. React Native
2. CSS
3. Typescript
4. Expo

## Libraries used

1. Expo

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Stopwatch-Native`](https://www.diegolibonati.com.ar/#/project/Stopwatch-Native)

## Video

https://user-images.githubusercontent.com/99032604/233884254-6a988dcb-243e-4efc-9d87-cd62da2fb7d5.mp4

## Documentation

### Theme

- If you want to change any style or the entire styles of the application, you can do it through: `stopwatch-native-app\src\theme\theme.ts`.

### Types

- If you want to change any type or the entire types of the application, you can do it through: `stopwatch-native-app\src\types`.

### Contexts - Logic

- The UI logic is changed to the following path: `src\contexts\UIContext.tsx`. Here the state is mounted to open or close the modal, it also takes care of the logic of the navbar.

- Crono logic is changed in the following path: `src\contexts\CronoContext.tsx`. It is in charge of managing the stopwatch and the functions executed by the buttons to manipulate said stopwatch, such as starting and stopping.

- Changed the Laps logic in the following path: `src\contexts\LapsContext.tsx`. In this context new laps are added and all are cleared. If the `laps` state is an array that is in charge of containing objects, these objects will contain the information of each `lap`.

### Skins

- To add new skins you must go to `src\helpers\data.ts`. Here the new skin will be added, to add a new skin it is a priority to first add a gif and a png in the `assets` folder since the files will be required from here to be able to render said skin.
