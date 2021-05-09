import React from 'react'

import styles from '../styles/components/CardMenu.module.css';
import pizzaImg from '../assets/pizza.jpg';

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
                <p>❤❤❤❤❤</p>
            </div>
            <div className={styles.cardFooter}>
                <p>a partir de:</p>
                <p>R$ 29,00</p>
            </div>
        </div>
    );
}