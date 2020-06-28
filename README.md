# Project setup

```
npm i
```
> This will install the packages.

### Compiles and hot-reloads the resources for development
```
npm start
```
> This will start the node server with set of configuration and launch the app.

# Set of commands

### Compiles and minifies resources for production
```
npm run build
```
### Run your unit tests
```
npm run test
```

### Deployed application
[Click here](https://sample-dashboard-app.herokuapp.com/).

# Description of the problem
> To create a sample Project Board of BYJUS.

## Solution

> Created a dynamic web page which displays the On Track, On Delayed and Hold courses that are user specific. 

# Reasoning behind Technical choice
> **Front-End React.js** : It is an open-source JavaScript library that is used for building user interfaces for web and mobile apps. React also allows us to create reusable UI components.

> **Back-End Node.js**   : Node.js is a Back-End for Front-End and it uses the JavaScript as their main application to create new application.

# Trade Off
- Created two scss files *customColorPalette.scss* and *defaultColorPalette.scss* under *src/_config/themes* folder to manage colors in the screens, so that it can be controlled in only one end.

- Created appConfiguration.json under *src/_config* folder to manage the app level changes like enabling custom theme.

- By default the colors will be rendering default color palette you can change it by making the *enableCustomTheme* flag in *appConfiguration.json* as true.

- Created a Node.js server for serving client REST API requests. And all API's are handled in a single file. Server folder contains two files.

1. server.js - Node.js express server
2. config.js - which contains API url's which are configurable.

### Left out things
- Responsiveness of the application.
- Integration testing.

### The following things could have been done if i would have know how this works.
- App level configuration change and color palettes change in the production mode.
- Adding SSL certificates.
- Functionality implementation for search, filter and sort, And could have done better error handler mechanism for all API calls.

### I am very proud that i am one of the contributor to this package 
[dco-vuetify-form](https://github.com/denilkv/dco-vuetify-form).