import * as React from 'react';
import background from '../images/pastelshapes2.jpg';
import Layout from '../components/Layout';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'black',
  fontSize: 16,
  fontWeight: 600,
  padding: 30,
  height: '100vh',
  margin: 0
};

const paragraphStyles = {
  background: 'rgba(255, 255, 255, 0.5)',
  '-moz-box-shadow': '0 0 0 10px rgba(255, 255, 255, 0.5)',
  '-webkit-box-shadow': '0 0 0 10px rgba(255, 255, 255, 0.5)',
  boxShadow: '0 0 0 10px rgba(255, 255, 255, 0.5)',
  fontSize: 18,
  fontWeight: 500,
  margin: 40,
  lineHeight: 1.7
};

const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <article style={paragraphStyles}>
          <p>
            Üdvözlöm a holnapomon! A jó élet egy folyamat, nem létező állapot. –mondja Carl Rogers,
            a humanista pszichológia atyja.
          </p>
          <p>
            Ezzel üzeni nekünk, hogy a növekedés, az önmegvalósítás nem egy egyszeri célon alapuló
            statikus állapot.
          </p>
          <p>
            A fejlődés maga az út, és a “jó élet” törekvés a fejlődésre. Amennyiben segítő
            szakembert keres, aki partnerközpontú szemléletben kíséri, hogy megtalálja a kérdésére a
            saját válaszait, kíséri a fejlődése útján, és kíséri abban, hogy megtanulja saját
            szükségleteit felismerni és betölteni, jó helyen jár.
          </p>
          Vallom, hogy minden kérdés jó, fontos és számít. Ezért kérem, írjon bátran üzenetet!
        </article>
      </main>
    </Layout>
  );
};

export default IndexPage;
