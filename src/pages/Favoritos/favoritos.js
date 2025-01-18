import Banner from "componentes/Banner/Banner";
import styles from "./favoritos.module.css";
import Titulo from "componentes/Titulo/Titulo";
import Card from "componentes/Card/Card";
import { useFavoritoContext } from "contextos/Favoritos";

function Favoritos() {
  const { favorito } = useFavoritoContext();

  return (
    <>
    <Banner imagem="favoritos" />
    <Titulo>
        <h1>Meus Favoritos</h1>
    </Titulo>
    <section className={styles.container}>  
        { favorito.map((fav) => {
     return <Card {...fav} key={fav.id} />})
        }
     </section>
    </>
  );
}
export default Favoritos;