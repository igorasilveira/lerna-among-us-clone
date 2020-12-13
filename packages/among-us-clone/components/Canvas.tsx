import React, { useEffect, useState } from "react";
import p5Types from "p5";
import dynamic from 'next/dynamic'
import Joystick from "../classes/Joystick";
import useGameMap from "../hooks/useGameMap";
import useGamePlayer from "../hooks/useGamePlayer";

const Sketch = dynamic(
    () => import('react-p5'),
    { ssr: false }
)

let joystick: Joystick;

export default function Canvas() {
    const {setupMap, renderMap, updateMap} = useGameMap();
    const {setupPlayer, renderPlayer} = useGamePlayer();

    const [ready, setReady] = useState(false)

    useEffect(() => {
        setReady(true)
    }, [])

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(700, 500).parent(canvasParentRef);
        joystick = new Joystick(100, p5.height - 100, 100, p5);
    };

    const draw = (p5: p5Types) => {
        const speed = joystick.update();
        updateMap(speed);
        renderMap();
        renderPlayer();
        joystick.render();
    };

    const preload = (p5: p5Types) => {
        setupMap(p5);
        setupPlayer(p5);
    }

    const touchStarted = () => {
        joystick.activateJoystick(true);
    }

    const touchEnded = () => {
        joystick.activateJoystick(false);
    }

    return <>
        {!ready && <p>Loading...</p>}
        {ready && <Sketch setup={setup} draw={draw} preload={preload} touchStarted={touchStarted} touchEnded={touchEnded} />}
    </>;
};
