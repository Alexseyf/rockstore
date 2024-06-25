import "./App.css";
import Header from "./components/Header";
import ItemLista from "./components/ItemLista";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useEffect, useState } from "react";
import NovoAlbum from "./components/NovoAlbum";
import Cart from "./components/Cart";
import { Toaster, toast } from 'sonner'

function App() {
  const [albuns, setAlbuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [showLikedAlbuns, setShowLikedAlbuns] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const onOpenModal2 = () => setOpenModal2(true);
  const onCloseModal2 = () => setOpenModal2(false);

  useEffect(() => {
    if (localStorage.getItem("albuns")) {
      setAlbuns(JSON.parse(localStorage.getItem("albuns")));
    }
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const filteredAlbuns = () => {
    if (showLikedAlbuns) {
      return albuns.filter((album) => album.like);
    } else {
      return albuns;
    }
  };

  const listaAlbuns = filteredAlbuns().map((album, key) => (
    <ItemLista
      key={key}
      album={album}
      albuns={albuns}
      setAlbuns={setAlbuns}
      onOpenModal={onOpenModal}
      cart={cart}
      setCart={setCart}
    />
  ));

  const listaCart = cart.map((item, key) => (
    <Cart
      key={key}
      item={item}
      cart={cart}
      onOpenModal2={onOpenModal2}
      onCloseModal2={onCloseModal2}
    />
  ));

  return (
    <>
      <Toaster richColors position="bottom-right" />
      <Header open={openModal} onOpenModal={onOpenModal} onOpenModal2={onOpenModal2} listaCart={listaCart} />
      <div className="filter-options">
        <button onClick={() => setShowLikedAlbuns(true)}>Listar Favoritos</button>
        <span></span>
        <button onClick={() => setShowLikedAlbuns(false)}>Listar todos</button>
      </div>
      <div className="albuns__container">{listaAlbuns}</div>
      <Modal open={openModal} onClose={onCloseModal} center>
        <NovoAlbum albuns={albuns} setAlbuns={setAlbuns} open={open} onCloseModal={onCloseModal} />
      </Modal>
      <Modal open={openModal2} onClose={onCloseModal2} center>
        <h1>Carrinho</h1>
       {listaCart}
      </Modal>
    </>
  );
}

export default App;