// Append to localstorage
function appendToStorage(name, data){
    var old = localStorage.getItem(name);
    if (old === null) old = "";
    localStorage.setItem(name, old + data);
}

// Add & remove users, subs, and terms from your block list

  // Add user, term, sub
  var addToBlockList = function (input) {
    // Appends to localstorage. No overwriting!
    appendToStorage('bbItem', input);    
  }

  // Remove user, term, sub
  var removeFromBlockList = function(input) {
    var a = confirm('Are you sure you would like to delete ' + input + ' from your block list?');
    if (a === true) localStorage.removeItem(input);
  }

// Browser button to open block list interface
  // Options
    // Obscure (replaces user comments with a blocked message)
    // Remove (removes the comments from the DOM entirely)
  // Blocklist
    // Users (block users by username)
    // Subs (blocks subs from top viewed)
    // Terms (blocks posts that include terms)
