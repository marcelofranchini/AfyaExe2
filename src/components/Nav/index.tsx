import React from 'react';
import { Link } from 'react-router-dom'

import { NavContent } from './styles'
import LogoAfya from '../../assests/img/afyaLogo.jpg'


const Nav: React.FC = () => {


    return (
        <NavContent>
            <Link to="/">
                <img src={LogoAfya} alt="Logo Afya" />
            </Link>
            <div className="nav-contents">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </NavContent>
    );
}

export default Nav;