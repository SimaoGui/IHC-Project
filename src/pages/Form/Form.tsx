import { Link, useNavigate } from 'react-router-dom'
import styles from './Form.module.scss'
import React, { useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const navigate = useNavigate();

    const handleCheck = () => {
        const correctEmail = sessionStorage.getItem('registeredEmail');
        const correctSenha = sessionStorage.getItem('registeredPassword');

        if (!correctEmail || !correctSenha) {
            alert('Nenhum usuário cadastrado. Por favor, cadastre-se primeiro.');
            return;
        }

        if (email === correctEmail && senha === correctSenha) {
            navigate('/home');
            alert('Login efetuado com sucesso!');
        } else {
            alert('Usuário ou Senha incorretos');
        }
    }


    return (
        <React.Fragment>
            <section className={styles.formWrapper}>
                <form action="submit">
                    <h3>Login</h3>
                    <div className={styles.formItems}>
                        <label htmlFor="e-mail">E-mail<span>*</span></label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="e-mail" placeholder='email@provedor.com'/>
                    </div>
                    <div className={styles.formItems}>
                        <label htmlFor="password">Senha<span>*</span></label>
                        <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder='Insira sua senha...'/>
                    </div>
                    <div className={styles.formItemsR}>
                        <Link to="/register">Cadastrar-se!</Link>
                        <a href="#">Esqueci minha senha</a>
                    </div>
                    <button type='button' className={`${styles} btn btn--primary`} onClick={handleCheck}>Logar</button>
                    <span>Enfrentando problemas durante o login? <Link to="/ajuda">ajuda!</Link></span>
                </form>    
            </section>
        </React.Fragment>
    )
}

export default Form;