import express from 'express';
import { initialLoad, getSubreddit, lucky } from '../models/reddit.js';
const router = express.Router();

router.get('/', async (req, res) => {
  if (req.query.search === undefined) {
    let result = await initialLoad();
    return res.json({ success: true, payload: result });
  } else {
    console.log('not intial load');
    //stretch goal: if this returns nothing, then have a function that will
    //fetch the reddit page for that info, feed it to the database, AND
    //feed it to the server to dispaly on the front end.
    let result = await getSubreddit(req.query.title);
    return res.json({ success: true, payload: result });
  }
});

router.get('/lucky', async (req, res) => {
  let result = await lucky();
  return res.json({ success: true, payload: result });
});

//routeer.get /search?query=BLAH -> if nothing, then fetch the reddit page,
//send it to the front end with res.json, but before that, send it the
//backend by calling addData function that is in models/reddit.js
export default router;
