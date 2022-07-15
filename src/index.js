import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../src/index.css'

// fake API
import runServer from "./api/api"
runServer()



ReactDOM.render(<App />, document.getElementById('root'));