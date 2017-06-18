# Introduction

Currently runs with:

- Angular v4.0.2
- Angular-CLI v1.0.0
- Electron v1.6.5
- Electron Packager v8.6.0


## Getting Started

Clone this repository locally :

``` bash
git clone https://github.com/MaxChazarra/app-besoin-dispo.git
```

Install dependencies with your favorite dependencies manager (npm or yarn) :

``` bash
npm install
```

``` bash
npm install -g @angular/cli
```

## Command-Line

- **in a terminal window** -> npm start  
- **in another terminal window** -> npm run electron:serve

- Using development variables (environments/index.ts) :  `npm run electron:dev`
- Using production variables (environments/index.prod.ts) :  `npm run electron:prod`

- `npm run start:web` - Execute the app in the brower
- `npm run electron:linux` - builds your application and creates an app consumable on linux systems.
- `npm run electron:windows` - On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems.
- `npm run electron:mac` - On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac.
