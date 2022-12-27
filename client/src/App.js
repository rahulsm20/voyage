import React from 'react';
import { Container} from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar";
import {GoogleOAuthProvider} from '@react-oauth/google';
import {BrowserRouter, Switch ,Route,Redirect} from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {

  const user=JSON.parse(localStorage.getItem('profile'));
  
  return (
    //Set up your own clientID, it probably won't work with mine
    //cause it only recognizes local addresses,it's easy to generate
    //go to https://console.cloud.google.com/apis/credentials?
    <GoogleOAuthProvider clientId="362895972754-p9tn4t6negjs3qm0u3djp00n7ti02v95.apps.googleusercontent.com">
   <BrowserRouter>   
      <Container maxWidth="xl">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={()=><Redirect to="/posts"/>}/>
        <Route path="/posts" exact component={Home} />
        <Route path="/posts/search" exact component={Home} />
        <Route path="/posts/:id" component={PostDetails}/>
        <Route path="/auth" exact component={()=>(!user ? <Auth/> : <Redirect to="/posts"/>)}/>
      </Switch>
      </Container>
   </BrowserRouter>
   </GoogleOAuthProvider>

  );
};

export default App;
