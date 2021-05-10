import React from 'react';
import styles from '../styles/components/CardDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import pizzaImg from '../assets/pizza.jpg';

export function CardDetail() {
    return(
        <div className={styles.CardDetail}>
            <div className={styles.cardDetailImage}>
                <button type="button">
                    <span>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                </button>
                <figure>
                    <img src={pizzaImg} alt="Imagem do pedido"/>
                </figure>
            </div>
            <div className={styles.CardDetailInformation}>
                <p className={styles.title}>Pizza de Peperoni</p>
                <span>
                    <FontAwesomeIcon icon={faStar}/>
                </span>
                <span>
                    <FontAwesomeIcon icon={faStar}/>
                </span>
                <span>
                    <FontAwesomeIcon icon={faStar}/>
                </span>
                <span>
                    <FontAwesomeIcon icon={faStar}/>
                </span>
                <span>
                    <FontAwesomeIcon icon={faStar}/>
                </span> 
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce faucibus commodo orci at aliquet. Nulla nec nisi rhoncus.</p>  
                <div className={styles.orderSize}>
                    <p>Escolha o tamanho</p>
                    <button type="button">P</button>
                    <button type="button">M</button>
                    <button type="button">G</button>
                </div>
                <div className={styles.orderPrice}>
                    <p>R$ 29,99</p>
                </div>
                <button type="submit">Comprar</button>
            </div>
        </div>
    );
}