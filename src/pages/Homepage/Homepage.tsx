import React from 'react'
import styles from './Homepage.module.scss';
import { FaCalendarAlt } from 'react-icons/fa';

function Homepage() {
  return (
    <React.Fragment>
        <main>
          <div className={styles.pageDiv}>
            <h4>Pagina Inicial / Pacotes</h4>
          </div>
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
              <div className={styles.saibaDiv}>
                <a href="/#">Saiba mais</a>
              </div>
            </div>
          </div>
          <div className={styles.pacotesMain}>
            <h3>Pacotes Nacionais Populares</h3>
            <div className={styles.pacotes}>
              <div className={styles.box}>
                <div className={styles.boxImage}></div>
                <div className={styles.item}>
                  <span>Maceió, AL</span> <span className={styles.colorSpan}>R$ 2.126,56</span>
                </div>
                <div className={styles.item}>
                  <FaCalendarAlt className={styles.spanicon}/> <p>13/06 - 21/06</p> <p>Preço por pessoa</p>
                </div>
                <button className={`${styles}. btn btn--primary`}>Ver Detalhes</button>
              </div>
              <div className={styles.box}>
                  <div className={styles.boxImage}></div>
                  <div className={styles.item}>
                    <span>Maceió, AL</span> <span className={styles.colorSpan}>R$ 2.126,56</span>
                  </div>
                  <div className={styles.item}>
                    <FaCalendarAlt className={styles.spanicon}/> <p>13/06 - 21/06</p> <p>Preço por pessoa</p>
                  </div>
                  <button className={`${styles}. btn btn--primary`}>Ver Detalhes</button>
              </div>
              <div className={styles.box}>
                  <div className={styles.boxImage}></div>
                  <div className={styles.item}>
                    <span>Maceió, AL</span> <span className={styles.colorSpan}>R$ 2.126,56</span>
                  </div>
                  <div className={styles.item}>
                    <FaCalendarAlt className={styles.spanicon}/> <p>13/06 - 21/06</p> <p>Preço por pessoa</p>
                  </div>
                  <button className={`${styles}. btn btn--primary`}>Ver Detalhes</button>
              </div>
              <div className={styles.box}>
                  <div className={styles.boxImage}></div>
                  <div className={styles.item}>
                    <span>Maceió, AL</span> <span className={styles.colorSpan}>R$ 2.126,56</span>
                  </div>
                  <div className={styles.item}>
                    <FaCalendarAlt className={styles.spanicon}/> <p>13/06 - 21/06</p> <p>Preço por pessoa</p>
                  </div>
                  <button className={`${styles}. btn btn--primary`}>Ver Detalhes</button>
              </div>
            </div>
          </div>
          <div className={styles.pacotesMain}>
            <h3>Pacotes Internacionais Populares</h3>
            <div className={styles.pacotes}>
              <div className={styles.box}>
                <div className={styles.boxImage}></div>
                <div className={styles.item}>
                  <span>Maceió, AL</span> <span className={styles.colorSpan}>R$ 2.126,56</span>
                </div>
                <div className={styles.item}>
                  <FaCalendarAlt className={styles.spanicon}/> <p>13/06 - 21/06</p> <p>Preço por pessoa</p>
                </div>
                <button className={`${styles}. btn btn--primary`}>Ver Detalhes</button>
              </div>
              <div className={styles.box}>
                  <div className={styles.boxImage}></div>
                  <div className={styles.item}>
                    <span>Maceió, AL</span> <span className={styles.colorSpan}>R$ 2.126,56</span>
                  </div>
                  <div className={styles.item}>
                    <FaCalendarAlt className={styles.spanicon}/> <p>13/06 - 21/06</p> <p>Preço por pessoa</p>
                  </div>
                  <button className={`${styles}. btn btn--primary`}>Ver Detalhes</button>
              </div>
              <div className={styles.box}>
                  <div className={styles.boxImage}></div>
                  <div className={styles.item}>
                    <span>Maceió, AL</span> <span className={styles.colorSpan}>R$ 2.126,56</span>
                  </div>
                  <div className={styles.item}>
                    <FaCalendarAlt className={styles.spanicon}/> <p>13/06 - 21/06</p> <p>Preço por pessoa</p>
                  </div>
                  <button className={`${styles}. btn btn--primary`}>Ver Detalhes</button>
              </div>
              <div className={styles.box}>
                  <div className={styles.boxImage}></div>
                  <div className={styles.item}>
                    <span>Maceió, AL</span> <span className={styles.colorSpan}>R$ 2.126,56</span>
                  </div>
                  <div className={styles.item}>
                    <FaCalendarAlt className={styles.spanicon}/> <p>13/06 - 21/06</p> <p>Preço por pessoa</p>
                  </div>
                  <button className={`${styles}. btn btn--primary`}>Ver Detalhes</button>
              </div>
            </div>
          </div>
        </main>
    </React.Fragment>
  )
}

export default Homepage