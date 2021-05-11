import React from 'react'

import styles from '../styles/pages/NotFound.module.css'
import error from '../assets/error_404.png';

export default function NotFound() {
    return(
        <div>
            <figure className={styles.imgError}>
                <img src={error} alt="Página não encontrada"/>
            </figure>
            <p className={styles.title}>
                Página não encontrada. Por favor, insira uma página válida!
            </p>
        </div>
    ); 
}