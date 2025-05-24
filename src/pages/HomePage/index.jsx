import './style.css';
import foto1 from './img/image1.svg';
import foto2 from './img/image2.svg';
import mapa from './obrazky/mapa.png';
import { Banner } from '../../components/Banner/banner';
import { Pokoje } from '../../components/Pokoje/pokoje';
import { VybranyPokoj } from '../../components/VybranyPokoj/vybranypokoj';
import { Kontakt } from '../../components/Kontakt/kontakt';
import { useState } from 'react';

export const HomePage = () => {
  const [vybranyPokoj, setVybranyPokoj] = useState(null);

  return (
    <>
      <Banner />
      <Pokoje />
      <VybranyPokoj />
      <Kontakt />
    </>
  );
};
