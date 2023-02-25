# Voice Scribe Mobile App (WIP)

> Work in progress

<div style="display: flex">

<img
  src="/docs/images/splash_screen.png"
  alt="Alt text"
  title="Optional title"
  style="margin:0 4px; max-width: 100px"
/>

<img
  src="/docs/images/auth_screen.png"
  alt="Alt text"
  title="Optional title"
  style="margin:0 4px; max-width: 100px"
/>

<img
  src="/docs/images/signup_screen.png"
  alt="Alt text"
  title="Optional title"
  style="margin:0 4px; max-width: 100px"
/>

<img
  src="/docs/images/settings_screen.png"
  alt="Alt text"
  title="Optional title"
  style="margin:0 4px; max-width: 100px"
/>

<img
  src="/docs/images/profile_screen.png"
  alt="Alt text"
  title="Optional title"
  style="margin:0 4px; max-width: 100px"
/>

</div>



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

for creating an android  build for the development profile





