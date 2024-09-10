
import React from 'react';
import { Status } from './status-component.component';
import { GameBoard } from './game-board.component';
import { GameMoves } from './game-moves.component';
import { PlayButton } from './play-button.component';
import { useGameContext } from '../context/GameContext';



export const Game = () => {
    const { state, handleMove, handlePlay } = useGameContext();

    return (
        <div className='body'>
            <div className='game-component'>
                <Status message={state.state.message} />
                <PlayButton onClick={handlePlay} disabled={state.running} />
                <div className="same-row">
                    <GameBoard
                        winner={state.state.winner}
                        cells={state.state.cells}
                        onCellClick={handleMove}
                    />
                    <div>
                        <GameMoves moves={state.state.moves} />
                    </div>
                </div>
            </div>
        </div>
    );
};