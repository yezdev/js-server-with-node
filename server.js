// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Home</h1>' +
      '<img src="https://media.giphy.com/media/xTk9ZY0C9ZWM2NgmCA/giphy.gif" alt="Waving hi">' +
      '<p>Hello! Welcome to the homepage!</p>'
    )
  } else if (request.url === '/random-joke') {
    var randomJoke = 'joke' + randomInt(3).toString()
    response.end(
      '<h1>Random Knock-Knock Joke!</h1>' +
      '<p>' + knock + '</p>' +
      '<p>' + whosThere + '</p>' +
      '<p>' + jokes[randomJoke].initial + '</p>' +
      '<p>' + jokes[randomJoke].response + '</p>' +
      '<p>' + jokes[randomJoke].punchline + '</p>' +
      '<a href="/">Home</a>'
    )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cute Animal</h1>' +
      '<img src="https://i.imgur.com/V5YYuwX.gif" alt="Baby seal">' +
      '<p>Awww it\'s sleeping!</p>' +
      '<a href="/">Home</a>'
    )
  } else {
    response.end(
      '<h1>Error 404 Page Not Found</h1>' +
      '<img src="https://i.pinimg.com/736x/02/82/3c/02823c3713fafe2a90a65a57ec2e9aab--kucing.jpg" alt="Confused dinosaur">' +
      '<p>The requested URL ' + request.url + ' cannot be found</p>' +
      '<a href="/">Home</a>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')

// knock-knock joke templates
var knock = 'knock-knock.'
var whosThere = 'Who\'s there?'

// random knock-knock jokes object
var jokes = {
  joke0: {
    initial: 'Opportunity!',
    response: 'Opportunity who?',
    punchline: 'That is impossible. Opportunity doesn\'t come knocking twice!'
  },
  joke1: {
    initial: 'Beats.',
    response: 'Beats who?',
    punchline: 'Beats me.'
  },
  joke2: {
    initial: 'No-one!',
    response: 'No-one who?',
    punchline: '...'
  }
}

// function to generate random integer used for choosing a joke
var randomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max))
}
