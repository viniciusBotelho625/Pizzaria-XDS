import React from 'react'
import { SideBar } from '../components/SideBar';
import styles from '../styles/pages/Success.module.css';
import logoSuccess from '../assets/success.png'

export default function Success() {
    return(
        <>
            <SideBar />
            <div className={styles.cardSuccess}>
                <p>Compra efetuada com sucesso!</p>
                <figure>
                    <img src={logoSuccess} alt="Logo de sucesso"/>
                </figure>
                <button>Voltar</button>
            </div>
        </>
    );
}