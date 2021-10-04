import Modal from "../components/modal";
import Characters from '../components/characters/charactersList';
import Banner from '../images/banner-principal.jpg'

export default function Home() {
  return (
    <main className="main-home">
      <section className="main-home__banner">
        <img src={Banner} />
      </section>
      <section >
        <div className="container">
          <h1 className="main-home__title">List of characters</h1>
          <Characters/>
        </div>
      </section>
      <Modal/>
    </main>
  );
}