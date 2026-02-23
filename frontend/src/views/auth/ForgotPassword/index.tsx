import React, { useState } from 'react';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Aqui você conecta com sua API depois
    console.log('Solicitando reset para:', email);

    setMessage(
      'Se o email existir, você receberá instruções para redefinir sua senha.',
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🔐 Recuperar Senha</h1>
        <p style={styles.subtitle}>
          Informe seu email para receber as instruções
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type='email'
            placeholder='Seu email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <button type='submit' style={styles.button}>
            Enviar Link
          </button>
        </form>

        {message && <p style={styles.success}>{message}</p>}

        <div style={styles.footer}>
          <a href='/login' style={styles.link}>
            Voltar para Login
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #1f1f1f, #3b3b3b)',
    fontFamily: 'Poppins, sans-serif',
  },

  card: {
    width: '360px',
    background: '#fff',
    padding: '35px',
    borderRadius: '18px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.35)',
    textAlign: 'center',
  },

  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: '700',
    color: '#e63946',
  },

  subtitle: {
    margin: '8px 0 20px',
    color: '#666',
    fontSize: '14px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },

  input: {
    padding: '14px',
    margin: '8px 0',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '14px',
    outline: 'none',
  },

  button: {
    marginTop: '15px',
    padding: '14px',
    borderRadius: '10px',
    border: 'none',
    background: '#e63946',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '15px',
    cursor: 'pointer',
  },

  footer: {
    marginTop: '18px',
  },

  link: {
    fontSize: '13px',
    color: '#e63946',
    textDecoration: 'none',
    fontWeight: '600',
  },

  success: {
    marginTop: '15px',
    fontSize: '13px',
    color: 'green',
  },
};
