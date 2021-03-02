import React from 'react';
import { Menu } from '../components/Menu';

// Components
import { Container } from '@material-ui/core';








const App: React.FC = ()=> {
    return (
        <div id="app">
            <Container>
                <Menu menu={{
                    startText: 'Start',
                    optionsText: 'Options',
                    quitText: 'Quit',
                }} />
            </Container>
        </div>

    );
}

export default App;
