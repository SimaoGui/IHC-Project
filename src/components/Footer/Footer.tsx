import React, { useState } from 'react';
import styles from './Footer.module.scss'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleEmail = () => {
        const message = alert(`Email com melhores ofertas enviado para: "${email}", confira já!`)
        return message;
    }
    
    return (
        <React.Fragment>
            <footer>
                <section className={styles.footSect}>
                    <div className={styles.sectDiv}>
                        <ul>
                            <h3>Institucional</h3>
                            <li>Sobre nós</li>
                            <li>Fale conosco</li>
                            <li>Trabalhe conosco</li>
                            <li>Politica de privacidade</li>
                            <li>Termos de uso</li>
                        </ul>
                    </div>
                    <div className={styles.sectDiv}>
                        <ul>
                            <h3>Links</h3>
                            <li>FAQ</li>
                            <li>Passagens aéreas</li>
                            <li>Hospedagem</li>
                            <li>Pacotes</li>
                            <li>Minha conta</li>
                        </ul>
                    </div>
                    <div className={styles.sectIcons}>
                        <h3 id='titleFooter'>Siga-nos!</h3>
                        <div className={styles.iconsDiv}>
                            <FaFacebook className={styles.icons} id='face'/>
                            <FaInstagram className={styles.icons} id='insta'/>
                            <FaLinkedin className={styles.icons} id='linked'/>
                            <FaYoutube className={styles.icons} id='youtb'/>
                        </div>
                    </div>
                    <div className={styles.lastDiv}>
                        <h3>Assine a nossa newsletter</h3>
                        <h4>Receba promoções e dicas de viagens</h4>
                        <div>
                            <input placeholder="Insira seu e=mail..." type="e-mail" onChange={(e) => setEmail(e.target.value)}/>
                            <button onClick={handleEmail}>Assinar</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h4>© 2025 Viagem.com. Todos os direitos reservados.</h4>
                    </div>
                </section>
            </footer>
        </React.Fragment>
    )
}

export default Footer;