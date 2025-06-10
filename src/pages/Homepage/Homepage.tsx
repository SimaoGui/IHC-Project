import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './Homepage.module.scss';

function Homepage() {
  return (
    <React.Fragment>
        <Header/>
        <main>
          <h4>Pagina Inicial / Pacotes</h4>
          <div className={styles.pesquisaDiv}>
            <div className={styles.elementDiv}>
              <label htmlFor="Origem">Origem</label>
              <input type="text"/>
            </div>
            <div className={styles.elementDiv}>
              <label htmlFor="Destino">Destino</label>
              <input type="text"/>
            </div>
            <button>Buscar</button>
          </div>
          <div className={styles.promoDiv}>
            <div className={styles.imagem}></div>
            <div className={styles.infoDiv}>
              <h1>Sharm el-Sheikh</h1>
              <h3>Egito</h3>
              <h2>R$ 658,99 <span>em 12 vezes</span></h2>
              <a href="/#">Saiba mais</a>
            </div>
          </div>
        </main>
        <Footer/>
    </React.Fragment>
  )
}

export default Homepage