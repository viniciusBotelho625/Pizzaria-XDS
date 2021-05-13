import React, { useState } from 'react';
import styles from '../styles/components/CardDetail.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie';



export function CardDetail() {
    const sizes = {P: 'P', M: 'M', G: 'G'}
    
    const [pizzaSize, setPizzaSize] = useState(sizes.P); 

    const pizza = JSON.parse(Cookies.get('pizza')!)
    
    const currencyFormat = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})

    function changeSize(size: string) {
        setPizzaSize(size) 
    }

    function activeButton(button: any) {
        button.style.backgroundColor = "green";
    }

    const renderStar = [1, 2, 3, 4, 5]
    
    return(
        <div className={styles.cardDetail}>
            <div className={styles.cardDetailImage}>
                <Link to="/list">
                    <button type="button">
                        <span>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </span>
                    </button>
                </Link>    
                <figure>
                    <img src={pizza.imageUrl} alt="Imagem do pedido"/>
                </figure>
            </div>
            <div className={styles.cardDetailInformation}>
                <div className={styles.cardDetailAvaliation}>
                    <p className={styles.title}>{pizza.name}</p>
                    {renderStar.map((i) => {
                        console.log(i <= pizza.rating, i, pizza.rating)
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
                <p className={styles.description}>Para ser feliz não tem dia. Para comer pizza também não. Que tal se deliciar com essa pizza de {pizza.name} ?</p>  
                <div className={styles.order}>
                    <p>Escolha o tamanho</p>
                    <div className={styles.orderOptionsSize}>
                        {Object.values(sizes).map(size => (
                            <button id={(pizzaSize === size) ? 'teste' : '' } 
                                type="button" onClick={() => changeSize(size)}>
                                    {size}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.orderPrice}>
                    <p>{currencyFormat.format(pizza[`price${pizzaSize}`])}</p>
                </div>
                <Link to="/success">
                    <button type="submit" className={styles.buttonPay}>Comprar</button>
                </Link>
            </div>
        </div>
    );
}