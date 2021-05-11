import React, { useEffect, useState } from 'react';

import  {SideBar}  from '../components/SideBar';

import { InputSearch } from '../components/InputSearch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import pizzaImg from '../assets/pizza.jpg';

import api from '../services/api';

import styles from '../styles/pages/List.module.css';
import { useHistory } from 'react-router';

export default function List() {

    const [pizzas, setPizzas] = useState([]);

    // const history = useHistory(); 

    useEffect(() => {
        api.get('https://p3teufi0k9.execute-api.us-east-1.amazonaws.com/v1/pizza', {

        }).then(response => {
            setPizzas(response.data)
            console.log(response)
        })
    })
    
    return(
        <>
        <SideBar />
        <InputSearch />
        <main>
            <p className={styles.title}>Escolha seu Sabor</p>
            <section>
                <div className={styles.cardMenu}>
                    <div className={styles.cardHeader}>
                        <figure>
                            <img src={pizzaImg} alt="Imagem ilustrativa da Pizza"/>
                        </figure>
                    </div>
                    <div className={styles.cardBody}>
                        <p></p>
                        <span>
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faStar}/>
                        </span>       
                    </div>
                    <div className={styles.cardFooter}>
                        <p>a partir de:</p>
                        <p>R$ 29,00</p>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}