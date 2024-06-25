import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import "./Search"
import "./Header.css";
import { Modal } from "react-responsive-modal";
import { toast } from 'sonner'

const Header = ({onOpenModal, onOpenModal2, addCart, album}) => {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchAlbum = () => {
    const searchText = document.querySelector(".header__search__input").value;
    const albuns = JSON.parse(localStorage.getItem("albuns")) || [];
    const searchResult = albuns.filter((album) =>
      album.titulo.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(searchResult);
    if (searchResult.length === 0) {
      toast.warning("Nenhum resultado encontrado!");
    }else{
    setOpenSearchModal(true);
    }
  }

  const onCloseSearchModal = () => {
    setOpenSearchModal(false);
  }

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
          <CiSearch onClick={searchAlbum} className="search__btn__icon"/>
        </div>
      </div>
      <div className="cart__container">
        <button onClick={onOpenModal} className='novo__btn'>Adicionar novo</button>
        <FiShoppingCart onClick={onOpenModal2} className="cart__icon" />
        {/* <div className="cart__items__container">
          <p className="cart__items__counter"></p>
        </div> */}
      </div>
      <Modal open={openSearchModal} onClose={onCloseSearchModal} center>
        <div>
          {searchResults.map((album, index) => (
            <div key={index} className="search__modal__container">
              <div>
                <img className="search__items__img" src={`./${album.capa}`} alt="" />
              </div>
              <div className="search__items__info">
              <h2>{album.titulo} - {album.ano}</h2>
              <h3>{album.artista}</h3>
              <h5>{album.genero}</h5>
              <h5>{`R$ ${album.preco}`}</h5>
              <p>{album.descricao}</p>
              <button onClick={()=> addCart(album)} className="add__cart__btn">Adicionar ao carrinho</button>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Header;