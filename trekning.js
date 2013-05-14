var _ = require('underscore'),
    color = require('bash-color'),
    sleep = require('sleep');

var entries = {
  '@ErikWendel':  21,
  '@BjørnEndresen': 12,
  '@MagnusHaug': 10,
  '@CathinkaWalberg':  8,
  '@JohnRingø1':  6,
  '@ArildNilsen': 5,
  '@JoelChelliah':  9,
  '@TrondKlakken':  4,
  '@FrodeReinertsen':  9,
  '@AndersSkifte':  4,
  '@MagnusFjell' : 21
};

var tickets = [];
_.each(entries, function(contenderTickets, ticketeer) {
    var i;
    for(i = 0; i < contenderTickets; i++) {
        tickets.push(ticketeer);
    }
});

var players = _.map(entries, function(contenderTickets, ticketeer) {
    return ticketeer;
});

var winner = _.shuffle(tickets)[Math.round(Math.random() * tickets.length)];
var losers = _.shuffle(_.without(players, winner));

console.log(color.blue("Følgende gikk på en smell:"));
_.each(losers, function(loser) {
    sleep.sleep(2);
    console.log(color.red(loser));
});

console.log("");
console.log("Og da er vinneren...");

sleep.sleep(5);
console.log(color.green(winner));
