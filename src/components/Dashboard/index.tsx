import { useState } from 'react';
import styles from './styles.module.css';

export function Dashboard() {
  const [burgers, setBurgers] = useState([
    {
      id: 1,
      name: '',
      nome: '',
      pao: '',
      carne: '',
      optcionais: [],
      status: '',
    },
  ]);
  const [status, setStatus] = useState([
    {
      id: 1,
      name: 'teste',
    },
  ]);

  return (
    <>
      {burgers && (
        <div className={styles.burger_table}>
          <div>
            <div className={styles.burger_table_heading}>
              <div className='order_id'>#:</div>
              <div>Cliente:</div>
              <div>Pão:</div>
              <div>Carne:</div>
              <div>Opcionais:</div>
              <div>Ações:</div>
            </div>
          </div>
          <div className={styles.burger_table_rows}>
            {burgers &&
              burgers.map((burger, index) => {
                return (
                  <div key={burger.id} className={styles.burger_table_row}>
                    <div className={styles.order_number}>{burger.id}</div>
                    <div>{burger.nome}</div>
                    <div>{burger.pao}</div>
                    <div>{burger.carne}</div>
                    <div>
                      <ul key='index'>
                        {burger.optcionais &&
                          burger.optcionais.map((option, index) => {
                            return <li>{option}</li>;
                          })}
                      </ul>
                    </div>
                    <div>
                      <select name='status' className={styles.status}>
                        {status &&
                          status.map(status => {
                            return (
                              <option
                                value={status.name}
                                key={status.id}
                                selected={burger.status == status.name}
                              >
                                {' '}
                                {status.name}
                              </option>
                            );
                          })}
                      </select>
                      <button className={styles.delete_btn}>Cancelar</button>
                    </div>
                  </div>
                );
              })}

            <div></div>
          </div>
        </div>
      )}
      :
      {
        <div>
          <h2>Não há pedidos no momento!</h2>
        </div>
      }
    </>
  );
}
