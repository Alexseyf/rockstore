import React from "react";
import "./NovoAlbum.css";
import { useForm } from "react-hook-form";

const NovoAlbum = ({ albuns, setAlbuns, onCloseModal }) => {
  const { register, handleSubmit, reset, setFocus } = useForm();

  
  const novoAlbum = (data) => {
    const albuns2 = [...albuns]
    albuns2.push({...data, rating: "", like: false})
    setAlbuns(albuns2);
    localStorage.setItem("albuns", JSON.stringify(albuns2));
    reset();
    onCloseModal();
  };

    
    React.useEffect(() => {
      setFocus("titulo");
    }, []);
 

  return (
    <div className="novo__container">
      <h2>Adicionar novo álbum</h2>
      <form onSubmit={handleSubmit(novoAlbum)} className="form__container">
        <p>
        <input type="text" id="titulo" required placeholder="Título" {...register("titulo")} />
        </p>
        <p>
        <input type="text" id="artista" required placeholder="Artista" {...register("artista")} />
        </p>
        <p>
        <input type="text" id="preco" required placeholder="Preço" {...register("preco")} />
        </p>
        <p>
        <input type="text" id="genero" required placeholder="Gênero" {...register("genero")} />
        </p>
        <p>
        <input type="text" id="ano" required placeholder="Ano" {...register("ano")} />
        </p>
        <p>
        <input type="text" id="capa" required placeholder="Capa do álbum"{...register("capa")} />
        </p>
        <p>
          <textarea type="text" id="descricao" required placeholder="Descrição"{...register("descricao")} ></textarea>
        </p>
        <button type="submit" className="add__album__btn">Adicionar</button>
      </form>
    </div>
  );
};

export default NovoAlbum;

