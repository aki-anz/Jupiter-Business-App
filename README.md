# Jupiter Business App

This application is built with [create-react-app] (https://create-react-app.dev/), developed with libraries and npm packages such as [Formik] (https://formik.org/), [Jest] (https://jestjs.io/), [Emotion] (https://emotion.sh/docs/introduction), etc. It has an array of features such as having route/link that user can navigate on, mobile responsiveness, performance of unit tests, and many more. 

This app is developed for a hypothetical startup, in our case, Jupiter!, which sells recipe services online, and they are demanding a trendy, capable and functional web application from us, that should have a satisfactory customer experience.

## Core Features

### Responsive Web Design

The entire app with all of its components, *Home.js*, *Search.js*, *Plan.js*, *Contact.js* are mobile responsive, thanks to `@media` rule from CSS.

The navigation bar will automatically shrink into a hamburger menu with a list of navigation links, once clicked on, a full-screen toggle menu will appear, where user can navigate to other pages of the app.


### React-Router-Dom

The app is built with navigation links from [react-router-dom] (https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom).

`BrowserRouter, Route, Link, Switch` components are imported from react-router-dom, and are used in the navigation bar, * Navbar.js *, to help user navigate between different pages of the application.

### API With Emotion JS

One of the main feature is the recipe api query. User can search for any food, then the app will fetch data from the api server, in this case [Edamam] (https://www.edamam.com/), and display an array of 10 recipes.

The data is fetched with [Axios] (https://github.com/axios/axios) and then styled with [Emotion] (https://emotion.sh/docs/introduction). The data is displayed in card, with title, image, link, ingredients all fetched from Edamam.


### Formik With Yup

The app has a contact us form where user can enter feedback and opinion on their experiences with the website. And the form is built with [Formik] (https://formik.org/), then being validated by functions imported from [Yup] (https://github.com/jquense/yup).

The entire form is reusable, as the form state is abstracted and put onto *ContactForm.js*, then, pass props onto individual components, which likewise get props passed down on from *FormikControl.js*, which then tells react to render smaller components such as *Input.js*, *DatePicker.js*, *Radio.js* with a Javascript `Switch` statement.

The form can't be submitted as the submit button is disabled with the `formik.isValid` props from Formik, and individual error messages, *ErrorText.js* will display under each input fields that require validation from Yup.


### To-do List With Material-UI

A simple to-do list is made where user can enter ingredients from *Search.js* api, and then receive a list of ingredients that user wish to purchase or remember for later use.

The to-do list is reusable and bootstrapped with [Material-UI] (https://material-ui.com/). The list is divided into four components, *Plan.js* where the states are held, *TodoForm.js* where has the input field and submit button add items to the `useState` hook, *Todo.js*  where a `ul` of `li` and methods are being passed down to *TodoList.js*, where the `Button`, `Typography`, `CloseIcon` from MUI are being rendered.

The list items are also stored in local session. Hence, refreshing the page, or visiting other routes will not delete the added items on the app. They are stored with the `localStorage.getItem` and `localStorage.setItem` methods under 2 `useEffect` hooks from React.


### Product Landing Page

The Homepage is a product landing page where an image, a paragraph, and 5 social media icons from [react-icons] (https://react-icons.github.io/react-icons/) are being displayed and positioned with pure html and css.

It is also mobile responsive. User can view our app on mobile devices where *Home.js* is being re-positioned accordingly.


### React-testing-library

Component *Search.js* is tested with 2 unit tests, 1 snapshot test, plus 1 integration test from the [react-testing-library] (https://testing-library.com/docs/react-testing-library/intro) to ensure it is being rendered correctly.


### Singleton Design Pattern

The app is designed with the Singleton pattern from start. According to the singleton principle, the instantiation of a class should be exlusive to **One** instance only, and **One** object coordinating most actions of the app is recommended. For example, all routes are held in *App.js*, and all states are held within one functional component each, across all components in the app.


### Deploy With gh-pages

The app is commited to GitHub and published to the repository [Jupiter Business App] (https://github.com/aki-anz/Jupiter-Business-App) via git commands with gh-pages installed on the local machine. A new repository is initiated with a master branch.


### Host on Netlify


