import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT);

app.get('/', (req, res) => {
  res.json({ sucess: true, payload: 'Hello home page' });
});
