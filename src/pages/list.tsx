import React from 'react';

import  {SideBar}  from '../components/SideBar';
import { CardMenu } from '../components/CardMenu';
import { InputSearch } from '../components/InputSearch';

import styles from '../styles/pages/List.module.css';

export default function List() {
    return(
        <>
        <SideBar />
        <InputSearch />
        <main>
            <p className={styles.title}>Escolha seu Sabor</p>
            <section>
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu /> 
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
            </section>
        </main>
        </>
    );
}