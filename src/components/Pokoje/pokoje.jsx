import './style.css';
import pokoj1 from './fotky/pokoj01.jpg';
import pokoj2 from './fotky/pokoj02.jpg';
import pokoj3 from './fotky/pokoj03.jpg';
import pokoj4 from './fotky/pokoj04.jpg';
import pokoj5 from './fotky/pokoj05.jpg';

export const Pokoje = () => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          <div className="card">
            <img className="card__image" src={pokoj1} />
            <div className="card__title">Úkryt</div>
            <div className="card__body">450 kč/os</div>
          </div>

          <div className="card">
            <img className="card__image" src={pokoj2} />
            <div className="card__title">Základ</div>
            <div className="card__body">700 kč/os</div>
          </div>

          <div className="card">
            <img className="card__image" src={pokoj3} />
            <div className="card__title">Klasik</div>
            <div className="card__body">1200 kč/os</div>
          </div>

          <div className="card">
            <img className="card__image" src={pokoj4} />
            <div className="card__title">Komfort</div>
            <div className="card__body">2500 kč/os</div>
          </div>

          <div className="card">
            <img className="card__image" src={pokoj5} />
            <div className="card__title">Luxus</div>
            <div className="card__body">8000 kč/os</div>
          </div>
        </div>
      </div>
    </section>
  );
};
