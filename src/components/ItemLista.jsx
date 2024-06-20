import React from "react";
import { CiStar } from "react-icons/ci";

const ItemLista = ({ album, albuns, setAlbuns }) => {
  return (
    <div className="flex p-4 w-96 shadow-lg">
      <div>
        <img src={`./${album.capa}`} alt="" />
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl ">{album.titulo}</h1>
          <h2 className="font-medium text-2xl">{album.artista}</h2>
        </div>
        <div className="flex justify-between">
          <h1 className="">{album.ano}</h1>
          <h2>{`R$ ${album.preco}`}</h2>
        </div>
        <div className="flex-col justify-between items-baseline">
          <div className="flex mb-2">
            <CiStar className="size-6" />
            <CiStar className="size-6" />
            <CiStar className="size-6" />
            <CiStar className="size-6" />
            <CiStar className="size-6" />
          </div>
          <button className="uppercase  bg-[#333] shadow-md px-2 py-1 rounded-md text-white">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemLista;
