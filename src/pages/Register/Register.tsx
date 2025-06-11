import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.scss';
import type { IRegisterFormState } from '../../types';

const RegisterForm = () => {
  const [nome, setNome] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');
  const [cpf, setCpf] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');
  const [error, setError] = useState<string>('')
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData: IRegisterFormState = {
      nome,
      sobrenome,
      cpf,
      email,
      senha,
      confirmarSenha,
    };

    if (formData.senha !== formData.confirmarSenha) {
      console.error("As senhas não coincidem!");
      alert(`As senhas não coincidem`)
      return;
    }

    submitRegistration(formData);
  };

  const submitRegistration = (data: IRegisterFormState) => {
    try {
            sessionStorage.setItem('registeredEmail', email);
            sessionStorage.setItem('registeredPassword', senha);

            alert('Cadastro realizado com sucesso!');
            
            navigate('/login'); 

        } catch (storageError) {
            setError('Não foi possível salvar os dados. O armazenamento pode estar cheio ou indisponível.');
            console.error("Erro ao salvar na sessionStorage:", storageError);
        } finally {
            console.log("Enviando dados para a API:", data);
        }


  };
    return (
        <React.Fragment>
            <section className={styles.formWrapper}>
                <form onSubmit={handleRegister} className={`${styles.form} ${styles.registerForm}`}>
                    <h3>Cadastre-se</h3>
                    <div className={styles.formItemsR}>
                        <div className={styles.formItems}>
                            <label htmlFor="nome">Nome<span>*</span></label>
                            <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder='Seu nome' id="nome" required/>
                        </div>
                        <div className={styles.formItems}>
                            <label htmlFor="sobrenome">Sobrenome<span>*</span></label>
                            <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} type="text" placeholder='Seu sobrenome' id="sobrenome" required/>
                        </div>
                    </div>
                    <div className={styles.formItems}>
                        <label htmlFor="cpf">CPF<span>*</span></label>
                        <input value={cpf} onChange={(e) => setCpf(parseInt(e.target.value))} type="number" placeholder='000.000.000-00' id="cpf" required/>
                    </div>
                    <div className={styles.formItems}>
                        <label htmlFor="email">E-mail<span>*</span></label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email@provedor.com' id="email" required/>
                    </div>
                    <div className={styles.formItems}>
                        <label htmlFor="password">Senha<span>*</span></label>
                        <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder='Crie uma senha forte' id="password" required/>
                    </div>
                    <div className={styles.formItems}>
                        <label htmlFor="confirm-password">Confirmar Senha<span>*</span></label>
                        <input value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} type="password" placeholder='Repita a senha' id="confirm-password" required/>
                    </div>
                    {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}

                    <button type='submit' className="btn btn--primary" style={{ width: '100%' }}>Cadastrar</button>
                    <span>Já possui uma conta? <Link to="/login">Faça o login!</Link></span>
                </form>    
            </section>
        </React.Fragment>
    );
};

export default RegisterForm;