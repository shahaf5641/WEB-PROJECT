import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 
// The entry point of the React application. This file is responsible for rendering the root component (App) into the DOM.
// React.StrictMode is used to highlight potential problems in the application during development, 
// such as deprecated practices and side effects. It helps ensure that the app adheres to best practices.
// The App component, which contains the main application logic, is rendered into the HTML element with the id 'root'.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 