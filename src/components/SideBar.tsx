import React from 'react';
import styles from '../styles/components/SideBar.module.css';
import logoImg from '../assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export function SideBar() {
    return (
        <div className={styles.sideBar}>
            <figure>
                <img src={logoImg} alt="logo empresa"/>
            </figure>
            <div className={styles.searchWrapper}>
                <input type="search" className={styles.searchInput} placeholder="Search"/> 
                <span>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
        </div>
    );
}