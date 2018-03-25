# Material React Application Starter Kit

Kick start your own React Application with Material Design. Worry less about setting up your environment and focus on building your application

# Pre-requirement

*   Node > v8.0.0
*   Yarn Package Manager

# Install

Simply open the terminal at the project folder and run `yarn` to let project automatically setting up the environment for you. After that, you can run the project locally by doing `yarn start`

# VSCode

We strongly recommend using VSCode with ESLint, Prettier and ES7 Enabled. It will automatically format your code nicely for you.

# File Structure

Below are the details of our file structure:

```
|-- src/
    |-- index.js                    # Outer most entry point
    |-- index.less                  # General styling for whole app
    |-- registerServiceWorker.js    # CRA pre-generated
    |-- app/
    |   |-- index.js                # Entry point of our app
    |-- assets/                     # Storing static resources
    |-- config/                     # Configuration data
    |   |-- static/
    |-- components/                 # Reusable components
    |   |-- ExampleComponent/
    |   |   |--index.js             # Component itself
    |   |   |--index.scss           # Styling for the component
    |-- containers/                 # Complex components (pages)
    |   |-- ExampleContainer/
    |   |   |--index.js
    |   |   |--index.scss
    |-- layout/                     # Container wrapper
    |-- redux/                      # Redux components
    |   |-- store.js
    |   |-- actions/
    |   |-- reducers/
    |-- routes/                     # routing to pages
    |-- utils/                      # General functions of the app
```

*   **Component**: React component that takes in props and renders views.
    They are reusable, small and used by **Containers** and **Layouts**. (_Ex: DashboardCard - takes in `title` and `value`
    as props and renders it_)
*   **Containers**: React component that are more complex and have ability to communicate with Redux.
    They are combinations of multiple **Component** (_Ex: Dashboard Container - contains multiple DashboardCard and pass in
    props to them_)
*   **Layouts**: A combination of multiple **Components** for easy wrapping of **Containers** (_Ex: BasicLayout - contain
    SideBar and GlobalHeader Components and wraps it around Dashboard Container_).

**Containers** and **Layout** should always be independence from each other. That means they a **Container**
will never reference another **Container** and so does **Layout**. Only **Components** can be nest with each other in
this new structure.
