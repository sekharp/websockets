var socket = io();

var connectionCount = document.getElementById('connection-count');

var statusMessage = document.getElementById('status-message');

var voteCount = document.getElementById('vote-count');

var yourVote = document.getElementById('your-vote');

var aVotes = document.getElementById('a-votes')
var bVotes = document.getElementById('b-votes')
var cVotes = document.getElementById('c-votes')
var dVotes = document.getElementById('d-votes')

socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

socket.on('voteCount', function (votes) {
  aVotes.innerHTML = votes["A"]
  bVotes.innerHTML = votes["B"];
  cVotes.innerHTML = votes["C"];
  dVotes.innerHTML = votes["D"];
});

socket.on('yourVote', function (message) {
  yourVote.innerHTML = '<br/><br/><h2>Your Vote has been cast for ' + message + '</h2><br/><br/>';
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
