import express from 'express';
import { initialLoad } from '../models/reddit';
const router = express.Router();

router.get('/', async (req, res) => {
  let result = await initialLoad();
  res.json({ success: true, payload: result });
});

export default router;
