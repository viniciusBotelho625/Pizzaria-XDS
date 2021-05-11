import React from 'react';
import styles from '../styles/components/SideBar.module.css';
import logoImg from '../assets/logo.png';
import { Link } from 'react-router-dom';

export function SideBar() {
    return (
        <div className={styles.sideBar}>
            <Link to="/list">
                <figure>
                    <img src={logoImg} alt="logo empresa"/>
                </figure>
            </Link>
        </div>
    );
}

