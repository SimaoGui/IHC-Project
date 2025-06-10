import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss'
import { FaRegCircleQuestion, FaSuitcaseRolling } from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const [id, setId] = useState<number>(0)

    const handleNavigate = () => {
        if (id === 1) {
            navigate('/ajuda');
        } else if ( id === 2) {
            navigate('/viagens')
        } else if (id === 3) {
            navigate('/login')
        }
    }

    useEffect(() => {
        handleNavigate();
    });
    

    return (
        <React.Fragment>
            <nav className={styles.navbar}>
                <section className={styles.navTop}>
                    <div className={styles.logoDiv}>
                        <h1>
                            <a href="/home">Viagem.com</a>
                        </h1>
                    </div>
                    <ul className={styles.navbarItems}>
                        <li className={styles.navbarItem}
                        onClick={() => setId(1)}>
                            <FaRegCircleQuestion className={styles.navIcon} />
                            <h3>Ajuda</h3>
                        </li>
                        <li className={styles.navbarItem}
                         onClick={() => setId(2)}>
                            <FaSuitcaseRolling className={styles.navIcon} />
                            <h3>Minhas Viagens</h3>
                        </li>
                        <li className={styles.navbarItem}
                         onClick={() => setId(3)}>
                            <FaUserCircle className={styles.navIcon} />
                            <h3>Entrar</h3>
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