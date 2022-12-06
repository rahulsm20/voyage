import React from 'react';
import { Container} from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar";
import {GoogleOAuthProvider} from '@react-oauth/google';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';


const App = () => {

  return (
    <GoogleOAuthProvider clientId='231484548436-495o66ds844og1l34dj8g36juac08ppm.apps.googleusercontent.com'>
   <BrowserRouter>   
      <Container maxWidth="lg">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/auth" exact component={Auth}/>
      </Switch>
      </Container>
   </BrowserRouter>
   </GoogleOAuthProvider>

  );
};

export default App;
