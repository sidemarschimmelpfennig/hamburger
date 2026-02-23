import React, { useState } from 'react';
import { styles } from './styles';

export function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    setError('');

    // aqui depois você liga com sua API
    console.log('Dados enviados:', form);

    // exemplo futuro:
    // fetch("http://localhost:8000/api/register", { ... })
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🍔 Criar Conta</h1>
        <p style={styles.subtitle}>Cadastre-se para pedir seus burgers</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type='text'
            name='name'
            placeholder='Seu nome'
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type='email'
            name='email'
            placeholder='Seu email'
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type='password'
            name='password'
            placeholder='Senha'
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirmar senha'
            value={form.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {error && <span style={styles.error}>{error}</span>}

          <button type='submit' style={styles.button}>
            Criar Conta
          </button>
        </form>

        <div style={styles.footer}>
          <a href='/login' style={styles.link}>
            Já tenho conta
          </a>
        </div>
      </div>
    </div>
  );
}
