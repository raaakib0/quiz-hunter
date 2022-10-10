import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div>
            
            <Header></Header>
            <div className="main-ui">
                <div className='left-banner'>
                    <h1>main js</h1>
                    <h1>main js</h1>
                    <h1>main js</h1>
                    <h1>main js</h1>
                </div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Main;