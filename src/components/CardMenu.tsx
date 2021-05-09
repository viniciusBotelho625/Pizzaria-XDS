import React from 'react'

import styles from '../styles/components/CardMenu.module.css';
import pizzaImg from '../assets/pizza.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export function CardMenu() {
    return(
        <div className={styles.cardMenu}>
            <div className={styles.cardHeader}>
                <figure>
                    <img src={pizzaImg} alt="Imagem ilustrativa da Pizza"/>
                </figure>
            </div>
            <div className={styles.cardBody}>
                <p>Pizza de Peperoni</p>
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
            <div className={styles.cardFooter}>
                <p>a partir de:</p>
                <p>R$ 29,00</p>
            </div>
        </div>
    );
}