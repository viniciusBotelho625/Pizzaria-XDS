import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import styles from '../styles/pages/Login.module.css';
import logoImg from '../assets/logo.png';
import  api  from '../services/api';

export default function Logon(){
    const [auth, setAuth] = React.useState(false)
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin (e: FormEvent) {
        e.preventDefault();
       
        try {
            await api.post('https://p3teufi0k9.execute-api.us-east-1.amazonaws.com/v1/signin', {
                email,
                password
        }).then(resp => {
            const { accessToken } = resp.data;
            Cookies.set("access", accessToken);
            history.push('/list')
        })
        } catch (err) {
            alert("Erro de autenticação")
        }
    } 

    return (
        <div className={styles.container}>
            <form onSubmit={handleLogin}>
                <div className={styles.cardLogon}>
                    <header>
                        <img src={logoImg} alt="Logo da empresa" />
                    </header>
                    <div className={styles.cardBody}>
                        <strong>Entrar</strong>
                        <input 
                            name="email"
                            type="email"
                            placeholder="usuário"
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                            name="password" 
                            type="password"
                            placeholder="senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit" className={styles.button}> 
                            Entrar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

