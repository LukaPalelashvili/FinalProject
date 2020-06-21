import React from 'react';
import './Contact.css';
import Header from '../../Components/Header/Header';

export const Contact = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="Contact">
                <h2 id="header"> Contact Us </h2> <br />
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                />{' '}
                <br /> <br />
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                />{' '}
                <br /> <br />
                <textarea placeholder="Text" /> <br /> <br />
                <button id="send"> Send</button>
            </div>
        </React.Fragment>
    );
};
