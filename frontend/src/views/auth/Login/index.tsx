import { styles } from './styles';

export function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🍔 Zé do Burguer</h1>
        <p style={styles.subtitle}>Faça login para continuar</p>

        <form action='/login' method='post' style={styles.form}>
          <input
            type='email'
            name='email'
            placeholder='Seu email'
            style={styles.input}
            required
          />

          <input
            type='password'
            name='password'
            placeholder='Sua senha'
            style={styles.input}
            required
          />

          <button type='submit' style={styles.button}>
            Entrar
          </button>
        </form>

        <div style={styles.footer}>
          <a href='/register' style={styles.link}>
            Criar conta
          </a>

          <a href='/forgot' style={styles.link}>
            Esqueci a senha
          </a>
        </div>
      </div>
    </div>
  );
}
