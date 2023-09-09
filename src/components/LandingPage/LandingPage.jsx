// import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from './LandingPage.module.css'
import font from '../../assets/images/pokemon-in-the-wild.mp4'
import { separateLocations } from '../../redux/actions/actions'

const LandingPage = () => {
    const dispatch = useDispatch()

    const separate = () => {
        dispatch(separateLocations())
    }

    return (
        <section className={styles.container}>
            <video muted autoPlay loop>
                <source src={font} type="video/mp4" />
            </video>
            <div className={styles.infoPage}>
                <span>Welcome to POKEDEX!</span>
                <Link to='/home'>
                    <button onClick={separate}>START</button>
                </Link>
            </div>
        </section>
    )
}

export default LandingPage
