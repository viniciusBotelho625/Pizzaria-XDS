import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/pages/Logon.module.css';

import logoImg from '../assets/logo.png';

export default function Logon(){
    return (
        <div className={styles.container}>
            <div className={styles.cardLogon}>
                <header>
                    <img src={logoImg} alt="Logo da empresa" />
                </header>
                <div className={styles.cardBody}>
                    <strong>Entrar</strong>
                    <input type="text" name="user" placeholder="usuário"/>
                    <input type="text" name="password" placeholder="senha"/>

                    <button type="submit" className={styles.button}>
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    );
}

