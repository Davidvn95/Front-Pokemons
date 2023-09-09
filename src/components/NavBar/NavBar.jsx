// import { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { separateLocations } from "../../redux/actions/actions";

const NavBar = () => {
    // const dispatch = useDispatch()

    // const[searchStatus, setSearchStatus] = useState(false)


    // const recharge = () => {
    //     dispatch(separateLocations());
    //     setSearchStatus(false)
    // };

    return (
        <section className={styles.contentNav}>
            <nav className={styles.buttons}>
                <Link to="/about">
                    <button>About</button>
                </Link>
                <Link to="/home">
                    {/* <button onClick={recharge}>Home</button> */}
                    <button>Home</button>
                </Link>
                <Link to="/form">
                    <button>Create</button>
                </Link>
                <Link to="/">
                    <button>Logout</button>
                </Link>
            </nav>
            {/* <div className={styles.container}>
                <SearchBar searchStatus={searchStatus} setSearchStatus={setSearchStatus} />
                <Filters />
            </div> */}
            {/* {searchStatus && <button>Back</button>} */}
            {/* {searchStatus && <button onClick={recharge} >Back</button>} */}
        </section>
    )
};

export default NavBar;
