import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #1f1f1f, #3b3b3b)',
    fontFamily: 'Poppins, sans-serif',
  },

  card: {
    width: '350px',
    background: '#fff',
    padding: '35px',
    borderRadius: '18px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.35)',
    textAlign: 'center',
  },

  title: {
    margin: 0,
    fontSize: '28px',
    fontWeight: '700',
    color: '#ffbb33',
  },

  subtitle: {
    margin: '8px 0 25px',
    color: '#222',
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
    transition: '0.2s',
  },

  button: {
    marginTop: '15px',
    padding: '14px',
    borderRadius: '10px',
    border: 'none',
    background: '#ffbb33',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '15px',
    cursor: 'pointer',
    transition: '0.2s',
  },

  footer: {
    marginTop: '18px',
    display: 'flex',
    justifyContent: 'space-between',
  },

  link: {
    fontSize: '13px',
    color: '#ffbb33',
    textDecoration: 'none',
    fontWeight: '600',
  },
};
