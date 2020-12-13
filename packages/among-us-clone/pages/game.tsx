import React from 'react'
import Canvas from '../components/Canvas'
import { useGameState } from '../context/GameContext'

export default function Game() {
    const {player} = useGameState();
    console.log(player);
    
    return (
        <div>
            <Canvas />
        </div>
    )
}
