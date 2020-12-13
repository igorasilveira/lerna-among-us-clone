import React, {useState} from 'react'

const GameContext = React.createContext<IGameContext | undefined>(undefined);

const GameProvider = ({children}) => {
    const [player, setPlayer] = useState(null)

    return (
        <GameContext.Provider value={{
            player,
            setPlayer
        }}>
            {children}
        </GameContext.Provider>
    )
}

const useGameState = () => {
    const context = React.useContext(GameContext);
    if (context === undefined) {
        throw new Error('useGameState must be used within a GameProvider')
    }
    return context
}

export {
    GameContext,
    GameProvider,
    useGameState
}