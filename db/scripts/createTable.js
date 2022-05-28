import pool from '../index.js';

await pool.query(
  'Create table if not exists reddit (sub_id int primary key generated always as identity, subreddit text, title text, upvotes int, award_count int, thumbnail text, link text);'
);
