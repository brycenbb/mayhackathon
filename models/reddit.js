import pool from '../db/index.js';

export async function initialLoad() {
  let response = await pool.query(
    'Select * from reddit order by upvotes limit 20'
  );
  return response.rows;
}

export async function getSubreddit(subreddit) {
  let response = await pool.query(
    `Select * from reddit where subreddit LIKE ${subreddit} order by upvotes limit 20`
  );
  return response.rows;
}
export async function lucky() {
  let response = await pool.query(
    'Select subreddit from reddit order by RANDOM() limit 1'
  );
  let subreddit = response.rows[0];
  let response2 = await pool.query(
    `Select * from reddit where subreddit LIKE ${subreddit} order by upvotes limit 20`
  );
  return response2.rows;
}

//add into database for when data that doesnt exist is queried
