import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { separateLocations } from '../../redux/actions/actions'
import Card from '../Card/Card'
import styles from './PokemonsCards.module.css'
// eslint-disable-next-line
const PokemonsCards = ({ pagina, porPagina }) => {
    const all = useSelector((state) => state.all)
    const render = useSelector((state) => state.render)
    const pokemons = useSelector((state) => state.pokemons)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (pokemons.length) setLoading(false)
        if (!all.length) dispatch(separateLocations())
        // eslint-disable-next-line
    }, [pokemons])

    return !loading ? (
        <div className={styles.cards}>
            {render
                .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
                .map((pkm, index) => (
                    <Card
                        id={pkm.id}
                        name={pkm.name}
                        image={pkm.image}
                        type={pkm.type ? pkm.type : pkm.types}
                        key={index}
                    />
                ))}
        </div>
    ) : (
        <div className={styles.loading}>
            <img
                src="https://i.kym-cdn.com/photos/images/newsfeed/000/891/176/b6f.gif"
                alt="Loading"
            />
        </div>
    )
}

export default PokemonsCards
