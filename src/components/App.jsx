import React from 'react';
import '../styles/components/App.styl';

import Header from '../components/Header';
import Footer from '../components/Footer';


const App = () => (
  <>
    <Header></Header>
    <div className="cards-container">
      {data.map(d => (
        <Card
          img={d.img}
          tag={d.tag}
          title={d.title}
          description={d.description}
        ></Card>
      ))}
    </div>
    <Footer></Footer>
  </>
);

export default App;
