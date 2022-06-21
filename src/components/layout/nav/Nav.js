import React from 'react';
import './Nav.css';

export default function Nav() {
    function displayMenu() {
        const element = document.getElementById('myTopnav');

        if (element.className === 'topnav') {
            element.className += ' responsive';
        } else {
            element.className = 'topnav';
        }
    }

    return (
        <>
            <div className="topnav" id="myTopnav">
                <a href="/home" className="active">
                    Home
                </a>
                <a href="/createBuild">Create a Build</a>
                <a href="/builds">View Builds</a>
                <a href="/about">About</a>

                <button className="icon" onClick={() => displayMenu()}>
                    <i className="fa fa-bars"></i>
                </button>
            </div>

            <div className="header">
                <div className="header-text">
                    <h1 className="header-primary">
                        Albion Online Player Info and Regear
                    </h1>
                    <p className="header-lead">
                        See your stats and submit regear requests!
                    </p>
                </div>
            </div>
        </>
    )
}