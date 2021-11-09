import React from 'react';
import '../src/styles/App.scss';
import Nav from './components/nav';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import A1 from '../src/components/A1';
import A2 from '../src/components/A2';
import B1 from '../src/components/B1';
import Home from '../src/components/Home';
import Notfound from '../src/components/Notfound'
import ShowDetailsProvider from '../src/contexts/ShowContext'
import Footer from "../src/components/Footer";

function App() {

  return (
    
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Switch>
      
        <Route path="/" exact><Home/></Route>
        <ShowDetailsProvider>
        <Route path="/a1/" ><A1 /></Route>
        <Route path="/a2/" ><A2 /></Route>
        <Route path="/b1/" ><B1 /></Route>
        
        </ShowDetailsProvider>
        <Route path="*"><Notfound/></Route>
        
       
        
        
      </Switch>
      <Footer className="App-footer"/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
