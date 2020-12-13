import React from 'react'
import p5Types from "p5";
import { PLAYER_COLOR, PLAYER_RADIUS } from '../constants/player';

export default function useGamePlayer() {
    let p5Instance: p5Types;

    const renderPlayer = () => {
        p5Instance.fill(PLAYER_COLOR);
        p5Instance.ellipse(
            p5Instance.width / 2,
            p5Instance.height /2,
            PLAYER_RADIUS
        )
    }

    const setupPlayer = (p5: p5Types) => {
        p5Instance = p5;
    }

    return {
        setupPlayer,
        renderPlayer
    }
}
