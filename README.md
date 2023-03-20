# react-native-template

React native template for mobile app.

## Intro
The project is super helpful to kick-start your next project, as it provides a lot of the common tools you may reach for, all ready to go. Specifically:
- [Easy peasy](https://easy-peasy.vercel.app/): an abstraction of Redux
- [React navigation](https://reactnavigation.org/): routing and navigation for mobile app
- [React native splash screen](https://github.com/crazycodeboy/react-native-splash-screen)

### Setting up your machine

- Install [node](https://nodejs.org/en/)
- Install [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)
- Set up your machine for [react native development](https://reactnative.dev/docs/environment-setup)
- Install yarn v1 `npm install -g yarn`

### Usage

`npx react-native init <Project name> --template git+ssh://git@github.com:tai8292/react-native-template-ts.git`

### Running the project

- Run `yarn`
- Run on Android `yarn android`
- Run on iOS
  - `cd ios`
  - `pod install`
  - `yarn ios`

### Setting up your code editor

Use the following plugins to adhere to the coding standards for this project.

- [Prettier Formatter](https://github.com/prettier/prettier-vscode)
- [ESLint](https://github.com/Microsoft/vscode-eslint)

### File structure
- `/android` - contains native code specific to the Android OS
- `/ios` - native code specific to iOS
- `/src` - contains our TS and CSS code.
    - `/Api` - api services and endpoint for app
    - `/Assets` - contains all assets of project. Ex: image, icon, gif,... 
    - `/Components`
    - `/Constants` - App-wide variables
    - `/Core` - constains core feature of project. Ex: i18n, local storage, env,...
    - `/DataType` - define type for all object.
    - `/Feature` - constains all feature and screen.
    - `/Navigation` - routing and navigation.
    - `/Provider` - constains all context of project.
    - `/Services`
    - `/Store`
    - `/Style`
    - `/Util`
- `index.js` - The starting place for our app

