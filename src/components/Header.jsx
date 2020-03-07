import React from 'react';
//styles
import './styles/Header.css';

const Header = (props) => {
    return (
        <div className="Header" >
            <div className="Header-conatiner">
                <div className="Header-container-center">
                    <h1 onClick={props.page_status} >Sneakers 360°</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;
