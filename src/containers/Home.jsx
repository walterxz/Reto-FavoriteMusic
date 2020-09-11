import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Item';
import { MdQueueMusic, MdFavorite } from "react-icons/md";

const Home = props => {
  console.log(props);
  return (
    <>
      <Header />
      <div className="container">
        <div>
          {props.user.email ? (
            <>
              <h1><MdFavorite/> Mis favoritos</h1>
              <div className="items-container">
                {props.myList.map(x => (
                  <Card
                    key={x.id}
                    id={x.id}
                    title={x.title}
                    img={x.img}
                    author={x.author}
                    album={x.album}
                    year={x.year}
                    favorite={true}
                  />
                ))}
              </div>
            </>
          ) : (
            <h3>Inicia sesión para agregar a favoritos</h3>
          )}
        </div>
        <div>
          <h1><MdQueueMusic/> Lista de Musica </h1>
          <div className="items-container">
            {props.music.map(m => (
              <Card
                key={m.id}
                id={m.id}
                title={m.title}
                img={m.img}
                author={m.author}
                album={m.album}
                year={m.year}
                favorite={false}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// Solo se regresan los estados necesarios
const mapStateToProps = state => {
  return {
    myList: state.myList,
    music: state.music,
    user: state.user,
  };
};
export default connect(mapStateToProps, null)(Home);
