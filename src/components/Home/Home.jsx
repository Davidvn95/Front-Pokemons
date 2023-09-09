import { useState } from "react";
import styles from "./Home.module.css";
import Filters from "../Filters/Filters";
import PokemonsCards from "../PokemonsCards/PokemonsCards";
import Paginations from "../Paginations/Paginations";
import { useSelector } from "react-redux";
// import { getAllPokemons, getAllTypes } from "../../redux/actions/actions";

const Home = () => {
    // const pokemons = useSelector(state=>state.pokemons)
    const render = useSelector(state => state.render)
    const [pagina, setPagina] = useState(1);

    const [porPagina] = useState(8);

    const [maximo] = useState(Math.ceil(render.length / porPagina));


    return (
        <section className={styles.home}>
            <div className={styles.lateral}>
                <Filters/>
            </div>
            <PokemonsCards pagina={pagina} porPagina={porPagina}/>
            <Paginations pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </section>
    );
};

export default Home;
