import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
function Test1() {
    return(
        <div className='Test1'>
            <Header />
            <ul>
                <li><Link to="/test1_q1">Test1_Q1</Link></li>
                <li><Link to="/test1_q2">Test1_Q2</Link></li>
            </ul>
        </div>
    );
}

export default Test1;