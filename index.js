function addingEventListener() {
  const input = document.getElementById('button');
  function clickAlert() {
    alert('I was clicked!');
  }   

input.addEventListener('click', function() {
alert('Input was clicked!');
});
}

