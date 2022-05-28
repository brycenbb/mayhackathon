//flag on the json called over_18, only add if that flag is false.
// import pool from '../index.js';
import fetch from 'node-fetch'

//fetch json 
//loop through it 
// populate table with the 25 objects but only select, subreddit, title, upvotes, award_count, thumbnail, link.






async function getSubReddit(){
    let response = await fetch("https://www.reddit.com/r/gaming.json")
    let data = await response.json();
    console.log(data.data)
    for(let i = 0; i < data.length; i++){
        const res = await pool.query(
            `INSERT INTO reddit `
        )

    }
}
await getSubReddit()