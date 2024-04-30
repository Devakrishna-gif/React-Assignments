import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <h1>Header</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />)