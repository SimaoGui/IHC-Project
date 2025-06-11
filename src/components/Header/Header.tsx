import React from 'react';
import styles from './Header.module.scss'
import { FaRegCircleQuestion, FaSuitcaseRolling } from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <React.Fragment>
            <nav className={styles.navbar}>
                <section className={styles.navTop}>
                    <div className={styles.logoDiv}>
                        <h1>
                            <Link to="/home">Viagem.com</Link>
                        </h1>
                    </div>
                    <ul className={styles.navbarItems}>
                        <li className={styles.navbarItem}>
                            <Link to="/ajuda" className={styles.navLink}> 
                                <FaRegCircleQuestion className={styles.navIcon} />
                                <h3>Ajuda</h3>
                            </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link to="/viagens" className={styles.navLink}>
                                <FaSuitcaseRolling className={styles.navIcon} />
                                <h3>Minhas Viagens</h3>
                            </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link to="/login" className={styles.navLink}>
                                <FaUserCircle className={styles.navIcon} />
                                <h3>Entrar</h3>
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className={styles.navDown}>
                    <div className={styles.navdownDiv}>
                        <h4>Hospedagens</h4>
                    </div>
                    <div className={styles.navdownDiv}>
                        <h4>Pacotes</h4>
                    </div>
                    <div className={styles.navdownDiv}>
                        <h4>Passagens Aéreas</h4>
                    </div>
                </section>
            </nav>
        </React.Fragment>
    )
}

export default Header;