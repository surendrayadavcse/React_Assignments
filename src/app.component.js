
import './app.css';

import React from 'react';
import { GameProvider } from './context/GameContext'; 
import { GameSeries } from './components/game-series.component';

export const App = () => {
    return (
        <GameProvider>
            <GameSeries />
        </GameProvider>
    );
};




