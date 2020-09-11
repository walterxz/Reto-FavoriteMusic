import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import '../styles/components/item.styl';
import { MdDelete,MdLibraryAdd } from "react-icons/md";

const Item = props => {
  const { id, title, img, author, album, year, favorite } = props;

  const handleSetFavorite = () => {
    props.setFavorite({ id, title, img, author, album, year });
  };

  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className="card">
      <img className="card__image" src={img} />
      <div className="card__info">
        <div className="card__title">{title}</div>
        <div className="card__author">{author}</div>
        <div className="card__album">{album}</div>
        <div className="card__album">{year}</div>
      </div>
      <div className="card__buttons">
        {favorite ? (
          <button onClick={() => handleDeleteFavorite(id)}><MdDelete/> Borrar</button>
        ) : (
          <button onClick={handleSetFavorite}><MdLibraryAdd/> Agregar</button>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(Item);
