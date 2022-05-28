document.getElementById('form').onsubmit = function (event) {
  event.preventDefault();
  event.stopPropagation();
  let inputs = document.getElementById('form').elements;
  let searchTerm = inputs[0].value;
  if (!searchTerm) {
    console.log('empty search, ignoring');
    return false;
  }
  console.log(inputs);
};

document.onload = startUp();

async function startUp() {
  let getData = await fetch('http://localhost:3000/reddit');
  let json = await getData.json();
  console.log(json.payload);
  json.payload.forEach(renderCard);
}

function renderCard(obj) {
  let card = document.createElement('div');
  let title = document.createElement('p');
  let awards = document.createElement('div');
  let link = document.createElement('div');
  let subreddit = document.createElement('div');
  let upvotes = document.createElement('div');
  let thumb = document.createElement('img');

  let main = document.getElementById('main');

  title.textContent = obj.title;
  awards.textContent = obj.award_count;
  subreddit.textContent = obj.subreddit;
  thumb.src = obj.thumbnail;
  link.textContent = obj.link;
  upvotes.textContent = obj.upvotes;

  card.appendChild(title);
  card.appendChild(thumb);
  card.appendChild(upvotes);
  card.appendChild(subreddit);
  card.appendChild(awards);
  card.appendChild(link);
  main.appendChild(card);
}
