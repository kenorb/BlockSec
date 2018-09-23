/**
 * @file Provides UI functionality.
 */
//const log = require('loglevel')
async function start () {
    // @todo
}
// Report site as safe.
function reportAsSafe() {
    var currentUrl = window.location.href
    console.log("Safe!");
}
// Report site as spam.
function reportAsSpam() {
    var currentUrl = window.location.href
    console.log("Spam!");
}
setTimeout(function() {
  $('#connection').css('display','none')
}, 2000);
setTimeout(function() {
  $('#app-content').css('display','block')
}, 2000);
setTimeout(function() {
  $('#app-buttons').css('opacity','1.0')
}, 2000);