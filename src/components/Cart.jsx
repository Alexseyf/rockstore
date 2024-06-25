import React, { useState, useEffect } from "react";
import "./Cart.css";
import "./Header.jsx";
import Header from "./Header.jsx";

const Cart = ({ item, cart, oncloseModal2 }) => {

  return (
    <>
    <div className="cart__modal__container">
      <div>
        <img src={`./${item.capa}`} alt="" className="cart__items__img" />
      </div>
      <div className="cart__items__info">
        <h2>{item.titulo} - <span>{item.ano}</span></h2>
        <p>{item.artista}</p>
        <p>{item.genero}</p>
        <p>{`R$ ${item.preco}`}</p>
      <div className="remove__container">
        <button className="remove__btn" onClick={
          () => {
            const cart2 = cart.filter((item2) => item2.titulo !== item.titulo);
            localStorage.setItem("cart", JSON.stringify(cart2));
            window.location.reload();
          }
        }>Remover item</button>
      </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
