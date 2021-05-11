import React from 'react'
import styles from '../styles/components/InputSearch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export function InputSearch() {
    return(
        <div className={styles.searchWrapper}>
            <input type="search" className={styles.searchInput} placeholder="Search"/> 
            <span>
                <FontAwesomeIcon icon={faSearch} />
            </span>
        </div>
    );
}