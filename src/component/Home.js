import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <h1><Link to="/test1">Test1_가챠테스트</Link></h1>
            <h1><Link to="/test2">Test2_연성글테스트</Link></h1>
            <h1><Link to="/test3">Test3_AI 이미지 추출</Link></h1>
        </div>
    );
};
 
export default Home;