import React from 'react'
import p5Types from "p5";

export default function useGameMap() {
    let p5Instance: p5Types;
    let background: p5Types.Image;
    let x = 0, y = 0;

    const renderMap = () => {
        p5Instance.image(
            background,
            0, 0,
            p5Instance.width,
            p5Instance.height,
            x, y,
            p5Instance.width,
            p5Instance.height
        );
    }

    const updateMap = (speed: IPoint) => {
        x += speed.x;
        y += speed.y;
    }

    const setupMap = (p5: p5Types) => {
        p5Instance = p5;
        background = p5.loadImage('background.jpg')
    }

    return {
        setupMap,
        renderMap,
        updateMap
    }
}
