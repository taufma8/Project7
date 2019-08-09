import React from 'react';

export default function NotFound({ history }) {

    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Oops... This page doesn't exist.</p>
            <button className="button icon-left" onClick={history.goBack}>Go Back</button>
        </div>
    )
}