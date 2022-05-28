//flag on the json called over_18, only add if that flag is false.
// import pool from '../index.js';
import fetch from 'node-fetch';

//fetch json
//loop through it
// populate table with the 25 objects but only select, subreddit, title, upvotes, award_count, thumbnail, link.

async function getSubReddit() {
  let response = await fetch('https://www.reddit.com/r/gaming.json');
  let data = await response.json();
  let array = data.data.children;
  let childinfo = [];
  for (let i = 0; i < array.length; i++) {
    let subreddit = array[i].data.subreddit;
    let title = array[i].data.title;
    let award_count = array[i].data.total_awards_received;
    let thumbnail = array[i].data.thumbnail;
    let link = 'reddit.com' + array[i].data.permalink;
    let upvotes = array[i].data.ups;
    childinfo.push(subreddit, title, upvotes, award_count, thumbnail, link);
    console.log(childinfo);

    const res = await pool.query(
      `INSERT INTO reddit (subreddit, title, upvotes, award_count, thumbnail, link) Values ($1, $2, $3. $4, $5, $6); `,
      childinfo
    );
    childinfo = [];
  }
}

await getSubReddit();
