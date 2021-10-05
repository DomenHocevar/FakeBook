import express from 'express'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';
import compression from 'compression';
import helmet from 'helmet';

const app = express()
const port = 5000

app.use(compression());
app.use(helmet());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_, res) => {
  res.status(200).send()
})


app.listen(port, () => console.log(`Running on port ${port}`))