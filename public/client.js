var socket = io();

var connectionCount = document.getElementById('connection-count');

var statusMessage = document.getElementById('status-message');

var voteCount = document.getElementById('vote-count');

var yourVote = document.getElementById('your-vote');

socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

socket.on('voteCount', function (votes) {
  voteCount.innerHTML = 'Current Vote Tally: <br/>' +
  JSON.stringify(votes);
});

socket.on('yourVote', function (message) {
  yourVote.innerHTML = '<br/><br/> Your Vote has been cast for ' + message;
});

var buttons = document.querySelectorAll('#choices button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    socket.send('voteCast', this.innerText);
  });
}

socket.on('voteCount', function (votes) {
  console.log(votes);
});
