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
