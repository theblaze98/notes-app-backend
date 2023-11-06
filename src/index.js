import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './config/database.js';
import usersRouter from './routes/usersRoutes.js';
import notesRoutes from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/users', usersRouter);
app.use('/api/notes/', notesRoutes)

app.listen(PORT, () => {
	console.log(`Server listen in http://localhost:3000`);
});
