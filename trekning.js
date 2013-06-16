var _ = require('underscore'),
    color = require('bash-color'),
    sleep = require('sleep'),
    inputData = require('./data.js');

var data = inputData.forbruk;

var lastBuyer  = inputData.sisteInnkjoper;

var entries = _.omit(data, lastBuyer);

function funlog(log){
  sleep.sleep(1);
  console.log(color.blue(log));
}

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
console.log(color.red(lastBuyer));

console.log("");

funlog("Konfigurerer lykkehjulet");
funlog("Kalibrerer koffeininnhold hos deltakerene");
funlog("Starter trekningen");
funlog("**** Tause Birgitte spinner hjulet ****");
funlog("Følgende slipper å kjøpe inn kaffe for denne gang:");

_.each(losers, function(loser) {
    sleep.sleep(1);
    console.log(color.red(loser));
});

console.log("");
console.log("Så da er den heldige...");

sleep.sleep(3);
console.log(color.green(winner));

