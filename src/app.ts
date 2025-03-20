import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { authMiddleware } from './middlewares/authMiddleware';
import { proxyMiddleware } from './middlewares/proxyMiddleware';

dotenv.config();

const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use('/v1/secure', authMiddleware);
app.use(['/v1/secure', '/v1/public'], proxyMiddleware);

app.listen(process.env.PORT, () => {

});