# react-native-template

Oozou: React native template for mobile app.

## Intro
The project is super helpful to kick-start your next project at OOZOU, as it provides a lot of the common tools you may reach for, all ready to go. Specifically:
- [Easy peasy](https://easy-peasy.vercel.app/): an abstraction of Redux
- [React navigation](https://reactnavigation.org/): routing and navigation for mobile app
- [React native splash screen](https://github.com/crazycodeboy/react-native-splash-screen)
- [Base component](https://github.com/oozou/react-native-ui): base component develop by OOZOU's react native team

### Setting up your machine

- Install [node](https://nodejs.org/en/)
- Install [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)
- Set up your machine for [react native development](https://reactnative.dev/docs/environment-setup)
- Install yarn v1 `npm install -g yarn`

### Usage

`npx react-native init <Project name> --template git+ssh://git@github.com:oozou/react-native-template.git`

### Running the project

- Run `yarn`
- Run on Android `yarn android`
- Run on iOS
  - `cd ios`
  - `pod install`
  - `yarn ios`
  ***
  **Note:**
  At the time of writing, if you are using an Apple Silicon Mac, `pod install` and `yarn pods` may throw the following error "missing compatible arch".
  You can run `yarn pods:m1` to install the pods with x86
  The react-native-maps package also has an issue with building on m1. Use `yarn ios:m1` to build if the build fails due to architecture reasons to force xcode to run through rosetta.

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

