# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm install`

Installs all the necessary dependencies. Do this first.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Known Bugs/Issues (Things I would fix if I were to continue)

### Backend

- "Previous" and "Next" buttons not implemented
- Pagination not implemented
  - Only first 20 requests come in
  - "Page 1 of X" is a placeholder
- Search Bar data does not persist (query not pre-filled)
- Fix "any" typing on CharacterList
- Make the CharacterDetails interface its own file
- Pass the character boxes in CharacterInfo to CharacterBox (need to fix typing first)
- Link to individual character doesn't work on CharacterInfo
  - When you hover over it, it gives the right link, but doesn't actually take you to the page if you click on it. The URL changes, however, so if you go to the URL and simply hit enter, it'll work.
- Need to implement how many results returned from filtering
  - "x results" is a placeholder
- Fix key/value warnings
- Fix other miscellaneous warnings

### Design

- Links exist outside of the box
- Design isn't centered (go to index.css and use text-align: center and go from there)
- Need icon on search bar
- Need to fix up font and text styles
