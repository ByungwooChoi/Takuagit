/* eslint-disable */
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './component/Home';
import Test1 from './component/Test1';
import Test2 from './component/Test2';
import Test3 from './component/Test3';
import Test1_Q1 from './component/Test1_Q1';
import Test1_Q2 from './component/Test1_Q2';
import Test1_Q1_result from './component/Test1_Q1_result';
import Test1_Q2_result from './component/Test1_Q2_result';
function App() {
  return(
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/test1">
            <Test1 />
          </Route>
          <Route path="/test2">
            <Test2 />
          </Route>
          <Route path="/test3">
            <Test3 />
          </Route>
          <Route path="/test1_q1">
            <Test1_Q1 />
          </Route>
          <Route path="/test1_q2">
            <Test1_Q2 />
          </Route>
          <Route path="/test1_q1_result">
            <Test1_Q1_result />
          </Route>
          <Route path="/test1_q2_result">
            <Test1_Q2_result />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
