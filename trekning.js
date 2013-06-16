var _ = require('underscore'),
    color = require('bash-color'),
    sleep = require('sleep');

var data = {
  'tine.kleivane':  11,
  'kris-mikael.krister': 12,
  'eivind.bergstol': 6,
  'stale.pettersen':  32,
  'erik.salhus': 16,
  'kai.henriksen': 30
};

var lastBuyer  = 'kai.henriksen';

var entries = _.omit(data, lastBuyer);

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


console.log(color.blue("Fjerner siste innkjøper:"));
console.log(color.blue(lastBuyer));

console.log("");

console.log(color.blue("Følgende slipper å kjøpe inn kaffe for denne gang:"));
_.each(losers, function(loser) {
    sleep.sleep(1);
    console.log(color.red(loser));
});

console.log("");
console.log("Så da er den heldige...");

sleep.sleep(4);
console.log(color.green(winner));
