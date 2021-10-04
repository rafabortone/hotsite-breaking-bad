import { useContext } from "react";
import Modal from "../components/modal";
import { AppContext } from '../context/AppContext';
import Characters from '../components/characters/charactersList';
import Banner from '../images/banner-principal.jpg'

export default function Home() {
  const {toggleModal} = useContext(AppContext);
  return (
    <main className="main-home">
      <section className="main-home__banner">
        <img src={Banner} />
        <h1>Home</h1>
      </section>
      <section>
        <div className="container">
          <Characters/>
        </div>
      </section>
      <Modal/>
    </main>
  );
}