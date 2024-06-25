import React, { useState, useEffect } from "react";
import "./ItemLista.css";
import StarRating from "./StarRating";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "./Header.jsx"
import { toast } from 'sonner'
import Header from "./Header.jsx";


const ItemLista = ({ album, albuns, setAlbuns, setCart }) => {
  const [like, setLike] = React.useState(false);
  <Header addCart={addCart} album={album} />

  const likeAlbum = () => {
    setLike(!like);
    const updatedAlbuns = albuns.map((item) => {
      if (item.titulo === album.titulo) {
        return { ...item, like: !like };
      }
      return item;
    });
    setAlbuns(updatedAlbuns);
    localStorage.setItem("albuns", JSON.stringify(updatedAlbuns))
  }

  useEffect(() => {
    if (album.like) {
      setLike(album.like);
    }
  }, []);

  function addCart(album) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if(cart.find((item) => item.titulo === album.titulo)) {
      toast.error("Este item já está no carrinho!");
      return;
    }
    const cart2 = [...cart];
    cart2.push({...album});
    setCart(cart2);
    localStorage.setItem("cart", JSON.stringify(cart2));

    const albuns = JSON.parse(localStorage.getItem("albuns"));
    setAlbuns(albuns);
    toast.success("Item adicionado ao carrinho!");
  }
  return (
    <div className="list__container">
      <img className="list__capa" src={`./${album.capa}`} alt="" />
      <div className="list__items">
        <h1 className="list__title">{album.titulo}</h1>
        <StarRating album={album} albuns={albuns} setAlbuns={setAlbuns} />
        <div className="preco-cart">
          <h2>{`R$ ${album.preco}`}</h2>
          <div className="info__container">
            {like ? (
              <FcLike onClick={likeAlbum} className="like__icon" />
            ) : (
              <FcLikePlaceholder
                onClick={likeAlbum}
                className="like__icon"
              />
            )}
          </div>
        </div>
        <button onClick={()=> addCart(album)} className="add__cart__btn">Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default ItemLista;

