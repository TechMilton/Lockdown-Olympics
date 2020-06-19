# Team Turing Final Week Project - 'The Lockdown Olympics'

### Concept

A website to provide information about an alternative olympics, showing:
- Sports by event category
- Competitor list
- Further details about competitors
- Registration form for competitors

### Planning phase

Objectives to fulfil a minimum viable product and stretch goals were set. Site layout was devised using a wireframe on bitpaper. Laravel was chosen to provide the backend, with a React with Redux front end. The necessary API requests were determined and database structure was set out. The data structure for responses from API requests was produced.

### Site content

- Home page
- Events category page with links to individual categories
- Sports page with details about the sports for each category
- Competitor list page
- Competitor details page linked through from competitor list
- Competitor registration form which sends a post request to API to create a competitor

### Installation

- From desired directory git clone git@github.com:TechMilton/Lockdown-Olympics.git
- cd into folder of cloned repo
- npm install to install dependencies contained in package.json
- The API that is linked to the site is hosted at https://olympics.developme.space/api. To view the repo for this and see installation instructions go to https://github.com/aejgardner/lockdown-olympics

### Components

Custom react components were created for the site, in addition to some react bootstrap components.

### Styling

Standard CSS was used for styling. Media queries were added to make the site design responsive to all screen sizes.

### Future Stretch goals
- Form to perform a patch request to allow the Lockdown Olympics officials to use the site to reschedule events
- Form to perform a delete request to allow competitors to de-register
- Add pathways for competitor pictures to competitor table, through patch requests using the API, so each competitor details card has a unique picture relating to the competitor

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
