import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

//import styles
import './styles/index.css';
//import 'bootstrap/dist/css/bootstrap.css';


import registerServiceWorker from './registerServiceWorker' ;


//component imports
//import App from './components/App';
import BaseLayout from './components/BaseLayout';
import LandingPage from './components/LandingPage';
import CustomizePage from './components/CustomizePage';


//wrap provider around router
ReactDOM.render(
  <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <BaseLayout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/customize" component={CustomizePage} />
      </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>


  , document.getElementById('root'));
