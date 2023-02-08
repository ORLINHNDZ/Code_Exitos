# Code_Exitos
## Exercise

For this project I decided to build a client-side weather web app app with certain funtionalaties using React and TypeScript. 
This is a simple Weather App that allows you to search for locations and displays its current weather and 24 hour forecast and
in order to add a little of spice to it decided to implement chartJs to simulate reporting which is undispensable in today's web apps and Geolocation.

Example 1:

INPUT
https://api.weatherbit.io/v2.0/forecast/daily?city=${locationDetail}&days=7&units=S&key=82ad3aac8c2f434f8acbb9208e364187
${locationDetail} = In order to create the API CALL this variable should be substituted for City's name.

OUTPUT:
https://api.weatherbit.io/v2.0/forecast/daily?city=${la%20ceiba}&days=7&units=S&key=82ad3aac8c2f434f8acbb9208e364187
This is an example with a valid API and key, you can try searching for it on the browser in order to get the result from the API.


## Overview
For this challenge I decided to go for a JavaScript alternative as my main tech and JEST dependency for testing purposes, React as my library, Redux,
Typescript, ChartJs for reporting, Axios to handle API calls, and Chakra UI for styling.


## Architecture
*  Components = Main Dir containing the app Modules. 
*  Components/Chart.tsx = Chart reporting module.
*  Components/Dashboard.tsx = Main component binding all functionality with chakra UI "Box".
*  Components/SearchComponent.tsx = Search by location functionality and Geolocation.
*  Components/Weather.tsx = Main grid display for real time weather forecast data.
* .gitignore = Untracked files
* README.md = Documentation
* setupTests.tsx = Jest testing
* app.tsx = main executable
* package.json = Package log


## Methodology
This solution was developed under clean code patterns such as:
* Test Driven Development (TDD) writing automated tests before the code; retest after any change.
* Don’t Repeat Yourself (DRY) put it in one component and call that component when needed. 
* Single Responsibility Principle (SRP) – components should do only one thing

## Instructions to Run the Program Locally
In order to execute the solution is necessary to previously install node and npm latest versions.
* Install dependencies:
```npm install```
* run main app: 
```npm start```
* run test cases: 
```npm test```

## URL To the Deployed Live Project
https://cheery-jalebi-6034f9.netlify.app/
