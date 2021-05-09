import React from 'react';
import styles from '../styles/components/SideBar.module.css';
import logoImg from '../assets/logo.png';


export function SideBar() {
    return (
        <div className={styles.sideBar}>
            <figure>
                <img src={logoImg} alt="logo empresa"/>
            </figure>
            <div className={styles.searchWrapper}>
                <input type="search" className={styles.searchInput} placeholder="Search"/> 
            </div>
        </div>
    );
}