import React, { useState } from 'react';
import styles from '../styles/components/CardDetail.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import pizzaImg from '../assets/pizza.jpg';
import Cookies from 'js-cookie';

export function CardDetail() {
    
    const [pizzaSize, setPizzaSize] = useState('P'); 

    const pizza = JSON.parse(Cookies.get('pizza')!)
    
    const currencyFormat = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})

    function changeSize(size: string) {
        setPizzaSize(size) 
    }

    return(
        <div className={styles.cardDetail}>
            <div className={styles.cardDetailImage}>
                <Link to="/list">
                    <button type="button">
                        <span>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </span>
                    </button>
                </Link>    
                <figure>
                    <img src={pizza.imageUrl} alt="Imagem do pedido"/>
                </figure>
            </div>
            <div className={styles.cardDetailInformation}>
                <div className={styles.cardDetailAvaliation}>
                    <p className={styles.title}>{pizza.name}</p>
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
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce faucibus commodo orci at aliquet. Nulla nec nisi rhoncus.</p>  
                <div className={styles.order}>
                    <p>Escolha o tamanho</p>
                    <div className={styles.orderOptionsSize}>
                        <button type="button" onClick={() => changeSize('P')}>P</button>
                        <button type="button" onClick={() => changeSize('M')}>M</button>
                        <button type="button" onClick={() => changeSize('G')}>G</button>
                    </div>
                </div>
                <div className={styles.orderPrice}>
                    <p>{currencyFormat.format(pizza[`price${pizzaSize}`])}</p>
                </div>
                <Link to="/success">
                    <button type="submit" className={styles.buttonPay}>Comprar</button>
                </Link>
            </div>
        </div>
    );
}