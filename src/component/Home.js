import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <h1><Link to="/test1">Test1</Link></h1>
            <h1><Link to="/test2">Test2</Link></h1>
            <h1><Link to="/test3">Test3</Link></h1>
        </div>
    );
};
 
export default Home;