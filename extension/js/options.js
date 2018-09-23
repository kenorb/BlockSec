/**
 * @file File to handle storage options.
 */

// Saves options to chrome.storage
function save_options() {
  var isTestnet = document.getElementById('testnet').checked;
  var threshold = document.getElementById('threshold').value;
  var endpoint = document.getElementById('endpoint').value;
  var whiteList = document.getElementById('whitelist').value;
  var blackList = document.getElementById('blacklist').value;
  chrome.storage.sync.set({
    isTestnet: isTestnet,
    threshold: threshold,
    endpoint: endpoint,
    whiteList: whiteList,
    blackList: blackList,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and isTestnet = true.
  chrome.storage.sync.get({
    isTestnet: true,
    threshold: 50,
    endpoint: "",
    whiteList: "",
    blackList: "",
  }, function(items) {
    document.getElementById('threshold').value = items.threshold;
    document.getElementById('endpoint').value = items.endpoint;
    document.getElementById('whiteList').value = items.whiteList;
    document.getElementById('blackList').value = items.blackList;
    document.getElementById('testnet').checked = items.isTestnet;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);