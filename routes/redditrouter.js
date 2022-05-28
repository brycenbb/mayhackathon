import express from 'express';
import { initialLoad, getSubreddit, lucky } from '../models/reddit';
const router = express.Router();

router.get('/', async (req, res) => {
  if (req.query.search !== undefined) {
    let result = await initialLoad();
    return res.json({ success: true, payload: result });
  } else {
    let result = await getSubreddit(req.query.title);
    return res.json({ success: true, payload: result });
  }
});

router.get('/lucky', async (req, res) => {
  let result = await lucky();
  return res.json({ success: true, payload: result });
});

export default router;
