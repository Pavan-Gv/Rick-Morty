import React from 'react';
import GetData from './components/getData.jsx';
import Bats from './components/bats.jsx';
import './App.css';

function App() {
    return (
        <React.Fragment>
            <Bats />
            <GetData />
        </React.Fragment>
    );
}

export default App;
