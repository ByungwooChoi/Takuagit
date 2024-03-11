import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <h2><Link to="/">홈으로 돌아가기</Link></h2>
    );
};
 
export default Header;