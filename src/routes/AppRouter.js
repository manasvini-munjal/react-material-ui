import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './../components/App';
import Account from './../components/Account';
import Category from './../components/Category';
import Posts from './../components/Posts';
import FileNotFound from './../components/FileNotFound';
import Home from '../components/Home';
import NavBar from '../components/NavBar';



import {Provider} from 'react-redux';
import store from './../components/store';
const AppRouter = () => (
  <Provider store={store}>
<BrowserRouter>
<div>
      
    <NavBar/>
  <Switch>
   <Route path="/" exact component={App}/>
   <Route path="/account" component={Account}/>
   <Route path="/category" component={Category}/>
   <Route path="/posts" component={Posts}/>
   <Route  component={FileNotFound}/>
   </Switch>
   </div>

</BrowserRouter>
   </Provider>
);

export default AppRouter;