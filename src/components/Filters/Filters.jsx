import { useState } from "react";
import styles from './Filters.module.css'
import { useDispatch, useSelector } from "react-redux";
import {
    filterInAll,
    filterInApi,
    filterInDb,
    separateLocations,
    showAll,
    showApi,
    showDb,
    sortPokemons,
    getPokemonByName
} from "../../redux/actions/actions";

const Filters = () => {
    const db = useSelector((state) => state.db)
    const types = useSelector((state) => state.types)
    const dispatch = useDispatch()
    const [statesOfFilters, setStatesOfFilters] = useState({
        location: '',
        type: '',
        order: '',
    })
    const [nameState, setNameState] = useState("");

    const handleChage = (event) => {
        const { value } = event.target;
        setNameState(value)
    }

    const searchFunction = (event) => {
        const keycode = event.keyCode || event.which;
        if (keycode) {
            if (keycode === 13) {
                dispatch(getPokemonByName(nameState))
                setNameState("");
                setSearchStatus(true)
            }
        }
        else {
            dispatch(getPokemonByName(nameState));
            setNameState("");
            setSearchStatus(true);
        }
    }

    const cleanFunction = () => {
        dispatch(separateLocations())
        setStatesOfFilters({
            location: 'All Pokemons',
            type: 'All Types',
            order: 'Default',
        })
    }

    const changeStatusLocation = (event) => {
        const { value } = event.target
        setStatesOfFilters({
            ...statesOfFilters,
            location: value,
        })
        filterByLocation(value)
        filterByTypes(statesOfFilters.type, value)
    }

    const changeStatusType = (event) => {
        const { value } = event.target
        setStatesOfFilters({
            ...statesOfFilters,
            type: value,
        })
        filterByTypes(value, statesOfFilters.location)
    }

    const changeStatusOrder = (event) => {
        const { value } = event.target
        setStatesOfFilters({
            ...statesOfFilters,
            order: value,
        })
        filterByOrder(value)
    }

    const filterByOrder = (value) => {
        if (value === 'Default') {
            dispatch(separateLocations()) && filterByLocation(statesOfFilters.location)
            filterByTypes(statesOfFilters.type, statesOfFilters.location)
        } else dispatch(sortPokemons(value))
    }

    const filterByLocation = (value) => {
        switch (value) {
            case 'Pokemons API':
                dispatch(showApi())
                break
            case 'Created Pokemons':
                if (!db.length) alert('Pokemons in DataBase not found')
                else dispatch(showDb())
                break
            default:
                dispatch(showAll())
                break
        }
    }

    const filterByTypes = (value, location) => {
        switch (location) {
            case 'Pokemons API':
                dispatch(filterInApi(value))
                break
            case 'Created Pokemons':
                dispatch(filterInDb(value))
                break
            default:
                dispatch(filterInAll(value))
                break
        }
    }

    return (
        <div className={styles.container}>
            <form>
                <div className={styles.selectContainer}>
                    <input
                        type="text"
                        onChange={handleChage}
                        onKeyUp={searchFunction}
                        value={nameState}
                    />
                    {/* <input type="text" /> */}
                    <button onClick={searchFunction} > Search</button>
                    {/* <button> Search</button> */}
                </div>
                <div className={styles.selectContainer}>
                    <label htmlFor="Order By">Order By:</label>
                    <select name="Order By" onChange={changeStatusOrder} value={statesOfFilters.order}>
                    {/* <select name="Order By" id="Order By"> */}
                        <option>Default</option>
                        <option>A - Z</option>
                        <option>Z - A</option>
                        <option>Attack +</option>
                        <option>Attack -</option>
                    </select>
                </div>
                <div className={styles.selectContainer}>
                    <label htmlFor="Location">Location:</label>
                    <select name="Location" onChange={changeStatusLocation} value={statesOfFilters.location}>
                    {/* <select name="Location" id="Location"> */}
                        <option>All Pokemons</option>
                        <option>Pokemons API</option>
                        <option>Created Pokemons</option>
                    </select>
                </div>
                <div className={styles.selectContainer}>
                    <label htmlFor="Type">Type:</label>
                    <select name="Type" id="Type" onChange={changeStatusType} value={statesOfFilters.type}>
                    {/* <select> */}
                        <option>All Types</option>
                        {types.map((typ, index) => (
                        <option key={index}>{typ.name}</option>
                        ))}
                    </select>
                </div>
            </form>
            <button onClick={cleanFunction}>Clean filters</button>
            {/* <button>Clean filters</button> */}
        </div>
    )
}

export default Filters
