import { useState } from 'react';
import { Message } from '../Message';
import styles from './styles.module.css';

export function BurgerForm() {
  const [message, setMessage] = useState('');
  const paes = [
    {
      id: 1,
      name: 'teste',
    },
  ];
  const carnes = [
    {
      id: 1,
      name: 'teste',
    },
  ];
  const optionals = [
    {
      id: 1,
      name: 'teste',
    },
    {
      id: 2,
      name: 'teste',
    },
  ];
  return (
    <>
      {message && <Message message={message} />}
      <div>
        <form className={styles.burger_form} method='POST'>
          <div className={styles.input_container}>
            <label>Nome do cliente:</label>
            <input
              type='text'
              className={styles.nome}
              name='nome'
              placeholder='Digite o seu nome'
            />
          </div>
          <div className={styles.input_container}>
            <label>Escolha o pão:</label>
            <select name='pao' className={styles.pao} id='pao'>
              <option value=''>Selecione o seu pão</option>
              {paes &&
                paes.map(pao => {
                  return (
                    <option key={pao.id} value={pao.name}>
                      {pao.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className={styles.input_container}>
            <label>Escolha a carne do seu Burger:</label>
            <select name='carne' className={styles.carne}>
              <option value=''>Selecione o tipo de carne</option>
              {carnes.map(carne => (
                <option key={carne.id} value={carne.name}>
                  {carne.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.opcionais_container && styles.input_container}>
            <label className={styles.opcionais_title}>
              Selecione os opcionais:
            </label>
            <div className={styles.checkbox_container}>
              {optionals.map(optional => {
                return (
                  <>
                    <input
                      type='checkbox'
                      name='opcionais'
                      value={optional.name}
                    />
                    <span>{optional.name}</span>
                  </>
                );
              })}
            </div>
          </div>
          <div className={styles.input_container}>
            <input
              className={styles.submit_btn}
              type='submit'
              value='Criar meu Burger!'
            />
          </div>
        </form>
      </div>
    </>
  );
}
