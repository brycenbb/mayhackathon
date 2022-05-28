import express from 'express';
import cors from 'cors';
import redditRouter from './routes/redditrouter.js';
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.listen(PORT);

app.get('/', (req, res) => {
  res.json({ sucess: true, payload: 'Hello home page' });
});

app.use('/reddit', redditRouter);
