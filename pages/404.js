import React from 'react';
import {Link } from 'react-router-dom';
export const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Not found :(</h2>
            <Link to="/">
                <button>请回到主页！</button>
            </Link>
        </div>
    );
};

export default NotFound;
