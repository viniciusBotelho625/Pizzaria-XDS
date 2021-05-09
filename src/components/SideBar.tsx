import React from 'react';
import styles from '../styles/components/SideBar.module.css';
import logoImg from '../assets/logo.png';

import SearchIcon from '@material-ui/icons/Search';

export function SideBar() {
    return (
        <div className={styles.sideBar}>
            <figure>
                <img src={logoImg} alt="logo empresa"/>
            </figure>
            <div className={styles.searchWrapper}>
                <input type="search" className={styles.searchInput} placeholder="Search"/> 
                {/* <SearchIcon /> */}
            </div>
        </div>
    );
}