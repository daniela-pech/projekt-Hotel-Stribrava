import './style.css';
import { useEffect, useState } from 'react';

export const VybranyPokoj = ({ pokoj }) => {
  if (!pokoj) return null;

  return (
    <section className="light">
      <div className="container">
        <h2>{pokoj.nazev}</h2>
        <div className="columns-2">
          <div className="column">
            <img src={pokoj.image} alt={pokoj.nazev} />
            <p>{pokoj.popisek}</p>
          </div>
          <form>
            <div className="form-fields">
              <label htmlFor="field1" className="field-label">
                Od:
              </label>
              <input id="field1" className="field-input" type="date" />

              <label htmlFor="field2" className="field-label">
                Do:
              </label>
              <input id="field2" className="field-input" type="date" />

              <label htmlFor="field3" className="field-label">
                Počet osob:
              </label>
              <input id="field3" className="field-input" type="text" />

              <label htmlFor="select" className="field-label">
                Stravování:
              </label>
              <select id="select" className="field-input">
                <option>Žádné</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Domácí mazlíček:
              </label>
              <input id="check1" className="field-input" type="checkbox" />
              <label htmlFor="check2" className="field-label">
                Přistýlka pro dítě:
              </label>
              <input id="check2" className="field-input" type="checkbox" />
              <label htmlFor="check3" className="field-label">
                Bezbariérový přístup:
              </label>
              <input id="check3" className="field-input" type="checkbox" />

              <label htmlFor="field4" className="field-label">
                E-mail:
              </label>
              <input id="field4" className="field-input" type="email" />
              <label htmlFor="field5" className="field-label">
                Telefon:
              </label>
              <input id="field5" className="field-input" type="tel" />
            </div>
            <button className="wide">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
