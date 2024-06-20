import React from "react";
import "./ItemLista.css";
import { CiStar } from "react-icons/ci";

const ItemLista = ({ album, albuns, setAlbuns }) => {
  return (
    <div className="list__container">
      <img className="list__capa" src={`./${album.capa}`} alt="" />
      <div className="list__items">
        <h1 className="list__title">{album.titulo}</h1>
        <div className="list__rating">
          <CiStar className="list__rating__item" />
          <CiStar className="list__rating__item" />
          <CiStar className="list__rating__item" />
          <CiStar className="list__rating__item" />
          <CiStar className="list__rating__item" />
        </div>
        <div className="preco-cart">
          <h2>{`R$ ${album.preco}`}</h2>
          <button className="add__cart__btn">Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default ItemLista;
