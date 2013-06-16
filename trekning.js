var _ = require('underscore'),
    color = require('bash-color'),
    sleep = require('sleep');

var entries = {
  'tine.kleivane':  11,
  'kris-mikael.krister': 12,
  'eivind.bergstol': 6,
  'stale.pettersen':  32,
  'erik.salhus': 16,
  'kai.henriksen': 30
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
