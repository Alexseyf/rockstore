import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__logo__container">
        <img src="./logo.png" alt="logotipo da loja" className="logo__img" />
        <h1 className="logo__text">RockStore Records</h1>
      </div>
      <div className="header__search__container">
        <input
          className="header__search__input"
          type="text"
          placeholder="Search"
        />
        <div className="header__search__btn">
          <CiSearch className="search__btn__icon"/>
        </div>
      </div>
      <div className="cart__container">
        <FiShoppingCart className="cart__icon" />
        <div className="cart__items__container">
          <p className="cart__items__counter">2</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
