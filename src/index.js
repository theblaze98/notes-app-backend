import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import './config/database.js';
import v1Routes from './routes/v1/index.js';
import errorRouteHandler from './routes/error_handler.route.js';
import v1SwaggerDoc from './routes/v1/swagger.js';
import connect from './config/database.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1', v1Routes);

app.use(errorRouteHandler);

app.listen(PORT, async () => {
  v1SwaggerDoc(app, PORT);
  await connect();
  console.log(`Server listen in http://localhost:${PORT}`);
});

// Generate jwt
// require('crypto').randomBytes(64).toString('hex')
