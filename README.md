## Getting Started

This is a [yarn v1 workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) based project. Ensure workspaces is enabled.

`yarn config set workspaces-experimental true`

- `cd <parent-path>/reactjs-mui-theme-repo`
- `yarn install`
- `cd library-utils && yarn build && cd ..`
- `cd library-components && yarn build && cd ..`
- `cd main-app && yarn start`

Once the [application](http://localhost:3000) is running, 
- Observe the current theme; *everything (background-color / text) is purple*
- The application has enough text to let you know what to do
  - It loads a material-ui component from `library-components` in `main-app`
- Observe the text / background-color is reset is transparent



## Project Structure

#### Main App
Contains the reactjs application (with material-ui custom theme)

### Library Components
Contains a library of reactjs components based on material-ui

### Library Utils
Contains customized theme
