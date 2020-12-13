interface IGameContext {
    player: string;
    setPlayer: (player: string | null | ((prevPlayer: string | null) => string)) => void;
}