import express from 'express';
import cors from 'cors';
require('dotenv').config();
import { sequelize } from './src/models';

// Importe suas rotas aqui
// import userRoutes from './src/routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// app.use('/api/users', userRoutes);

// Conecta ao banco e sobe o servidor
sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Banco de dados conectado com sucesso.');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error('❌ Erro ao conectar no banco:', err.message);
    process.exit(1);
  });

export default app;
