import React from 'react';
import logo from './logo.svg';
import './app.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h1>Dylan Li</h1>
                    <a className="github-link" href="https://github.com/DylanLi272" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
