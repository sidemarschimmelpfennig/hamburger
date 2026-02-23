import type { CSSProperties } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
`;

export const styles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    height: '100%',
    gap: '20px',
  },

  ordersList: {
    width: '360px',
    background: '#1c1c1c',
    borderRadius: '12px',
    padding: '15px',
    overflowY: 'auto',
    border: '1px solid #2b2b2b',
  },

  orderCard: {
    background: '#222',
    padding: '14px',
    borderRadius: '10px',
    marginBottom: '12px',
    cursor: 'pointer',
    transition: '0.2s',
    border: '1px solid transparent',
  },

  orderCardHover: {
    border: '1px solid #e63946',
    background: '#262626',
  },

  orderTitle: {
    fontSize: '15px',
    fontWeight: 600,
    marginBottom: '6px',
  },

  orderInfo: {
    fontSize: '13px',
    color: '#bbb',
  },

  orderStatus: {
    marginTop: '8px',
    fontSize: '12px',
    fontWeight: 600,
    color: '#ffd166',
  },

  details: {
    flex: 1,
    background: '#1c1c1c',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #2b2b2b',
    display: 'flex',
    flexDirection: 'column',
  },

  empty: {
    margin: 'auto',
    color: '#777',
    fontSize: '18px',
  },

  itemsList: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },

  item: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#222',
    padding: '12px',
    borderRadius: '8px',
  },

  total: {
    marginTop: 'auto',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#06d6a0',
  },

  actions: {
    marginTop: '20px',
    display: 'flex',
    gap: '12px',
  },

  accept: {
    background: '#06d6a0',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    color: '#000',
    cursor: 'pointer',
    fontWeight: 'bold',
  },

  reject: {
    background: '#e63946',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};
