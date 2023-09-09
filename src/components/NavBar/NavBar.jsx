import { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { separateLocations } from "../../redux/actions/actions";

const NavBar = ({setSearchStatus}) => {
    const dispatch = useDispatch()

    const recharge = () => {
        dispatch(separateLocations());
        setSearchStatus(false)
    };

    return (
        <section className={styles.contentNav}>
            <nav className={styles.buttons}>
                <Link to="/about">
                    <button>About</button>
                </Link>
                <Link to="/home">
                    <button onClick={recharge}>Home</button>
                </Link>
                <Link to="/form">
                    <button>Create</button>
                </Link>
                <Link to="/">
                    <button>Logout</button>
                </Link>
            </nav>
        </section>
    )
};

export default NavBar;
