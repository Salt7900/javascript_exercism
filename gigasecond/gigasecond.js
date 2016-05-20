function Gigasecond(startDate) {
  this.date = function(){
    var gigaseconds = (10**9);
    return startDate+gigaseconds
  };

}


module.exports = Gigasecond;
