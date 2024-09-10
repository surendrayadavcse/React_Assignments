
import React from 'react';
import { GameScoreboard } from './game-scoreboard.component';
import { Game } from './game.component';
import { useGameContext } from '../context/GameContext';

export const GameSeries = () => {
    const { state } = useGameContext();

    return (
        <div className='game-series-component'>
            <GameScoreboard
                games={state.games}
                X={state.X}
                O={state.O}
                draw={state.draw}
            />
            <Game />
        </div>
    );
};
