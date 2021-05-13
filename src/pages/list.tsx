import React, { useEffect, useState } from 'react';



import  {SideBar}  from '../components/SideBar';
import { InputSearch } from '../components/InputSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import pizzaImg from '../assets/pizza.jpg';


import styles from '../styles/pages/List.module.css';
import api from '../services/api';

import { useHistory } from 'react-router';
import Cookies from 'js-cookie';


export default function List() {
    const history = useHistory();

    const [pizzas, setPizzas] = useState<any[]>([]);
    
    const renderStar = [1, 2, 3, 4, 5]

    function navigateToDetail(pizza: any) {
        Cookies.set('pizza', JSON.stringify(pizza))
        history.push('/detail')
    }

    useEffect(() => {
        api.get('https://p3teufi0k9.execute-api.us-east-1.amazonaws.com/v1/pizza', {
        }).then(response => {
            setPizzas(response.data)
            console.log(response)
        })
    },[])
    
    return(
        <>
        <SideBar />
        <InputSearch />
        <main>
            <p className={styles.title}>Escolha seu Sabor</p>
            <section>
                {pizzas.map(pizza => (
                    <div className={styles.cardMenu} onClick={() => navigateToDetail(pizza)}>
                        <div className={styles.cardHeader}>
                            <figure>
                                <img src={pizza.imageUrl} alt="Imagem ilustrativa da Pizza"/>
                            </figure>
                        </div>
                        <div className={styles.cardBody}>
                            <p>{pizza.name}</p>
                            {renderStar.map((i) => {
                                if(i <= pizza.rating) {
                                    return (
                                        <span  className={'active'}>
                                            <FontAwesomeIcon icon={faStar}/>
                                        </span>
                                    ) 
                                } else {
                                    return (
                                        <span>
                                            <FontAwesomeIcon icon={faStar}/>
                                        </span>
                                    )
                                }
                            })}      
                        </div>
                        <div className={styles.cardFooter}>
                            <p>a partir de:</p>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(pizza.priceP)}</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
        </>
    );
}