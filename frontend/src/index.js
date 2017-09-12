import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';


//import styles
import './styles/index.css';
//import 'bootstrap/dist/css/bootstrap.css';



//import registerServiceWorker from './registerServiceWorker';



//component imports
//import App from './components/App';
import BaseLayout from './components/BaseLayout';
import LandingPage from './components/LandingPage';
import CustomizePage from './components/CustomizePage';
import HomePage from './components/HomePage';
import SigninPage from './components/SigninPage';
import JournalPage from './components/JournalPage';
import Start from './components/Start';
import Practice from './components/Practice';



const createStoreWithMiddleware = applyMiddleware()(createStore);

//wrap provider around router
ReactDOM.render(
//  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <MuiThemeProvider>
        <BaseLayout>
        <Switch >
          <Route exact path="/" component={Start} />
          <Route path="/Customize" component={CustomizePage} />
          <Route path="/HomePage" component={HomePage} />
          <Route path="/SigninPage" component={SigninPage} />
          <Route path="/JournalPage" component={JournalPage} />
          <Route path="/LandingPage" component={LandingPage} />
          <Route path="/Practice" component={Practice} />
        </Switch>
        </BaseLayout>
      </MuiThemeProvider>
    </BrowserRouter>
//  </Provider>


  , document.getElementById('root'));
