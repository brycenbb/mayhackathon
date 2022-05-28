import { pool } from '../db/index.js';

export async function initialLoad() {
  let response = await pool.query(
    'Select * from reddit order by upvotes limit 20'
  );
  return response.rows;
}
export async function getSubreddit(searchTerm) {}
