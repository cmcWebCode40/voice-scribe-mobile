# Voice Scribe Mobile App (WIP)


<p align="center">
   <a aria-label="runs with Expo Go" href="https://www.npmjs.com/package/expo" target="_blank">
    <img alt="Expo runs with Expo Go" src="https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000" />
  </a>
  <a aria-label="Ios" href="npmjs.com/package/expo" target="_blank">
    <img alt="IOS" src="https://img.shields.io/badge/iOS-999999.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)" />
  </a>
  <a aria-label="supports Android" href="https://chat.expo.dev" target="_blank">
    <img alt="supports Android" src="https://img.shields.io/badge/Android-A4C639.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
</p>

> Work in progress

<img
  src="/docs/images/app_preview.png"
  alt="Alt text"
  title="Optional title"
  style="margin:0 4px; max-width: 500px"
/>

## Overview

The project is a mobile application built with React Native, which allows users such as speakers, voice actors, and others to convert books into speech. Additionally, the application transcribes the speech into editable files such as PDFs, documents, and Word documents, which can be downloaded by the users.

## Features In Development

### As a speech-to-text service

- Converts the user's speech or voice into text.
- Curates the resulting text into pages and arranges them into a PDF or document file.
- Saves the file to the user's device storage for easy access.
- Provides full editing capabilities for the saved file, allowing the user to modify or add to the content as needed.

### As a text-to-speech service

- Allows users to store speech-to-text data that can be replayed at any time.
- Provides users with the ability to save voiceovers using their own voice or a different voice for a more personalized experience.
- Enables users to upload files such as PDFs or documents, which can be played back as speech-to-text.

## Technologies

- [React native expo managed workflow for development](https://expo.dev/tools)

- [Expo application services for creating build and submitting to apple and google store](https://expo.dev/eas)

- [Supase for Authentication, instant APIs Realtime subscriptions, and Storage.](https://supabase.com/)

## Available Scripts

### Install

```
cp .env.sample .env

```

### Adding Environment Variables

```
cp .env.sample .env

```

Please visit [supabase](https://supabase.com/) to create an account and copy your SUPABASE API keys

This will copy the sample environment variables into the newly created `.env` required to get started.

### Run

This project uses expo managed workflow so ensure you have the expo-cli installed globally on your machine see link for[ guide here ](https://docs.expo.dev/get-started/installation/#expo-cli)

```
yarn ios

```

for runinng the project in ios simulator

```
yarn android

```

for runinng the project in an android emulator

### Linting and Code formating

```
yarn lint

```

for linting the code using eslint

```
yarn format

```

for code formatting using prettier

### Test

```
yarn test

```

### Build

```
yarn build:ios

```

for creating an ios build for the development profile (Note: This action requires a registered apple developer account )

```
yarn build:android

```

for creating an android build for the development profile
