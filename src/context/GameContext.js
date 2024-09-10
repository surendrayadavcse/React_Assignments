import React, { createContext, useReducer, useContext } from 'react';
import { TicTacToeGame } from '../services/tic-tac-toe-game.service';



const ACTIONS = {
    START_NEW_GAME: 'START_NEW_GAME',
    MAKE_MOVE: 'MAKE_MOVE',
    GAME_RESULT: 'GAME_RESULT',
};


const initialState = {
    game: new TicTacToeGame(),
    state: getGameState(new TicTacToeGame()),
    running: false,
    games: 0,
    X: 0,
    O: 0,
    draw: 0,
};


function gameReducer(state, action) {
    switch (action.type) {
        case ACTIONS.START_NEW_GAME:
            const newGame = new TicTacToeGame();
            return {
                ...state,
                game: newGame,
                state: getGameState(newGame),
                running: true,
            };
        case ACTIONS.MAKE_MOVE:
            const result = state.game.move(action.payload.id);
            if (result === false) return state;

            const newState = getGameState(state.game);
            if (state.game.isOver) {
                action.payload.onGameResult(state.game.winningPlayer);
                return { ...state, state: newState, running: false };
            }
            return { ...state, state: newState };
        case ACTIONS.GAME_RESULT:
            const { winner } = action.payload;
            return {
                ...state,
                games: state.games + 1,
                [winner ? winner : 'draw']: state[winner ? winner : 'draw'] + 1,
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}


function getGameState(game) {
    return {
        cells: game.cells,
        next: game.currentPlayer,
        isOver: game.isOver,
        winningPlayer: game.winningPlayer,
        isStalemate: game.isStalemate,
        message: game.winner
            ? `${game.winningPlayer} Wins`
            : game.isStalemate
            ? 'Stalemate'
            : `Next Player '${game.currentPlayer}'`,
        moves: game.moves,
        winner: game.winner
    };
}

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const handleMove = (id) => {
        dispatch({ type: ACTIONS.MAKE_MOVE, payload: { id, onGameResult: handleGameResult } });
    };

    const handlePlay = () => {
        dispatch({ type: ACTIONS.START_NEW_GAME });
    };

    const handleGameResult = (winner) => {
        dispatch({ type: ACTIONS.GAME_RESULT, payload: { winner } });
    };

    const value = { state, handleMove, handlePlay, handleGameResult };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};

export const useGameContext = () => {
    const context = useContext(GameContext);
  
    return context;
};
