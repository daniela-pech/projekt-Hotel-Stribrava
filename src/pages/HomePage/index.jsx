import './style.css';
import foto1 from './img/image1.svg';
import foto2 from './img/image2.svg';
import mapa from './obrazky/mapa.png';
import { Banner } from '../../components/Banner/banner';
import { Pokoje } from '../../components/Pokoje/pokoje';
import { VybranyPokoj } from '../../components/VybranyPokoj/vybranypokoj';
import { Kontakt } from '../../components/Kontakt/kontakt';
import { useState } from 'react';
import { useEffect } from 'react';

export const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [vybranyPokoj, setVybranyPokoj] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:4000/api/rooms');
      const data = await res.json();
      setRooms(data.data);
      setVybranyPokoj(data.data[0]); // Výchozí pokoj
    };

    fetchData();
  }, []);

  return (
    <>
      <Banner />
      <Pokoje pokoje={rooms} onPokojClick={setVybranyPokoj} />
      <VybranyPokoj pokoj={vybranyPokoj} />
      <Kontakt />
    </>
  );
};
