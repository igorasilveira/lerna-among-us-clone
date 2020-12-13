import Link from 'next/link'
import { useState } from 'react';
import Modal from '../components/Modal';
import { useGameState } from '../context/GameContext';
import { useRouter } from 'next/router'

function Index() {
  const {setPlayer} = useGameState();
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false);
  const [playerName, setPlayerName] = useState("");

  const onSubmit = () => {
    setPlayer(playerName);
    router.push('/game');
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <header className="">
        <h1 className="text-5xl font-bold">AmongThem</h1>
        <p
          className="text-xl my-8"
        >
          This is the home of a brand new challenge that is building an AmongUs "clone"
        </p>
        <button onClick={() => setModalOpen(true)} className="bg-blue-300 p-4 rounded-md text-white font-bold uppercase">
          Game on
          </button>
      </header>
      <Modal
        title="Hello"
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={onSubmit}
      >
        <input type="text" value={playerName} placeholder="username" onChange={(evt) => setPlayerName(evt.target.value)} />
      </Modal>
    </div>
  );
}

export default Index;
