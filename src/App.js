import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {

    }, [isMobile]);

    updateWindowDimensions = () => {
        let is 
    }

    return (
        <div className="nav">
            <div className="hamburger">
                <label htmlFor="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" />
            </div>

            <div className="menu">
                <ul>
                    <li>
                        <a href="google.com">Google</a>
                    </li>
                    <li>
                        <a href="facebook.com">Facebook</a>
                    </li>
                    <li>
                        <a href="medium.com">Medium</a>
                    </li>
                    <li className="dropdown__hover">
                        <span>
                            Dropdown
                            <i className="arrow down" />
                        </span>
                        <div className="dropdown__menu">
                            <a href="#">Dropdown 1</a>
                            <a href="#">Dropdown 2</a>
                            <a href="#">Dropdown 3</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
