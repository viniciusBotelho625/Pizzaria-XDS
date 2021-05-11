import React from 'react'
import { SideBar } from '../components/SideBar';
import styles from '../styles/pages/Success.module.css';
import logoSuccess from '../assets/success.png'
import { Link } from 'react-router-dom';

export default function Success() {
    return(
        <>
            <SideBar />
            <div className={styles.cardSuccess}>
                <p className={styles.title}>Compra efetuada com sucesso!</p>
                <figure>
                    <img src={logoSuccess} alt="Logo de sucesso"/>
                </figure>
                <Link to="/list">
                    <button>Voltar</button>
                </Link>
            </div>
        </>
    );
}