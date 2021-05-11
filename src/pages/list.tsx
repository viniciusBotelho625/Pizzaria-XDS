import React, { useEffect, useState } from 'react';

import  {SideBar}  from '../components/SideBar';
import { InputSearch } from '../components/InputSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import pizzaImg from '../assets/pizza.jpg';

import styles from '../styles/pages/List.module.css';
import api from '../services/api';

import { useHistory } from 'react-router';

export default function List() {

    const [pizzas, setPizzas] = useState([]);

    // const history = useHistory(); 

    console.log({
        pizzas
    })

    useEffect(() => {
        api.get('https://p3teufi0k9.execute-api.us-east-1.amazonaws.com/v1/pizza', {

        }).then(response => {
            setPizzas(response.data)
        })
    })
    
    return(
        <>
        <SideBar />
        <InputSearch />
        <main>
            <p className={styles.title}>Escolha seu Sabor</p>
            <section>
                {pizzas.map(pizza => (
                    <div className={styles.cardMenu}>
                        <div className={styles.cardHeader}>
                            <figure>
                                <img src={pizza.imageUrl} alt="Imagem ilustrativa da Pizza"/>
                            </figure>
                        </div>
                        <div className={styles.cardBody}>
                            <p>{pizza.name}</p>
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
                            <p>{pizza.priceP}</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
        </>
    );
}