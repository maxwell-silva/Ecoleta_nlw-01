import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express	();
app.use(express.json());
app.use(cors()); //cors precisa vir antes do routes
app.use(routes);

//disponibili arquivos em pastas
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(errors());
app.listen(3333);

