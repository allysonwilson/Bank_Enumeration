var Bank = function() {
  this.accounts = []
}

Bank.prototype = {

  addAccount: function(account) {
    this.accounts.push(account)
  },

  totalValue: function() {
    var totalCash = 0;
    this.accounts.forEach(function (account){
      totalCash += account.value
    });
    return totalCash;

    var total = this.accounts.reduce(function (runningTotal, currentItem) {
      return runningTotal + currentAccount.value
    }, 0);
    return total;
  },

  accountByName: function( accountName ){
    var nameFinder = function (account){
      return account.name === accountName;
    }
    return this.accounts.find(nameFinder);
    // return this.accounts.find(function(account){
    //   return account.name === accountName;
    // })
      // return this.accounts.name === accountName;

  },

  largestAccount: function () {
    var currentHighest = this.accounts[0];

    this.accounts.forEach(function(acc){
      if(acc.value > currentHighest.value) {

       currentHighest= acc;
      }
    })
    return currentHighest;




  }



}

module.exports = Bank;
