import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Sslc from "./components/Sslc"
import Hsc from "./components/Hsc"
import Neet from "./components/Neet"
import Jee from "./components/Jee"
import Home from './components/Home';
import React, { Fragment, useState } from 'react';

function App() {
  const [bool,setBool]= useState(false);
  const [data,setData] = useState('');
  const documentHandler=(props)=>{
    setData(props);
    setBool(true);
  }
  return (
    <Fragment>
      {bool && window.open(`https://${data}`,'_blank')}
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' component={Home} exact><Home></Home></Route>
          <Route path='/sslc' component={Sslc} exact><Sslc onClick={documentHandler}></Sslc></Route>
          <Route path='/hsc' component={Hsc} exact>{Hsc}<Hsc onClick={documentHandler}></Hsc></Route>
          <Route path='/neet' component={Neet} exact><Neet onClick={documentHandler}></Neet></Route>
          <Route path='/jee' component={Jee} exact><Jee onClick={documentHandler}></Jee></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;