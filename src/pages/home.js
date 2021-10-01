import { useContext } from "react";
import Modal from "../components/modal";
import { AppContext } from '../context/AppContext';

export default function Home() {
  const {setModalVisible} = useContext(AppContext);
  return (
    <main className="main-home">
      <section className="main-home__top">
        <h1>Home</h1>
        <button
          onClick={() => setModalVisible(true)}
        >Clique aqui</button>
        <Modal/>
      </section>
    </main>
  );
}